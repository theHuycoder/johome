import React from "react"
import Header from "./Header"
import Discounts from "./Discounts"
import Experiment from "./Experiment"

import { Box } from "@mui/material"
import Exploring from "./Exploring/Exploring"
import HomestayVariants from "./HomestayVariants"

export default function Home() {
 return (
  <Box>
   <Header />
   <Discounts mb={32.25} />
   <Experiment />
   <Exploring />
   <HomestayVariants />
  </Box>
 )
}
