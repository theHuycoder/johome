import React from "react";
import Header from "./Header";
import Discounts from "./Discounts";
import Experiment from "./Experiment";

import { Navbar } from "@/shared/layouts";
import { Box } from "@mui/material";

export default function Home() {
 return (
  <Box>
   <Navbar logoVariant="colorful" />
   <Header />
   <Discounts mb={32.25} />
   <Experiment />
  </Box>
 );
}
