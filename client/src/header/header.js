import React, {useState, useEffect}  from 'react';
import './header.css'
import mascot from './mascotCircle.svg'
import Login from './loginForm/login';


function Header({StateOb, changeState}){

    const [pfToggle, setPfToggle] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


let userData;


if(typeof StateOb.userData === 'string'){

    userData = <div id="loginContainer">
                <div id="loginBtn" onClick={(e) => {if(pfToggle === true){setPfToggle(false)}else{setPfToggle(true)}}}>Login</div>
                <div id="signupBtn">Signup</div>
                <div className={ pfToggle ? 'profileMenu': 'invisible'}>
                    <Login loginFunc={(e) => console.log(e)}/>
                    </div>
                    </div>


}else{

    userData = <div id="ProfileContainer">
                    <div id="profileImgCnt">
                    <label id="PflImgLb" htmlFor={`ProfileImg`} onClick={(e) => {if(pfToggle === true){setPfToggle(false)}else{setPfToggle(true)}}}>
                    <img id="ProfileImg" src={`https://waddle-bucket.s3.us-east-2.amazonaws.com/${StateOb.userData. pfimg}`} ></img>
                    </label>
                    </div>
                    <div id="UsernameTxt" onClick={(e) => {if(pfToggle === true){setPfToggle(false)}else{setPfToggle(true)}}}>{StateOb.userData.username}</div>
                    <div className={ pfToggle ? 'profileMenu': 'invisible'}>
                        <ul className="PrUl">
                            <li className="PrMItem">Profile</li>
                            <li className="PrMItem">Settings</li>
                            <li className="PrMItem">Feedback</li>
                            <li className="PrMItem">Help/Support</li>
                            <li className="PrMItem">Logout</li>
                        </ul>
                    </div>
                </div>

}



    return(<div id="header">
         <div id="logoContainer">
        <img id="logoIcon" src={mascot} ></img>
        <div id="logoText">WADDLE</div>
       </div>
       <div id="headerBtnCont">
        <div id="centerBtnCont">
        <div className="headerBtn" onClick={(e) => {changeState({content: 'Groups', utilBarLeft: {type: 'Groups', distance: 5}, utilBarRight: {type: 'Messages'}})}}>Groups</div>
        <div className="headerBtn" onClick={(e) => {changeState({content: 'Message', utilBarLeft: {type: 'Friends'}, utilBarRight: {type: 'none'}})}}>Messages</div>
        <div className="headerBtn" onClick={(e) => {changeState({content: 'Friends', utilBarLeft: {type: 'none'}, utilBarRight: {type: 'groups'}})}}>Friends</div>
        <div className="headerBtn" onClick={(e) => {changeState({content: 'About', utilBarLeft: {type: 'none'}, utilBarRight: {type: 'none'}})}}>About</div>
        </div>
       </div>
       <div id="headerEndcap">
        {userData}
       </div>
    </div>)
}

export default Header