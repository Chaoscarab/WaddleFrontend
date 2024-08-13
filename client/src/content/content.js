import React, {useState, useEffect}  from 'react';
import StrangerTemplate from './templates/strangerTemplate';
import ScrollTemplate from './scrollTemplate/scrollTemplate';
function ContentBar({state, setState, setUtilBarRight}){

/* 
test data
[{
   id: 34,
  user_id: 44,
    title: 'Time Test',
      description: 'Time Test Description ',
     country: 'US',
      state: 'Indiana',
     street: '3505 S Main St',
      postalcode: 46517,
     latitude: '41.646181',
      longitude: '-85.935305',
maxparticipants: 8,
  minparticipants: 4,
 DaT: 2023-12-30T14:40:00.000Z,
       city: 'Elkhart',
   joined: 1,
  group2_id: '57857906-6d8e-411e-a522-973a80cb8e15groupchat',
 group1_id: '33cd8448-63a6-4867-8d01-2a6213cdbfc3groupchat',
 uuid: '395e4183-276c-44ff-b6e4-ac409334373dguuid'
},
    {
    id: 35,
    user_id: 44,
    title: 'Time Test',
    description: 'Time Test Description ',
    country: 'US',
    state: 'Indiana',
    street: '3505 S Main St',
    postalcode: 46517,
    latitude: '41.646181',
    longitude: '-85.935305',
    maxparticipants: 8,
    minparticipants: 4,
    DaT: 2023-12-30T14:40:00.000Z,
    city: 'Elkhart',
    joined: 1,
    group2_id: 'a35d4ac7-9d1e-4c9a-8475-5d3e88561f39groupchat',
      group1_id: '97bd4d79-251e-4d79-8ea1-63bd542571b8groupchat',
   uuid: 'ff055d0e-e6a3-4d18-8ac8-4d316d710bd8guuid'},
   {id: 36,
     user_id: 44,
      title: 'Time Test',
      description: 'Time Test Description ',
       country: 'US',
     state: 'Indiana',
      street: '3505 S Main St',
     postalcode: 46517,
      latitude: '41.646181',
      longitude: '-85.935305',
      maxparticipants: 8,
     minparticipants: 4,
      DaT: 2023-12-30T14:40:00.000Z,
      city: 'Elkhart',
    joined: 1,
     group2_id: '0e56ec10-2770-4269-ba36-7601b04cd1aagroupchat',
      group1_id: '50daa410-218c-48e2-902d-7f6126f6fbf7groupchat',
     uuid: 'fd00a85b-d77f-4e35-bf79-6aa20a1f9233guuid'
    }
  ]

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

        utilBarLeft = {type: 'Groups', distance: 5} || {type: 'myGroups', groupType: 'Hosted' || 'Hosted" || 'Joined' || 'Pending' || 'Past'}, {type: 'MkGroup'}
*/

let varContent

switch(state.utilBarLeft.type){
    case "Groups":
        varContent = <ScrollTemplate state={state} setState={setState} setUtilBarRight={setUtilBarRight}/>
        break;

    case 'myGroups':
        varContent = <ScrollTemplate state={state} setState={setState} setUtilBarRight={setUtilBarRight}/>
        break;
    
    case 'MKGroup':
        varContent = <ScrollTemplate state={state} setState={setState} setUtilBarRight={setUtilBarRight}/>
        break;
}


return (
    <div id="ContentBar">
        {varContent}
    </div>
)
}

export default ContentBar