import React, {useState, useRef, useEffect} from 'react'
import './scrollTemplate.css'
import getGeoFunc from '../../services/getGeoFunc'
import StrangerTemplate from '../templates/strangerTemplate'


function ScrollTemplate({state, setState, setUtilBarRight}){

//distcall shows distance 
useEffect(() => setArray({items: [], hasMore: true}), [state.utilBarLeft])
    //use useState to retain group array data

    const [array, setArray] = useState({items: [], hasMore: true}) 

    //save visible object state for loading element

    const [isVisible, setIsVisible] = useState(false)


    function  setActFunc(arg){
      if(arg.hasMore === false){
        setArray({items: array.items.concat(arg.array), hasMore: false})
      }else{
        setArray({items: array.items.concat(arg.array), hasMore: true})
      }
    }


    //useRef is used to hold a value that isnt needed for rendering, this sets the initial value of the containerRef variable to a useRef with a value of null
    const containerRef = useRef(null)
    

    //when containerRef is changaed create a new intersectional observer 


    //options for intersectional observer
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
      }
      
       async function observerCbFunc(entries){
        const [ entry ] = entries
        if(isVisible === true){
          if(array.hasMore === true){
            let geoCoord = await getGeoFunc()
            if(geoCoord.output === 'success'){
             let coord = {lat: geoCoord.lat, lng: geoCoord.lng}
             let reqObj = {type: "FindGroups", index: array.items.length, hasMore: array.hasMore, coord: coord}
             if(array.hasMore === true){
 
               let testData = 
               [{
                "title": "Time Test",
                "description": "Time Test Description ",
                "maxparticipants": 8,
                "minparticipants": 4,
                "DaT": "2023-12-30T14:40:00.000Z",
                "joined": 1,
                "group1_id": "50daa410-218c-48e2-902d-7f6126f6fbf7groupchat",
                "uuid": "fd00a85b-d77f-4e35-bf79-6aa20a1f9233guuid",
                "GUData": [
                    {
                        "pfimg": "b7f17d4e-e71b-4f56-94a8-ed717eebf1c5.png",
                        "username": "username3"
                    }
                ]
            },

            {
              "title": "Time Test",
              "description": "Time Test Description ",
              "maxparticipants": 8,
              "minparticipants": 4,
              "DaT": "2023-12-30T14:40:00.000Z",
              "joined": 1,
              "group1_id": "50daa410-218c-48e2-902d-7f6126f6fbf7groupchat",
              "uuid": "fd00a85b-d77f-4e35-bf79-6aa20a1f9233guuid",
              "GUData": [
                  {
                      "pfimg": "b7f17d4e-e71b-4f56-94a8-ed717eebf1c5.png",
                      "username": "username3"
                  }
              ]
          },
                
          {
            "title": "Time Test",
            "description": "Time Test Description ",
            "maxparticipants": 8,
            "minparticipants": 4,
            "DaT": "2023-12-30T14:40:00.000Z",
            "joined": 1,
            "group1_id": "16e3842e-f3c4-4be3-a7bb-8a773802d24egroupchat",
            "uuid": "c99dc00f-9238-4cde-b43f-1aa2470ebde8guuid",
            "GUData": [
                {
                    "pfimg": "b7f17d4e-e71b-4f56-94a8-ed717eebf1c5.png",
                    "username": "username3"
                }
            ]
        }]
               // await fetchFunc(reqObj, "https://waddleonline.com/api")
      

               let testObj = {type: 'myGroups', hasMore: true, array: testData}

               let resObj = testObj
               setActFunc(resObj)
      
              }else{
      
              }
            }else{
 
            }
 
           }else{
            setTimeout(() => {
              setArray({
                items: array.items.concat(Array.from({ length: 20 })), hasMore: false
              });
            }, 500)
          }
       } 
        setIsVisible(entry.isIntersecting)
       
      
      }


    useEffect(() => {
  
        const observer = new IntersectionObserver(observerCbFunc, options)
        
        if(containerRef.current){
          observer.observe(containerRef.current)
        }
        return () => {
        if(containerRef.current){
          observer.unobserve(containerRef.current)
        }
        }
        }, [containerRef, options])

//maps array object in the array of groups to group template
        
        let arrayElements = array.items.map((e, index) =>{
            if(typeof(e) === 'object'){
              return <StrangerTemplate GroupObj={e} key={index} index={index}/>
              //<GroupTemp GroupObj={e} key={index} index={index}/> 
 
    
            }else{
              return <div key={index} onClick={(e) => {setUtilBarRight({type: 'Chats', uuid: 'arg'})} } className="activity">{index}</div>
            }
            
          })


        return (
            <div className="scrollContainer">
              {arrayElements}
            <div ref={containerRef} id={`scGroup`}>{array.hasMore ? "Loading" : "Thats All"}</div>
          </div>
          )
}

export default ScrollTemplate