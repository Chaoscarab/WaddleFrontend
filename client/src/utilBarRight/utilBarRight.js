import React, {useState, useEffect}  from 'react';
import './utilBarRight.css'
import ContactsBarR from './GroupsBar/GroupsBarR';

function UtilBarRight({state, setState, utilBarRight, setUtilBarRight}){
/*
    parent function of setState:

    function updateState(object){
        let currentState = structuredClone(state)
        currentState.userData = object.userData || currentState.userData
        currentState.content = object.content || currentState.content
        currentState.utilBarLeft = object.utilBarLeft || currentState.utilBarLeft
        currentState.utilBarRight = object.utilBarLeft || currentState.utilBarRight
        setState(currentState)
        }
*/

let header;
let barContent;
let subBar;

switch(utilBarRight.type){
    case "Contacts":

       barContent =  <ContactsBarR state={utilBarRight}/>
     //  header = <div class="contactsHeader">Contacts</div>
    break;

    default:
    break;

    
}





    return(
        <div id="sideBarRight">
            {header}
            {barContent}
            {subBar}
        </div>
    )
}

export default UtilBarRight