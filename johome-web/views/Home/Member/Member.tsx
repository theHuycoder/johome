import React from 'react';
import {Box, Grid, Container} from '@mui/material';
import Image from 'next/image';
import {MemberContent} from "@/views/Home/Member/Member.styles";
import {Button} from "@/shared/components";

export default function Member() {
  return (
    <Box position="relative" height="600px" pt={1} mb={9}>
      <Image src="/assets/home/member.jpg" alt="member" priority fill style={{objectFit: "cover"}}/>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12}>
            <MemberContent>
              <Box>
                <Box className="head" mb={1.5}>
                  Đã có hơn 10.000 thành viên vào năm 2022
                </Box>
                <Box className="title" width="666px" mx="auto" mb={7}>
                  Đăng ký làm thành viên
                  để nhận được ưu đãi mới nhất
                </Box>
                <Box>
                  <Button color="primary.main" textColor="common.white" hoverColor="primary.600">
                    Đăng ký tham gia
                  </Button>
                </Box>
              </Box>
            </MemberContent>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}