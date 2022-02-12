import React, { useContext, useRef, useState} from 'react';

import { api } from 'src/services/api';
import { FiltersContext } from 'src/FiltersContext';

import { BiSend } from 'react-icons/bi';
import { BsGrid3X3Gap, BsPencil } from 'react-icons/bs';
import { FiPlayCircle, FiCheck } from 'react-icons/fi';
import { IoBedOutline } from 'react-icons/io5';

import { Container } from './styles';
import { COLORS } from '@themes/colors';

export type Props = {
  id: number;
  disabled?: boolean;
  onClick?: () => void;
}

export function Filter({ id, disabled = false }: Props) {
  const {filters, setItems, state, currentFilter} = useContext(FiltersContext);

  const icons = [
    BsGrid3X3Gap, 
    BiSend, 
    FiPlayCircle, 
    BsPencil, 
    IoBedOutline, 
    FiCheck
  ];

  const colors = [
    COLORS.ICON_PINK, 
    COLORS.ICON_KHAKI, 
    COLORS.ICON_GREEN, 
    COLORS.ICON_BLUE, 
    COLORS.ICON_ORANGE, 
    COLORS.ICON_GRAY
  ];

  function handleFilter(id: number) {
    if(!disabled) {
      if(id > 0 && currentFilter.current != id) {
        state.current[currentFilter.current] = false;
        state.current[id] = true;
        currentFilter.current = id;

        api.get(`/journey/${id}`)
        .then(response => {
          setItems!(response.data)
        })
      } else if(id > 0 && currentFilter.current == id) {
        state.current[currentFilter.current] = false;
        state.current[0] = true;
        currentFilter.current = 0;

        api.get('/journey')
        .then(response => {
          setItems!(response.data);
        })
      } else {
        state.current[currentFilter.current] = false;
        state.current[0] = true;
        currentFilter.current = 0;
        
        api.get('/journey')
        .then(response => {
          setItems!(response.data);
        })
      }
    }
  }

  const Icon = icons[id!]

  return (
    <Container 
      onClick={() => handleFilter(id)} 
      className={disabled ? 'disabled' : state.current[id] ? 'active' : 'standby'} 
      color={colors[id]}
    >
      <div>
        <Icon color={colors[id]} />
        <p>{filters![id]?.name}</p>
      </div>
      {!disabled 
        && !!filters![id]?.quantity 
        && <span>{filters![id]?.quantity}</span>
      }
    </Container>
  );
};
