import React,{ useState, useEffect, useRef } from 'react';
import logo from '../img/AirGuard_Logo.png';
import './Logo.css';


function Logo () {

//   const [dimensions, setDimensions] = React.useState({
//     height: window.innerHeight,
//     width: window.innerWidth
//   })
//   React.useEffect(() => {
//     function handleResize() {
//       setDimensions({
//         height: window.innerHeight,
//         width: window.innerWidth
//       })
// }

//     window.addEventListener('resize', handleResize)
//   })
  return (
    <div className='Logo'>
      <img src={logo} />
    </div>
 );
}

export default Logo;