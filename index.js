require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')

const expresssession = require('express-session')
const MySQLStore = require('express-mysql-session')(expresssession);
const mysql = require('mysql2')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const passportFunc = require('./Functions/passportFuncs')
const NUF = require('./Functions/NewUserFunction')
const UserDataGet = require('./Functions/UserDataGet')
const app = express()



app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.use(express.static(path.join(__dirname, "client", 'public' )))

const port = process.env.PORT

const con = mysql.createConnection(process.env.DATABASE_URL)

con.connect(function(err){
    if(err)throw err;
    console.log('connected')
}) 

const sessionStore = new MySQLStore({
  createDatabaseTable: true,
}, con)

const oneday = 1000 * 60 * 60 * 24


async function sqlQueryFunction(argFunc, sql){

  await con.promise().query(sql)
  .then((outputs) => argFunc(outputs))
  .catch((error) => console.log(error))
}


async function MKACt(req, res, arg, userData){
  
  let inObj = arg
  let a = 0;
  let date = req.body.date
  let newdate = date.replace('T', ' ') +':00'
  console.log(req.body, userData, arg.results[a].geometry, 'userData, req, arg')


let params = [userData.id, req.body.title, req.body.description, 'United States', req.body.USstate, req.body.street, req.body.zipcode, arg.results[a].geometry.location.lat, arg.results[a].geometry.location.lng, req.body.max, req.body.min, 0, 0, userData.username, newdate, req.body.city, req.body.image]

let sql = 'insert into activities (user_id, title, description, country, state, street, postalcode, latitude, longitude, maxparticipants, minparticipants, group1_id, group2_id, username, DaT, city, image) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'


function resFunc(arg){

console.log(arg)
res.json({type: "MKACT"})
}

await con.promise().execute(sql, params)
.then((outputs) => resFunc(outputs))
.catch((error) => console.log(error))


}





async function addressToGeocode(req, res, arg, userData){
 
  var API_KEY = process.env.GMAPS_API;
  var BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";

  var address = arg;

  var url = BASE_URL + address + "&key=" + API_KEY;

  fetch(url, {
    method: "GET"
  }).then((res) => res.json())
  .then((json) => {MKACt(req, res, json, userData)});


  return url
}





app.use(expresssession({
    secret: 'thisismykey',
    store: sessionStore,
    saveUninitialized: true,
    cookie: {secure: false, maxAge: oneday},
    resave: false
    }))


    app.use(express.json())
    app.use(express.urlencoded({extended: true }))

    app.use(passport.initialize())
    app.use(passport.session())


    passport.use(new LocalStrategy(passportFunc.getInfo))

    passport.serializeUser( (user, done) => {
      console.log(`user serialized`, user)
      done(null, user)
  })
  
  
  passport.deserializeUser((id, done) => {
      console.log('user deserialized')
  return done(null, passportFunc.findUser(id))
  })
  
  
app.use(cors({
  origin: "http://localhost",
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
})
);



checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) { return next() }
  res.json({type: "error", error: 'Client Not Authenticated'})
}



             ///endpoints
app.post('/api', checkAuthenticated, async (req, res) =>{
  console.log("called", req.body)
//Get User DATA = GUD
if(req.body.hasOwnProperty('type')){
  console.log(req.body.type === "MKACT")
switch(req.body.type){

  case "GUD":
    req.session.coord = req.body.coord;
    let userData = {};
    userData['username'] = req.session.passport.user.username;
    res.json({type: 'GUD', userData: userData})
    break;


case 'MKACT':
  if(req.body.hasOwnProperty('street') && req.body.hasOwnProperty('zipcode') && req.body.hasOwnProperty('city') && req.body.hasOwnProperty('USstate')){
    let addressString = `${req.body.street}+${req.body.zipcode}+${req.body.city}+${req.body.USstate}`
    addressToGeocode(req, res, addressString, req.session.passport.user)
  }else{
    res.json({type: 'error', error: "invalid address"})
  }

  break;
  case 'MyAct':
    if(req.body.hasOwnProperty('index')){
      if(typeof(req.body.index) === 'number'){
        let actIndex = req.body.index
        UserDataGet.getMyAct(req, res, actIndex)
      }
    }

    break;

    case 'actData':
      if(req.body.hasOwnProperty('index')){
        if(typeof(req.body.index) === 'number'){
          let actIndex = req.body.index
          UserDataGet.getMyActData(req, res, actIndex)
        }
      }
      break;
    default:
      res.send({type: "error", error: 'Invalid Request Object'})
      break;
}


}

})




app.post('/login',
  passport.authenticate('local'), (req, res) => {
 res.json({type: 'login'});
})




app.post('/logout', function(req, res, next){
  req.session.destroy(function(err) {
    if (err) { return next(err); }
    res.json({type:'logout'});
  });
  
})

  app.get('*', async function(req, res, next){
    res.sendFile(path.join(__dirname, "client", 'public', 'index.html'))

})





app.listen(port, console.log("server running on " + port))