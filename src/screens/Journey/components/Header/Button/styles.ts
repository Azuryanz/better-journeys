import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-left: 20px;
  padding: 8px 10px;
  
  border: none;
  border-radius: 5px;

  font-size: 12px;
  font-weight: bold;
  color: ${ COLORS.WHITE};
  
  background-image: linear-gradient(to right, #117EFF, #117EFF);
  
  cursor: pointer;

  position: relative;
  z-index: 0;

  &:before {
    content: '';    
    
    display: block;
    
    width: 100%;
    height: 100%;

    border-radius: inherit;

    background-image: linear-gradient(to right, #00E1FF, #117EFF);
    
    opacity: 0;

    position: absolute;
    top: 0; 
    left: 0;
    z-index: -1;

    transition: opacity 0.3s;
  }

  &:hover {
    &:before {
      opacity: 1;
    }
  }

  svg {
    margin-right: 10px;
    
    font-weight: bold;
    color: ${ COLORS.WHITE};
  }

`;