import { COLORS } from '@themes/colors';
import styled from 'styled-components';

import { Props } from './Homepage';

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;

  margin: 10px 0 30px 0;

  cursor: pointer;

  transition: color 0.3s;
`;

export const Wrapper = styled.div<Props>`
  display: flex;

  width: 20px;
  height: 20px;

  margin-left: -20px;
  margin-bottom: 10px;

  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  font-weight: 800;
  
  color: ${(props) => (props.active ? COLORS.WHITE : COLORS.QUATERNARY)};
  
  position: relative;

  transition: color 0.3s;

  &:hover {
    color: ${COLORS.WHITE};
  }

  div {
    position: absolute;
  }

  .baseInactive {
    height: 2px;
    width: 30px;

    margin-left: 10px;
    margin-top: 17px;
    
    background: linear-gradient(to right, #00E1FF, #117EFF)
  }
`;