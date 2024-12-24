import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import MicrositePreview from './components/MicrositePreview';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/microsite/preview" element={<MicrositePreview/>}/>
      </Routes>
    </Router>
  );
}

export default App;
