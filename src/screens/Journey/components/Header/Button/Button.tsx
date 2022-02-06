import React from 'react';
import { BsPlusLg } from 'react-icons/bs'

import { Container } from './styles';

export const Button: React.FC = () => {
  return (
    <Container>
      <BsPlusLg />
      <p>Nova Jornada</p>
    </Container>
  );
};
