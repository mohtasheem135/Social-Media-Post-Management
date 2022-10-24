import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router";
import About from './components/About';
import Home from './components/Home';
import SavedContent from './components/SavedContent';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/savedContent" element={<SavedContent />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
