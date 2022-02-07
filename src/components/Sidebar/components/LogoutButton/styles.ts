import { COLORS } from '@themes/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  padding-top: 10px;
  
  font-size: 20px;
  color: ${COLORS.QUATERNARY};
  
  
  cursor: pointer;
  
  transition: color 0.3s;

  &:hover {
    color: ${COLORS.PRIMARY}
  }

  &.disabled {
    color: ${COLORS.QUATERNARY};
    
    cursor: default;
  }

  .tooltipCorrections {
    font-size: 14px;

    opacity: 1 !important
  }
  
`;

export const Wrapper = styled.div`
  svg {
    margin-bottom: 3px;
  }
`;
