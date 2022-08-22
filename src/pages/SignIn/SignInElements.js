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