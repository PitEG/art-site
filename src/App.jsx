import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

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
  return (
    <div>
      <h1> Gallery </h1>
      <Link to="/"> Back Home </Link>
    </div>
  );
}

export function App() {
  return (
    <div className="app">
      <h1> APP </h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
    </div>
  )
}

export default App;
