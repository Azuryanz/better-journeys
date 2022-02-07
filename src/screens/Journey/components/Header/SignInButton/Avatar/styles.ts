import styled from 'styled-components';
import { COLORS } from '@themes/colors';

import { Props } from './Avatar';

export const Container = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: ${(props) => (props.size ? `${props.size}px` : '45px')};
  height: ${(props) => (props.size ? `${props.size}px` : '45px')};

  border: none;
  border-radius: 100%;

  font-size: 12px;
  color: ${COLORS.WHITE};
  background-color: ${(props) => `#${(props.color)}`};
`;