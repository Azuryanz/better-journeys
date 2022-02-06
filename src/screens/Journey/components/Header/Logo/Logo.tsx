import React from 'react';
import Image from 'next/image';
import logo from '../../../../../assets/acme2.png'

import { Container } from './styles';

export const Logo: React.FC = () => {
  return (
    <Container>
      <Image src={logo} alt="acme A symbol"/>
      <h4>ACME</h4>
    </Container>
  );
};
