import React from "react";
import { Grid, Box } from "@mui/material";
import { SectionTitle, SectionSubtitle } from "@/shared/components/Typography";
import { ImagePlaceholder } from "@/shared/components/Icons";
import { ValueSubtitle, ValueTitle } from "./GoodValues.styles";

export default function GoodValues() {
 return (
  <Grid container>
   <Grid item xs={12} md={4}>
    <SectionTitle mb={2.25}>Giá trị dành cho bạn</SectionTitle>
    <SectionSubtitle maxWidth="80%">
     Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
     Velit officia consequat duis enim velit mollit.
    </SectionSubtitle>
   </Grid>
   <Grid xs={12} md={8}>
    <Box
     display="flex"
     alignItems="flex-start"
     justifyContent="space-between"
     gap={12}
    >
     <Box>
      <ImagePlaceholder />
      <Box>
       <ValueTitle>Đa dạng lựa chọn</ValueTitle>
       <ValueSubtitle maxWidth="80%">
        Amet minim mollit non deserunt ullamco.{" "}
       </ValueSubtitle>
      </Box>
     </Box>
     <Box mt={6.75}>
      <ImagePlaceholder />
      <Box>
       <ValueTitle>Sự trải nghiệm</ValueTitle>
       <ValueSubtitle maxWidth="80%">
        Amet minim mollit non deserunt ullamco.{" "}
       </ValueSubtitle>
      </Box>
     </Box>
     <Box>
      <ImagePlaceholder />
      <Box>
       <ValueTitle>Tiết kiệm thời gian</ValueTitle>
       <ValueSubtitle maxWidth="80%">
        Amet minim mollit non deserunt ullamco.{" "}
       </ValueSubtitle>
      </Box>
     </Box>
    </Box>
   </Grid>
  </Grid>
 );
}
