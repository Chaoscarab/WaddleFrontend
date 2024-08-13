import React, {useState, useEffect}  from 'react';

import './groupTypes.css'

function GroupTypes({state, setState}){


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
        <div id="myGroupsBarLeft">
            <div className="mGBLBtn" onClick={(e) => {setState({utilBarLeft: {type: 'myGroups', groupType: 'Hosting'}})}}>Hosting</div>
            <div className="mGBLBtn" onClick={(e) => {setState({utilBarLeft: {type: 'myGroups', groupType: 'Joined'}})}}>Joined</div>
            <div className="mGBLBtn" onClick={(e) => {setState({utilBarLeft: {type: 'myGroups', groupType: 'Bookmarked'}})}}>Bookmarked</div>
            <div className="mGBLBtn" onClick={(e) => {setState({utilBarLeft: {type: 'myGroups', groupType: 'Pending'}})}}>Pending</div>
            <div className="mGBLBtn" onClick={(e) => {setState({utilBarLeft: {type: 'myGroups', groupType: 'Past'}})}}>Past</div>
        </div>
    )
}

export default GroupTypes