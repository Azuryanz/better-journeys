import type { AppProps } from 'next/app';
import { useState } from 'react';
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'styled-components';

import Flex from '@components/Flex';
import Sidebar from '@components/Sidebar';
import { ContainerStyled } from '@components/Container/styles';
import { GlobalStyles, lightTheme, darkTheme } from '@themes/theme.config';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  
  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ContainerStyled>
        <Flex>
          <SessionProvider session={session}>
            <Sidebar onClick={toggleTheme} />
              <Component {...pageProps} />
          </SessionProvider>
        </Flex>
      </ContainerStyled>
    </ThemeProvider>
  )
}

export default MyApp
