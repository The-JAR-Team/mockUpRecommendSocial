import React from 'react';
import groups from '../data/groups';
import GroupCard from './GroupCard';
import './MyGroups.css';

const MyGroups = () => {
  // Randomly select 2 groups
  const myGroups = groups.sort(() => 0.5 - Math.random()).slice(0, 2);

  return (
    <div className="my-groups">
      <h2>My Groups</h2>
      <div className="group-list">
        {myGroups.map(group => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default MyGroups;
