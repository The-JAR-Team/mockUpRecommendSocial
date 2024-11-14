import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Group Activity Recommender</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/my-groups">My Groups</Link>
        </li>
        <li>
          <Link to="/my-events">My Events <span className="badge">3</span></Link>
        </li>
        <li>
          <Link to="/friends">My Friends <span className="badge">51</span></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
