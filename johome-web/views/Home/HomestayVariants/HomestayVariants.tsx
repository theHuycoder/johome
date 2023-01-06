import React, {useState} from "react"
import {Box, Container, Grid} from "@mui/material"
import {SectionTitle, SectionSubtitle} from "@/shared/components/Typography"
import {Carousel, HomestayVariantCard} from "@/shared/components"
import Image from 'next/image'

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
    title: "Nhà tranh",
    imgUrl: "/assets/home/variant-2.jpg",
    description: "Không gian ấm áp, gần gũi, thân thiện với môi trường",
    link: "/",
  },
  {
    key: "3",

    title: "Nhà gỗ",
    imgUrl: "/assets/home/variant-3.jpg",
    description: "Không gian ấm áp, gần gũi, thân thiện với môi trường",
    link: "/",
  },
  {
    key: "4",

    title: "Nhà trệt",
    imgUrl: "/assets/home/variant-4.jpg",
    description: "Không gian ấm áp, gần gũi, thân thiện với môi trường",
    link: "/",
  },
  {
    key: "5",

    title: "Nhà nhỏ",
    imgUrl: "/assets/home/variant-5.jpg",
    description: "Không gian ấm áp, gần gũi, thân thiện với môi trường",
    link: "/",
  },
]

export default function HomestayVariants() {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <Box position="relative" pt={10} pb={10} mb="118px">
      <Image src="/assets/home/hs-variant.jpg" alt="" fill priority/>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12}>
            <Box>
              <Box>
                <SectionTitle mb={2}>Loại hình homestay</SectionTitle>
                <SectionSubtitle maxWidth="462px" position="relative" sx={{zIndex: 10}}>
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
            onSelect={(controller: any) => {
              setActiveSlide(controller.selectedScrollSnap())
            }}
            onInit={(controller: any) => controller.reInit({containScroll: "keepSnaps"})}
            scrollDelay={300}
            clickDelay={300}
            options={{
              align: "start",
            }}
            spacing={1.5}
            style={{cursor: "grab"}}
            SlideComponent={HomestayVariantCard}
          />
        </Container>
      </Box>
    </Box>
  )
}
