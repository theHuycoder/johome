import styled, { css } from "styled-components"
import { Box, Typography } from "@mui/material"

export const AuthContainer = styled(Box)`
 ${({ theme: { palette, spacing } }) => css`
  height: 100vh;
  padding: ${spacing(8, 0)};
  position: relative;

  img {
   object-fit: cover;
  }
 `}
`

export const ImageWrapper = styled(Box)`
 ${({ theme: { palette, spacing } }) => css`
  position: relative;
  height: 100%;
  max-width: 544px;
  min-height: 802px;
  overflow: hidden;
  border-radius: ${spacing(4)};
  img {
   object-fit: cover;
  }
 `}
`

export const Title = styled(Typography)`
 //styleName: Heading/Heading4/Regular 36px;
 font-family: "Mulish";
 font-size: 36px;
 font-weight: 700;
 line-height: 46px;
 letter-spacing: 0.25px;
 text-align: left;
`

export const Subtitle = styled(Typography)`
 //styleName: Sub/Sub2/Regular 15px;
 font-family: "Mulish";
 font-size: 15px;
 font-weight: 500;
 line-height: 23px;
 letter-spacing: 0.10000000149011612px;
 text-align: left;
`

export const FormWrapper = styled(Box)`
 padding: 48px;
 background: #fff;
 display: flex;
 align-items: center;
 justify-content: center;
 max-width: 448px;
 box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04);
 border-radius: 24px;
`
