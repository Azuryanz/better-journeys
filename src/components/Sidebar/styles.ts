import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 260px;
  height: 100vh;
  background-color: ${COLORS.TERTIARY};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
