import React, { useState, useEffect } from 'react';
import './ContactElements';
import genID from '../../Components/functions/genID';
import {
  ExContainer,
  Section,
  Section2,
  Registered,
  Form
} from './ContactElements';
import { NavBtnLink } from '../../Components/NavBar/NavBarElements';
import { motion } from 'framer-motion';
import { pageVariants, pageTrans, pageStyle } from '../../Components/NavBar/Animation';


const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const CONTACT_URL = 'http://localhost:3500/Contact';
const messageID = genID( 100, 999 )

const Contact = () => {

  const [ name, setName ] = useState( '' );
  const [ phone, setPhone ] = useState( '' );
  const [ email, setEmail ] = useState( '' );
  const [ message, setMessage ] = useState( '' );
  
  const [ success, setSuccess ] = useState( false );
  const [ validEmail, setValidEmail ] = useState( false );
  const [ errMsg, setErrMsg ] = useState('');

  useEffect(() => {

    setValidEmail( EMAIL_REGEX.test( email ));

  }, [ email ])
  
  const handleSubmit = async ( e ) => {

    const formData = {
      id: messageID,
      Name: name,
      Phone: phone,
      Email: email,
      Message: message
    };
    
    e.preventDefault();
    const verifyEmail = EMAIL_REGEX.test(email);
    if ( !verifyEmail ) {
      setErrMsg( 'Invalid email' );
      return;
    }
    try {
      const res = await fetch( CONTACT_URL, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( formData )
    });

    console.log( res.status );
    setSuccess( true );
    // Clear the form
    // setName( '' ) // Left firstname out of clearing, is used on the success page in the thank you message.
    setEmail( '' )
    setPhone( '' )
    setMessage( '' )

  } catch ( err ) {
    if ( !err?.res ) {
      setErrMsg( 'No server response' );
    } else if ( err.res ) {
      setErrMsg( 'The email entered is already registered' );
    } else {
      setErrMsg( `Registration Failed. Error: ${ err }` );
    }
  }};
   
 


  return (
    <>
      { success ? (
        <ExContainer>
          <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTrans} style={pageStyle}>
            <Registered>
              <h1>Message successfully sent!</h1>
              <hr />
              <p>
                Thank you for your message. <br />
                Our team will be in touch asap to assist.
              </p>
              <p>
                In the meantime, head over to our early registration page.
                <br />
                <br />
                People that register early will get pre-launch access to AirGuard to test it out.
              </p>
              <NavBtnLink className='NavBtnLink' to='/SignUp' >Early Registration</NavBtnLink>
            </Registered>
          </motion.div>
        </ExContainer>
      ) : (
        <ExContainer>
          <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTrans} style={pageStyle}>

              <Section>

                <h1>Contact Us</h1>
                
                <Form onSubmit={ handleSubmit }>
                  <label>
                    Name:
                    <input 
                    type='text' 
                    placeholder='Enter Full Name'
                    id='fullname'
                    autoComplete='off'
                    onChange={( e ) => setName( e.target.value )}
                    value={name}
                    
                    />
                  </label>
                  <br />
                  <label>
                    Phone:
                    <input 
                    type='text' 
                    placeholder='Enter Contact Number' 
                    id='phone'
                    autoComplete='off'
                    onChange={( e ) => setPhone( e.target.value )}
                    value={phone}
                    />
                  </label>
                  <br />
                  <label>Email:
                    <input 
                    type='text' 
                    placeholder='Enter Contact Email' 
                    id='email'
                    autoComplete='off'
                    onChange={( e ) => setEmail( e.target.value )}
                    value={email}
                    
                    />
                  </label>
                  <br />
                  <label>
                    Message:
                    <textarea 
                    rows={4}
                    placeholder='Type your message here' 
                    id='message'
                    autoComplete='off'
                    onChange={( e ) => setMessage( e.target.value )}
                    
                    />
                  </label>
                  <br />
                  <button disabled={ !validEmail ? true : false} >Send Message</button>
                </Form>
              </Section>
              <Section2>
               
                <h2>Developers Information</h2>

                <p>
                  Bradley Laskey
                </p>
                <p>
                  Phone: 0413 801 668
                </p>
                <p>
                  Email: bradley@b-laskey.com
                </p>
                <p>
                  <a href='https://www.linkedin.com/in/bradley-l-13aa96133/' target='_blank' data-alt='Bradley Laskey LinkedIn Profile'></a>{' '}
                  <a href='https://github.com/BraddlesUnravels' target='_blank' data-alt='Bradley Laskey GitHub Profile'></a>
                </p>

              </Section2>

          </motion.div>
        </ExContainer>
      )}
    </>
  );
}

export default Contact;