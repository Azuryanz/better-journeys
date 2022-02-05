import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Container, Wrapper } from './styles';

export type Props = {
  active?: boolean;
  router?: string;
};

export const Homepage = ({ router }: Props) => {
  const { pathname } = useRouter();
  return (
    <Container >
      <Link href={router || '/'}>
        <Wrapper active={pathname === router}>
          <div className="baseIcon">D1</div>
          <div className="baseInactive"></div>
        </Wrapper>
      </Link>
    </Container>
  );
};
