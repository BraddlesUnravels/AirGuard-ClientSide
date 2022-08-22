import axios from '../src/api/axios';
import './App.css';
import Logo from './Components/Logo/Logo';
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