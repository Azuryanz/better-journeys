import React, { useState } from 'react';
import Filter from './Filter';

import { BsGrid3X3Gap, BsPencil } from 'react-icons/bs'
import { BiSend } from 'react-icons/bi'
import { FiPlayCircle, FiCheck } from 'react-icons/fi'
import { IoBedOutline } from 'react-icons/io5'

import { Container } from './styles';
import { COLORS } from '@themes/colors';

export const Filters: React.FC = () => {
  const icons = [BsGrid3X3Gap, BiSend, FiPlayCircle, BsPencil, IoBedOutline, FiCheck];
  const colors = [COLORS.ICON_PINK, COLORS.ICON_KHAKI, COLORS.ICON_GREEN, COLORS.ICON_BLUE, COLORS.ICON_ORANGE, COLORS.ICON_GRAY];
  const names = ["Todas", "Enviando", "Ativadas", "Configurando", "Ociosa", "Concluída"];
  const quantities = [12, 12, 15, 25, 45, 65];

  return (
    <Container>
      {icons.map((icon, index) => {
      const Icon = icon

      return (
        <Filter icon={<Icon color={colors[index]}/>} name={names[index]} quantity={quantities[index]}/>
      )
    })}
    </Container>
  );
};
