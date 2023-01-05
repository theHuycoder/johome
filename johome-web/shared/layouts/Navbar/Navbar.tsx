import React, { forwardRef, useEffect, useState } from "react";
import Link from "next/link";
import LanguageIcon from "@mui/icons-material/Language";

import { StyledNavbar } from "./Navbar.styles";
import { Logo, LogoColor } from "@/shared/components/Icons";
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

type LogoVariant = "monochrome" | "colorful";

export default forwardRef<
 { [key: string]: any; logoVariant: LogoVariant; shouldToggle?: boolean },
 any
>(function Navbar(
 { logoVariant = "monochrome", shouldToggle = true, linkColor = "grey.600",...props },
 ref
) {
 const [isScrolled, setIsScrolled] = useState(false);

 useEffect(() => {
  if (!shouldToggle) return;

  const onScroll = () => {
   setIsScrolled(window.scrollY > 0);
  };

  window.addEventListener("scroll", onScroll);

  return () => {
   window.removeEventListener("scroll", onScroll);
  };
 }, [shouldToggle]);

 return (
  <StyledNavbar isScrolled={shouldToggle && isScrolled} {...props} ref={ref}>
   <Container maxWidth="xl">
    <Box display="flex" alignItems="center" justifyContent="space-between">
     <Box flexBasis="15%">
      {logoVariant === "monochrome" && <Logo />}
      {logoVariant === "colorful" && <LogoColor />}
     </Box>
     <Box display="flex" alignItems="center" gap={4}>
      {links.map((link) => {
       return (
        <Link key={link.id} href={link.href}>
         <Typography fontWeight={600} color={!isScrolled && linkColor || "grey.600"}>
          {link.label.vn}
         </Typography>
        </Link>
       );
      })}
     </Box>
     <Box display="flex" alignItems="center" justifyContent="flex-end" gap={2}>
      <Box sx={{ lineHeight: 0 }}>
       <LanguageIcon />
      </Box>
      <Button
       variant="text"
       fontSize="15px"
       padding="10px 24px"
       textColor={
        logoVariant === "monochrome" ? "common.black" : "common.black"
       }
       color={logoVariant === "colorful" ? "common.white" : "primary.main"}
       boxShadow={logoVariant === "monochrome" ? "none" : ""}
       hoverColor="grey.200"
       lineHeight="20px"
      >
       Đăng nhập
      </Button>
      <Button
       variant="contained"
       textColor={
        logoVariant === "monochrome" ? "common.black" : "common.white"
       }
       color={logoVariant === "colorful" ? "primary.main" : "common.white"}
       hoverColor={logoVariant === "monochrome" ? "grey.200" : ""}
       fontSize="15px"
       padding="10px 24px"
       lineHeight="20px"
      >
       Đăng ký
      </Button>
     </Box>
    </Box>
   </Container>
  </StyledNavbar>
 );
});
