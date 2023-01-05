import React from "react"
import Image from "next/image"

import { Grid, Box, Container } from "@mui/material"
import {
 AuthContainer,
 ImageWrapper,
 FormWrapper,
 Title,
 Subtitle,
} from "./Auth.styles"
import { PropsWithChildren } from "react"
import { LogoMd } from "@/shared/components/Icons"
import { LoginWithGoogle } from "@/shared/components/AuthProvider"

type AuthLayoutViewProps = {
 imgUrl?: string
 title?: string
 subtitle?: string
 hasGoogleLogin?: boolean
}

export default function AuthLayoutView({
 imgUrl,
 children,
 title,
 subtitle,
 hasGoogleLogin = true,
}: PropsWithChildren<AuthLayoutViewProps>) {
 return (
  <AuthContainer>
   {imgUrl && <Image fill src={imgUrl} priority alt="login" />}
   <Container maxWidth="xl" sx={{ position: "relative", zIndex: 100 }}>
    <Grid container height="100%" alignItems="center">
     <Grid item lg={5}>
      <FormWrapper>
       <Grid container>
        <Grid item xs={12}>
         <Box mb={3}>
          <LogoMd />
         </Box>
         <Box mb={5} display="flex" flexDirection="column" gap={2}>
          {title && <Title m={0}>{title}</Title>}
          {subtitle && <Subtitle m={0}>{subtitle}</Subtitle>}
         </Box>
         <Box>{hasGoogleLogin && <LoginWithGoogle />}</Box>
        </Grid>
        {children && (
         <Grid item xs={12}>
          {children}
         </Grid>
        )}
       </Grid>
      </FormWrapper>
     </Grid>
    </Grid>
   </Container>
  </AuthContainer>
 )
}
