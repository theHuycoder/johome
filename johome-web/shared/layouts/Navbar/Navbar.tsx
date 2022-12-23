import React, { forwardRef } from "react";
import Link from "next/link";
import LanguageIcon from "@mui/icons-material/Language";

import { StyledNavbar } from "./Navbar.styles";
import { Logo } from "@/shared/components/Icons";
import { Box, Container, Typography } from "@mui/material";
import { Button } from "@/shared/components";

const links = [
 {
  id: "homestay",
  label: {
   vn: "Chỗ ở",
  },
  href: "/home",
 },
 {
  id: "car-booking",
  label: {
   vn: "Đặt xe",
  },
  href: "/car-booking",
 },
 {
  id: "tours",
  label: {
   vn: "Địa điểm tham quan",
  },
  href: "/tours",
 },
 {
  id: "blogs",
  label: {
   vn: "Blog",
  },
  href: "/blogs",
 },
 {
  id: "partners",
  label: {
   vn: "Đối tác",
  },
  href: "/partners",
 },
];

export default forwardRef(function Navbar(props, ref) {
 return (
  <StyledNavbar {...props} ref={ref}>
   <Container maxWidth="xl">
    <Box display="flex" alignItems="center" justifyContent="space-between">
     <Box flexBasis="15%">
      <Logo />
     </Box>
     <Box display="flex" alignItems="center" gap={4}>
      {links.map((link) => {
       return (
        <Link key={link.id} href={link.href}>
         <Typography fontWeight={600} color="grey.600">
          {link.label.vn}
         </Typography>
        </Link>
       );
      })}
     </Box>
     <Box display="flex" alignItems="center" justifyContent="flex-end" gap={2}>
      <Box>
       <LanguageIcon />
      </Box>
      <Button
       variant="text"
       fontSize="15px"
       padding="10px 24px"
       textColor="common.black"
      >
       Đăng nhập
      </Button>
      <Button
       variant="contained"
       color="common.white"
       hoverColor="grey.200"
       fontSize="15px"
       padding="10px 24px"
      >
       Đăng ký
      </Button>
     </Box>
    </Box>
   </Container>
  </StyledNavbar>
 );
});
