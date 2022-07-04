import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import './App.scss';

import Gallery from './Gallery.jsx';
import GalleryImage from './GalleryImage.jsx';
import Home from './Home.jsx';
import Menu from './Menu.jsx';

function Header() {
  return (
    <header>
      <Menu/> 
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
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="/:galleryId" element={<Gallery/>}/>
          <Route path="/:galleryId/:imageId" element={<GalleryImage/>}/>
          </Route>
        </Routes>
      <Footer/>
    </Container>
  )
}

export default App;
