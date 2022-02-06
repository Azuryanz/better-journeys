import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  /* height: 50px; */

  padding: 10px 20px;

  .left, .right {
    display: flex;
    align-items: center;
  }
`;