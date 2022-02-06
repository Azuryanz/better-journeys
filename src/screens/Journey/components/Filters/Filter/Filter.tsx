import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import { Container } from './styles';

export type Props = {
  id?: number;
  name?: string;
  quantity?: number;
  icon?: React.ComponentProps<any>;
  onClick?: () => void;
}

export const Filter: React.FC<Props> = ({ name, quantity, icon }: Props) => {
  const [state, setState] = useState(false);

  return (
    <Container onClick={() => setState(!state)} className={state ? 'active' : 'standby'}>
      <div>
        {icon}
        <p>{name}</p>
      </div>
      {!!quantity && <span>{quantity}</span>}
    </Container>
  );
};
