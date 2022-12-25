/* eslint-disable react/display-name */
import React, { forwardRef } from "react";

import { StyledButton } from "./Button.styles";
import { ButtonProps } from "@mui/material";

const Button = forwardRef(
 (
  {
   onClick,
   children,
   variant,
   color,
   size,
   boxShadow,
   outlineBorder,
   errorVariant,
   hoverColor,
   hoverTextColor,
   textColor,
   fontSize,
   fontWeight,
   padding,
   lineHeight,
   ...buttonProps
  }: ButtonProps & any,
  ref
 ) => (
  <StyledButton
   ref={ref}
   onClick={onClick}
   variant={variant}
   _color={color}
   _textColor={textColor}
   _hoverColor={hoverColor}
   _hoverTextColor={hoverTextColor}
   _fontWeight={fontWeight}
   _fontSize={fontSize}
   _lineHeight={lineHeight}
   padding={padding}
   size={size}
   shadow={boxShadow}
   outline={outlineBorder}
   errorvariant={errorVariant}
   {...buttonProps}
  >
   {children}
  </StyledButton>
 )
);

export default Button;
