import { COLORS } from '@themes/colors';
import React, { useContext, useEffect, useState } from 'react';
import { BiSend } from 'react-icons/bi';
import { BsGrid3X3Gap, BsPencil } from 'react-icons/bs';
import { FiPlayCircle, FiCheck } from 'react-icons/fi';
import { IoBedOutline } from 'react-icons/io5';
import { FiltersContext } from 'src/FiltersContext';
import { api } from 'src/services/api';

import { Container } from './styles';

export type Props = {
  id: number;
  disabled?: boolean;
  onClick?: () => void;
}

export function Filter({ id, disabled=false }: Props) {
  const {filters, setItems} = useContext(FiltersContext);
  const [state, setState] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(0);

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
    if(id > 0 && currentFilter != id) {
      setCurrentFilter(id)
      api.get(`/journey/${id}`)
      .then(response => {
        setItems!(response.data)
      })
    } else if(id > 0 && currentFilter == id) {
      setCurrentFilter(id)
      api.get('/journey')
      .then(response => {
        setItems!(response.data);
      })
    } else {
      setCurrentFilter(id)
      api.get('/journey')
      .then(response => {
        setItems!(response.data);
      })
    }
    setState(!state)
  }

  const Icon = icons[id!]

  return (
    <Container onClick={() => handleFilter(id)} className={disabled ? 'disabled' : state ? 'active' : 'standby'} color={colors[id]}>
      <div>
        <Icon color={colors[id]} />
        <p>{filters![id]?.name}</p>
      </div>
      {!disabled &&!!filters![id]?.quantity && <span>{filters![id]?.quantity}</span>}
    </Container>
  );
};
