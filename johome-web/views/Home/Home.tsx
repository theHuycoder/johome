import React from "react";
import Header from "./Header";

import { Navbar } from "@/shared/layouts";
import { Box } from "@mui/material";
import Discounts from "./Discounts";

export default function Home() {
 return (
  <Box>
   <Navbar logoVariant="colorful" />
   <Header />
   <Discounts />
  </Box>
 );
}
