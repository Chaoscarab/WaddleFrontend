import React, {useState, useEffect}  from 'react';
import './login.css'
import eyeClosed from './eye-closed.svg'
import eyeOpen from './eye.svg'



function Login({loginFunc}){

    const [inputs, setInputs] = useState({username: '', password: ''})
    const [clicked, setClicked] = useState(true)
    const [messages, setMessages] = useState('')
/*
async function loginResFunc(arg){
    if(!arg.hasOwnProperty('type')){
        setMessages('invalid response from server')
    }else{
        switch(arg.type){
        case "login":
            try{
                console.log('loginFetch')

                let url = "https://waddleonline.com/api"
                let reqJson = {type: 'GUD'}
                let apiRes = await apiFetch(reqJson, url)
                console.log(apiRes)
                if(apiRes.type === 'GUD'){
                    loginFunc(apiRes.userData) 
                    }else{
                    setMessages("error")
                    }
                            
                }catch{
                    throw Error('failed to GUD on login')
                        }   
                        
        break;


        case "error":
        setMessages(arg.error)
        break;

        default: 
        break;
    
        }
    }

}

async function sendReq(){
    let password = inputs.password.toString()
    let username = inputs.username.toString()

let inObj = {type: 'login', username: username, password: password};

let url = 'https://waddleonline.com/login'

try{
 let resResponse = await fetchFunc(inObj, url)
    loginResFunc(resResponse)
}catch{
    throw Error('failed to fetch login')
}

}
*/

    return(
        <div id="loginForm">

            <div id="userNameInContainer">

                <div id="USNLabel">Username:</div>
                <input id='userNameIn' type="text" value={inputs.username} onChange={(e) => {const val = e.target.value; setInputs({username: val, password: inputs.password})}}></input>
            </div>

            <div id="pwForm">
                <div id="pswLabel">Password:</div>
            
                <div id="pwInContainer">
                    <input id="LIPassword"type={clicked ? "password" : "text"} value={inputs.password} onChange={(e) => {const val = e.target.value; setInputs({username: inputs.username, password: val})}}></input>
                    <img className={clicked ? "eyeCon":"invisible"} src={eyeClosed} onClick={(e) => setClicked(false)}></img>
                    <img className={clicked ? "invisible":"eyeCon"} src={eyeOpen} onClick={(e) => setClicked(true)}></img>
                </div>

            </div>

            <div id="LgnBottomButtonBox">
            <div id="SmtLoginBtn" onClick={(e) => console.log(e)/*sendReq()*/}>Login</div>
            <div id="FrgtPsswd">Forgot Password</div>
            </div>
        </div>
    )

}

export default Login