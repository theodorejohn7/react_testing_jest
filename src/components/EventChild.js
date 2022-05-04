import React from 'react';

function EventChild(prop) {
  function handleClick() {
    console.log('this is ' + prop.name);
  }

  return <div onClick={handleClick}>{prop.name}</div>;
}

export { EventChild };
