
import { useRef, useState, useEffect } from "react";
import genID from '../../Components/functions/genID';
import { 
  ExContainer,
  Section,
  Registered,
  Form,
  CheckBox
} from './RegistrationElements';
import { NavBtnLink } from '../../Components/NavBar/NavBarElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { pageVariants, pageTrans, pageStyle } from '../../Components/NavBar/Animation';

// Regex below regex's will validate the date entered
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REGISTER_URL = 'http://localhost:3500/register'; // Will belong to AirGuard server side

const Register = () => {
  
  const registrationID = genID( 1000, 9999 );
  const firstNameRef = useRef();
  const errRef = useRef();

  // Form related state
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ suburb, setSuburb ] = useState('');
  const [ postcode, setPostcode ] = useState('');
  const [ keepUpdated, setKeepUpdated ] = useState(false);

  // Functionality related state
  const [ errMsg, setErrMsg ] = useState('');
  const [ validEmail, setValidEmail ] = useState(false);
  const [ emailExists, setEmailExists ] = useState(false); // Once functionality operational add shortcircut "||" in button and set in code.
  const [ success, setSuccess ] = useState(false);

  useEffect(() => {

    setValidEmail(EMAIL_REGEX.test(email));

  }, [ email ])


  const handleSubmit = async ( e ) => {

    const formData = {
      id: registrationID,
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Phone: phone,
      Suburb: suburb,
      Postcode: postcode,
      KeepUpdated: keepUpdated
    };

    e.preventDefault();
    const verifyEmail = EMAIL_REGEX.test(email);
    if ( !verifyEmail ) {
      setErrMsg( 'Invalid email' );
      return;
    }
    try {
      const res = await fetch( REGISTER_URL, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( formData )
      });

      console.log( res.status );
      setSuccess( true );
      // Clear the form
      // setFirstName( '' ) // Left firstname out of clearing, is used on the success page in the thank you message.
      setLastName( '' )
      setEmail( '' )
      setPhone( '' )
      setSuburb( '' )
      setPostcode( '' )

    } catch ( err ) {
      if ( !err?.res ) {
        setErrMsg( 'No server response' );
      } else if ( err.res ) {
        setErrMsg( 'The email entered is already registered' )
      } else {
        setErrMsg( `Registration Failed. Error: ${ err }` )
      }

    }
  }
  
  return (
    <>
      { success ? (
        <ExContainer>
          <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTrans} style={pageStyle}>
            <Registered>

              <h1>Your registration has been successful!</h1>

              <p>
                Thank you for your early registion { firstName }. The support is really appreciated. 
              </p>
              <p>
                As an early registration you'll recieve access to AirGuard's services prior to launch.
                <br />
                <br />
                We will send you an email with generic login details when we reach the pre-release stage.
                <br />
                <br />
                If you have any questions, feel free to contact us. 
              </p>
              <NavBtnLink className='NavBtnLink' to='/Contact' >Contact Us</NavBtnLink>
            </Registered>
          </motion.div>
        </ExContainer>
      ) : (
        <ExContainer>
          <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTrans} style={pageStyle}>
            <Section>

              <h1>Pre-Launch Early Registration</h1>
              
              <p>
                By registering early you'll get access to AirGuard's services 4 weeks prior to launch!
                <br />
                <br />
                Want to be kept in the loop with our progress updates hit the "Keep me Updated" checkbox at the bottom.
                <br />
                <br />
                Alright, lets get started, we just need some basic details filled out in the form below.
              </p>

              <Form onSubmit={ handleSubmit } >
                <label>
                  First Name:
                  <input
                    type='text'
                    placeholder='Enter you first name'
                    id='firstname'
                    autoComplete='off'
                    onChange={( e ) => setFirstName( e.target.value )}
                    value={firstName}
                    required='true'
                  />
                </label>
                <br />
                <label>
                  Last Name:
                  <input
                    type='text'
                    placeholder='Enter your last name'
                    id='lastname'
                    autoComplete='off'
                    onChange={( e ) => setLastName( e.target.value )}
                    value={lastName}
                    required='true'
                  />
                </label>
                <br />
                <label>
                  Email:
                  <input
                    type='text'
                    placeholder='Enter your email'
                    id='email'
                    autoComplete='off'
                    onChange={( e ) => setEmail( e.target.value )}
                    value={email}
                    required='true'
                  />
                </label>
                <br />
                <label>
                  Contact Number:
                  <input
                    type='number'
                    placeholder='Enter your Mobile Number'
                    id='phone'
                    autoComplete='off'
                    onChange={( e ) => setPhone( e.target.value )}
                    value={phone}
                  />
                </label>
                <br />
                <label>
                  Residential Suburb:
                  <input
                    type='text'
                    placeholder='Enter your suburb'
                    id='suburb'
                    autoComplete='off'
                    onChange={( e ) => setSuburb( e.target.value )}
                    value={suburb}
                    required='true'
                  />
                </label>
                <br />
                <label>
                  Postcode:
                  <input
                    type='text'
                    placeholder='Enter your postcode'
                    id='postcode'
                    autoComplete='off'
                    onChange={( e ) => setPostcode( e.target.value )} 
                    value={postcode}
                    required='true'
                  />
                </label>  
                <br />
                <label>
                  Keep me in the loop
                  <CheckBox
                    type='checkbox'
                    className="checkBox"
                    id='keepUpdated'
                    autoComplete='off'
                    onChange={( e ) => setKeepUpdated( e.target.value )} /* May need to revisit this part, dont think setKeepUpdated will update this way */
                  />
                </label>
                <button disabled={ !validEmail ? true : false} >Register</button>
              </Form>
            </Section>
          </motion.div>
        </ExContainer>
      )}

    </>
  );
}

export default Register;

// Things do do here:
// - Complete data valaidation sets includingthe keep me updated check box.
//   Only active validation is the email REGEX.
// - Set email state to check if email already exists
// - Set all err messages to be visable to the user