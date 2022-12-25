import React from "react";
import {
 StyledHeader,
 StyledHeaderContainer,
 HeaderTitle,
 HeaderSubtitle,
 StyledQuickSearch,
 Headline,
 HeadlineDivider,
 RoundedImage,
} from "./Header.styles";
import { Grid, Box } from "@mui/material";
import Image from "next/image";
import GoodValues from "../GoodValues";

export default function Header() {
 return (
  <StyledHeader>
   <StyledHeaderContainer>
    <Grid container>
     <Grid item lg={6}>
      <Box display="flex" flexDirection="column" gap={5.5}>
       <Box>
        <Headline mt={3} mb={2} display="flex" alignItems="center" gap={0.5}>
         <HeadlineDivider component="span" />
         Khám phá vùng đất Việt Nam
        </Headline>
        <HeaderTitle>Trải nghiệm mỗi chuyến đi cùng Johome</HeaderTitle>
        <HeaderSubtitle maxWidth="75%">
         Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
         sint. Velit officia consequat duis enim velit mollit.
        </HeaderSubtitle>
       </Box>
       <StyledQuickSearch />
       <HeaderSubtitle mb={2}>
        Amet minim mollit non deserunt ullamco
       </HeaderSubtitle>
      </Box>
     </Grid>
     <Grid item lg={5}>
      <Box height="100%">
       <Box position="relative" height="inherit">
        <Image
         src="/assets/home/header-1.jpg"
         alt="header-1"
         fill
         priority
         style={{
          objectFit: "cover",
          borderRadius: "1000px 1000px 0px 0px",
         }}
         sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
        <RoundedImage
         sx={{
          position: "absolute",
          width: "240px",
          height: "240px",
          top: "-8%",
          right: "-10%",
          borderWidth: "5px",
         }}
        >
         <Image
          src="/assets/home/header-2.webp"
          alt="header-2"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
         />
        </RoundedImage>
        <RoundedImage
         sx={{
          position: "absolute",
          width: "86px",
          height: "86px",
          top: "10%",
          right: "-30%",
          borderWidth: "3px",
         }}
        >
         <Image
          src="/assets/home/header-3.jpg"
          alt="header-3"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
         />
        </RoundedImage>
        <RoundedImage
         sx={{
          position: "absolute",
          width: "156px",
          height: "156px",
          top: "29%",
          right: "-12%",
          borderWidth: "4px",
         }}
        >
         <Image
          src="/assets/home/header-4.jpg"
          alt="header-4"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
         />
        </RoundedImage>
       </Box>
      </Box>
     </Grid>
     <Grid item lg={12} mt={17}>
      <GoodValues />
     </Grid>
    </Grid>
   </StyledHeaderContainer>
  </StyledHeader>
 );
}
