// import original module declarations
import 'styled-components';

// and extend them!
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
