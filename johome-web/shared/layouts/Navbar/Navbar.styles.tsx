import styled, { css } from "styled-components";
import { Box } from "@mui/material";

export const StyledNavbar = styled(({ isScrolled, ...props }) => (
 <Box {...props} />
))`
 ${({ theme, isScrolled }) => css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${theme.spacing(3)} 0;
  transition: all 200ms ease-in-out;

  background-color: ${isScrolled ? theme.palette.common.white : "transparent"};

  box-shadow: ${isScrolled
   ? "0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)"
   : "none"};
 `}
`;
