import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;
  padding: 20px 18px;

  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, #00E1FF, #117EFF) 1;
  border-left: none;
  border-right: none;
  
  background-color: ${COLORS.TERTIARY};


  div {
    display: flex;
    flex-direction: column;
  }

  .navigation {
    height: 100%;
    justify-content: space-between;
  }

  .separator {
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(to right, #00E1FF, #117EFF) 1;
    border-top: none;
    border-left: none;
    border-right: none;
  }

`;
