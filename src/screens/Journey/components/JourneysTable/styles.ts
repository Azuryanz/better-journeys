import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
  height: 95%;

  margin-top: -10px;

  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  table {
    width: 100%;

    border-spacing: 0 8px;

    th {
      text-align: left;

      padding: 0 20px 10px 20px;
      
      color: ${props => props.theme.NEUTRAL};

      transition: color 0.3s ease-in-out;
    }

    td {
      padding: 15px 20px;

      background-color: ${props => props.theme.FOREGROUND};

      transition: background-color 0.3s ease-in-out;

      div {
        margin-bottom: 0;
      }
    }

    td:first-child {
      width: 35%;
      
      font-weight: 700;

      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    td:nth-child(2) {
      width: 25%;
    }

    td:nth-child(3) {
      width: 20%;
    }

    td:last-child {
      width: 20%;
      
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    
  }
`;