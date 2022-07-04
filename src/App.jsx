import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import './App.scss';

import Gallery from './Gallery.jsx';
import Home from './Home.jsx';

function Header() {
  return (
    <header>
      <h1> HEADER</h1>
      </header>
  );
}

function Footer() {
  return (
    <footer>
      <h1> FOOTER </h1>
    </footer>
  );
}

export function App() {
  return (
    <Container className="app" fluid>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/:galleryId" element={<Gallery/>}>
        </Route>
      </Routes>
      <Footer/>
    </Container>
  )
}

export default App;
