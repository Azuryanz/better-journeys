import React, { useEffect, useState } from 'react';
import Filter from './Filter';

import { BsGrid3X3Gap, BsPencil } from 'react-icons/bs'
import { BiSend } from 'react-icons/bi'
import { FiPlayCircle, FiCheck } from 'react-icons/fi'
import { IoBedOutline } from 'react-icons/io5'

import { Container } from './styles';
import { COLORS } from '@themes/colors';
import { api } from 'src/services/api';

type FilterProps = {
  id: number;
  name: string;
  quantity: number;
}

export const Filters: React.FC = () => {
  const [filters, setFilters] = useState<any[]>([]);

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

  useEffect(() => {
    api.get('/filter')
      .then(response => {
        const filters = response.data;
        setFilters(filters)
      })
  }, []);

  return (
    <Container>
      {filters.map(({id, name, quantity}: FilterProps) => {
      const Icon = icons[id];

      return (
        <Filter 
          key={id} 
          id={id}
          icon={<Icon color={colors[id]}/>} 
          name={name} 
          quantity={quantity}
        />
      )
    })}
    </Container>
  );
};
