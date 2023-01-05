import styled from "styled-components"
import { Box, Typography } from "@mui/material"
import Google from "../Icons/Google"

export const GoogleLoginButton = styled(Box)`
 width: 256px;
 height: 56px;
 left: 0px;
 top: 4px;

 background: #1a73e8;
 border-radius: 100px;
 display: flex;
 align-items: center;
 padding: 0 4px;
 gap: 12px;
 cursor: pointer;
`

export const IconWrapper = styled(Box)`
 width: 50px;
 height: 48px;
 left: 4px;
 top: 4px;

 background: #ffffff;
 border-radius: 100px 0px 0px 100px;
 display: flex;
 align-items: center;
 justify-content: center;
`

const Title = styled(Typography)`
 //styleName: Button/Button1/Medium14px;
 font-family: "Mulish";
 font-size: 14px;
 font-weight: 800;
 line-height: 16px;
 letter-spacing: 0.5px;
 text-align: left;
 color: #fff;
`

export default function LoginWithGoogle({ onClick, ...props }: any) {
 return (
  <GoogleLoginButton onClick={onClick} {...props}>
   <IconWrapper>
    <Google />
   </IconWrapper>
   <Title>Đăng nhập bằng Google</Title>
  </GoogleLoginButton>
 )
}
