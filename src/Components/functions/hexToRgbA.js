import React from 'react'

// function hexToRgbA (hex, opacity) {
//     let c;
//     if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
//       c = hex.substring(1).split('');
//       if (c.length === 3) {
//         c = [c[0], c[0], c[1], c[1], c[2], c[2]];
//       }
//       c = `0x${c.join('')}`;
//       return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${opacity})`;

//     }
//     throw new Error( console.log( err ));
//   };

const hexToRgbA = (hex, alpha = 1) => {
  try {
    const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  } catch ( err ) {
    console.log(err)
  }
};

export default hexToRgbA;