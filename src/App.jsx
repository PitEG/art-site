import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

import './App.scss';

function Home() {
  return (
    <div>
      <h1> HOME </h1>
      <Link to="/gallery"> Gallery </Link>
    </div>
  );
}

function Gallery() {
  let params = useParams();
  return (
    <div>
      <h1> Gallery: {params.galleryId} </h1>
      <Link to="/"> Home </Link>
    </div>
  );
}

export function App() {
  return (
    <div className="app">
      <h1> APP HEADER </h1>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/:galleryId" element={<Gallery/>}>
        </Route>
      </Routes>
      <h1> APP FOOTER </h1>
    </div>
  )
}

export default App;
