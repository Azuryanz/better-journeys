import React, { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

import ReactTooltip from 'react-tooltip';

import { FaGithub } from 'react-icons/fa'

import { Container, User } from './styles';
import { useTheme } from 'styled-components';
import Avatar from './Avatar';

export const SignInButton = () => {
  const { data:session } = useSession();
  const [isMounted,setIsMounted] = useState(false); 
  const theme = useTheme();

  useEffect(() => {
    setIsMounted(true);
  },[]);

  return session 
    ? (
      <User data-tip data-for={session.user?.name!}>
      <Avatar name={session.user?.name!} size={30}/>
      {isMounted && 
        <ReactTooltip 
          id={session.user?.name!} 
          effect="solid" 
          place="right" 
          className="tooltipCorrections" 
          textColor={theme.TEXT}
          backgroundColor={theme.FOREGROUND}
        >
          <span>{session.user?.name!}</span>
        </ReactTooltip>
    }
      </User>
      ) 
    : (
      <Container onClick={() => signIn('github', { callbackUrl: `${window.location.href}` })}>
        <FaGithub size={20} />
        <p>Sign in with Github</p>
      </Container>
     );
};
