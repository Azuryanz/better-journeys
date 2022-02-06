import styled from 'styled-components';

import { COLORS } from '@themes/colors';

export const Container = styled.div`
  /* Definição do container básico */
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;

  width: 100%;

  margin-right: 20px;
  margin-bottom: 10px;

  cursor: pointer;

  /* Display do ícone e nome */
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;

    svg {
      margin-right: 10px;
    }
  }

  /* Display das quantidades */
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: 13px;

    border: none;
    border-radius: 100%;

    width: 25px;
    height: 25px;
  }

  /* Controle das cores quando o filtro não está selecionado */
  &.standby {
    /* nome do filtro */
    p {
      color: ${props => props.theme.TEXT};
      font-weight: 400;

      transition: all 0.3s;
    }

    /* quantidade de elementos do filtro */
    span {
      font-weight: 700;
      
      color: ${props => props.theme.TEXT};
      background-color: ${props => props.theme.FOREGROUND};
      
      filter: brightness(0.90);

      transition: all 0.3s;
    }

    /* hover no filtro */
    &:hover {
      p {
        color: ${COLORS.PRIMARY};
      }

      span {
        filter: brightness(0.93);
      }
    }
  }

  /* coontrole das cores com o filtro ativo */
  &.active {
    p {
      color: ${COLORS.PRIMARY};
      font-weight: 700;

      transition: all 0.3s;
    }

    span {
      color: ${COLORS.WHITE};
      background: ${COLORS.PRIMARY};

      filter: brightness(1);

      transition: all 0.3s;
    }
  }
`;