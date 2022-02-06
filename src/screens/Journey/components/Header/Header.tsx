import React from 'react';
import Button from './Button';
import Logo from './Logo';
import Searchbar from './Searchbar';
import SignInButton from './SignInButton';

import { Container } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <div className="left">
        <SignInButton />
        <Logo />
      </div>
      <div className="right">
        <Searchbar />
        <Button />
      </div>
    </Container>
  );
};
