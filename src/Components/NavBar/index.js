import React from 'react';
import logo from '../../Components/img/AirGuard_Logo.png';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Logo
} from './NavBarElements';

const Navbar = () => {
  
  return (
    <>
        <Nav>
            <NavLink to="/">
                <Logo src={logo} />
            </NavLink>
                <Bars />
            <NavMenu>
                <NavLink to='/About' >
                    About
                </NavLink>
                <NavLink to='/Monitors' >
                    Air Monitors
                </NavLink>
                <NavLink to='/Contact' >
                    Contact Us
                </NavLink>
                <NavLink to='/SignUp' >
                    Sign Up
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/SignIn'>Sign in</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar