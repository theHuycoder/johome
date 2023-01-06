import styled, {css} from "styled-components"
import {Box, Typography} from "@mui/material"

const card = {
  height: {default: 410, expanded: 410},
  width: {default: 256, expanded: 312, landscape: 544},
}

export const CardWrapper = styled(Box)`
  ${({theme: {breakpoints, spacing}, active, fadecolor, image}: any) => css`
    width: ${active ? card.width.expanded : card.width.default}px;
    height: ${active ? card.height.expanded : card.height.default}px;
    background: ${fadecolor};
    transition: height 0.25s, width 0.25s;
    position: relative;
    border-radius: ${spacing(3.125)};
    /* overflow: hidden; */
    background-image: url(${(!active && image) || ""});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: grab;
    box-shadow: ${active
            ? "0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)"
            : ""};

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
`

export const Ribbon = styled(Box)`
  width: 135px;
  height: 135px;
  overflow: hidden;
  position: absolute;
  top: -10px;
  left: -10px;
  z-index: 10;

  &::before,
  &::after {
    position: absolute;
    z-index: 3;
    content: "";
    display: block;
    border: 5px solid #f4691c;
    border-top-color: transparent;
    border-left-color: transparent;
  }

  &::before {
    top: 0;
    right: 0;
  }

  &::after {
    bottom: 0;
    left: 0;
  }

  span {
    //styleName: Sub/Sub3 Bold 15px;
    font-family: "Mulish";
    font-size: 15px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0.10000000149011612px;

    position: absolute;
    display: block;
    width: 225px;
    padding: 15px 0;
    background-color: #f4691c;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #fff;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    text-align: center;
    right: -25px;
    top: 30px;
    transform: rotate(-45deg);
  }
`

export const Card = styled(Box)`
  ${({theme: {breakpoints, spacing}, expanded, image}: any) => css`
    display: flex;
    gap: ${spacing(3)};
    height: 100%;
    overflow: hidden;
  `}
`

export const CardContent = styled(Box)`
  ${({theme: {spacing}, expanded}: any) => css`
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
`

export const Title = styled(Typography)`
  ${({theme: {typography}}: any) => css`
    ${{...typography.h7}};
    font-weight: 700;
  `}
`

export const Action = styled(Typography)`
  //styleName: Button/Button1/Medium14px;
  font-family: "Mulish";
  font-size: 14px;
  font-weight: 800;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: #1bbb83;
`

export const Subtitle = styled(Typography)`
  ${({theme: {typography, palette}}: any) => css`
    ${{...typography.caption}};
    color: ${palette.grey[500]};
  `}
`

export const ExpandedImage = styled(Box)`
  ${({theme: {breakpoints, spacing}}: any) => css`
    height: ${spacing(43.25)};
    width: ${spacing(27.5)};
    flex-shrink: 0;
    border-radius: ${spacing(2)};
    overflow: hidden;
    position: relative;
    z-index: 1;

    img {
      object-fit: cover;
    }
  `}
`

export const PriceBox = styled(Box)`
  /* width: 125px; */
  padding: 12px;
  /* height: 70px; */

  /* Primary/5 */

  border: 2px solid #1bbb83;
  border-radius: 8px;
  background: #fff;
`

export const OriginalPrice = styled(Typography)`
  //styleName: Sub/Sub3 Bold 15px;
  font-family: "Mulish";
  font-size: 15px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0.10000000149011612px;
  color: #9ca3af;
  text-decoration: line-through;
`

export const SalePrice = styled(Typography)`
  //styleName: Heading/Heading5/Medium 25px;
  font-family: "Mulish";
  font-size: 25px;
  font-weight: 800;
  line-height: 35px;
  letter-spacing: 0em;
  color: #ff6f20;
`

export const CountdownText = styled(Typography)`
  //styleName: Heading/Heading6/Medium 21px;
  font-family: "Mulish";
  font-size: 21px;
  font-weight: 500;
  line-height: 31px;
  letter-spacing: 0.15000000596046448px;
  text-align: left;
  color: #cb2d31;
`
