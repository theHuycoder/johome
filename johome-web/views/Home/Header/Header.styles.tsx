import styled, {css} from "styled-components"

import {Box, Typography} from "@mui/material"
import QuickSearch from "../QuickSearch"

export const StyledHeader = styled(Box)`
  ${({theme: {spacing}}) => css`
    position: relative;
    min-height: 125vh;
    overflow: hidden;
  `}
  .video-btn {
    .text {
      //styleName: Button/Button1/Medium14px;
      font-family: "Mulish";
      font-size: 14px;
      font-weight: 800;
      line-height: 16px;
      letter-spacing: 0.5px;
      text-align: left;
      color: #1BBB83;
      font-style: italic;
      transform: translateX(100%);
      transition: all 0.4s;
      opacity: 0;

    }

    &:hover {
      .text {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`

export const BackToSearch = styled(Box)`
  font-family: "Mulish";
  font-size: 18px;
  font-weight: 800;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #1BBB83;
  cursor: pointer;
  padding: 8px 16px;
  background-color: #FFF;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 4px;
`

export const StyledHeaderContainer = styled(Box)`
  ${({theme: {spacing}}) => css`
    max-width: 1168px;
    margin: auto;
    padding-top: ${spacing(20)}
  }

  ;
  padding-left: ${spacing(3)}

  ;
  padding-right: ${spacing(3)}

  ;
  border-radius: ${spacing(3)}

  ;
  position: absolute

  ;
  top:

  0
  ;
  left:

  0
  ;
  right:

  0
  ;
  bottom:

  0
  ;
  z-index:

  3
  ;
  /* background: url("/assets/home/he.jpeg") no-repeat center/cover; */
  `}
`

export const Headline = styled(({isVideoMode, ...props}) => (
  <Typography {...props} />
))`
  ${({theme: {typography, palette}, isVideoMode}) => css`
    ${{...typography["caption"]}}
    font-weight: 700;
    color: ${isVideoMode ? palette.common.white : palette.primary.main};
  `}
`

export const HeadlineDivider = styled(({isVideoMode, ...props}) => (
  <Box {...props} />
))`
  ${({theme: {palette}, isVideoMode}) => css`
    width: 12px;
    padding-top: 2px;
    background-color: ${isVideoMode
            ? palette.common.white
            : palette.primary.main};
  `}
`

export const HeaderTitle = styled(({isVideoMode, ...props}) => (
  <Typography {...props} />
))`
  ${({theme: {typography, palette, spacing}, isVideoMode}) => css`
    ${{...typography.h2}}
    font-weight: 800;
    line-height: 77px;
    transition: all 2.5s;
    /* max-width: 50%; */
    margin-bottom: ${spacing(2)};
    color: ${isVideoMode ? palette.common.white : palette.grey["800"]};
  `}
`

export const TitleHighlight = styled.span`
  ${({theme: {palette}}) => css`
    position: relative;

    span {
      position: relative;
      z-index: 10;
      transition: all 0s;
    }

    &::after {
      padding-top: 8px;
      background-color: ${palette.primary.main};
      position: absolute;
      content: "";
      width: 100%;
      bottom: 12px;
      border-radius: 100px;
      left: 0;
      z-index: 0;
    }
  `}
`

export const HeaderSubtitle = styled(Box)`
  ${({theme: {typography, palette, spacing}}) => css`
    ${{...typography.h6}}
    transition: all 2.5s;
    font-weight: 500;
    line-height: 31px;
    display: flex;
    align-items: center;
    gap: ${spacing(2)};
    transition: all 3.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  `}
`

export const StyledQuickSearch = styled(QuickSearch)`
  ${({theme: {spacing}}) => css`
    position: relative;
    min-width: ${spacing(116)};
  `}
`

export const RoundedImage = styled(Box)`
  ${({theme: {palette}}) => css`
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
`

export const MiniAvatar = styled(Box)`
  ${({theme: {spacing, palette, typography}}) => css`
    border-radius: 50%;
    width: ${spacing(4)};
    height: ${spacing(4)};
    padding: 1.5px;
    border: 1.5px solid ${palette.common.white};
    background: ${palette.common.white};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
    ${{...typography.caption}}
    font-weight: 700;
    color: ${palette.common.black};
  `}
`
