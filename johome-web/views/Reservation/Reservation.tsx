import React, {useMemo, useState} from 'react'
import {Navbar} from '@/shared/layouts'
import {Box, Container, Grid} from '@mui/material'
import {
  Stepper,
  Step,
  StepDivider,
  Title,
  ReservationDetailCard,
  CouponInput,
  PriceDetails
} from "./Reservation.styles";
import Information from './Information'
import {Footer} from '@/shared/components'
import Image from 'next/image'

const steps = [
  {
    id: "1",
    label: "Thông tin chi tiết"
  },
  {
    id: "2",
    label: "Tuỳ chọn thêm"
  },
  {
    id: "3",
    label: "Thanh toán"
  }
]

const stepperStyles = {
  done: {
    text: "#00AF6D",
    numberBg: "#1BBB83"
  },
  progress: {
    text: "#1F2937",
    numberBg: "#1BBB83"
  },
  notComplete: {
    text: "#9CA3AF",
    numberBg: "#D1D5DB"
  }
}

export const stepDetails: { [key: string]: any } = {
  "1": {
    title: "Xác nhận thông tin"
  },
  "2": {
    title: "Thêm vào chuyến đi"
  },
  "3": {
    title: "Xác nhận và thanh toán"
  }
}

export default function Reservation() {
  const [activeStep, setActiveStep] = useState("1")
  const stepDetail = useMemo(() => stepDetails[activeStep], [activeStep])

  const singlePrice = 999000
  const totalDays = 7
  const basicPrice = singlePrice * totalDays
  const discount = 0.1
  const servicePrice = 122000

  return (
    <Box pt={18}>
      <Navbar spread={true} logoVariant="colorful"/>
      <Container maxWidth="xl">
        <Grid container mb="108px">
          <Grid item lg={6}>
            <Grid container>
              <Grid item xs={12} mb={4}>
                <Stepper>
                  {steps.map((step, idx) => {
                      const getStepStyles = () => {
                        if (step.id === activeStep) {
                          return stepperStyles.progress
                        }

                        if (step.id < activeStep) {
                          return stepperStyles.done
                        }

                        return stepperStyles.notComplete
                      }

                      const style = getStepStyles()
                      if (idx === 0) {
                        return (
                          <Step color={style.text} bgColor={style.numberBg} key={step.id}>
                            <Box className="step-number">
                              {step.id}
                            </Box>
                            <Box>{step.label}</Box>
                          </Step>
                        )
                      }
                      return (
                        <Box key={step.id} display="flex" alignItems="center">
                          <StepDivider isDone={step.id < activeStep + 1}/>
                          <Step color={style.text} bgColor={style.numberBg} key={step.id}>
                            <Box className="step-number">
                              {step.id}
                            </Box>
                            <Box>{step.label}</Box>
                          </Step>
                        </Box>
                      )
                    }
                  )}
                </Stepper>
              </Grid>
              <Grid item xs={12}>
                <Title>
                  {stepDetail.title}
                </Title>
              </Grid>
              <Grid item xs={12}>
                <Information/>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={1}/>
          <Grid item lg={5}>
            <Box>
              <ReservationDetailCard>
                <Box className="img-wrapper">
                  <Image src="/assets/reservation/reservation.jpg" fill alt=""/>
                </Box>
                <Box className="title" mb="6px">
                  Rustic Bungalow, Nha Trang
                </Box>
                <Box className="owner">
                  <Box display="flex" alignItems="center" gap={3}>
                    <span>Chủ nhà</span>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Box className="avatar">
                        <Image src="/assets/reservation/owner.png" fill priority alt=""/>
                      </Box>
                      <Box className="name">Hải Châu</Box>
                    </Box>
                  </Box>
                  <Box>1 giường ngủ • 1 phòng tắm</Box>
                </Box>
                <Box className="summary" mt={3}>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Box className="info-box">
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M17 5H3C2.44772 5 2 5.44772 2 6V18C2 18.5523 2.44772 19 3 19H17C17.5523 19 18 18.5523 18 18V6C18 5.44771 17.5523 5 17 5ZM3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H17C18.6569 21 20 19.6569 20 18V6C20 4.34315 18.6569 3 17 3H3Z"
                              fill="#B1B5C3"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12H15C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10H8ZM5 14C4.44771 14 4 14.4477 4 15C4 15.5523 4.44771 16 5 16H11C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H5Z"
                              fill="#B1B5C3"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M5 0C4.44771 0 4 0.447715 4 1V5C4 5.55228 4.44771 6 5 6C5.55228 6 6 5.55228 6 5V1C6 0.447715 5.55228 0 5 0ZM15 0C14.4477 0 14 0.447715 14 1V5C14 5.55228 14.4477 6 15 6C15.5523 6 16 5.55228 16 5V1C16 0.447715 15.5523 0 15 0Z"
                              fill="#B1B5C3"/>
                      </svg>
                      <Box>
                        <label className="label">Ngày nhận phòng</label>
                        <div className="value">
                          15/10/2023
                        </div>
                      </Box>
                    </Box>
                    <Box>
                      <svg width="2" height="48" viewBox="0 0 2 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" width="1" height="48" fill="#E6E8EC"/>
                      </svg>
                    </Box>
                    <Box className="info-box">
                      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M17 5H3C2.44772 5 2 5.44772 2 6V18C2 18.5523 2.44772 19 3 19H17C17.5523 19 18 18.5523 18 18V6C18 5.44771 17.5523 5 17 5ZM3 3C1.34315 3 0 4.34315 0 6V18C0 19.6569 1.34315 21 3 21H17C18.6569 21 20 19.6569 20 18V6C20 4.34315 18.6569 3 17 3H3Z"
                              fill="#B1B5C3"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12H15C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10H8ZM5 14C4.44771 14 4 14.4477 4 15C4 15.5523 4.44771 16 5 16H11C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H5Z"
                              fill="#B1B5C3"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M5 0C4.44771 0 4 0.447715 4 1V5C4 5.55228 4.44771 6 5 6C5.55228 6 6 5.55228 6 5V1C6 0.447715 5.55228 0 5 0ZM15 0C14.4477 0 14 0.447715 14 1V5C14 5.55228 14.4477 6 15 6C15.5523 6 16 5.55228 16 5V1C16 0.447715 15.5523 0 15 0Z"
                              fill="#B1B5C3"/>
                      </svg>
                      <Box>
                        <label className="label">Ngày nhận phòng</label>
                        <div className="value">
                          15/10/2023
                        </div>
                      </Box>
                    </Box>
                  </Box>
                  <Box mt={3}>
                    <Box className="info-box">
                      <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9 12C5.13401 12 2 15.134 2 19V21C2 21.5523 1.55228 22 1 22C0.447715 22 0 21.5523 0 21V19C0 14.0294 4.02944 10 9 10C13.9706 10 18 14.0294 18 19V21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21V19C16 15.134 12.866 12 9 12Z"
                              fill="#B1B5C3"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M9 10C11.2091 10 13 8.20914 13 6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6C5 8.20914 6.79086 10 9 10ZM9 12C12.3137 12 15 9.31371 15 6C15 2.68629 12.3137 0 9 0C5.68629 0 3 2.68629 3 6C3 9.31371 5.68629 12 9 12Z"
                              fill="#B1B5C3"/>
                      </svg>
                      <Box>
                        <label className="label">Số người</label>
                        <div className="value">
                          2 người lớn
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box mt={3}>
                  <Box className="title" mb={1.5}>
                    Giá chi tiết
                  </Box>
                  <CouponInput>
                    <input type="text" placeholder="Nhập mã giảm giá"/>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1203_10123)">
                        <rect width="32" height="32" rx="16" fill="#1BBB83"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M18.0909 11.2652C18.4968 10.8906 19.1294 10.9159 19.504 11.3217L22.7348 14.8217C23.0884 15.2047 23.0884 15.7952 22.7348 16.1782L19.504 19.6783C19.1294 20.0841 18.4968 20.1094 18.0909 19.7348C17.6851 19.3602 17.6598 18.7276 18.0344 18.3217L19.716 16.5L10 16.5C9.44771 16.5 9 16.0523 9 15.5C9 14.9477 9.44771 14.5 10 14.5L19.716 14.5L18.0344 12.6783C17.6598 12.2725 17.6851 11.6398 18.0909 11.2652Z"
                              fill="#F9FAFB"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1203_10123">
                          <rect width="32" height="32" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </CouponInput>
                  <PriceDetails display="flex" flexDirection="column" gap={0.5}>
                    <Box className="row">
                      <Box className="label">{singlePrice.toLocaleString("vi-VN")} x {totalDays} đêm</Box>
                      <Box className="value">{(basicPrice).toLocaleString("vi-VN")}</Box>
                    </Box>
                    <Box className="row">
                      <Box className="label">{discount * 100}% giảm giá</Box>
                      <Box className="value">{(basicPrice * discount * -1).toLocaleString("vi-VN")}</Box>
                    </Box>


                  </PriceDetails>
                </Box>
              </ReservationDetailCard>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer sx={{backgroundColor: "#F3F4F6", paddingTop: "72px"}}></Footer>
    </Box>
  )
}