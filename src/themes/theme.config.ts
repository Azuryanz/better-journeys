import { createGlobalStyle } from 'styled-components';

import { COLORS } from './colors';

export const lightTheme = {
  BACKGROUND: '#FAFBFF',
  FOREGROUND: '#FFFFFF',
  PRIMARY: '#117EFF',
  SECONDARY: '#00E1FF',
  NEUTRAL: '#d6d6d6',
  TEXT: '#3E4157',
  GRAY: '#989CB0',
};

export const darkTheme = {
  BACKGROUND: '#121023',
  FOREGROUND: '#18152D',
  PRIMARY: '#117EFF',
  SECONDARY: '#00E1FF',
  NEUTRAL: '#343247',
  TEXT: '#EEE',
  GRAY: '#7D8997',
};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0px;
    padding: 0px;
  }

  body, button, input {
    margin: 0;
    padding: 0;
    color:${({ theme }) => theme.TEXT};
    font-weight: 400;
    font-style: normal;
    transition: all 0.50s linear;
  }

  option:hover {
    background-color: ${({ theme }) => theme.PRIMARY};
  }

  body{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.BACKGROUND};
    overflow: hidden;
  }

  input, textarea, button {
    font-family: 'Roboto', 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.FOREGROUND};
    border: 1px solid ${({ theme }) => theme.NEUTRAL};
    
    &:focus, &:active {
      outline-style: solid;
      outline-color: ${({ theme }) => theme.PRIMARY};
    }
  }

  ::-webkit-scrollbar {
    width: 12px;               /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: ${COLORS.NEUTRAL};        /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.PRIMARY};    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid  ${
      COLORS.NEUTRAL
    }; /* creates padding around scroll thumb */
  }

  .modalOverlay{
    background: rgba(0, 0, 0, 0.7);

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modalContent {
    width: 100%;
    max-width: 500px;

    background-color: ${({ theme }) => theme.BACKGROUND};

    border: none;
    border-radius: 10px;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .ReactModal__Overlay--after-open{
      opacity: 1;
  }

  .ReactModal__Overlay--before-close{
      opacity: 0;
  }
`;
