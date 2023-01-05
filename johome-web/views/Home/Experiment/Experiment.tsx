import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { SectionTitle, SeeAll } from "@/shared/components/Typography";
import ExperimentTabs from "./ExperimentTabs";

export default function Experiment() {
 return (
  <Box mb={15.25}>
   <Container maxWidth="xl">
    <Grid container>
     <Grid item xs={12} mb={11.25}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
       <SectionTitle maxWidth="35%">Đa dạng các loại hình du lịch</SectionTitle>
       <SeeAll color="secondary">Xem tất cả</SeeAll>
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
