import styled, { css } from "styled-components"
import { Box, Typography } from "@mui/material"

export const ValueTitle = styled(Typography)`
 ${({ theme: { palette, typography } }) => css`
  ${{ ...typography.h5 }}
  font-weight: 800;
  color: ${palette.common.black};
 `}
`

export const ValueSubtitle = styled(Typography)`
 ${({ theme: { palette, typography } }) => css`
  ${{ ...typography.body2 }}
  color: ${palette.grey["500"]};
 `}
`

export const IndexChip = styled(({ _color, ...props }) => <Box {...props} />)`
 width: 38px;
 height: 24px;
 border-radius: 100px;
 filter: drop-shadow(0px 2px 4px rgba(90, 157, 255, 0.25))
  drop-shadow(0px 4px 6px rgba(98, 161, 255, 0.1));
 //styleName: Button/Button1/Medium14px;
 font-family: "Mulish";
 font-size: 14px;
 font-weight: 800;
 line-height: 16px;
 letter-spacing: 0.5px;
 text-align: left;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: ${({ _color }) => _color || "#FFFFFF"};
`
