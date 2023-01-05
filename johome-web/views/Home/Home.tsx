import React from "react"
import Header from "./Header"
import Discounts from "./Discounts"
import Experiment from "./Experiment"
import OwnerLeaderBoard from "./OwnerLeaderboard"
import Tour from './Tour'
import Member from './Member'

import {Box} from "@mui/material"
import Exploring from "./Exploring/Exploring"
import HomestayVariants from "./HomestayVariants"
import {Footer} from '@/shared/components'

export default function Home() {
  return (
    <Box>
      <Header/>
      <Discounts/>
      <Experiment/>
      <Exploring/>
      <OwnerLeaderBoard/>
      <HomestayVariants/>
      <Tour/>
      <Member/>
      <Footer/>
    </Box>
  )
}
