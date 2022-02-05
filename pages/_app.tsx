import { ContainerStyled } from '@components/Container/styles';
import Flex from '@components/Flex';
import Sidebar from '@components/Sidebar';
import { GlobalStyles, lightTheme } from '@themes/theme.config';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ROUTES } from 'src/routes/routes';
import Content from 'src/screens/HomePage/components/Content';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <ContainerStyled>
          <Flex>
            <Sidebar />
            <Content>
              <Component {...pageProps} />
            </Content>
          </Flex>
        </ContainerStyled>
    </ThemeProvider>
  )
}

export default MyApp
