import styled, { css } from "styled-components"
import { Fab, Box } from "@mui/material"

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
`

export const GreatDeal = styled(Box)`
 width: 100%;
 height: 460px;
 position: relative;
 background: url("/assets/home/great-deal.jpg") no-repeat center/cover;
 border-radius: 16px;
 margin-top: 32px;
 padding: 42px 76px;
 color: #fff;

 .title {
  font-family: "Mulish";
  font-size: 50px;
  font-weight: 800;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 24px;
 }

 .percent {
  font-family: "Mulish";
  font-size: 167px;
  font-weight: 800;
  line-height: 112px;
  letter-spacing: -1.5px;
  text-align: left;
  margin-bottom: 30px;
 }

 .date {
  //styleName: Heading/Heading6/Medium 21px;
  font-family: "Mulish";
  font-size: 21px;
  font-weight: 500;
  line-height: 31px;
  letter-spacing: 0.15000000596046448px;
  text-align: left;
  margin-bottom: 60px;
 }
`
