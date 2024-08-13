

async function carryHandler(out, arg, res, queryFunc){

if(out[0].length > 0){
    return res.json({type: 'error', error: `${arg.UserName} has been taken`})
}else{
    emailFunc(arg, res, queryFunc)
}

}
async function carryHandler2(out, arg, res, queryFunc){
    if(out[0].length > 0){
        return res.json({type: 'error', error: `${arg.Email} has been taken`})
    }else{
        InserUserFunc(arg, res, queryFunc)
    }
}


async function usernameFunc(arg, res, queryFunc){
    let exists = "select * from users where username = '"+ arg.UserName +"'"
await queryFunc((output) => carryHandler(output, arg, res, queryFunc), exists)
}

async function emailFunc(arg, res, queryFunc){
    let exists = "select * from users where email = '"+ arg.Email +"'"
    await queryFunc((output) => carryHandler2(output, arg, res, queryFunc), exists)
}


async function NewUserFunction(arg, res, queryFunc){
await usernameFunc(arg, res, queryFunc)
}


async function InserUserFunc(arg, res, queryFunc){

    let gender = arg.Gender
    let genderInt
    
    if(gender === 'Male'){
    genderInt = 1
    }else if(gender === 'Female'){
        genderInt = 2
    }else if(gender === 'NonBinary'){
        genderInt = 3
    }else{
        return (res.json({type: 'error', message: 'invalid gender input'}))
    }
    let sql = "insert into users (username, age, email, password, sex, firstname, lastname) values ( '" + arg.UserName + "', '" + arg.Birthday + "', '" + arg.Email  + "', '" + arg.Password  + "', '" + genderInt  + "', '" + arg.FirstName  + "', '" + arg.LastName  + "')"
    
    function argFunc(){
        res.json({type: 'signup'})
    }
    queryFunc(argFunc, sql) 
}

module.exports = {NewUserFunction}