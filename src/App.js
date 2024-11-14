import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import GroupDetails from './components/GroupDetails';
import MyGroups from './components/MyGroups';
import MyEvents from './components/MyEvents';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router basename="/mockUpRecommendSocial">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/group/:id" element={<GroupDetails />} />
          <Route path="/my-groups" element={<MyGroups />} />
          <Route path="/my-events" element={<MyEvents />} />
          {/* Add route for friends if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
