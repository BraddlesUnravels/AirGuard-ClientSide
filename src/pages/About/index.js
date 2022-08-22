import React from 'react';
import './About.css'
import backImage from '../../Components/img/BackImageDPI300.JPEG';
import {
  NavBtnLink
} from '../../Components/NavBar/NavBarElements';
import { motion } from 'framer-motion';
import { pageVariants, pageTrans, pageStyle } from '../../Components/NavBar/Animation';


const About = () => {
  const mystyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh',
      backgroundImage: `url(${backImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
  }
  return (

    <div className='about-externalContainer' style={mystyle}>
      <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTrans} style={pageStyle}>
        <div className='table'>
          <div className='about-card'>
            <h1>About Us</h1>
            <hr />
            <div>
              <p className='bd'>
                <p className='about-headings'>What is AirGuard</p>
                
                AirGruard is a free open source application that uses the Victorian air monitor network<br />
                to notify users of negative changes in air quality readings. The purpose of this is to<br />
                provide an early warning system by notifying registered users of negative changes in<br />
                air quality readings and forcasts.
                <br />
                <p className='about-headings'>Why AirGuard Exists</p>
                
                On the 21st of November 2016, Victoria experienced the world's largest epidemic of<br />
                thunderstorm asthma causing thousands of people to develop short-term breathing<br />
                difficulties during and shortly after the event.<br />
                <br />
                At the time One of the biggest challenges that was met by state emergency services<br/>
                on that day was getting the word out there.<br />
                <br />
                In total the event claimed the lives of 10 Victorians and led to the hospitalisation of<br />
                more than 3,000 more. Which left the question; Could the number of deaths and<br />
                hospitalistaions have been reduced if these people had the option to recieve a<br />
                warning notification or daily forecast of expected air quality?<br />
                <br />
                This is the question that led to the development of AirGuard.
                <br /> 
                <p className='about-headings'>How It Works</p>
                
                Users register for notifications of varying sensitivity levels to air monitors they wish<br />
                to recieve updates, warnings, and forecasts from. These can be localised monitors to<br />
                their home or work or state wide.<br />
                <br />
                Development is a work in progress and we hope to introduce the capability of location<br />
                based warning noticications and forecasts with the future implementation of a mobile<br />
                application. Although this functionality does not exist at this time.
                <br />
                <p className='about-headings'>Support for AirGuard</p>
                Continued development of this applcation as a free service is an expensive project and<br />
                donations are always welcomed and highly valued. If you'd like to show your support<br />
                by making a donation, then you'll notice the donteplease page and send us a<br />
                message requesting how to donate.
                <br />
                <br />
                <div className='donate-flex-end'>
                  <NavBtnLink to='/Contact' >Donate</NavBtnLink>
                </div>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About