import React, {useState} from 'react'

import {Box, Container, Grid, Typography} from '@mui/material'
import {Navbar} from "@/shared/layouts";
import Image from 'next/image'
import {Searchbar} from "@/views/QuickSearchResult/QuickSearchResult.styles";
import {BackToHome, SaleBox, Tab, SaleBanner, MapWrapper} from "@/views/QuickSearchResult/QuickSearchResult.styles";
import {Button} from '@/shared/components'
import {TourWrapper, LocationMaker, PagingBox, PagingNumber} from "./QuickSearchResult.styles";
import GoogleMapReact from 'google-map-react';
import {Footer} from '@/shared/components'
import {useRouter} from "next/router";

const tabs = [
  {
    label: "Tối giản",
    value: 0,
  },
  {
    label: "Cổ điển",
    value: 1,
  },
  {
    label: "Có hồ ",
    value: 2,
  },
  {
    label: "Có sân vườn",
    value: 3,
  },
  {
    label: "Hướng biển",
    value: 4,
  }
]


const LocationMark = ({text, active, ...props}: any) => <LocationMaker active={active} {...props}>{text}</LocationMaker>

const tours = [
  {
    id: 1,
    largeImage: "/assets/home/tour-large-1.jpeg",
    smallImage: "/assets/search-result/search-1.jpg",
    location: "Nha Trang",
    address: "Khánh Hòa, Nha Trang",
    filter: "Giáp biển",
    name: "Amaya Home",
    description: "Amaya Home Sóc Sơn Lodge, Spa & Restaurant là một khu du lịch nghỉ dưỡng được biết đến nhiều trong khoảng thời gian để cùng nhau “đi trốn”",
    price: 600000,
    currency: "VND",
    stars: 4.8,
    position: {
      lat: 12.2890167,
      lng: 109.1817957
    }
  },
  {
    id: 2,
    largeImage: "/assets/home/tour-large-2.png",
    smallImage: "/assets/search-result/search-2.jpg",
    location: "Nha Trang",
    address: "Khánh Hòa, Nha Trang",
    filter: "Giáp biển",
    name: "Valley Homestay",
    description: "Valley Homestay Sóc Sơn Lodge, Spa & Restaurant là một khu du lịch nghỉ dưỡng được biết đến nhiều trong khoảng thời gian để cùng nhau “đi trốn”",
    price: 699000,
    currency: "VND",
    stars: 4.9,
    position: {
      lat: 12.2911271, lng: 109.1851263,
    }
  },
  {
    id: 3,
    largeImage: "/assets/home/tour-large-3.png",
    smallImage: "/assets/search-result/search-3.jpg",
    address: "Khánh Hoà, Nha Trang",
    filter: "Giáp biển",
    location: "Nha Trang",
    name: "Nắng Mơ Homestay",
    description: "Nắng Mơ Sóc Sơn Lodge, Spa & Restaurant là một khu du lịch nghỉ dưỡng được biết đến nhiều trong khoảng thời gian để cùng nhau “đi trốn”",
    price: 1999000,
    currency: "VND",
    stars: 4.9,
    position: {
      lat: 12.282557, lng: 109.170086
    }
  },
  {
    id: 4,
    largeImage: "/assets/home/tour-large-3.png",
    smallImage: "/assets/search-result/search-4.jpg",
    address: "Vĩnh Hoà, Nha Trang",
    filter: "Giáp biển",
    location: "Nha Trang",
    name: "Young Sun Homestay",
    description: "Young Sun Homestay, Spa & Restaurant là một khu du lịch nghỉ dưỡng được biết đến nhiều trong khoảng thời gian để cùng nhau “đi trốn”",
    price: 2999000,
    currency: "VND",
    stars: 4.9,
    position: {
      lat: 12.296518, lng: 109.178600
    }
  },
  {
    id: 5,
    largeImage: "/assets/home/tour-large-3.png",
    smallImage: "/assets/search-result/search-5.jpg",
    address: "Vĩnh tường, Nha Trang",
    filter: "Giáp biển",
    location: "Nha Trang",
    name: "Venus Luxury Apartment",
    description: "Venus Luxury Apartment, Spa & Restaurant là một khu du lịch nghỉ dưỡng được biết đến nhiều trong khoảng thời gian để cùng nhau “đi trốn”",
    price: 599000,
    currency: "VND",
    stars: 4.3,
    position: {
      lat: 12.291634, lng: 109.190153
    }
  },
  {
    id: 6,
    largeImage: "/assets/home/tour-large-3.png",
    smallImage: "/assets/search-result/search-6.jpg",
    address: "Khánh Hoà, Nha Trang",
    filter: "Giáp biển",
    location: "Nha Trang",
    name: "Rustic Bungalow, Nha Trang",
    description: "Rustic Bungalow, Nha Trang Lodge, Spa & Restaurant là một khu du lịch nghỉ dưỡng được biết đến nhiều trong khoảng thời gian để cùng nhau “đi trốn”",
    price: 899000,
    currency: "VND",
    stars: 4.2,
    position: {
      lat: 12.293938, lng: 109.182863
    }
  },
  {
    id: 7,
    largeImage: "/assets/home/tour-large-3.png",
    smallImage: "/assets/search-result/search-7.jpg",
    address: "Vĩnh Hải, Nha Trang",
    filter: "Giáp biển",
    location: "Nha Trang",
    name: "Amaya Home",
    description: "Amaya Home Lodge, Spa & Restaurant là một khu du lịch nghỉ dưỡng được biết đến nhiều trong khoảng thời gian để cùng nhau “đi trốn”",
    price: 1299000,
    currency: "VND",
    stars: 4.9,
    position: {
      lat: 12.276438, lng: 109.190295
    }
  }
]

