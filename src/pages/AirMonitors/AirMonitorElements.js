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

export const Section1 = styled.section`
    display: flex;
    width: auto;
    height: auto;
   
    text-align: center;
    color: #000;
`;

export const Card = styled.div`
    text-align: center;
    padding: 10px;
    width: 200px;
    border-radius: 5px;
    padding: 1em;
`;

export const Logo = styled.img`
    width: 200px;
    height: 200px;
    object-fit: contain;
`;

export const Main = styled.main`

`

export const UnOrderedLst = styled.ul`
    list-style-type: none;
    columns: 8;
    -webkit-columns: 8;
    -moz-columns: 8;
    list-style-position: inside;
    align-items: center;
    flex-direction: column;

`;

export const LstItm = styled.li`

    flex-direction: column;
    text-decoration: none;
    text-align: left;
    margin-top: 10px;
    margin-right: auto;
    margin-left: auto;
    padding: 5px;
    box-shadow: 0 15px 25px rgba(129, 124, 124, 0.2);
    border-radius: 5px;
    backdrop-filter: blur(5px);
    color: #000000;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    background-color:${ props => ( 
        props.colorCode === 'Good' ? 'rgba(66, 169, 60, 0.2)'
        : props.colorCode === 'Fair' ? 'rgba(238, 201, 0, 0.3)'
        : props.colorCode === 'Poor' ? 'rgba(228, 116, 0, 0.4)'
        : props.colorCode === 'Very Poor' ? 'rgba(186, 0, 41, 0.5)'
        : 'rgba(255, 255, 255, 0.1)')
    };

    :first-child {
        margin-top: 0;
    }
`;

