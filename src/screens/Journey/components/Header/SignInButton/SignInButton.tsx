import React from 'react';
import { FaGithub } from 'react-icons/fa'

import { Container } from './styles';

export const SignInButton: React.FC = () => {
  return (
    <Container>
      <FaGithub size={20} />
      <p>Sign in with Github</p>
    </Container>
  );
};
