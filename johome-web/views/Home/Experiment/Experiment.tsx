import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { SectionTitle } from "@/shared/components/Typography";
import ExperimentTabs from "./ExperimentTabs";

export default function Experiment() {
 return (
  <Box>
   <Container maxWidth="xl">
    <Grid container>
     <Grid item xs={12} mb={11.25}>
      <Box>
       <SectionTitle>Khu vực bạn muốn trải nghiệm</SectionTitle>
      </Box>
     </Grid>
     <Grid item xs={12}>
      <ExperimentTabs />
     </Grid>
    </Grid>
   </Container>
  </Box>
 );
}
