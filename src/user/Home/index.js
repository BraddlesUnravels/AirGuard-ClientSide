import React from 'react'
import logo from '../../Components/img/AirGuard_Logo.png'
import { ExContainer, Logo } from './HomeElements';
import { motion } from 'framer-motion';
import { pageVariants, pageTrans, pageStyle } from '../../Components/NavBar/Animation';

const Home = () => {
    return (
      <ExContainer>
        <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTrans} style={pageStyle}>
  
          <h1>Welcome Page</h1>
  
        </motion.div>
      </ExContainer>
    );
  }
  
  export default Home
  