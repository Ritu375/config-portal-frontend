import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Config Portal</h2>
      <ul>
        <li><Link to="/">Fetch Config</Link></li>
        <li><Link to="/update">Update Remark</Link></li>
        <li><Link to="/create">Create Config</Link></li>
        <li><Link to="/delete">Delete Config</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
