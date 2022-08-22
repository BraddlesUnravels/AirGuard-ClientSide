import React from 'react';
import styled from 'styled-components';
import backImage from '../../Components/img/BackImageDPI300.JPEG';

export const ExContainer = styled.div`
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
  background-image: url(${backImage});
  background-size: cover;
  background-position: center;
`;

export const Logo = styled.img`
    width: 100%;
    height: 100%;
    max-width: 600px;
    /*max-height: 600px;*/
    object-fit: contain;
`