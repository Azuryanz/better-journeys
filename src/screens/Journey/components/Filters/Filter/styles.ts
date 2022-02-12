import styled from 'styled-components';

import { COLORS } from '@themes/colors';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  
  margin-right: 20px;
  margin-bottom: 10px;

  font-size: 14px;

  cursor: pointer;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;

    svg {
      margin-right: 10px;
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 25px;
    height: 25px;
    
    border: none;
    border-radius: 100%;
    
    font-size: 13px;
  }

  &.disabled {
    font-weight: 400;
    color: ${props => props.theme.TEXT};

    cursor: default;

    transition: color 0.3s ease-in-out;
  }

  &.standby {
    p {
      font-weight: 400;
      color: ${props => props.theme.TEXT};

      transition: color 0.3s ease-in-out;
    }

    span {
      font-weight: 700;
      color: ${props => props.theme.TEXT};
      
      background-color: ${props => props.theme.FOREGROUND};
      
      filter: brightness(0.95);

      transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;;
    }

    &:hover {
      p {
        color: ${COLORS.PRIMARY};
      }

      span {
        filter: brightness(0.98);
      }
    }
  }

  &.active {
    p {
      font-weight: 700;
      color: ${COLORS.PRIMARY};

      transition: color 0.3s ease-in-out;
    }

    span {
      color: ${COLORS.WHITE};
      
      background-color: ${COLORS.PRIMARY};

      filter: brightness(1);

      transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
    }
  }
`;