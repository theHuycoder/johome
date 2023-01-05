import React, { useState } from "react"
import { Box, Container, Grid } from "@mui/material"
import { SectionTitle, SectionSubtitle } from "@/shared/components/Typography"
import { Carousel, HomestayVariantCard } from "@/shared/components"

const cards = [
 {
  key: "1",
  title: "Nhà sàn",
  imgUrl: "/assets/home/variant-1.jpg",
  description: "Không gian ấm áp, gần gũi, thân thiện với môi trường",
  link: "/",
 },
 {
  key: "2",
  title: "Nhà sàn",
  imgUrl: "/assets/home/variant-1.jpg",
  description: "Không gian ấm áp, gần gũi, thân thiện với môi trường",
  link: "/",
 },
 {
  key: "3",

  title: "Nhà sàn",
  imgUrl: "/assets/home/variant-1.jpg",
  description: "Không gian ấm áp, gần gũi, thân thiện với môi trường",
  link: "/",
 },
 {
  key: "4",

  title: "Nhà sàn",
  imgUrl: "/assets/home/variant-1.jpg",
  description: "Không gian ấm áp, gần gũi, thân thiện với môi trường",
  link: "/",
 },
 {
  key: "5",

  title: "Nhà sàn",
  imgUrl: "/assets/home/variant-1.jpg",
  description: "Không gian ấm áp, gần gũi, thân thiện với môi trường",
  link: "/",
 },
 {
  key: "6",

  title: "Nhà sàn",
  imgUrl: "/assets/home/variant-1.jpg",
  description: "Không gian ấm áp, gần gũi, thân thiện với môi trường",
  link: "/",
 },
]

export default function HomestayVariants() {
 const [activeSlide, setActiveSlide] = useState(0)

 return (
  <Box>
   <Container maxWidth="xl">
    <Grid container>
     <Grid item xs={12}>
      <Box>
       <Box>
        <SectionTitle mb={2}>Loại hình homestay</SectionTitle>
        <SectionSubtitle maxWidth="462px">
         Trải nghiệm không gian sống mới lạ, độc đáo, lựa chọn phù hợp với sở
         thích của bạn.
        </SectionSubtitle>
       </Box>
      </Box>
     </Grid>
    </Grid>
   </Container>
   <Box>
    <Container maxWidth="xl">
     <Carousel
      selectedIndex={activeSlide}
      slides={cards}
      onSelect={(controller) => {
       setActiveSlide(controller.selectedScrollSnap())
      }}
      onInit={(controller) => controller.reInit({ containScroll: "keepSnaps" })}
      scrollDelay={300}
      clickDelay={300}
      options={{
       align: "start",
      }}
      spacing={1.5}
      style={{ cursor: "grab" }}
      SlideComponent={HomestayVariantCard}
     />
    </Container>
   </Box>
  </Box>
 )
}
