import React, { PropsWithChildren } from "react";
import { Typography, TypographyProps } from "@mui/material";

export default function SectionSubtitle({
 children,
 variant = "subtitle2",
 fontWeight = "500",
 lineHeight = "22.5px",
 color = "grey.500",
 ...props
}: PropsWithChildren<TypographyProps>) {
 return (
  <Typography
   variant={variant}
   fontWeight={fontWeight}
   lineHeight={lineHeight}
   color={color}
   {...props}
  >
   {children}
  </Typography>
 );
}
