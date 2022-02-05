import { ContainerStyled } from '@components/Container/styles';
import Flex from '@components/Flex';
import Sidebar from '@components/Sidebar';
import ThemeSwitch from '@components/Sidebar/components/ThemeSwitch';
import { GlobalStyles, lightTheme, darkTheme } from '@themes/theme.config';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Content from 'src/screens/HomePage/components/Content';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  
  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ContainerStyled>
          <Flex>
            <Sidebar theme={theme} onClick={toggleTheme} />
            <Content>
              <Component {...pageProps} />
            </Content>
          </Flex>
        </ContainerStyled>
    </ThemeProvider>
  )
}

export default MyApp
