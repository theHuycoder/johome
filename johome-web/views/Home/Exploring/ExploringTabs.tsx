import { useState } from "react"
import { Box, Container, Grid } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { ExploringTabKeys, exploringTabs } from "./Exploring.copy"
import { StyledTab } from "./ExploringTabs.styles"
import { ExploringCard } from "@/shared/components"
import { exploringDeals } from "./Exploring.copy"

export default function ExploringTabs() {
 const [activeTab, setActiveTab] = useState<ExploringTabKeys>(
  ExploringTabKeys.POPULAR
 )

 const handleChange = (
  event: React.SyntheticEvent,
  newValue: ExploringTabKeys
 ) => {
  setActiveTab(newValue)
 }

 return (
  <Box>
   <Container sx={{ padding: "0!important" }} maxWidth="xl">
    <Grid container>
     <Grid item xs={12} alignItems="center" justifyContent="center">
      <TabContext value={activeTab}>
       <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb="68px"
       >
        <TabList
         TabIndicatorProps={{
          sx: { display: "none" },
         }}
         onChange={handleChange}
        >
         {exploringTabs.map((tab, idx) => {
          return (
           <StyledTab
            key={tab.key}
            isLeft={idx === 0}
            isRight={idx === exploringTabs.length - 1}
            disableRipple
            disableTouchRipple
            label={tab.label}
            value={tab.key}
            activeIdx={exploringTabs.findIndex((tab) => tab.key === activeTab)}
            idx={idx}
           />
          )
         })}
        </TabList>
       </Box>
       <TabPanel value={ExploringTabKeys.POPULAR} sx={{ padding: 0 }}>
        <Box
         display="grid"
         columnGap={4}
         rowGap={5}
         sx={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
        >
         {exploringDeals.map((deal) => (
          <ExploringCard key={deal.id} {...deal} />
         ))}
        </Box>
       </TabPanel>
       <TabPanel value={ExploringTabKeys.FAVORITE} sx={{ padding: 0 }}>
        <Box
         display="grid"
         columnGap={4}
         rowGap={5}
         sx={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
        >
         <ExploringCard />
         <ExploringCard />
         <ExploringCard />
         <ExploringCard />
         <ExploringCard />
         <ExploringCard />
         <ExploringCard />
         <ExploringCard />
        </Box>
       </TabPanel>
       <TabPanel value={ExploringTabKeys.FOR_YOU} sx={{ padding: 0 }}>
        <Box
         display="grid"
         columnGap={4}
         rowGap={5}
         sx={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
        >
         <ExploringCard />
         <ExploringCard />
         <ExploringCard />
         <ExploringCard />
         <ExploringCard />
         <ExploringCard />
         <ExploringCard />
         <ExploringCard />
        </Box>
       </TabPanel>
      </TabContext>
     </Grid>
    </Grid>
   </Container>
  </Box>
 )
}
