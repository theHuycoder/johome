import React from "react";
import Header from "./Header";

import { Navbar } from "@/shared/layouts";
import { Box } from "@mui/material";

export default function Home() {
 return (
  <Box>
   <Navbar logoVariant="colorful" />
   <Header />
  </Box>
 );
}
