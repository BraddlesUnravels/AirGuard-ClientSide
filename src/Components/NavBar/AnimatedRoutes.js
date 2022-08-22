import React from 'react'
import NavBar from './NavBarElements';
import Home from '../../pages/Home';
import About from '../../pages/About';
import ContactUs from '../../pages/Contact';
import Monitors from '../../pages/AirMonitors';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import { 
    Routes, 
    Route, 
    useLocation 
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const myStyle = {
  overflowX: "hidden",
  position: "relative",
}

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <main style={myStyle}>
      <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
              <Route path='/' exact element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/Contact' element={<ContactUs />} />
              <Route path='/Monitors' element={<Monitors />} />
              <Route path='/SignIn' element={<SignIn />} />
              <Route path='/SignUp' element={<SignUp />} />
          </Routes>
      </AnimatePresence>
    </main>
  )
}

export default AnimatedRoutes