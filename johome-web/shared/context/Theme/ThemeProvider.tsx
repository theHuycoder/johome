import React, { PropsWithChildren } from "react";

/* Importing the font Mulish from the font source. */
import "@fontsource/mulish/200.css";
import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/600.css";
import "@fontsource/mulish/700.css";
import "@fontsource/mulish/800.css";

/* Importing the font Oswald from the font source. */
import "@fontsource/oswald/200.css";
import "@fontsource/oswald/300.css";
import "@fontsource/oswald/400.css";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/600.css";
import "@fontsource/oswald/700.css";

import theme from "@/styles/theme.default";

import {
 StyledEngineProvider,
 ThemeProvider as MuiThemProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyles from "@/styles/global.styles";

const ThemeProvider = ({ children }: PropsWithChildren) => {
 return (
  <StyledEngineProvider injectFirst>
   <StyledThemeProvider theme={theme}>
    <MuiThemProvider theme={theme}>
     <CssBaseline />
     <GlobalStyles />
     {children}
    </MuiThemProvider>
   </StyledThemeProvider>
  </StyledEngineProvider>
 );
};

export default ThemeProvider;
