import React from "react";


function EventBubblingApp() { 
  
    function outerHandle() { 
      
      console.log('outer') 
       
    } 
    
    function innerHandle() { 
      
      console.log('inner') 
      
    } 
    
    return ( 
      
      <div onClick={outerHandle}> 
      
        <div onClick={innerHandle}> 
        
          Hello World 
          
        </div> 
        
      </div> 
    
    ) 
    
  } 
  
  export default EventBubblingApp;