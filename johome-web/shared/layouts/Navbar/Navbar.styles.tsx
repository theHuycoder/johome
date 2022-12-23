import styled, { css } from "styled-components";
import { Box } from "@mui/material";

export const StyledNavbar = styled(Box)`
 ${({ theme }) => css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${theme.spacing(3)} 0;
 `}
`;
