import { useRef, useState, useEffect } from "react";
import genID from '../../Components/functions/genID';
import { 
  Section,
  Div
} from './SignUpElements';
import { NavBtnLink } from '../../Components/NavBar/NavBarElements';
import { motion } from 'framer-motion';
import { pageVariants, pageTrans, pageStyle } from '../../Components/NavBar/Animation';
import axios from "axios";

// Regex below regex's will validate the date entered
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = 'http://localhost:3500/register'; // Will belong to AirGuard server side

const SignUp = () => {

  const userID = genID( 1000, 9999 );
  const userRef = useRef();
  const errRef = useRef();

  // User detail related state
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ suburb, setSuburb ] = useState('');
  const [ postcode, setPostcode ] = useState('');
  const [ keepUpdated, setKeepUpdated ] = useState(false);

  // Auth related state
  const [ email, setEmail ] = useState('');
  const [ validEmail, setValidEmail ] = useState(false);
  const [ emailFocus, setEmailFocus ] = useState(false);
  const [ emailExists, setEmailExists ] = useState(false); // Once functionality operational add shortcircut "||" in button and set in code.
  const [ pwd, setPwd ] = useState('');
  const [ validPwd, setValidPwd ] = useState(false);
  const [ pwdFocus, setPwdFocus ] = useState(false);
  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  // Functionality related state
  const [ errMsg, setErrMsg ] = useState('');
  const [ success, setSuccess ] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [ email ])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [ pwd, matchPwd ])

  useEffect(() => {
    setErrMsg('');
  }, [ email, pwd, matchPwd ])

  const handleSubmit = async ( e ) => {

    const formData = {
      id: userID,
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Password: pwd,
      ConfirmPassword: matchPwd,
      Phone: phone,
      Suburb: suburb,
      Postcode: postcode,
      KeepUpdated: keepUpdated
    };

    e.preventDefault();
    // if button enabled with JS hack
    const verifyEmail = EMAIL_REGEX.test(email);
    const verifyPwd = PWD_REGEX.test(pwd);
    if ( !verifyEmail || !verifyPwd ) {
      setErrMsg( 'Invalid Entry' );
      return;
    }
    try {
      const res = await axios.post( REGISTER_URL, 
        JSON.stringify({ formData }),
        {
          headers: { 'Content-Type': 'application/json'},
          withCredentials: true
        }
      );

      console.log( response?.data );
      console.log( response?.accessToken );
      console.log( JSON.stringify( response ));
      setSuccess( true );
      // Clear state and controlled inputs
      // setFirstName( '' ) // Left firstname out of clearing, is used on the success page in the thank you message.
      setLastName( '' )
      setEmail( '' )
      setPwd( '' )
      setMatchPwd( '' )
      setPhone( '' )
      setSuburb( '' )
      setPostcode( '' )

    } catch ( err ) {
      if ( !err?.response ) {
        setErrMsg( 'No server response' );
      } else if ( err.response?.status === 409 ) {
        setErrMsg( 'The email entered is already registered' )
      } else {
        setErrMsg( `Sign Up Failed. Error: ${ err }` )
      }
      errRef.current.focus();
    }
  }
  
  return (
    <>
      { success ? (
        <Section>
          <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTrans} style={pageStyle}>
            <Div>

              <h1>Your registration has been successful!</h1>

              <NavBtnLink className='NavBtnLink' to='/SignIn' >Sign In</NavBtnLink>
            </Div>
          </motion.div>
        </Section>
      ) : (
        <Section>
          <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTrans} style={pageStyle}>
            <Div>

              <h1>Sign Up</h1>
              
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
                    ref={ useRef }
                    autoComplete='off'
                    onChange={( e ) => setEmail( e.target.value )}
                    value={email}
                    required='true'
                    aria-invalid={ validEmail ? "false" : "true" }
                    onFocus={() => setEmailFocus( true )}
                    onBlur={() => setEmailFocus( false )}
                  />
                </label>
                <br />
                <label>
                  Password:
                  <input
                    type='password'
                    id='password'
                    onChange={( e ) => setPwd( e.target.value )}
                    value={pwd}
                    required='true'
                    aria-invalid={ validPwd ? 'false' : 'true' }
                    aria-describedly='pwdnote'
                    onFocus={() => setPwdFocus( true )}
                    onBlur={() => setPwdFocus( false )}
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
                <p id="pwdNote" className={ pwdFocus && !validPwd ? "instructions" : "offscreen" }>
                  8 to 24 Characters.<br />
                  Must include uppercase and lowercase letters, a number and a special Character. <br />
                  Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>
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
            </Div>
          </motion.div>
        </Section>
      )}

    </>
  );
}

export default SignUp;