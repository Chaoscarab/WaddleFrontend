import React, {useState, useEffect}  from 'react';
import './utilBarLeft.css'
import GroupsBar from './GroupsBar/GroupsBar'
import GroupTypes from './SubBars/groupTypes'
import FindGroupsSB from './SubBars/findGroupsSB';

function UtilBarLeft({state, setState}){
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

let barContent;
let subBar;

switch(state.utilBarLeft.type){
    case "Groups":
        barContent = <GroupsBar state={state} setState={setState}/>
        subBar = <FindGroupsSB state={state} setState={setState}/>
    break;

    case "myGroups":
        barContent = <GroupsBar state={state} setState={setState}/>
        subBar = <GroupTypes state={state} setState={setState}/>
        break;

    case "MkGroups":
        barContent = <GroupsBar state={state} setState={setState}/>
        break;

    default:
    break;

    
}





    return(
        <div id="sideBarLeft">
            {barContent}
            {subBar}
        </div>
    )
}

export default UtilBarLeft