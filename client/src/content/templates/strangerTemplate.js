

import React, {useState, useRef, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './StrangerTemplate.css'

function StrangerTemplate({GroupObj, index}){

let noImg = 'https://waddle-bucket.s3.us-east-2.amazonaws.com/no-image-icon-23485.png'
let noUser = 'https://waddle-bucket.s3.us-east-2.amazonaws.com/cirlcePlusinBlue.png'
let join = 'https://waddle-bucket.s3.us-east-2.amazonaws.com/plus-square-icon-blue.png'
let joinedIcon = 'https://waddle-bucket.s3.us-east-2.amazonaws.com/plus-square-icon-selected.png'


const [hasJoined, setHasJoined] = useState(false)


function setClickedFunc(){

let clickImg;

if(hasJoined === false){
    clickImg = join
}else{
    clickImg = joinedIcon
}

return clickImg

}

async function joinToggle(){
    let rawRes;
    if(hasJoined === false){
try{
   // rawRes = await fetchFunc({type: 'JnL', uuid: GroupObj.uuid, action: "join"}, 'https://waddleonline.com/api')

    //console.log(rawRes)

    setHasJoined(true)

}catch (e){
    setHasJoined(false)
    throw new Error(e)
}
        


    }else {

        try{
          //  rawRes = await fetchFunc({type: 'JnL', uuid: GroupObj.uuid, action: "leave"}, 'https://waddleonline.com/api')

           // console.log(rawRes)

            setHasJoined(false)
        
        }catch (e){

            setHasJoined(false)

            throw new Error(e)
        }
              




    }
}






let act = GroupObj.DaT;
let pm = false;
let datetimeArr = act.replaceAll('T', ' ').split(' ')
let timeSplit = datetimeArr[1].replaceAll(':', ' ').split(' ')
let dateArr = datetimeArr[0].replaceAll("-", " ").split(' ')
 
let date = dateArr[1] + '/' +  dateArr[2] + '/' +  dateArr[0] 

let hour = parseInt(timeSplit[0])

if(hour > 12){
     hour = hour - 12
     pm = true
}

let m;

if(pm === true){
    m = "PM"
}else{
    m = "AM"
}

let time = hour.toString() + ":" + timeSplit[1] + m





function imgFindFunc(int){
let length = GroupObj.GUData.length
let string;
console.log(GroupObj)

switch(int){
    case 1:
        console.log(typeof 'string' === GroupObj.GUData[0].pfimg, typeof GroupObj.GUData[0].pfimg, typeof GroupObj.GUData[0].pfimg === 'string')
        if(length > 0){

        
        if(typeof 'string' === typeof GroupObj.GUData[0].pfimg){
            string = "https://waddle-bucket.s3.us-east-2.amazonaws.com/" + GroupObj.GUData[0].pfimg
        }else{
            string = noImg
        }
    }else{
        string = noUser
    }

    break;

    case 2: 
    if(length > 1){
        if(typeof 'string' === typeof GroupObj.GUData[1].pfimg){
            string = "https://waddle-bucket.s3.us-east-2.amazonaws.com/" + GroupObj.GUData[1].pfimg
        }else{
            string = noImg
        }
    }else{
        string = noUser
    }
    

    break;

    case 3: 
    if(length > 2){
        if(typeof 'string' === typeof GroupObj.GUData[2].pfimg){
        string = "https://waddle-bucket.s3.us-east-2.amazonaws.com/" + GroupObj.GUData[2].pfimg
    }else{
        string = noImg
    }
    }else{
        string = noUser
    }
    
    break;
}
return string 

}


    return(

<Container className="FdGrpObCT">
    <Row>
        <Col >
       
        <div className="GTitle">{GroupObj.title}</div>
        </Col>
       
        <Col>
        <div className="GshareCnt">
        
        <div className="shareSVG" >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#65C8F5" className="bi bi-share" viewBox="0 0 16 16">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
</svg>
</div>

<div className="GshareBtn">Share</div>

        </div>
        </Col>
    </Row>
    <Row>
         <Col>
        <div  className="GDate" >{date}, {time}</div>  

    <div className="chatIconCt">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#65C8F5" className="bi bi-chat-dots" viewBox="0 0 16 16">
    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2"/>
    </svg>
    </div>
        </Col>
    </Row>
    <Row>
        <Col lg={2} className="GTempLCol">

                    <div className="bottomImgSet1">
                        <label className="FdGrpImLb" htmlFor={`fdGpim${index}1`}>
                        <img className="FdGrpIm"  id={`fdGpim${index}1`} src={imgFindFunc(1)}>
                        </img></label>
                    </div>
                    

                    <div className="bottomImgSet2">
                        <label className="FdGrpImLb" htmlFor={`fdGpim${index}2`}>
                        <img className="FdGrpIm" id={`fdGpim${index}2`} src={imgFindFunc(2)}></img>
                        </label>
                    </div>

                    <div className="bottomImgSet3">
                        <label className="FdGrpImLb" htmlFor={`fdGpim${index}3`}>
                        <img className="FdGrpIm" id={`fdGpim${index}3`} src={imgFindFunc(3)}></img>
                        </label>
                    </div>


                    <div className="bottomImgSet4">
                        <label className="FdGrpImLb2" htmlFor={`fdGpim${index}`} onClick={(e) => joinToggle()}>
                        <img className="FdGrpIm2" id={`fdGpim${index}`} src={setClickedFunc()}></img>
                        </label>
                    </div> 
        </Col>
        <Col>
        <div className="GroupDisc">{GroupObj.description}
        </div>
        </Col>
    </Row>
</Container>
    )
}

export default StrangerTemplate