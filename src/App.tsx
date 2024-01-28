import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyDataTable from './Components/Pages/MyDataTable';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function AboutPage() {
  return ( <div>
    <h1>About</h1>
  </div>
  )
}

// NOTE: you will want to configure the server to serve the same files
// to anything under the / route. This is so that the client side router
// can handle the routing.
function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Link to="/about">About</Link>
        <Link to="/">Data</Link>
      </div>
      <div className="App-header">
        <Routes>
          <Route path="/" element={<MyDataTable />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
