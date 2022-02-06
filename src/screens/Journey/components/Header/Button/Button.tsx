import React from 'react';
import { BsPlusLg } from 'react-icons/bs'

import { Container } from './styles';

type Props = {
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <BsPlusLg />
      <p>Nova Jornada</p>
    </Container>
  );
};
