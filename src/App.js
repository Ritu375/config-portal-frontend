// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import FetchConfig from './components/FetchConfig';
// import UpdateRemark from './components/UpdateRemark';
// import CreateConfiguration from './components/CreateConfiguration';
// import DeleteConfiguration from './components/DeleteConfiguration';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   return (
//     <Router>
//       <div className="container">
//         <h1>Configuration Portal</h1>
//         <nav>
//           <Link to="/">Fetch Config</Link>
//           <Link to="/update">Update Remark</Link>
//            <Link to="/create">Create Config</Link>
//           <Link to="/delete">Delete Config</Link>
//         </nav>
//         <Routes>
//           <Route path="/" element={<FetchConfig />} />
//           <Route path="/update" element={<UpdateRemark />} />
//            <Route path="/create" element={<CreateConfiguration />} />
//           <Route path="/delete" element={<DeleteConfiguration />} />
//         </Routes>
//           <ToastContainer position="top-right" autoClose={3000} />
//       </div>
//     </Router>
//   );
// }

// export default App;

// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FetchConfig from './components/FetchConfig';
import UpdateRemark from './components/UpdateRemark';
import CreateConfiguration from './components/CreateConfiguration';
import DeleteConfiguration from './components/DeleteConfiguration';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <h1 className="page-heading">Welcome To Configuration Portal</h1>
          <Routes>
            <Route path="/" element={<FetchConfig />} />
            <Route path="/update" element={<UpdateRemark />} />
            <Route path="/create" element={<CreateConfiguration />} />
            <Route path="/delete" element={<DeleteConfiguration />} />
          </Routes>
          <ToastContainer position="top-right" autoClose={3000} />
        </div>
      </div>
    </Router>
  );
}

export default App;

