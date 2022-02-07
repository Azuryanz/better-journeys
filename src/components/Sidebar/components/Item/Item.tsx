import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import ReactTooltip from 'react-tooltip';

import { useTheme } from 'styled-components';
import { Container, Wrapper } from './styles';

export type Props = {
  name?: string;
  active?: boolean;
  icon?: React.ComponentProps<any>;
  router?: string;
};

export const Item = ({ icon, router, name }: Props) => {
  const { pathname } = useRouter();
  const [isMounted,setIsMounted] = useState(false); 
  const theme = useTheme();

  useEffect(() => {
    setIsMounted(true);
  },[]);
 
  return (
    <Container active={pathname === router} data-tip data-for={name} >
      <Link href={router || '/'}>
        <Wrapper>
          {icon}
        </Wrapper>
      </Link>
      { isMounted &&
        <ReactTooltip 
          id={name} 
          effect="solid" 
          place="right" 
          className="tooltipCorrections" 
          textColor={theme.TEXT}
          backgroundColor={theme.FOREGROUND}
        >
          <span>{name}</span>
        </ReactTooltip>
      }
    </Container>
  );
};
