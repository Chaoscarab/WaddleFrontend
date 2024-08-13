import React, {useState, useEffect}  from 'react';
import './GroupsBar.css'

function GroupsBar({state, setState}){

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

       relevant state: 
       
       utilBarLeft = {type: 'Groups', distance: 5} || {type: 'myGroups', groupType: 'Hosted' || 'Hosted" || 'Joined' || 'Pending' || 'Past'}, {type: 'MkGroup'}
*/
    return(
        <div id="GroupsBarBtnsCt">
            <div className="GroupBarBtns" onClick={(e) => {setState({utilBarLeft: {type: 'Groups', distance: 5}})}}>Find Groups</div>
            <div className="GroupBarBtns" onClick={(e) => {setState({utilBarLeft: {type: 'myGroups', groupType: 'Hosted'}})}}>My Groups</div>
            <div className="GroupBarBtns" onClick={(e) => { setState({utilBarLeft: {type: 'MkGroups'}}) }}>Make Groups</div>
        </div>
    )
}

export default GroupsBar


