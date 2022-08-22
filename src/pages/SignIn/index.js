import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTrans, pageStyle } from '../../Components/NavBar/Animation';
import { 
  ExContainer
 } from './SignInElements'
import fetchMongoDB from '../../Components/functions/fetchMongoDB';

const SignIn = () => {

  const { data, loading, error } = fetchMongoDB();


  return (
  
  <ExContainer>
    <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTrans} style={pageStyle}>

      <h1>App Coming Soon!</h1> 
    
    </motion.div>
  </ExContainer>
  
  );
}

export default SignIn