import React from 'react'
import {Box, Container, Grid, Typography} from "@mui/material";
import {FooterColumn, Link} from "@/shared/components/Footer/Footer.styles";
import {LogoColor} from "@/shared/components/Icons";

const footerLinks = [
  {
    title: "Về Johine",
    links: [
      {
        id: 1,
        title: "Cách đặt chỗ",
        link: ""
      },
      {
        id: 2,
        title: "Liên hệ chúng tôi",
        link: ""
      },
      {
        id: 3,
        title: "Trợ giúp",
        link: ""
      },
      {
        id: 4,
        title: "Tuyển dụng",
        link: ""
      },
      {
        id: 5,
        title: "Về chúng tôi",
        link: ""
      }
    ]
  },
  {
    title: "Dịch vụ",
    links: [
      {
        id: 1,
        title: "Homestay",
        link: ""
      },
      {
        id: 2,
        title: "Trải nghiệm",
        link: ""
      },
      {
        id: 3,
        title: "Vé tham quan",
        link: ""
      },
      {
        id: 4,
        title: "Combo tiết kiệm",
        link: ""
      },
      {
        id: 5,
        title: "Đặt xe",
        link: ""
      }
    ]
  },
  {
    title: "Khác",
    links: [
      {
        id: 1,
        title: "Johome Blog",
        link: ""
      },
      {
        id: 2,
        title: "Chính sách quyền riêng tư",
        link: ""
      },
      {
        id: 3,
        title: "Điều khoản sử dụng",
        link: ""
      },
      {
        id: 4,
        title: "Quy chế hoạt động",
        link: ""
      },
      {
        id: 5,
        title: "Về chúng tôi",
        link: ""
      }
    ]
  },
  {
    title: "Liên hệ",
    links: [
      {
        id: 1,
        title: "Facebook"
      },
      {
        id: 2,
        title: "Instagram",
        link: ""
      },
      {
        id: 3,
        title: "Youtube",
        link: ""
      }
    ]
  }
]

export default function Footer() {
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="column" justifyContent="space-between">
              <Box mb="125px">
                <LogoColor/>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Link>Trở thành đối tác</Link>
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M9.09094 0.265208C9.49676 -0.109399 10.1294 -0.0840961 10.504 0.321722L13.7348 3.82168C14.0884 4.20474 14.0884 4.79518 13.7348 5.17824L10.504 8.67828C10.1294 9.0841 9.49677 9.10941 9.09095 8.73481C8.68513 8.36021 8.65982 7.72755 9.03442 7.32173L10.716 5.49997L0.999999 5.49997C0.447714 5.49997 -7.65183e-07 5.05225 -7.87716e-07 4.49997C-8.10247e-07 3.94768 0.447714 3.49997 0.999999 3.49997L10.716 3.49997L9.03443 1.67829C8.65982 1.27247 8.68513 0.639814 9.09094 0.265208Z"
                        fill="#1BBB83"/>
                </svg>

              </Box>
            </Box>
          </Grid>
          <Grid item xs={8} mb="100px">
            <Box display="flex" alignItems="center" gap="82px">
              {footerLinks.map((item, index) => (
                <FooterColumn key={item.title}>
                  <Box className="title">{item.title}</Box>
                  <Box className="links-wrapper">
                    {item.links.map((link) => (
                      <Box key={link.id} className="link">{link.title}</Box>
                    ))}
                  </Box>
                </FooterColumn>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <hr style={{color: "#D1D5DB", height: "1px", background: "#D1D5DB", border: "none"}}/>
      <Container maxWidth="xl" sx={{padding: "8px 0"}}>
        <Typography variant="caption">
          Copyright © 2021 UI8 LLC. All rights reserved
        </Typography>
      </Container>
    </Box>
  )
}