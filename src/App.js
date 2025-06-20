import FetchConfig from './components/FetchConfig';
import UpdateRemark from './components/UpdateRemark';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Configuration Portal</h1>
        <nav>
          <Link to="/">Fetch Config</Link>
          <Link to="/update">Update Remark</Link>
        </nav>
        <Routes>
          <Route path="/" element={<FetchConfig />} />
          <Route path="/update" element={<UpdateRemark />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
