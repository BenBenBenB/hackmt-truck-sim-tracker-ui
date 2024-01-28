import React from 'react';
import './App.css';
import Achievements from './Components/Pages/Achievements';
import AboutPage from './Components/Pages/AboutPage';
import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DeliveryLog from './Components/Pages/DeliveryLog';
import AchievementInfo from './Components/Pages/AchievementInfo';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">TruckStop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Achievements</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/DeliveryLog">Delivery Log</Nav.Link>
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
      <div className="Flag">
      </div>
      <div className="App-header">
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<Achievements />} />
          <Route path="/DeliveryLog" element={<DeliveryLog />} />
          <Route path="/"  element={<AchievementInfo />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
