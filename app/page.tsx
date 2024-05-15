'use client';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "../components/Main";
import DataContact from '@/components/DataContact';
import Card from '@/components/Card';

const App = () => {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<DataContact />} />
        <Route path="/pass" element={<Card />} />
      </Routes>
    </Router>
  );
}
export default App;
