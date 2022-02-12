import React, { useEffect, useState } from 'react';

import { signOut, useSession } from 'next-auth/react';
import ReactTooltip from 'react-tooltip';

import { useTheme } from 'styled-components';
import { Container, Wrapper } from './styles';

export type Props = {
  name?: string;
  active?: boolean;
  icon?: React.ComponentProps<any>;
};

export const LogoutButton = ({ icon, name }: Props) => {
  const [isMounted,setIsMounted] = useState(false); 
  const { data:session } = useSession();
  const theme = useTheme();

  useEffect(() => {
    setIsMounted(true);
  },[]);
 
  return session 
    ? (
      <Container data-tip data-for={name} onClick={() => signOut({callbackUrl: "/"})} >
        <Wrapper>
          {icon}
        </Wrapper>
        { isMounted &&
          <ReactTooltip 
            id={name} 
            type="light" 
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
    )
    : (
      <Container data-tip data-for={name} className="disabled">
        <Wrapper>
          {icon}
        </Wrapper>
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
    )
};
