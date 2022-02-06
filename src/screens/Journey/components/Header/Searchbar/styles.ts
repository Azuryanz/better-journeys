import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  
  input {
    width: 300px;
    padding: 8px 10px 8px 30px;
    margin-left: -20px;

    border-radius: 5px;

    &:hover {
      box-shadow: 0 0 10px ${COLORS.NEUTRAL};
    }
  }

  svg {
    margin-right: -5px;
    color: ${COLORS.PRIMARY};
    transform: rotate(90deg);
  }
`;