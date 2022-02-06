import { COLORS } from '@themes/colors';
import styled from 'styled-components';
import { Props } from './Avatar';



export const Container = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  border: none;
  border-radius: 100%;

  width: ${(props) => (props.size ? `${props.size}px` : '45px')};
  height: ${(props) => (props.size ? `${props.size}px` : '45px')};

  font-size: 16px;
  color: ${COLORS.WHITE};
  background-color: ${(props) => `#${(props.color)}`};
`;