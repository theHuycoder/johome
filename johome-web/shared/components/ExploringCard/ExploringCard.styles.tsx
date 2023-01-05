import { Box } from "@mui/material"
import styled, { css } from "styled-components"

export const CardWrapper = styled(Box)`
 ${({ theme: { breakpoints, spacing, palette } }: any) => css`
  filter: drop-shadow(0px 20px 25px rgba(0, 0, 0, 0.1))
   drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.04));
  border-radius: ${spacing(2)};
  width: ${spacing(32)};
  min-height: ${spacing(48.75)};
  overflow: hidden;
  background-color: ${palette.common.white};
 `}
`

export const ImageWrapper = styled(Box)`
 ${({ theme: { spacing } }: any) => css`
  width: 100%;
  height: ${spacing(28.5)};
  position: relative;
 `}
`

export const ContentWrapper = styled(Box)`
 ${({ theme: { spacing } }: any) => css`
  padding-bottom: ${spacing(2)};
	border-bottom: 1px solid #E5E7EB;
	
 `}
`
export const Title = styled(Box)`
 //styleName: Heading/Heading7/Semibold 18px;
 font-family: "Mulish";
 font-size: 18px;
 font-weight: 700;
 line-height: 28px;
 letter-spacing: 0em;
 text-align: left;
 color: #1f2937;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
`

export const Location = styled(Box)`
 //styleName: Caption/Caption1/Regular13px;
 font-family: "Mulish;"
 font-size: 13px;
 font-weight: 400;
 line-height: 18px;
 letter-spacing: 0.4000000059604645px;
 text-align: left;
 color: #6b7280;
`
export const Price = styled(Box)`
 font-family: "Mulish";
 font-size: 18px;
 font-weight: 700;
 line-height: 28px;
 letter-spacing: 0em;
 text-align: left;
 
`
