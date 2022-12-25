import React, { PropsWithChildren } from "react";
import { Typography, TypographyProps } from "@mui/material";

export default function SectionTitle({
 children,
 variant = "h3",
 fontWeight = "800",
 lineHeight = "60px",
 color = "grey.800",
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
