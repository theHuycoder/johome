import React, {useState} from 'react'
import {Box, Grid, Container} from '@mui/material'
import {SectionSubtitle, SectionTitle} from '@/shared/components/Typography'
import {TourWrapper} from "@/views/Home/Tour/Tours.styles";
import Image from 'next/image'
import {Fade} from '@mui/material'

const tours = [
  {
    id: 1,
    largeImage: "/assets/home/tour-large-1.jpeg",
    smallImage: "/assets/home/tour-small-1.jpg",
    location: "Bến tre",
    name: "Tour: “Đón TẾT miền Tây”",
    description: "Trải nghiệm văn hóa đón Tết, những món ăn đặc sản cùng người dân địa phương.",
    price: 999000,
    currency: "VND",
    stars: 4.8
  },
  {
    id: 2,
    largeImage: "/assets/home/tour-large-2.png",
    smallImage: "/assets/home/tour-small-2.jpg",
    location: "Hà Giang",
    name: "Tour Ruộng bậc thang Hoàng Su Phì",
    description: "Mùa lúa chín nơi đây sẽ mang đến hương thơm nồng nàn đậm chất mộc mạc, dân dã.",
    price: 699000,
    currency: "VND",
    stars: 4.9
  },
  {
    id: 3,
    largeImage: "/assets/home/tour-large-3.png",
    smallImage: "/assets/home/tour-small-3.jpg",
    location: "Đà Lạt",
    name: "Tour cắm trại và săn mây ở Đà Lạt ",
    description: "Tận hưởng không khí se lạnh, săn mây và ngắm bình minh, xa xa là những đồi chè trải dài tít tắp.",
    price: 1999000,
    currency: "VND",
    stars: 4.9
  }
]


export default function Tour() {
  const [activeTour, setActiveTour] = useState(1);


  return (
    <Box mb={20}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} mb={5.5}>
            <Box>
              <SectionTitle mb="52px" textAlign="center" emphasisShadow>Tour du lịch hấp dẫn</SectionTitle>
              <SectionSubtitle textAlign="center" maxWidth="443px" mx="auto">
                Đa dạng trải nghiệm, hoạt động giải trí thú vị, mang tới những cung bậc cảm xúc chưa từng
                có.
              </SectionSubtitle>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item lg={6}>
                <Box position="relative" width="100%" height="100%">
                  {tours.map((tour) => (
                    <Fade in={activeTour === tour.id} key={tour.id} timeout={{
                      enter: 1000,
                      exit: 1000
                    }}>
                      <Image src={tour.largeImage} alt={tour.name} key={tour.id} fill priority
                             style={{objectFit: "contain"}}/>
                    </Fade>
                  ))}
                </Box>
              </Grid>
              <Grid item lg={6}>
                <Box display="flex" flexDirection="column" gap={3.5}>
                  {tours.map((tour) => (
                    <TourWrapper active={activeTour === tour.id} key={tour.id}
                                 onMouseOver={() => setActiveTour(tour.id)}>
                      <Box className="img-wrapper">
                        <Image src={tour.smallImage} alt={tour.name} fill priority/>
                      </Box>
                      <Box className="content-wrapper">
                        <Box mb={1.5}>
                          <Box className="location">{tour.location}</Box>
                          <Box className="name">{tour.name}</Box>
                          <Box className="description">{tour.description}</Box>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                          <Box>
                            Chỉ từ {" "}
                            <Box component="span" className="price-box">
                              <span className="price">{tour.price?.toLocaleString("vi-VN")}{" "}</span>
                              <span className="currency">{tour.currency}</span>
                            </Box>
                          </Box>
                          <Box display="flex" alignItems="center" justifyContent="flex-end" gap={0.5}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd"
                                    d="M7.26767 0.771504L8.34954 2.90038L10.7783 3.24313C11.9161 3.40365 12.4362 4.80771 11.5591 5.63743L9.81454 7.28626L10.2251 9.60958C10.4354 10.7998 9.17217 11.5991 8.17747 11.0923L5.99988 9.98149L3.82293 11.0919C2.82676 11.6004 1.56462 10.7984 1.77462 9.60963L2.18521 7.28626L0.440937 5.63766C-0.43679 4.80734 0.0851321 3.40358 1.22135 3.24315L3.65029 2.90036L4.7327 0.771504C5.25548 -0.257123 6.74499 -0.257213 7.26767 0.771504Z"
                                    fill="#FFD166"/>
                            </svg>
                            <Box component="span" className="stars">{tour.stars}</Box>
                          </Box>
                        </Box>
                      </Box>
                    </TourWrapper>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}