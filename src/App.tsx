import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimatedRoutes from './Components/NavBar/AnimatedRoutes';



function App() {
    
    return (
        <Router>
            <NavBar />
            <AnimatedRoutes />
        </Router>
    );
}

export default App;