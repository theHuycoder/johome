import { createTheme } from "@mui/material";
const theme = {} as { [key: string]: any };

theme.breakpoints = {
 keys: ["xs", "sm", "md", "lg", "xl"],
 values: {
  xs: 0,
  sm: 360,
  md: 576,
  lg: 888,
  xl: 1200,
 },
};

theme.palette = {
 type: "light",
 common: {
  black: "#000",
  white: "#fff",
 },
 primary: {
  main: "#1BBB83",
  50: "#E3F5ED",
  100: "#BBE6D2",
  200: "#8DD6B5",
  300: "#57C798",
  400: "#1BBB83",
  500: "#00AF6D",
  600: "#00A062",
  700: "#008D55",
  800: "#007C49",
  900: "#005D33",
 },
 secondary: {
  main: "#FF8244",
  50: "#FBEBE8",
  100: "#FFD1BE",
  200: "#FFB493",
  300: "#FF9867",
  400: "#FF8244",
  500: "#FF6F20",
  600: "#F4691C",
  700: "#E66117",
  800: "#D85A14",
  900: "#C04D0C",
 },
 tertiary: {
  main: "#ff4081",
  light: "rgb(51, 51, 51)",
  dark: "rgb(0, 0, 0)",
  contrastText: "#000",
 },
 error: {
  light: "#e57373",
  main: "#CB2D31",
  dark: "#d32f2f",
  contrastText: "#fff",
 },
 warning: {
  main: "#FEB50E",
 },
 grey: {
  50: "#F9FAFB",
  100: "#F3F4F6",
  200: "#E5E7EB",
  300: "#D1D5DB",
  400: "#9CA3AF",
  500: "#6B7280",
  600: "#4B5563",
  700: "#374151",
  800: "#1F2937",
  900: "#111827",
  A100: "#d5d5d5",
  A200: "#aaaaaa",
  A400: "#303030",
  A700: "#616161",
 },
 overlay: {
  light: "rgba(23, 28, 33, 0.2)",
  base: "rgba(23, 28, 33, 0.4)",
  dark: "rgba(23, 28, 33, 0.6)",
 },
 contrastThreshold: 3,
 tonalOffset: 0.2,
 text: {
  primary: "rgba(0, 0, 0, 0.87)",
  secondary: "rgba(0, 0, 0, 0.54)",
  disabled: "rgba(0, 0, 0, 0.38)",
  hint: "rgba(0, 0, 0, 0.38)",
  high: "#ffffff",
  medium: "rgba(255, 255, 255, 0.7)",
  low: "rgba(255, 255, 255, 0.6)",
 },
 divider: "rgba(0, 0, 0, 0.12)",
 background: {
  paper: "#fff",
  default: "#fafafa",
  level1: "#fff",
  level2: "#000",
 },
 action: {
  active: "rgba(0, 0, 0, 0.54)",
  hover: "rgba(0, 0, 0, 0.08)",
  hoverOpacity: 0.08,
  selected: "rgba(0, 0, 0, 0.14)",
  disabled: "rgba(0, 0, 0, 0.26)",
  disabledBackground: "rgba(0, 0, 0, 0.12)",
 },
 success: {
  main: "#07A953",
 },
};

theme.fonts = {
 primary: '"Mulish", "Roboto", "Helvetica", "Arial", sans-serif',
 secondary: '"Mulish", "Roboto", "Helvetica", "Arial", sans-serif',
 tertiary: '"Mulish" ,"Roboto", "Helvetica", "Arial", sans-serif',
};

theme.typography = {
 htmlFontSize: 16,
 fontFamily: '"Mulish" ,"Roboto", "Helvetica", "Arial", sans-serif',
 fontSize: 16,
 fontWeightExtraLight: 200,
 fontWeightLight: 300,
 fontWeightRegular: 400,
 fontWeightMedium: 500,
 fontWeightSemibold: 600,
 fontWeightBold: 700,
 fontWeightExtraBold: 800,
 h1: {
  fontFamily: '"Mulish","Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 300,
  fontSize: "6.375rem",
  lineHeight: 1,
  letterSpacing: "-0.09375rem",
 },
 h2: {
  fontFamily: '"Mulish","Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 300,
  fontSize: "4rem",
  lineHeight: 1,
  letterSpacing: "-0.03125rem",
 },
 h3: {
  fontFamily: '"Mulish","Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 400,
  fontSize: "3.1875rem",
  lineHeight: 1.04,
  letterSpacing: "0em",
 },
 h4: {
  fontFamily: '"Mulish","Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 400,
  fontSize: "2.25rem",
  lineHeight: 1.17,
  letterSpacing: "0.015625rem",
 },
 h5: {
  fontFamily: '"Mulish","Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 400,
  fontSize: "1.5625rem",
  lineHeight: 1.33,
  letterSpacing: "0em",
 },
 h6: {
  fontFamily: '"Mulish","Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 500,
  fontSize: "1.3125rem",
  lineHeight: 1.6,
  letterSpacing: "0.009375em",
 },
 subtitle1: {
  fontFamily: '"Mulish","Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 400,
  fontSize: "1.0625rem",
  lineHeight: 1.75,
  letterSpacing: "0.009375em",
 },
 subtitle2: {
  fontFamily: '"Mulish","Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 500,
  fontSize: "0.9375rem",
  lineHeight: 1.57,
  letterSpacing: "0.00625em",
 },
 body1: {
  fontFamily: '"Mulish","Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 400,
  fontSize: "1.0625rem",
  lineHeight: 1.5,
  letterSpacing: "0.03125rem",
 },
 body2: {
  fontFamily: '"Mulish","Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 400,
  fontSize: "0.9375rem",
  lineHeight: 1.43,
  letterSpacing: "0.015625rem",
 },
 button: {
  fontFamily: '"Mulish","Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 500,
  fontSize: "0.9375rem",
  lineHeight: 1.75,
  letterSpacing: "0.078125em",
  textTransform: "uppercase",
 },
 caption: {
  fontFamily: '"Mulish","Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 400,
  fontSize: "0.8125rem",
  lineHeight: 1.66,
  letterSpacing: "0.025em",
 },
 overline: {
  fontFamily: '"Mulish","Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 400,
  fontSize: "0.6875rem",
  lineHeight: 2.66,
  letterSpacing: "0.09375em",
  textTransform: "uppercase",
 },
};

theme.container = {};

theme.shape = {
 borderRadius: 4,
};

theme.zIndex = {
 mobileStepper: 1000,
 speedDial: 1050,
 appBar: 1100,
 drawer: 1200,
 modal: 1300,
 snackbar: 1400,
 tooltip: 1500,
};

export default createTheme(theme);
