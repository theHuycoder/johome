import React, { Suspense } from "react";
import IntroBG from "./IntroBG";
import { Box, CircularProgress, Typography } from "@mui/material";
import { Navbar } from "@/shared/layouts";
import useAnimation from "./useAnimation";
import { Button } from "@/shared/components";
import { useRouter } from "next/router";

export default function IntroLanding() {
 useAnimation();
 const router = useRouter();

 return (
  <Box>
   <Navbar id="navbar" style={{ opacity: 0 }} />
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
    paddingTop={33}
   >
    <Box
     display="flex"
     flexDirection="column"
     alignItems="center"
     justifyContent="center"
     gap={7}
    >
     <Typography
      variant="h3"
      component="h1"
      textAlign="center"
      fontWeight={800}
      id="title"
      sx={{ opacity: 0 }}
     >
      Tìm điểm dừng chân cho chuyến đi của bạn <br />
      ngay bây giờ
     </Typography>
     <Button
      variant="contained"
      color="common.white"
      hoverColor="grey.200"
      onClick={() => router.push("/home")}
      id="cta"
      sx={{ opacity: 0 }}
     >
      Đặt chỗ ngay
     </Button>
    </Box>
   </Box>
  </Box>
 );
}
