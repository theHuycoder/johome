import styled, { css } from "styled-components";

import { Box, Typography } from "@mui/material";
import QuickSearch from "../QuickSearch";

export const StyledHeader = styled(Box)`
 ${({ theme: { spacing } }) => css`
  margin-top: ${spacing(4)};
 `}
`;

export const StyledHeaderContainer = styled(Box)`
 ${({ theme: { spacing } }) => css`
 max-width: 1168px;
 margin: auto;
 padding-top: ${spacing(14.75)}};
 padding-left: ${spacing(3)};
 padding-right: ${spacing(3)};
 border-radius: ${spacing(3)};
 position: relative;
 `}
`;

export const Headline = styled(Typography)`
 ${({ theme: { typography, palette } }) => css`
  ${{ ...typography["caption"] }}
  font-weight: 700;
  color: ${palette.primary.main};
 `}
`;

export const HeadlineDivider = styled(Box)`
 ${({ theme: { palette } }) => css`
  width: 12px;
  padding-top: 2px;
  background-color: ${palette.primary.main};
 `}
`;

export const HeaderTitle = styled(Typography)`
 ${({ theme: { typography, palette, spacing } }) => css`
  ${{ ...typography.h2 }}
  font-weight: 800;
  line-height: 77px;
  /* max-width: 50%; */
  margin-bottom: ${spacing(2)};
  color: ${palette.grey["800"]};
 `}
`;

export const HeaderSubtitle = styled(Typography)`
 ${({ theme: { typography, palette } }) => css`
  ${{ ...typography.subtitle2 }}
  font-weight: 500;
  line-height: 22.5px;
  color: ${palette.grey["600"]};
 `}
`;

export const StyledQuickSearch = styled(QuickSearch)`
 ${({ theme: { spacing } }) => css`
  position: relative;
  min-width: ${spacing(116)};
 `}
`;

export const RoundedImage = styled(Box)`
 ${({ theme: { palette } }) => css`
  border-radius: 50%;
  overflow: hidden;
  background: ${palette.common.white};
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.25);
  border-color: ${palette.common.white};
  border-style: solid;

  img {
   object-fit: cover;
  }
 `}
`;
