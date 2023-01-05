import { Box, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";

export default function SeeAll({
 children,
 color,
 ...props
}: PropsWithChildren<any>) {
 return (
  <Box display="flex" alignItems="center" gap={1} {...props}>
   <Typography variant="button1" color={color} sx={{ cursor: "pointer" }}>
    {children}
   </Typography>
   <ChevronRightRounded
    color={color}
    sx={{ fontSize: "18px", fontWeight: 800 }}
   />
  </Box>
 );
}
