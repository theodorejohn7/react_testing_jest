import React from 'react';

import { EventPropChild } from './EventPropChild';


function EventPropApp() { 
  
  function outerHandle() { 
    
    console.log('This is the parent.') 
    
  } 
  
  return ( 
    
    <div onClick={outerHandle}> 
    
      <EventPropChild name='Child 1'/> 
      <EventPropChild name='Child 2'/> 
      <EventPropChild name='Child 3'/> 
      <EventPropChild name='Child 4'/> 
      
    </div> 
    
  ) 
  
} 

export default EventPropApp;
