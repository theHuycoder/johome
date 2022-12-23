import styled, { css } from "styled-components";
import { Button } from "@mui/material";
import { palette, spacing, typography } from "@mui/system";
import get from "lodash.get";

export const StyledButton = styled<any>(Button)`
 ${({
  theme: { palette, spacing },
  _color = "",
  _textColor,
  _hoverColor = "",
  _hoverTextColor = "",
  _fontSize = "",
  _fontWeight = "",
  padding,
 }) => css`
  background-color: ${get(palette, _color as string)};
  padding: ${padding || spacing(1.5, 5.25)};
  border-radius: 100px;
  font-size: ${_fontSize || spacing(2.25)};
  line-height: ${spacing(3.75)};
  letter-spacing: ${spacing(0.09375)};
  font-weight: ${_fontWeight || 800}};
  text-transform: none;
  color: ${get(palette, _textColor as string)};

  :hover {
   background-color: ${get(palette, _hoverColor as string)};
   color: ${get(palette, _hoverTextColor as string)};
  }
 `}
 ${palette}
 ${typography}
 ${spacing}
`;
