import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import ReactTooltip from 'react-tooltip';

import { Container, Wrapper } from './styles';

export type Props = {
  name?: string;
  active?: boolean;
  icon?: React.ComponentProps<any>;
  router?: string;
  theme?: string;
};

export const Item = ({ icon, router, name, theme }: Props) => {
  const { pathname } = useRouter();
  const [isMounted,setIsMounted] = useState(false); 

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
        (theme == 'light'
        ? (<ReactTooltip 
            id={name} 
            type="light" 
            effect="solid" 
            place="right" 
            className="tooltipCorrections" 
            textColor='#3E4157' 
          >
            <span>{name}</span>
          </ReactTooltip>) 
        : (<ReactTooltip 
            id={name} 
            effect="solid" 
            place="right" 
            className="tooltipCorrections" 
            textColor="#eee" 
            backgroundColor="#232136"
          >
            <span>{name}</span>
          </ReactTooltip>))
      }
    </Container>
  );
};
