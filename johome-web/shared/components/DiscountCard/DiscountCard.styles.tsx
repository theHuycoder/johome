import styled, { css } from "styled-components";
import { Box, Typography } from "@mui/material";

const card = {
 height: { default: 410, expanded: 410 },
 width: { default: 289, expanded: 312, landscape: 544 },
};

export const CardWrapper = styled(Box)`
 ${({ theme: { breakpoints, spacing }, active, fadecolor, image }: any) => css`
  width: ${active ? card.width.expanded : card.width.default}px;
  height: ${active ? card.height.expanded : card.height.default}px;
  background: ${fadecolor};
  transition: height 0.25s, width 0.25s;
  position: relative;
  border-radius: ${spacing(3.125)};
  overflow: hidden;
  background-image: url(${(!active && image) || ""});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: grab;

  ${breakpoints.up("lg")} {
   transition: width 0.2s;
   width: ${active ? card.width.landscape : card.width.default}px;
   height: ${card.height.default}px;
  }
  .content {
   padding: 0;
  }
  flex-shrink: 0;
 `};
`;

export const Card = styled(Box)`
 ${({ theme: { breakpoints, spacing }, expanded, image }: any) => css`
  display: flex;
  gap: ${spacing(2.25)};
  height: 100%;
 `}
`;

export const CardContent = styled(Box)`
 ${({ theme: { spacing }, expanded }: any) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 0;
  width: ${expanded ? `calc(100% - ${spacing(27.5)} - 20px)})` : "100%"};
  align-items: ${expanded ? "flex-start" : "center"};
  text-align: ${expanded ? "left" : "center"};
  justify-content: space-between;
  height: 100%;
 `}
`;

export const Title = styled(Typography)`
 ${({ theme: { typography } }: any) => css`
  ${{ ...typography.h7 }};
  font-weight: 700;
 `}
`;

export const Subtitle = styled(Typography)`
 ${({ theme: { typography, palette } }: any) => css`
  ${{ ...typography.caption }};
  color: ${palette.grey[500]};
 `}
`;

export const ExpandedImage = styled(Box)`
 ${({ theme: { breakpoints, spacing } }: any) => css`
  height: ${spacing(43.25)};
  width: ${spacing(27.5)};
  flex-shrink: 0;
  border-radius: ${spacing(2)};
  overflow: hidden;
  position: relative;

  img {
   object-fit: cover;
  }
 `}
`;
