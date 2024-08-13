
    require('dotenv').config()

const mysql = require('mysql2')

const con = mysql.createConnection(process.env.DATABASE_URL)


async function getMyAct(req, res, actIndex){

    let length;

    let query = `select * from activities where user_id = ${req.session.passport.user.id} limit 12 offset ${actIndex}`
    const results = await con.promise().execute(query)

    .then((e) =>
         {   
            let myActivitiesArr = []
            if(e.length > 0){
            e[0].forEach((act) => {
        
            let resActObj = {}
            resActObj['title'] = act.title;
            resActObj['description'] = act.description;
            resActObj['country'] = act.country;
            resActObj['state'] = act.state;
            resActObj['street'] = act.street;
            resActObj['postalcode'] = act.postalcode;
            resActObj['minparticipants'] = act.minparticipants
            resActObj['maxparticipants'] = act.maxparticipants;
            resActObj['description'] = act.description;
            resActObj['DaT'] = act.DaT;
            resActObj['city'] = act.city;
            resActObj['joined'] = act.joined;
            resActObj['relStat'] = 'host';
            resActObj['image'] = act.image;
        myActivitiesArr.push(resActObj)
        })
    }

    if(e[0].length < 12){
        console.log(myActivitiesArr)
        return res.json({type: 'myAct', Act: myActivitiesArr, more: false})
    }else{
           return res.json({type: 'myAct', Act: myActivitiesArr, more: true })
    } }

    )
  
}

async function getMyActData(req, res, actIndex){
    let act = actIndex
    let query = `select * from activities where user_id = ${req.session.passport.user.id} limit 1 offset ${act}`
    let rawresponse = await con.promise().execute(query)

        if(rawresponse.length <= 0){
            console.log('1st res Sent')
         res.json({type: "error", error: 'returned no activities'})
        } else {

        let id = rawresponse[0][0].id
        let sql = `select * from activities_users where event_id = ${id}`

        let secondaryRaw = await con.promise().execute(sql)

            if(secondaryRaw.length > 0){

            let userArr = []

            secondaryRaw[0].forEach((user) => { userArr.push({username: user.username, accepted: user.accepted})})
            console.log('2nd res Sent')
            return res.json({type: 'actData', userArr: userArr})

        }else{
            console.log('3rd res Sent')
           return  res.json({type: 'actData', userArr: []})

        }

        }
        }
       
    





module.exports = {getMyAct, getMyActData}