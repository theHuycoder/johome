import { createGlobalStyle, css } from "styled-components";

const globalStyles = createGlobalStyle<any>`
${({ theme: { typography, palette } }) =>
 css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
   margin: 0;
   padding: 0;
   border: 0;
   font-size: 100%;
   font: inherit;
   vertical-align: baseline;
  }
  html {
   min-height: 100%;
  }
  html,
  body {
   font-family: ${typography.fontFamily};
   font-style: normal;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   background-color: ${palette.background.default};
   color: ${palette.text.primary};
   box-sizing: border-box;
   margin: 0;
  }
  *,
  *::before,
  *::after {
   box-sizing: inherit;
   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
   -webkit-tap-highlight-color: transparent;
   font-family: inherit;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
   display: block;
  }
  body {
   line-height: 1;
  }
  a {
   text-decoration: none;
   color: ${palette.text.link};
  }
  ol,
  ul {
   list-style: none;
  }
  blockquote,
  q {
   quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
   content: "";
   content: none;
  }
  table {
   border-collapse: collapse;
   border-spacing: 0;
  }
  del {
   text-decoration: none;
  }
  input,
  textarea,
  button,
  select {
   outline: none;
   background: none;
   border: none;
  }
  input[type="search"]::-webkit-search-decoration {
   -webkit-appearance: none;
  }
  small {
   font-size: ${typography.caption.fontSize};
  }
  strong,
  b {
   font-weight: bolder;
  }

  h3 {
   ${{ ...typography["h3"] }};
  }
  h5 {
   ${{ ...typography["h5"] }};
  }
  h6 {
   ${{ ...typography["h6"] }};
  }
 `};

`;

export default globalStyles;
