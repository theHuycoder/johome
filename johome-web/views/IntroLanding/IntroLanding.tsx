import React from "react";
import IntroBG from "./IntroBG";
import { Box, Typography } from "@mui/material";
import { Navbar } from "@/shared/layouts";
import useAnimation from "./useAnimation";
import { Button } from "@/shared/components";

export default function IntroLanding() {
 const { navbarRef, titleRef, ctaRef } = useAnimation();

 return (
  <Box>
   <Navbar ref={navbarRef} />
   <IntroBG />
   <Box
    zIndex="200"
    position="fixed"
    top="0"
    left="0"
    right="0"
    bottom="0"
    display="flex"
    alignItems="flex-start"
    justifyContent="center"
    paddingTop={35}
   >
    <Box
     display="flex"
     flexDirection="column"
     alignItems="center"
     justifyContent="center"
     gap={7}
    >
     <Typography
      ref={titleRef}
      variant="h3"
      component="h1"
      textAlign="center"
      fontWeight={800}
     >
      Tìm điểm dừng chân cho chuyến đi của bạn <br />
      ngay bây giờ
     </Typography>
     <Button
      ref={ctaRef}
      variant="contained"
      color="common.white"
      hoverColor="grey.200"
     >
      Đặt chỗ ngay
     </Button>
    </Box>
   </Box>
  </Box>
 );
}
