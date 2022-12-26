import { useMemo, useState } from "react";
import { discounts } from "./Discounts.copy";
import { Box, useTheme, useMediaQuery, Container } from "@mui/material";
import { SectionTitle, SectionSubtitle } from "@/shared/components/Typography";
import { Carousel, DiscountCard } from "@/shared/components";
import { NavButton } from "./Discounts.styles";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

const Discounts = () => {
 const theme = useTheme();

 const [activeSlide, setActiveSlide] = useState(0);
 const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
 const isXLarge = useMediaQuery(theme.breakpoints.up("xl"));

 console.log(isLarge);

 const cards = useMemo(
  () =>
   discounts.map((discount, idx) => ({
    ...discount,
    active: activeSlide === idx,
    noSsr: true,
    onClick: () => setActiveSlide(idx),
   })),
  [activeSlide]
 );

 return (
  <Box pt={14.75} pb={33} sx={{ backgroundColor: theme.palette.grey["800"] }}>
   <Box
    marginX="auto"
    mb={9}
    px={3}
    maxWidth={theme.breakpoints.values.xl}
    display="flex"
    alignItems="center"
    justifyContent="space-between"
   >
    <Box>
     <SectionTitle color="common.white" mb={2.25}>
      Ưu đãi
     </SectionTitle>
     <SectionSubtitle color="grey.300" maxWidth="444px">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit.
     </SectionSubtitle>
    </Box>
    {isLarge && (
     <Box display="flex" mt="auto" gap={1}>
      <NavButton
       color="primary"
       size="small"
       disabled={activeSlide === 0}
       onClick={() => setActiveSlide(activeSlide - 1)}
       aria-label={"previous-program"}
      >
       <ChevronLeftRoundedIcon />
      </NavButton>
      <NavButton
       size="small"
       disabled={activeSlide === cards.length - 1}
       onClick={() => setActiveSlide(activeSlide + 1)}
       aria-label={"next-program"}
      >
       <ChevronRightRoundedIcon />
      </NavButton>
     </Box>
    )}
   </Box>
   <Box>
    <Container maxWidth="xl">
     <Carousel
      selectedIndex={activeSlide}
      slides={cards}
      onSelect={(controller) => {
       setActiveSlide(controller.selectedScrollSnap());
      }}
      onInit={(controller) => controller.reInit({ containScroll: "keepSnaps" })}
      scrollDelay={isLarge ? 250 : 50}
      clickDelay={isLarge ? 300 : 0}
      options={{
       align: "start",
      }}
      spacing={isLarge ? 1.5 : 1}
      style={{ cursor: "grab" }}
      SlideComponent={DiscountCard}
     />
    </Container>
   </Box>
  </Box>
 );
};

export default Discounts;
