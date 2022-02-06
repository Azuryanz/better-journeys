import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  padding: 10px 20px;

  border: none;
  border-radius: 20px;

  font-weight: bold;

  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
    /* box-shadow: 0 0 10px ${COLORS.NEUTRAL}; */
  }

  svg {
    margin-right: 10px;
  }
`;