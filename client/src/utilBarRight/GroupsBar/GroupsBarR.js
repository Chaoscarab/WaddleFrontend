import React, {useState, useRef, useEffect} from 'react'
import './GroupsBarR.css'
import ContactsTemplate from './ContactsTemplate/contacts'

function ContactsBarR(state){

//distcall shows distance 
useEffect(() => setArray({items: [], hasMore: true}), [state.utilBarRight])
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
            

               // await fetchFunc(reqObj, "https://waddleonline.com/api")

               let testData = [{username: 'TestUN', lastOnline: '2023-12-30T14:40:00.000Z', pfimg: 'b7f17d4e-e71b-4f56-94a8-ed717eebf1c5.png'}]

               let testObj = {type: 'Contacts', hasMore: false, array: testData}

               let resObj = testObj
               setActFunc(resObj)
            }
 
           }else{
            setTimeout(() => {
              setArray({
                items: array.items.concat(Array.from({ length: 20 })), hasMore: false
              });
            }, 500)
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
            if( typeof(e) === 'object'){
              return <div>element</div>//<ContactsTemplate key={index} StateOb={e} index={index}/> 
              //<GroupTemp GroupObj={e} key={index} index={index}/> 
 
    
            }else{
              return <div key={index} className="ContactsPH">{index}</div>
            }
            
          })


        return (
            <div className="ContactsScrollCt">
              {arrayElements}
            <div ref={containerRef} id={`scContacts`}>{array.hasMore ? "Loading" : "Thats All"}</div>
          </div>
          )
}

export default ContactsBarR