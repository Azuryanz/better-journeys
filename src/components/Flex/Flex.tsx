import React from 'react';

import { Container } from './styles';

export type FlexProps = {
  justify?: string;
  align?: string;
  direction?: string;
  width?: string;
  height?: string;
  children: React.ReactNode;
};

export const Flex = ({
  children,
  direction,
  justify,
  align,
  width,
  height
}: FlexProps) => {
  return (
    <Container
      direction={direction}
      justify={justify}
      align={align}
      width={width}
      height={height}
    >
      {children}
    </Container>
  );
};
