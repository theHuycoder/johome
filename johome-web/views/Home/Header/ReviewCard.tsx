import React from "react"
import styled from "styled-components"
import { Box, Typography, BoxProps } from "@mui/material"
import Image from "next/image"

const Star = () => (
 <svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
 >
  <path
   d="M6.38872 1.08612C6.62032 0.549419 7.38133 0.549419 7.61293 1.08612L9.06629 4.45404C9.16436 4.6813 9.38026 4.83551 9.62703 4.85458L13.3542 5.14258C13.9521 5.18879 14.1897 5.93949 13.7272 6.32135L10.9243 8.63554C10.7266 8.79877 10.64 9.06091 10.7016 9.30978L11.5642 12.7953C11.7061 13.3686 11.0878 13.8296 10.5789 13.53L7.33904 11.6227C7.1303 11.4998 6.87134 11.4998 6.66261 11.6227L3.42277 13.53C2.91391 13.8296 2.29555 13.3686 2.43741 12.7953L3.30004 9.30978C3.36163 9.06091 3.27505 8.79877 3.07735 8.63554L0.274413 6.32135C-0.188095 5.93949 0.049509 5.18879 0.647502 5.14258L4.37461 4.85458C4.62139 4.83551 4.83729 4.68129 4.93536 4.45404L6.38872 1.08612Z"
   fill="#FFD166"
  />
 </svg>
)

type ReviewCardProps = {
 name: string
 avatar: string
 stars: number
 review: string
 color: string
} & BoxProps

const StyledReviewCard = styled(Box)`
 width: 256px;
 background: #ffffff;
 box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
 border-radius: 16px;
 display: flex;
 flex-direction: column;
 gap: 4px;
 padding: 20px;
 border: 1px solid ${(props: any) => props.borderColor || "#000"};
`

const Avatar = styled(Box)`
 border-radius: 48px;
 width: 36px;
 height: 36px;
 overflow: hidden;
 position: relative;

 img {
  object-fit: cover;
 }
`

export const Name = styled(Typography)`
 //styleName: Caption/Caption2/Bold 12px;
 font-family: "Mulish";
 font-size: 12px;
 font-weight: 700;
 line-height: 20px;
 letter-spacing: 0px;
 text-align: left;
`

export const Review = styled(Typography)`
 font-family: "Mulish";
 font-size: 10px;
 font-weight: 400;
 line-height: 14px;
 letter-spacing: 0.4000000059604645px;
 text-align: left;
`

export default function ReviewCard({
 avatar = "",
 name = "",
 color = "",
 review = "",
 stars = 5,
 ...props
}: ReviewCardProps) {
 return (
  <StyledReviewCard borderColor={color} {...props}>
   <Box display="flex" gap="10px" alignItems="center">
    <Avatar>
     <Image src={avatar} fill priority alt={name} />
    </Avatar>
    <Box>
     <Name>{name}</Name>
     <Box display="flex" alignItems="center" gap={0.5}>
      {[...Array(stars)].map((_, i) => (
       <Star key={i} />
      ))}
     </Box>
    </Box>
   </Box>
   <Box>
    <Review>{review}</Review>
   </Box>
  </StyledReviewCard>
 )
}
