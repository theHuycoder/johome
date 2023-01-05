import React from "react"
import {Box, Container, Grid} from "@mui/material"
import {SectionTitle, SeeAll} from "@/shared/components/Typography"
import ExperimentTabs from "./ExperimentTabs"

export default function Experiment() {
  return (
    <Box mb={50.25}>
      {/* <Container maxWidth="xl"> */}
      <Grid container>
        <Grid item xs={12}>
          <ExperimentTabs/>
        </Grid>
      </Grid>
      {/* </Container> */}
    </Box>
  )
}
