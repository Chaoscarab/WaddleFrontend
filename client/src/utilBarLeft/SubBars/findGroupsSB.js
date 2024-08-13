import React, {useState, useEffect}  from 'react';
import './findGroupsSB.css'

function FindGroupsSB({state, setState}){

    useEffect(() => {
        if(range !== state.utilBarLeft.distance){
            setRange(state.utilBarLeft.distance)
        }
    }, [])
    const [range, setRange] = useState(5)
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

    return(
        <div id="findGroupsBarLeft">
            <label id="distanceInputLb" htmlFor='distanceInput'>Distance (mi):</label>
            <input id="distanceInput" type="number" value={range} onChange={(e) => {const val = e.target.value; {setRange(val)}}}  min="5" max="100"></input>
            <div id="distSubmitBtn" onClick={(e) => { setState({utilBarLeft: {type: 'Groups', distance: range}})}}>Submit</div>
        </div>
    )
}

export default FindGroupsSB