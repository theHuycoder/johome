import styled, { css } from "styled-components"
import { Box, Typography } from "@mui/material"

export const ImageWrapper = styled(Box)`
 width: 100%;
 height: 410px;
 position: relative;
 top: 0px;
 transition: all 0.3s;

 /* xl */
 border-radius: 16px;
 overflow: hidden;

 & img {
  object-fit: cover;
  position: relative;
  z-index: 1;
 }

 &::before {
  content: "''";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
   180deg,
   rgba(50, 48, 53, 0) 70.42%,
   rgba(0, 5, 23, 0.53) 100%
  );
  z-index: 3;
 }
`

export const ContentWrapper = styled(Box)`
 position: relative;
 transition: all 0.3s;
 opacity: 0;
 bottom: 0;
`

export const CardWrapper = styled(Box)`
 padding-top: 88px;
 width: 256px;
 flex-shrink: 0;
 margin-right: 32px;

 overflow: hidden;

 &:hover {
  ${ImageWrapper} {
   top: -76px;
  }

  ${ContentWrapper} {
   opacity: 1;
   bottom: 50px;
  }
 }
`
