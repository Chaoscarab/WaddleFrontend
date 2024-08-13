import React, {useState, useEffect}  from 'react';
import Header from './header/header';
import UtilBarLeft from './utilBarLeft/utilBarLeft'
import ContentBar from './content/content';
import UtilBarRight from './utilBarRight/utilBarRight';
import './global.css'

function App(){
    const [state, setState ] = useState({userData: 'none', content: 'Groups', utilBarLeft: {type: 'Groups', distance: 5}})
    const [utilBarRight, setUtilBarRight] = useState({type: 'Contacts', uuid: 'none'})
    
    /**
     * 
     * userData = {userdataObj} || false
     * content = 'Groups' || 'Message' || 'Friends' || 'About'
     * utilBarLeft = {type: 'Groups', distance: 5} || {type: 'myGroups', groupType: 'Hosted' || 'Hosted" || 'Joined' || 'Pending' || 'Past'}, {type: 'MkGroup'}
     * utilBarRight = {type: 'chats' || 'none'}
     */

    
function updateState(object){
let currentState = structuredClone(state)
currentState.userData = object.userData || currentState.userData
currentState.content = object.content || currentState.content
currentState.utilBarLeft = object.utilBarLeft || currentState.utilBarLeft
currentState.utilBarRight = object.utilBarLeft || currentState.utilBarRight
setState(currentState)
}


let testData = {
    username: 'username',
     age: '1998-05-24T00:00:00.000Z',
     firstname: 'firstname',
     lastname: 'lastname',
     private: false,
     summary: 'profile summary',
     gender: 'Male',
     pfimg: '87ea3738-0cdd-4d3b-a90f-847047aeb597.png',
     displayName: null
   }

useEffect(() => {
function logginFunc(){
    if(typeof state.userData === 'string'){

        updateState({userData: testData})

    }else{
        updateState({userData: false})
    }
}
logginFunc()
//updateState({userData: false})
}, [])

/** test user data 
 * {

 username: 'username',
  age: 1998-05-24T00:00:00.000Z,
  firstname: 'firstname',
  lastname: 'lastname',
  private: <Buffer 01>,
  summary: 'profile summary',
  gender: 'Male',
  pfimg: '87ea3738-0cdd-4d3b-a90f-847047aeb597.png',
  displayName: null
}

 */




return (<div>
    <Header StateOb={state} changeState={updateState}/>
    <UtilBarLeft state={state} setState={updateState}/>
    <ContentBar state={state} setState={updateState} setUtilBarRight={setUtilBarRight}/>
    <UtilBarRight state={state} setState={updateState} utilBarRight={utilBarRight}  setUtilBarRight={setUtilBarRight}/>
</div>)
}

export default App