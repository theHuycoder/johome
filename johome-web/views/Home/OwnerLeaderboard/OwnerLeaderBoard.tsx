import React, {useState} from "react"
import {Box, Container, Grid} from "@mui/material"
import Image from "next/image"
import {SectionTitle, SectionSubtitle} from "@/shared/components/Typography";
import {TabWrapper, LeaderBoard, LeaderRow, Avatar} from "@/views/Home/OwnerLeaderboard/OwnerLeaderboard.styles";

const owners = [
  {
    id: 1,
    avatar: "/assets/home/owner-1.jpg",
    name: "Đỗ Minh Phương",
    deals: 233,
    stars: 4.8
  },
  {
    id: 2,
    avatar: "/assets/home/owner-2.jpg",
    name: "Đỗ Quang Huy ",
    deals: 202,
    stars: 4.8
  },
  {
    id: 3,
    avatar: "/assets/home/owner-3.jpg",
    name: "Trần Minh Hiếu",
    deals: 189,
    stars: 4.8
  }
]

export default function OwnerLeaderBoard() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <Box position="relative" minHeight="1038px" pt={12} mb={8}>
      <Image
        src="/assets/home/owner.jpeg"
        fill
        priority
        alt=""
        style={{objectFit: "cover"}}
      />
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} mb="116px">
            <Box>
              <SectionTitle color="common.white" textAlign="center" mb={2}>
                Chủ nhà tốt nhất của chúng tôi
              </SectionTitle>
              <SectionSubtitle position="relative" sx={{zIndex: 10, width: "485px", margin: "auto"}}
                               color="common.white"
                               textAlign="center">
                Homestay đầy đủ tiện nghi, giá cá hợp lí. Chủ nhà thân thiện, dễ mến, đáng tin cậy, tỷ
                lệ trả lời cao.
              </SectionSubtitle>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item lg={6}></Grid>
              <Grid item lg={6}>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={3}>
                  <Box>
                    <TabWrapper>
                      <Box className={`tab ${activeTab === 0 ? "active" : ""}`} onClick={() => setActiveTab(0)}>Tuần
                        này</Box>
                      <Box className={`tab ${activeTab === 1 ? "active" : ""}`} onClick={() => setActiveTab(1)}>Tháng
                        này</Box>
                      <Box className="slider" sx={{
                        left: `${activeTab * 120 + 4}px`
                      }}/>
                    </TabWrapper>
                  </Box>
                  <Box>
                    <LeaderBoard>
                      {owners.map((owner) => <LeaderRow key={owner.id}>
                        <Avatar>
                          <Box className="text">
                            {owner.id}
                          </Box>
                          <Box className="img-wrapper">
                            <Image width={72} height={72} priority src={owner.avatar} alt={owner.name}/>
                          </Box>
                        </Avatar>
                        <Box className="info-wrapper">
                          <Box>
                            <Box className="name">{owner.name}</Box>
                          </Box>
                          <Box display="flex" alignItems="center" gap={0.5}>
                            <Box className="info-text">{owner.deals} Lượt đặt phòng</Box>
                            <Box>
                              <svg width="1" height="16" viewBox="0 0 1 16" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="16" stroke="#6B7280"/>
                              </svg>
                            </Box>
                            <Box className="info-text">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_823_1163)">
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7.26767 0.771504L8.34954 2.90038L10.7783 3.24313C11.9161 3.40365 12.4362 4.80771 11.5591 5.63743L9.81454 7.28626L10.2251 9.60958C10.4354 10.7998 9.17217 11.5991 8.17747 11.0923L5.99988 9.98149L3.82293 11.0919C2.82676 11.6004 1.56462 10.7984 1.77462 9.60963L2.18521 7.28626L0.440937 5.63766C-0.43679 4.80734 0.0851321 3.40358 1.22135 3.24315L3.65029 2.90036L4.7327 0.771504C5.25548 -0.257123 6.74499 -0.257213 7.26767 0.771504Z"
                                        fill="#FFD166"/>
                                </g>
                                <defs>
                                  <clipPath id="clip0_823_1163">
                                    <rect width="12" height="12" fill="white"/>
                                  </clipPath>
                                </defs>
                              </svg>
                              {owner.stars}
                            </Box>
                          </Box>
                        </Box>
                      </LeaderRow>)}
                    </LeaderBoard>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
