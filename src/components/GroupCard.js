import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GroupCard.css';

const GroupCard = ({ group }) => {
  const [showConfirmed, setShowConfirmed] = useState(false);

  const toggleConfirmed = () => {
    setShowConfirmed(!showConfirmed);
  };

  return (
    <div className="group-card">
      {group.imageUrl && <img src={group.imageUrl} alt={group.name} className="group-image" />}
      <div className="group-content">
        <h3>{group.name}</h3>
        <p>{group.description}</p>
        <div className="meetup-info">
          <p>
            <strong>Next Meetup:</strong> {group.nextMeetup.title} on {group.nextMeetup.date}
          </p>
          <p>
            <strong>Confirmed:</strong> {group.nextMeetup.confirmed.length}{' '}
            <button onClick={toggleConfirmed}>
              {showConfirmed ? 'Hide' : 'Show'} List
            </button>
          </p>
          {showConfirmed && (
            <ul className="confirmed-list">
              {group.nextMeetup.confirmed.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          )}
        </div>
        <Link to={`/group/${group.id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default GroupCard;
