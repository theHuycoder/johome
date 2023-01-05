import React from "react"
import AuthLayoutView from "./Auth.layout"
import { TextInput, CheckBox, Button } from "@/shared/components"
import { Grid, Box, FormGroup } from "@mui/material"

export default function SignUpView() {
 return (
  <AuthLayoutView
   title="Tạo tài khoản mới"
   subtitle="Chào mừng, hãy nhập thông tin của bạn"
   imgUrl="/assets/auth/signup.jpg"
  >
   <Box component="form" pt={5}>
    <Grid container spacing={5}>
     <Grid item lg={12}>
      <Grid container spacing={4}>
       <Grid item lg={6}>
        <TextInput fullWidth label="Họ" name="lastName" />
       </Grid>
       <Grid item lg={6}>
        <TextInput fullWidth label="Tên" name="firstName" />
       </Grid>
      </Grid>
     </Grid>
     <Grid item lg={12}>
      <TextInput fullWidth label="Email" name="email" />
     </Grid>
     <Grid item lg={12}>
      <TextInput fullWidth label="Mật khẩu" name="password" />
     </Grid>
     <Grid item lg={12}>
      <FormGroup sx={{ marginTop: "-16px" }}>
       <CheckBox label="Tôi đồng ý với điều khoản và chính sách" />
      </FormGroup>
     </Grid>
     <Grid item lg={12}>
      <Button
       hoverColor="primary.300"
       textColor="common.white"
       color="primary.main"
       fullWidth
      >
       Đăng ký
      </Button>
     </Grid>
    </Grid>
   </Box>
  </AuthLayoutView>
 )
}
