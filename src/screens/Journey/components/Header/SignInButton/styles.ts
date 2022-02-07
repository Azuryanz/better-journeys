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
  }

  svg {
    margin-right: 10px;
  }
`;

export const User = styled.div`
  .tooltipCorrections {
    font-size: 14px;
    opacity: 1 !important
  }
`;