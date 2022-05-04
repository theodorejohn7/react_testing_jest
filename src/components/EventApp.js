import React from 'react';
import EventBubblingApp from './EventBubblingApp';
import EventCapturingApp from './EventCapturingApp';
import EventChildApp from './EventChildApp';
import EventPropApp from './EventPropApp';

class EventApp extends React.Component {
  render() {
    return (
      <>
        <h1>Event Bubbling </h1>
        <EventBubblingApp />

        <h1>Event Capture </h1>
        <EventCapturingApp />

        <h1>Multiple Child</h1>
        <EventChildApp />

        <h1>Stop Event Propagation</h1>
        <EventPropApp />
      </>
    );
  }
}

export default EventApp;
