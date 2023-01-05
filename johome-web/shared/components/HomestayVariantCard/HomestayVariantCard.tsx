import { Typography, Box } from "@mui/material"
import {
 ImageWrapper,
 CardWrapper,
 ContentWrapper,
} from "./HomestayVariantCard.styles"
import Image from "next/image"
import Link from "next/link"

type HomestayVariantsProps = {
 title: string
 imgUrl: string
 description?: string
 link?: string
}

export default function HomestayVariants({
 imgUrl,
 title,
 description,
 link,
}: HomestayVariantsProps) {
 return (
  <CardWrapper
   display="flex"
   flexDirection="column"
   alignItems="center"
   justifyContent="center"
  >
   <ImageWrapper>
    <Image src={imgUrl} alt={title} fill priority sizes="" />
    <Box
     position="absolute"
     sx={{
      bottom: "20px",
      left: 0,
      right: 0,
      zIndex: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#FFF",
      fontFamily: "Mulish",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "28px",
     }}
    >
     {title}
    </Box>
   </ImageWrapper>
   <ContentWrapper
    display={"flex"}
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    gap={1}
   >
    {description && (
     <Typography variant="body2" color="grey.600" textAlign="center">
      {description}
     </Typography>
    )}
    {link && (
     <Link href={link}>
      <Typography variant="body2" color="secondary">
       Xem tất cả
      </Typography>
     </Link>
    )}
   </ContentWrapper>
  </CardWrapper>
 )
}
