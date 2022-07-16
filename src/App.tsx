import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TabPanel from "./components/container";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<TabPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
