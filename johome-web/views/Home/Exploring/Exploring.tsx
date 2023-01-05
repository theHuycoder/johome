import React from "react"
import ExploringTabs from "./ExploringTabs"

import {Grid, Box, Container} from "@mui/material"
import {SectionTitle} from "@/shared/components/Typography"
import {Button} from "@/shared/components"

export default function Exploring() {
  return (
    <Box mb={18}>
      <Container maxWidth="xl">
        <Grid container gap="70px">
          <Grid item xs={12}>
            <SectionTitle width="100%" emphasisShadow textAlign="center">
              Khám phá
            </SectionTitle>
          </Grid>
          <Grid item xs={12}>
            <ExploringTabs/>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button variant="outlined" color="transparent" boxShadow="none">
                Xem thêm
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
