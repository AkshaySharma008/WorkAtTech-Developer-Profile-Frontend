import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Developer from './pages/Developer';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
         <Router>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/:id' element={<Developer/>} />
        </Routes>
      </Router> 
    </div>    
  );
}

export default App;
