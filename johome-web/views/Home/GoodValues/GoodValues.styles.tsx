import styled, { css } from "styled-components";
import { Box, Typography } from "@mui/material";

export const ValueTitle = styled(Typography)`
 ${({ theme: { palette, typography } }) => css`
  ${{ ...typography.h7 }}
  font-weight: 700;
  color: ${palette.common.black};
 `}
`;

export const ValueSubtitle = styled(Typography)`
 ${({ theme: { palette, typography } }) => css`
  ${{ ...typography.caption }}
  color: ${palette.common.black};
 `}
`;
