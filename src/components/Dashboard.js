import React, { useState, useEffect } from 'react';
import users from '../data/users';
import groups from '../data/groups';
import GroupCard from './GroupCard';
import './Dashboard.css';

const Dashboard = () => {
  const [displayedGroups, setDisplayedGroups] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const currentUser = users.find(user => user.name === 'Alice');

  const recommendedGroups = groups.filter(group => {
    const ageMatch =
      currentUser.age >= group.ageRange[0] && currentUser.age <= group.ageRange[1];
    const interestMatch = group.interests.some(interest =>
      currentUser.interests.includes(interest)
    );
    return ageMatch && interestMatch;
  });

  useEffect(() => {
    loadMoreGroups();
    // eslint-disable-next-line
  }, []);

  const loadMoreGroups = () => {
    if (displayedGroups.length >= recommendedGroups.length) {
      setHasMore(false);
      return;
    }
    const nextGroups = recommendedGroups.slice(displayedGroups.length, displayedGroups.length + 2);
    setDisplayedGroups([...displayedGroups, ...nextGroups]);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      loadMoreGroups();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, [displayedGroups]);

  return (
    <div className="dashboard">
      <h2>Welcome, {currentUser.name}!</h2>
      <div className="group-list">
        {displayedGroups.map(group => (
          <GroupCard key={group.id} group={group} />
        ))}
        {!hasMore && <p className="end-message">You've reached the end!</p>}
      </div>
    </div>
  );
};

export default Dashboard;
