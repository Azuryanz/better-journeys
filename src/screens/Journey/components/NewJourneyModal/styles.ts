import { COLORS } from "@themes/colors";
import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  padding: 20px 40px;

  h3 {
    padding: 10px 5px;
    margin-bottom: 20px;

    border-bottom: 1px solid ${COLORS.GRAY};
  }

  input {
    margin-top: 5px;
    margin-bottom: 10px;
    padding: 10px;

    font-size: 14px;

    border-radius: 5px;
  }

  p {
    font-size: 14px;
    
    color: ${props => props.theme.GRAY};
  }

  span {
    display:  flex;
    justify-content: center;
    align-items: center;

    margin-top: 20px;

    button {
      margin-right: 30px;
      color: ${COLORS.PRIMARY}
    }

    button, div {
      font-size: 16px;
      
      padding: 5px 8px;

      border: none;
      border-radius: 5px;

      background-color: transparent;

      cursor: pointer;

      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: ${props => props.theme.NEUTRAL};
      }
    }
  }
`;