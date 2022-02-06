import { COLORS } from '@themes/colors';
import React, { useContext, useEffect, useState } from 'react';
import { BiSend } from 'react-icons/bi';
import { BsGrid3X3Gap, BsPencil } from 'react-icons/bs';
import { FiPlayCircle, FiCheck } from 'react-icons/fi';
import { IoBedOutline } from 'react-icons/io5';
import { FiltersContext } from 'src/FiltersContext';

import { Container } from './styles';

export type Props = {
  id: number;
  disabled?: boolean;
  onClick?: () => void;
}

export const Filter: React.FC<Props> = ({ id, disabled=false }: Props) => {
  const filters = useContext(FiltersContext);
  const [state, setState] = useState(false);
  const [isMounted,setIsMounted] = useState(false); 

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 10);
  },[]);

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

  const Icon = icons[id!]

  return (
    <Container onClick={() => setState(!state)} className={disabled ? 'disabled' : state ? 'active' : 'standby'} color={colors[id]}>
      <div>
        <Icon color={colors[id]} />
        {isMounted && <p>{filters[id].name}</p>}
      </div>
      {isMounted && !!filters[id].quantity && <span>{filters[id].quantity}</span>}
    </Container>
  );
};
