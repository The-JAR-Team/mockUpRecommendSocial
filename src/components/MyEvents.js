import React from 'react';
import events from '../data/events';
import './MyEvents.css';

const MyEvents = () => {
  return (
    <div className="my-events">
      <h2>My Events</h2>
      <div className="event-list">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <h3>{event.name}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEvents;
