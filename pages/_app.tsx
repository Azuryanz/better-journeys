import type { AppProps } from 'next/app';

import { useState } from 'react';
import Modal from 'react-modal';

import { SessionProvider } from 'next-auth/react'
import { FiltersProvider } from 'src/FiltersContext';
import { ThemeProvider } from 'styled-components';

import Flex from '@components/Flex';
import Sidebar from '@components/Sidebar';
import { ContainerStyled } from '@components/Container/styles';
import { GlobalStyles, lightTheme, darkTheme } from '@themes/theme.config';


Modal.setAppElement('#__next');

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  
  console.log(process.env.GITHUB_CLIENT_ID);
  console.log(process.env.GITHUB_CLIENT_SECRET);
  console.log(process.env.SECRET);
  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ContainerStyled>
        <Flex>
          <SessionProvider session={session}>
            <Sidebar onClick={toggleTheme} />
            <FiltersProvider>
              <Component {...pageProps} />
            </FiltersProvider>
          </SessionProvider>
        </Flex>
      </ContainerStyled>
    </ThemeProvider>
  )
}

export default MyApp