export default function QuickSearchResult() {
  const [activeTab, setActiveTab] = useState(0)
  const [activeLocation, setActiveLocation] = useState(1)
  const [focusPosition, setFocusPosition] = useState({
    lat: 12.288619, lng: 109.188252
  })
  const [zoom, setZoom] = useState(14)

  const router = useRouter()

  return (
    <Box>
      <Navbar logoVariant="colorful" spread={true} linkColor="common.white"/>
      <Box>
        <Box position="relative" width="100%" height="254px">
          <Image src="/assets/search-result/search-result.jpg" alt="" fill priority/>
        </Box>
        <Container maxWidth="xl" sx={{position: "relative", zIndex: 2, minHeight: "100vh"}}>
          <Grid mt={"-76px"} container>
            <Grid item xs={12} mb="30px">
              <Searchbar>
                <Box className="searchbox" width="322px">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M18.2531 2.47677C20.3137 1.61819 22.3809 3.68541 21.5223 5.746L15.5988 19.9624C14.4404 22.7427 10.3655 22.2727 9.87034 19.3018L9.13133 14.8677L4.69725 14.1287C1.72626 13.6335 1.25632 9.55874 4.0366 8.40029L18.2531 2.47677ZM19.6762 4.97677C19.8479 4.56465 19.4344 4.15121 19.0223 4.32292L4.80583 10.2464C3.87907 10.6326 4.03572 11.9909 5.02604 12.1559L9.46013 12.8949C10.3031 13.0354 10.9636 13.6959 11.1041 14.5389L11.8431 18.973C12.0082 19.9633 13.3665 20.1199 13.7526 19.1932L19.6762 4.97677Z"
                          fill="#6B7280"/>
                  </svg>
                  <input className="text" type="text" value="Nha Trang, Khánh Hoà"/>
                </Box>
                <Box className="searchbox" width="226px">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M17 4H3C2.44772 4 2 4.44772 2 5V17C2 17.5523 2.44772 18 3 18H17C17.5523 18 18 17.5523 18 17V5C18 4.44771 17.5523 4 17 4ZM3 2C1.34315 2 0 3.34315 0 5V17C0 18.6569 1.34315 20 3 20H17C18.6569 20 20 18.6569 20 17V5C20 3.34315 18.6569 2 17 2H3Z"
                          fill="#6B7280"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12H15C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10H8ZM5 14C4.44771 14 4 14.4477 4 15C4 15.5523 4.44771 16 5 16H11C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H5Z"
                          fill="#6B7280"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M5 0C4.44771 0 4 0.447715 4 1V5C4 5.55228 4.44771 6 5 6C5.55228 6 6 5.55228 6 5V1C6 0.447715 5.55228 0 5 0ZM15 0C14.4477 0 14 0.447715 14 1V5C14 5.55228 14.4477 6 15 6C15.5523 6 16 5.55228 16 5V1C16 0.447715 15.5523 0 15 0Z"
                          fill="#6B7280"/>
                  </svg>

                  <input className="text" type="text" value="15th10-22th10"/>
                </Box>
                <Box className="searchbox" width="135px">
                  <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M9 12C5.13401 12 2 15.134 2 19V21C2 21.5523 1.55228 22 1 22C0.447715 22 0 21.5523 0 21V19C0 14.0294 4.02944 10 9 10C13.9706 10 18 14.0294 18 19V21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21V19C16 15.134 12.866 12 9 12Z"
                          fill="#6B7280"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M9 10C11.2091 10 13 8.20914 13 6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6C5 8.20914 6.79086 10 9 10ZM9 12C12.3137 12 15 9.31371 15 6C15 2.68629 12.3137 0 9 0C5.68629 0 3 2.68629 3 6C3 9.31371 5.68629 12 9 12Z"
                          fill="#6B7280"/>
                  </svg>
                  <input className="text" type="text" value="2 người"/>
                </Box>
                <Box flexShrink={0}>
                  <Button shadow="none" sx={{borderRadius: "50%"}}>
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_606_1740)">
                        <rect width="64" height="64" rx="32" fill="#1BBB83"/>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M34.9056 36.3199C33.551 37.3729 31.8487 38 30 38C25.5817 38 22 34.4183 22 30C22 25.5817 25.5817 22 30 22C34.4183 22 38 25.5817 38 30C38 31.8487 37.3729 33.551 36.3199 34.9056L41.7071 40.2929C42.0976 40.6834 42.0976 41.3166 41.7071 41.7071C41.3166 42.0976 40.6834 42.0976 40.2929 41.7071L34.9056 36.3199ZM36 30C36 33.3137 33.3137 36 30 36C26.6863 36 24 33.3137 24 30C24 26.6863 26.6863 24 30 24C33.3137 24 36 26.6863 36 30Z"
                          fill="#FCFCFD"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_606_1740">
                          <rect width="64" height="64" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </Button>
                </Box>
              </Searchbar>
            </Grid>
            <Grid item xs={12} mb="48px">
              <Box>
                <BackToHome onClick={() => router.push("/home")}>
                  <svg width="4" height="6" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M3.4714 0.195262C3.73175 0.455612 3.73175 0.877722 3.4714 1.13807L1.60948 3L3.4714 4.86193C3.73175 5.12228 3.73175 5.54439 3.4714 5.80474C3.21106 6.06509 2.78895 6.06509 2.5286 5.80474L0.195262 3.4714C-0.0650874 3.21106 -0.0650874 2.78895 0.195262 2.5286L2.5286 0.195262C2.78895 -0.0650873 3.21106 -0.0650873 3.4714 0.195262Z"
                          fill="#1F2937"/>
                  </svg>
                  Về trang chủ
                </BackToHome>
              </Box>
            </Grid>
            <Grid item xs={12} mb="42px">
              <Box pb={4} sx={{borderBottom: "1px #E6E8EC solid"}}>
                <Typography variant="h3" fontWeight={800} mb={1}>
                  128 địa điểm phù hợp
                </Typography>
                <SaleBox>
                  <Box className="sale">
                    Giảm tới 25%
                  </Box>
                  <Box className="location">
                    Hà Nội, 20/10 - 23/10, 4 khách
                  </Box>
                </SaleBox>
              </Box>
            </Grid>
            <Grid item xs={12} mb="68px">
              <Box display="flex" alignItems="center" gap="16px">
                {tabs.map(tab => (<Tab key={tab.value} onClick={() => setActiveTab(tab.value)}
                                       active={activeTab === tab.value}>{tab.label}</Tab>))}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item lg={12}>
                  <Box display="flex" alignItems="flex-start" gap={4}>
                    <Box display="flex" flexDirection="column" gap={4}>
                      <SaleBanner>
                        <Box>
                          <Box className="small-text">
                            Nhận ngay Ưu đãi
                          </Box>
                          <Box className="big-text">
                            50%
                          </Box>
                          <Box className="small-text">
                            Từ 17/12/2023-23/12/2023
                          </Box>
                        </Box>
                        <Box>
                          <Button color="common.white" hoverColor="grey.100">Xem chi tiết</Button>
                        </Box>
                      </SaleBanner>
                      {tours.slice(0, 3).map((tour) => (
                        <TourWrapper key={tour.id}
                                     active={activeLocation === tour.id}
                                     onMouseOver={() => setActiveLocation(tour.id)}
                                     onClick={() => {
                                       setActiveLocation(tour.id)
                                       setFocusPosition(tour.position)
                                       setZoom(17)
                                       router.push("/deals")
                                     }}
                        >
                          <Box className="img-wrapper">
                            <Image src={tour.smallImage} alt={tour.name} fill priority/>
                          </Box>
                          <Box className="content-wrapper">
                            <Box mb={1.5}>
                              <Box className="location">{tour.location}</Box>
                              <Box className="name">{tour.name}</Box>
                              <Box width="100%" mb="12px" className="filter" sx={{color: "#9CA3AF!important"}}
                                   display="flex"
                                   alignItems="center"
                                   justifyContent="space-between">
                                <span>{tour.address}</span>
                                <span>{tour.filter}</span>
                              </Box>
                              <Box className="description">{tour.description}</Box>
                            </Box>
                            <Box sx={{paddingTop: "8px", marginTop: "14px", borderTop: "1px solid #E5E7EB"}}
                                 display="flex"
                                 alignItems="center" justifyContent="space-between">
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

                    <MapWrapper>
                      <GoogleMapReact bootstrapURLKeys={{key: "AIzaSyDPd6_2YClQUO5WdSAp2O4LXlqIm-Pgw7o"}}
                                      defaultCenter={focusPosition}
                                      defaultZoom={zoom}
                                      center={focusPosition}
                                      zoom={zoom}
                                      yesIWantToUseGoogleMapApiInternals
                                      shouldUnregisterMapOnUnmount={true}

                      >
                        {tours.map((tour) => (<LocationMark
                          lat={tour.position.lat}
                          lng={tour.position.lng}
                          active={tour.id === activeLocation}
                          onClick={() => {
                            setActiveLocation(tour.id)
                            setFocusPosition(tour.position)
                            setZoom(17)
                          }}
                          text={new Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: tour.currency
                          }).format(tour.price)}
                          key={tour.id}
                        />))}
                      </GoogleMapReact>
                    </MapWrapper>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} mt={4}>
              <Grid container>
                {tours.slice(3).map((tour, idx) => (
                  <Grid mb={4} lg={6} key={tour.id}>
                    <TourWrapper
                      sx={{
                        marginLeft: idx % 2 === 0 ? 0 : "16px",
                      }}
                      active={activeLocation === tour.id}
                      onMouseOver={() => setActiveLocation(tour.id)}
                      onClick={() => {
                        setActiveLocation(tour.id)
                        setFocusPosition(tour.position)
                        setZoom(17)
                        router.push("/deals")

                      }}
                    >
                      <Box className="img-wrapper">
                        <Image src={tour.smallImage} alt={tour.name} fill priority/>
                      </Box>
                      <Box className="content-wrapper">
                        <Box mb={1.5}>
                          <Box className="location">{tour.location}</Box>
                          <Box className="name">{tour.name}</Box>
                          <Box width="100%" mb="12px" className="filter" sx={{color: "#9CA3AF!important"}}
                               display="flex"
                               alignItems="center"
                               justifyContent="space-between">
                            <span>{tour.address}</span>
                            <span>{tour.filter}</span>
                          </Box>
                          <Box className="description">{tour.description}</Box>
                        </Box>
                        <Box sx={{paddingTop: "8px", marginTop: "14px", borderTop: "1px solid #E5E7EB"}}
                             display="flex"
                             alignItems="center" justifyContent="space-between">
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
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} mt="72px" mb="156px">
              <Box gap="46px" display="flex" alignItems="center" textAlign="center" justifyContent="center"
                   width="100%">
                <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12.6844 1.11485C13.0781 1.50866 13.2993 2.04271 13.2993 2.59955C13.2993 3.1564 13.0781 3.69044 12.6844 4.08425L5.76915 10.9996L12.6844 17.9149C13.067 18.3109 13.2786 18.8414 13.2739 19.392C13.2691 19.9426 13.0482 20.4693 12.6589 20.8587C12.2695 21.248 11.7428 21.4689 11.1922 21.4737C10.6416 21.4785 10.1111 21.2668 9.71505 20.8843L1.31505 12.4843C0.921358 12.0904 0.700195 11.5564 0.700195 10.9996C0.700195 10.4427 0.921358 9.90866 1.31505 9.51485L9.71505 1.11485C10.1089 0.721163 10.6429 0.5 11.1997 0.5C11.7566 0.5 12.2906 0.721163 12.6844 1.11485V1.11485Z"
                        fill="#D1D5DB"/>
                </svg>
                <PagingBox>
                  <PagingNumber active>1</PagingNumber>
                  <PagingNumber>2</PagingNumber>
                  <PagingNumber>3</PagingNumber>
                  <PagingNumber>4</PagingNumber>
                  <PagingNumber>.....</PagingNumber>
                  <PagingNumber>12</PagingNumber>
                </PagingBox>
                <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M1.31505 20.8862C0.921358 20.4924 0.700195 19.9584 0.700195 19.4015C0.700195 18.8447 0.921358 18.3106 1.31505 17.9168L8.23035 11.0015L1.31505 4.08624C0.932515 3.69017 0.720846 3.15971 0.725631 2.6091C0.730415 2.05848 0.951271 1.53178 1.34063 1.14242C1.72998 0.753063 2.25669 0.532208 2.8073 0.527423C3.35792 0.522638 3.88838 0.734308 4.28445 1.11684L12.6844 9.51684C13.0781 9.91065 13.2993 10.4447 13.2993 11.0015C13.2993 11.5584 13.0781 12.0924 12.6844 12.4862L4.28445 20.8862C3.89064 21.2799 3.35659 21.5011 2.79975 21.5011C2.2429 21.5011 1.70886 21.2799 1.31505 20.8862Z"
                        fill="#6B7280"/>
                </svg>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer sx={{background: "#F3F4F6", paddingTop: "72px"}}/>
    </Box>
  )
}