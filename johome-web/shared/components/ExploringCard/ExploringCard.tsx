import React from "react"
import {
 CardWrapper,
 ImageWrapper,
 ContentWrapper,
 Title,
 Location,
 Price,
 FavoriteIcon,
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
 id?: string | number
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
   <FavoriteIcon>
    <svg
     width="22"
     height="18"
     viewBox="0 0 22 18"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
    >
     <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.6924 3.91706C11.3055 4.28838 10.6945 4.28838 10.3076 3.91706L9.6152 3.2526C8.80477 2.47487 7.70994 2 6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.88263 3.28979 10.8501 5.15176 12.4666C7.01532 14.0844 9.2434 15.1574 10.5746 15.7051C10.853 15.8196 11.147 15.8196 11.4254 15.7051C12.7566 15.1574 14.9847 14.0844 16.8482 12.4666C18.7102 10.85 20 8.88262 20 6.5C20 4.01472 17.9853 2 15.5 2C14.2901 2 13.1952 2.47487 12.3848 3.2526L11.6924 3.91706ZM11 1.80957C9.83211 0.688804 8.24649 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 12.8683 6.97034 16.385 9.81379 17.5547C10.5796 17.8697 11.4204 17.8697 12.1862 17.5547C15.0297 16.385 22 12.8682 22 6.5C22 2.91015 19.0899 0 15.5 0C13.7535 0 12.1679 0.688804 11 1.80957Z"
      fill="#F9FAFB"
     />
    </svg>
   </FavoriteIcon>
   <ImageWrapper>
    <Image src={image} alt={name} fill priority sizes="" />
   </ImageWrapper>
   <Box p={2.5}>
    <ContentWrapper mb={0.5}>
     <Box display="flex" flexDirection="column" mb={1}>
      {name && <Title>{name}</Title>}
      {location && <Location>{location}</Location>}
     </Box>
     <Box display="flex" alignItems="baseline" gap={1}>
      <Box display="flex" gap={0.5} alignItems="baseline">
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
     <Price display="flex" alignItems="baseline" gap={1}>
      <Typography variant="inherit" component="span" color="secondary">
       {currency}
      </Typography>
      <Typography variant="inherit" component="span" color="primary">
       {price?.toLocaleString("vi-VN") || ""}
      </Typography>
      <Typography component="span" variant="caption" color="grey.600">
       {" "}
       /đêm
      </Typography>
     </Price>
    </Box>
   </Box>
  </CardWrapper>
 )
}
