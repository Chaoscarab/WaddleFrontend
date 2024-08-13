require('dotenv').config()
const mysql = require('mysql2')

const con = mysql.createConnection(process.env.DATABASE_URL)

 async function getInfo(username, password, done){
console.log("serialize")
    //sql query string
            var query = "SELECT * from users where username = ? " 
            var params = [username]
    //waits for the database search to complete
            const results = await 
                con.promise().execute(query, params)

          let datatype = typeof results[0][0]

    if(results){}
    if(datatype !== 'object'){
        return done(null, false)
    }
            console.log(results[0][0].username)
    if(results[0][0].username !== username){
        console.log(results[0][0].user)
        return done(null, false)
    }
    if(results[0][0].password !== password){
        return done(null, false)
    }
    
    return done(null, results[0][0])
          }




async function findUser(userobj){
  console.log('serialize', userobj)


  let query = `SELECT * from users where id = ?`
  let params = [userobj.id]

        const results = await con.promise().execute(query, params)
console.log(results[0][0])

            let datatype = typeof results[0][0]
            if (datatype !== 'object'){
                return {user: 'not Serialized'}}
                return JSON.parse(results[0][0].id)
                
                 }


module.exports = {findUser, getInfo}