import React, {useState, useRef, useEffect} from 'react'
import './contacts.css'

function ContactsTemplate({StateOb, index}){

    const [pfToggle, setPfToggle] = useState(false)



    
    return(
        <div id={`ContactCnt${index}`}>
    <div id={`ContactimgCnt${index}`}>
    <label id={`Contactimglb${index}`} htmlFor={`Contactimg${index}`}>
    <img id={`Contactimg${index}`} src={`https://waddle-bucket.s3.us-east-2.amazonaws.com/${StateOb.pfimg}`} ></img>
    </label>
    </div>
    <div id={`ContactUn${index}`} >{StateOb.username}</div>
</div>
    )
}
export default ContactsTemplate