import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './Components/Home';
import Create from './Components/Create';
import Update from './Components/Update';




function App() {
  return (
    <BrowserRouter>
    <nav>
      <h1>Plant Water Log</h1>
      <Link to="/">Home</Link>
      <Link to="/create">Create New Plant</Link>
    </nav>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/create" element={<Create/>}/>
      <Route path ="/:id" element={<Update/>}/>
    </Routes>
    </BrowserRouter>
      
  );
  
}


export default App;

