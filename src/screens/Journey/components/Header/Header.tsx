import React from 'react';
import Button from './Button';
import Logo from './Logo';
import Searchbar from './Searchbar';
import SignInButton from './SignInButton';

import { Container } from './styles';

type Props = {
  onOpenNewJourneyModal: () => void;
}

export function Header({ onOpenNewJourneyModal }: Props) {
  return (
    <Container>
      <div className="left">
        <SignInButton />
        <Logo />
      </div>
      <div className="right">
        <Searchbar />
        <Button onClick={onOpenNewJourneyModal}/>
      </div>
    </Container>
  );
};
