import React, { useEffect, useState } from 'react';
import hexToRgbA from 'hex-to-rgba';
import useFetchApi from '../../Components/functions/useFetchApi';
import logo from '../../Components/img/AirGuard_Logo.png';
import { 
  ExContainer, 
  Section1, 
  Logo,
  Main,
  UnOrderedLst,
  LstItm
 } from './AirMonitorElements';
 import { pageVariants, pageTrans, pageStyle } from '../../Components/NavBar/Animation';
import { motion } from 'framer-motion';

const Monitors  = () => {
  

  try {

    
    const { data, loading, error } = useFetchApi('http://localhost:3500/currentApiData'); // Calls custom hook for Api call
    

    if (loading) return (<ExContainer><h1 className='load'>LOADING...</h1></ExContainer>); // Displays if loading. NEEDS "setTimeout Function" encase the page does not load

    if (error) return ( // If there is an error this code block displays 
      <ExContainer>
        <Main>
          <Logo src={logo} />
          <Section1>
            <h1>Sorry, We Fucked Up... This Bloody "{ error }" error is really ruining our day, but we're on it...</h1>
          </Section1>
          
        </Main>
      </ExContainer>
    );

    const items =  data; //Assigns the data to the const items for .map()

    return (
      
      <ExContainer>
        <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTrans} style={pageStyle}>  
          <Section1>

            <Main>

              <UnOrderedLst>
                {/* Below code block assigned the values of .map() to consts to keep the code clean */}
                { items?.map(( item ) => {
                  
                  const siteID = item.siteID;
                  const site = item.siteName;
                  const parameter = item ?.siteHealthAdvices ?.map(( siteHealthAdvice => siteHealthAdvice.healthParameter ));
                  const airQualRead = item ?.siteHealthAdvices ?.map(( siteHealthAdvice => siteHealthAdvice.healthAdvice));
                  const airQualReadStr = airQualRead ? airQualRead.toString() : 'No Data'; // This line is VERY important. It converts the above "airQualRead" to string while using a turnary operator incase the target vale does not exist where it replaces it with "No Data"
                  return (
                    <LstItm className={ item } key={ siteID } colorCode={airQualReadStr} > 
                      Site: { site }
                      <br />
                      Measure: { parameter }
                      <br />
                      Air Quality: { airQualReadStr }
                      <br />
                    </LstItm >
                    )
                  })
                }

              </UnOrderedLst>

            </Main>

          </Section1>
        </motion.div>
      </ExContainer>

    );
  } catch ( err ) {
    console.log( `Error: ${ err }` );
  }
};

export default Monitors;