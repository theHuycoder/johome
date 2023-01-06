import {useMemo, useState} from "react"
import {discounts} from "./Discounts.copy"
import {Box, useTheme, useMediaQuery, Container} from "@mui/material"
import {SectionTitle, SectionSubtitle} from "@/shared/components/Typography"
import {Carousel, DiscountCard, Button} from "@/shared/components"
import {GreatDeal, NavButton} from "./Discounts.styles"
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded"
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded"

const Discounts = ({...props}) => {
  const theme = useTheme()

  const [activeSlide, setActiveSlide] = useState(0)
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"))
  const isXLarge = useMediaQuery(theme.breakpoints.up("xl"))

  const cards = useMemo(
    () =>
      discounts.map((discount, idx) => ({
        ...discount,
        active: activeSlide === idx,
        noSsr: true,
        onClick: () => setActiveSlide(idx),
      })),
    [activeSlide]
  )

  return (
    <Box pt={14.75} pb={33} sx={{backgroundColor: "#F3F4F6"}} {...props}>
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
          <SectionTitle color="grey.900" mb={2.25}>
            Ưu đãi liền tay
          </SectionTitle>
          <SectionSubtitle color="grey.900" maxWidth="444px">
            Du Xuân như ý với hàng ngàn ưu đãi siêu khủng cùng với Johome ngay.
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
              <ChevronLeftRoundedIcon/>
            </NavButton>
            <NavButton
              size="small"
              disabled={activeSlide === cards.length - 1}
              onClick={() => setActiveSlide(activeSlide + 1)}
              aria-label={"next-program"}
            >
              <ChevronRightRoundedIcon/>
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
              setActiveSlide(controller.selectedScrollSnap())
            }}
            onInit={(controller) => controller.reInit({containScroll: "keepSnaps"})}
            scrollDelay={isLarge ? 250 : 50}
            clickDelay={isLarge ? 300 : 0}
            options={{
              align: "start",
              loop: true,
            }}
            spacing={isLarge ? 1.6 : 1}
            style={{cursor: "grab"}}
            SlideComponent={DiscountCard}
          />
        </Container>
      </Box>
      <Box>
        <Container maxWidth="xl">
          <GreatDeal>
            <Box className="title">Nhận ngay Ưu đãi</Box>
            <Box className="percent">50%</Box>
            <Box className="date">Từ 17/12/2023 đến 23/12/2023</Box>
            <Box>
              <Button
                hoverColor="secondary.700"
                color="secondary.600"
                textColor="common.white"
              >
                Xem chi tiết
              </Button>
            </Box>
          </GreatDeal>
        </Container>
      </Box>
    </Box>
  )
}

export default Discounts
