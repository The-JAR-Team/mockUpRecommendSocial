import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import groups from '../data/groups';
import posts from '../data/posts';
import './GroupDetails.css';

const GroupDetails = () => {
  const { id } = useParams();
  const group = groups.find(g => g.id === parseInt(id));

  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const groupPosts = posts.filter(post => post.groupId === group.id);

  const getRandomPosts = (count) => {
    const shuffled = groupPosts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    setDisplayedPosts(getRandomPosts(3));
    // eslint-disable-next-line
  }, [id]);

  const loadMorePosts = () => {
    setLoading(true);
    setTimeout(() => {
      setDisplayedPosts([...displayedPosts, ...displayedPosts]);
      setLoading(false);
    }, 1000);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      loadMorePosts();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, [displayedPosts]);

  if (!group) {
    return <div>Group not found</div>;
  }

  return (
    <div className="group-details">
      <h1>{group.name}</h1>
      {group.imageUrl && <img src={group.imageUrl} alt={group.name} className="group-detail-image" />}
      <p>{group.description}</p>
      <p>
        <strong>Age Range:</strong> {group.ageRange[0]} - {group.ageRange[1]}
      </p>
      <p>
        <strong>Interests:</strong> {group.interests.join(', ')}
      </p>
      <div className="meetup-info">
        <h2>Next Meetup:</h2>
        <p>
          <strong>Title:</strong> {group.nextMeetup.title}
        </p>
        <p>
          <strong>Date:</strong> {group.nextMeetup.date}
        </p>
        <p>
          <strong>Confirmed Attendees:</strong> {group.nextMeetup.confirmed.length}
        </p>
        <ul className="confirmed-list">
          {group.nextMeetup.confirmed.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      <div className="posts-section">
        <h2>Posts</h2>
        {displayedPosts.map(post => (
          <div key={post.id} className="post-card">
            <p className="post-author">{post.author} <span className="post-date">{post.date}</span></p>
            <p>{post.content}</p>
          </div>
        ))}
        {loading && <img src="loading.gif" alt="Loading..." className="loading-gif" />}
      </div>
    </div>
  );
};

export default GroupDetails;
