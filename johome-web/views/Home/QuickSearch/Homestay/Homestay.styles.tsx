import React from "react";
import styled, { css } from "styled-components";
import { Box } from "@mui/material";

export const StyledFieldTitle = styled(Box)`
 ${({ theme: { typography } }) => css`
  ${{ ...typography["h5"] }}
  font-weight: 800;
 `}
`;
