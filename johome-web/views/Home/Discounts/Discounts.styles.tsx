import styled, { css } from "styled-components";
import { Fab } from "@mui/material";

export const NavButton = styled(Fab)`
 ${({ theme: { palette, spacing } }) => css`
  /* height: 100%; */
  background-color: ${palette.common.white};
  border: solid 1px ${palette.tertiary.light};
  box-shadow: none;
  margin-left: ${spacing(0.5)}px;
  margin-right: ${spacing(0.5)}px;
  &:hover {
   background-color: ${palette.common.white} !important;
  }
  :disabled {
   background-color: ${palette.common.white} !important;
  }
  & svg {
   color: ${palette.text.primary};
  }
 `};
`;
