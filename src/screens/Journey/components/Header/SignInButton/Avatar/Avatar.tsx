import React from 'react';

import { Container } from './styles';

export type Props = {
  name: string;
  size?: number;
  color?: string;
}

export const Avatar: React.FC<Props> = ({ name, size }: Props) => {
  const getInitials = (name: string) => {
    let names = name.split(" ");
    let initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  }

  const hashCode = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
       hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  } 

  const intToRGB = (hash: number) => {
    let color = (hash & 0x00FFFFFF).toString(16).toUpperCase();

    return "00000".substring(0, 6 - color.length) + color;
  }

  return (
    <Container color={intToRGB(hashCode(name))} name={name} size={size}>
        {getInitials(name)}
    </Container>
  )
};
