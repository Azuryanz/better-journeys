import { COLORS } from '@themes/colors';
import styled from 'styled-components';

import { Props } from './Item';

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  
  padding: 10px 0;
  
  font-size: 20px;
  color: ${(props) => (props.active ? COLORS.PRIMARY : COLORS.QUATERNARY)};
  
  cursor: pointer;

  transition: color 0.3s;

  &:hover {
    color: ${COLORS.PRIMARY}
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
