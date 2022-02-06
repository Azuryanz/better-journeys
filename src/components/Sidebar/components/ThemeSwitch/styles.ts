import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 30px;

  margin: 10px 0;
  
  span {
    margin: 25px 0 25px -5px;
    transform: rotate(90deg);
  }

  .modeOff {
    color: ${COLORS.QUATERNARY};
    transition: color 0.3s;
  }

  .modeOn {
    color: ${COLORS.PRIMARY};
    transition: color 0.3s;
  }
`;