import React, { useState } from "react";
import {
 CardWrapper,
 Card,
 CardContent,
 Title,
 Subtitle,
 ExpandedImage,
} from "./DiscountCard.styles";
import { Box } from "@mui/material";
import { Fade } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";

type DiscountCardProps = {
 active?: boolean;
 title?: string;
 subtitle?: string;
 noSsr?: boolean;
 fadeColor?: string;
 image?: string;
};

export default function DiscountCard({
 active = false,
 title = "",
 subtitle = "",
 noSsr = true,
 fadeColor = "#FFFFFF",
 image,
 ...props
}: DiscountCardProps) {
 const theme = useTheme();
 const isLarge = useMediaQuery(theme.breakpoints.up("lg"), { noSsr });
 const [visible, setVisible] = useState(true);

 const [expanded, setExpanded] = useState(active ? 1 : 0);

 return (
  <CardWrapper
   image={image}
   fadecolor={fadeColor ? fadeColor : theme.palette.background.level2}
   active={active ? 1 : 0}
   onTransitionEnd={() => {
    setVisible(true);
    setExpanded(isLarge && active ? 1 : 0);
   }}
   py={4}
   px={4}
   {...props}
  >
   <Fade
    in={visible || !isLarge}
    timeout={{
     enter: 900,
     exit: 200,
    }}
   >
    <Card expanded={expanded}>
     <CardContent flexShrink={0} expanded={expanded}>
      <Box>
       <Title>{title}</Title>
       <Subtitle>{subtitle}</Subtitle>
      </Box>
      <Box>
       <Title>Lấy mã</Title>
      </Box>
     </CardContent>
     {!!expanded && image && (
      <ExpandedImage>
       <Image src={image} fill alt={title} priority />
      </ExpandedImage>
     )}
    </Card>
   </Fade>
  </CardWrapper>
 );
}
