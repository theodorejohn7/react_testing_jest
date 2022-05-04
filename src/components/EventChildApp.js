
import React from 'react';
import { EventChild } from './EventChild';

function EventChildApp() { 
  
  function outerHandle() { 
    
    console.log('This is the parent.') 
    
  } 
  
  return ( 
    
    <div onClick={outerHandle}> 
    
      <EventChild name='Child 1'/> 
      <EventChild name='Child 2'/> 
      <EventChild name='Child 3'/> 
      <EventChild name='Child 4'/> 
      
    </div> 
    
  ) 
  
} 

export default EventChildApp;