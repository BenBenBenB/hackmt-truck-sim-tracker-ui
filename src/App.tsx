import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyDataTable from './Components/Pages/MyDataTable';
import AboutPage from './Components/Pages/AboutPage';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">TruckStop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

// NOTE: you will want to configure the server to serve the same files
// to anything under the / route. This is so that the client side router
// can handle the routing.
function App() {
  return (
    <div className="App">
      <MyNavbar />
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
