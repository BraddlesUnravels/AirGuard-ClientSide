import React from 'react'
import logo from '../../Components/img/AirGuard_Logo.png'
import { ExContainer, Logo } from './HomeElements';
import { motion } from 'framer-motion';
import { pageVariants, pageTrans, pageStyle } from '../../Components/NavBar/Animation';

// Need to come back here to setup the props for motion.div correctly
const Home = () => {
  return (
    <ExContainer>
    <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTrans} style={pageStyle}> 

        <Logo src={logo} />

      </motion.div>
    </ExContainer>
  );
}

export default Home


// intial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}