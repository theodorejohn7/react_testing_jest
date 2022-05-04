import React from "react"

function EventPropChild (prop) { 
  
    function handleClick(e) { 
      
      console.log('this is ' + prop.name) 
      
      if ( prop.name == 'Child 2' ) { 
        
        e.stopPropagation() 
        
      } 
      
    } 
    
    return ( 
      
      <div onClick={handleClick}> 
      
        {prop.name} 
        
      </div> 
      
    ) 
    
  } 
  
  export { EventPropChild }