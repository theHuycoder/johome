import React, { useState } from "react"
import {
 CardWrapper,
 Card,
 CardContent,
 Title,
 Subtitle,
 ExpandedImage,
 PriceBox,
 OriginalPrice,
 SalePrice,
 CountdownText,
 Ribbon,
 Action,
} from "./DiscountCard.styles"
import { Box } from "@mui/material"
import { Fade } from "@mui/material"
import { useTheme, useMediaQuery } from "@mui/material"
import Image from "next/image"
import Countdown from "react-countdown"
import { formatPrice } from "@/shared/utils/formatPrice"

type DiscountCardProps = {
 active?: boolean
 title?: string
 subtitle?: string
 noSsr?: boolean
 fadeColor?: string
 image?: string
 salePercent?: number
 originalPrice?: number
 salePrice?: number
 date?: {
  from: string
  to: string
 }
}

export default function DiscountCard({
 active = false,
 title = "",
 subtitle = "",
 noSsr = true,
 fadeColor = "#FFFFFF",
 originalPrice = 0,
 salePrice = 0,
 image,
 salePercent,
 date,
 ...props
}: DiscountCardProps) {
 const theme = useTheme()
 const isLarge = useMediaQuery(theme.breakpoints.up("lg"), { noSsr })
 const [visible, setVisible] = useState(true)

 const [expanded, setExpanded] = useState(active ? 1 : 0)

 return (
  <CardWrapper
   image={image}
   fadecolor={fadeColor ? fadeColor : theme.palette.background.level2}
   active={active ? 1 : 0}
   onTransitionEnd={() => {
    setVisible(true)
    setExpanded(isLarge && active ? 1 : 0)
   }}
   pt={expanded ? 4 : 6}
   pb={4}
   px={4}
   {...props}
  >
   <Ribbon>
    <span>Sale {salePercent || 0}%</span>
   </Ribbon>
   <Fade
    in={visible || !isLarge}
    timeout={{
     enter: 900,
     exit: 200,
    }}
   >
    <Card expanded={expanded}>
     {!!expanded && image && (
      <ExpandedImage>
       <Image src={image} fill alt={title} priority />
      </ExpandedImage>
     )}
     <CardContent flexShrink={0} expanded={expanded}>
      <Box>
       {!!expanded && <Title>{title}</Title>}
       {!!expanded && <Subtitle>{subtitle}</Subtitle>}
      </Box>
      <PriceBox>
       {!expanded && <Title>{title}</Title>}
       <OriginalPrice>{formatPrice(originalPrice)}</OriginalPrice>
       <SalePrice>{formatPrice(salePrice)}</SalePrice>
      </PriceBox>
      {!!expanded && (
       <Box>
        <Countdown
         date={date?.to}
         daysInHours
         renderer={({ formatted }) => {
          return (
           <CountdownText as="span" suppressHydrationWarning={true}>
            {formatted.hours + "h"}:{formatted.minutes + "m"}:
            {formatted.seconds}
           </CountdownText>
          )
         }}
        />
       </Box>
      )}
      {!!expanded && (
       <Box display="flex" alignItems="center" gap={1}>
        <Action>Xem chi tiết</Action>
        <svg
         width="14"
         height="9"
         viewBox="0 0 14 9"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
        >
         <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.09094 0.265208C9.49676 -0.109399 10.1294 -0.0840961 10.504 0.321722L13.7348 3.82168C14.0884 4.20474 14.0884 4.79518 13.7348 5.17824L10.504 8.67828C10.1294 9.0841 9.49677 9.10941 9.09095 8.73481C8.68513 8.36021 8.65982 7.72755 9.03442 7.32173L10.716 5.49997L0.999999 5.49997C0.447714 5.49997 -7.65183e-07 5.05225 -7.87716e-07 4.49997C-8.10247e-07 3.94768 0.447714 3.49997 0.999999 3.49997L10.716 3.49997L9.03443 1.67829C8.65982 1.27247 8.68513 0.639814 9.09094 0.265208Z"
          fill="#1BBB83"
         />
        </svg>
       </Box>
      )}
     </CardContent>
    </Card>
   </Fade>
  </CardWrapper>
 )
}
