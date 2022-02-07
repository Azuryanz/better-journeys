import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    BACKGROUND: string;
    FOREGROUND: string;
    PRIMARY: string;
    SECONDARY: string;
    NEUTRAL: string;
    TEXT: string;
    GRAY: string;
  }
}
