import React from "react";



function EventCapturingApp() { 
  
    function outerHandle() { 
      
      console.log('outer') 
      
    }  
    
    function innerHandle() { 

      
      console.log('inner') 
      
    }
    
    return ( 
      
      <div onClickCapture={outerHandle}> 
      
        <div onClickCapture={innerHandle}>
        
          Hello World 
          
        </div> 
        
      </div> 
      
    ) 
      
  } 
    
  export default EventCapturingApp;