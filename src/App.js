import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
    <Router>
     <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/project' element={<Projects/>}/>
          <Route path='/experience' element={<Experience/>}/>
       </Routes> 
    </Router>
  
    </div>
  );
}

export default App;
