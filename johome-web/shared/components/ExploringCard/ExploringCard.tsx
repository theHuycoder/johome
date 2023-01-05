import React from "react"
import {
 CardWrapper,
 ImageWrapper,
 ContentWrapper,
 Title,
 Location,
 Price,
} from "./ExploringCard.styles"
import { Box, Typography } from "@mui/material"
import Image from "next/image"
import { RateStar } from "../Icons"

type ExploringCardProps = {
 image?: string
 name?: string
 location?: string
 stars?: number
 reviews?: number
 price?: number
 currency?: string
 unit?: string
 id?: string
}

export default function ExploringCard({
 image = "/assets/home/exploring-1.jpg",
 name = "Coco Riverside Lodge",
 location = "Vũng Liêm, Vĩnh Long ",
 reviews = 0,
 stars = 0,
 currency = "VND",
 price = 0,
}: ExploringCardProps) {
 return (
  <CardWrapper>
   <ImageWrapper>
    <Image src={image} alt={name} fill priority sizes="" />
   </ImageWrapper>
   <Box p={2.5}>
    <ContentWrapper mb={0.5}>
     <Box display="flex" flexDirection="column" mb={1}>
      {name && <Title>{name}</Title>}
      {location && <Location>{location}</Location>}
     </Box>
     <Box display="flex" alignItems="center" gap={1}>
      <Box display="flex" gap={0.5} alignItems="center">
       <RateStar />
       <Typography variant="caption">{stars}</Typography>
      </Box>
      <Box width="1.5px" pt="10px" sx={{ backgroundColor: "#000" }}></Box>
      <Box>
       <Typography variant="caption">{reviews} Đánh giá</Typography>
      </Box>
     </Box>
    </ContentWrapper>
    <Box>
     <Price display="flex" alignItems="center" gap={1}>
      <Typography variant="inherit" component="span" color="secondary">
       {currency}
      </Typography>
      <Typography variant="inherit" component="span" color="primary">
       {price}
      </Typography>
     </Price>
    </Box>
   </Box>
  </CardWrapper>
 )
}
