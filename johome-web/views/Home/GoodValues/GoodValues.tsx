import React from "react"
import { Grid, Box } from "@mui/material"
import { SectionTitle, SectionSubtitle } from "@/shared/components/Typography"
import { ImagePlaceholder } from "@/shared/components/Icons"
import { ValueSubtitle, ValueTitle, IndexChip } from "./GoodValues.styles"
import Image from "next/image"

const goodValues = [
 {
  title: "Đa dạng lựa chọn",
  subtitle:
   "Dễ dàng lựa chọn homestay với nhiều phong cách khác nhau và luôn phù hợp với kinh phí du lịch của bạn.",
  color: "#8BC5E5",
 },
 {
  color: "#8BC5E5",
  title: "Trải nghiệm khác biệt",
  subtitle:
   "Nhiều Homestay trên khắp đất nước Việt Nam. Mang đến trải nghiệm mới lạ, độc đáo, dành riêng cho bạn.",
 },
 {
  color: "#57C798",
  title: "Tiết kiệm thời gian",
  subtitle:
   "Gợi ý phù hợp đúng đối tượng. Hình thức giao dịch trực tuyến an toàn, thanh toán tiện lợi, nhanh chóng.",
 },
]

export default function GoodValues() {
 return (
  <Grid container gap={6.25}>
   <Grid item xs={12}>
    <SectionTitle mb={2.25}>Vì sao nên chọn Johome</SectionTitle>
   </Grid>
   {/* <Grid item xs={12} md={8}>
    <Box
     display="flex"
     alignItems="flex-start"
     justifyContent="space-between"
     gap={12}
    >
     <Box>
      <ImagePlaceholder />
      <Box>
       <ValueTitle>Đa dạng lựa chọn</ValueTitle>
       <ValueSubtitle maxWidth="80%">
        Amet minim mollit non deserunt ullamco.{" "}
       </ValueSubtitle>
      </Box>
     </Box>
     <Box mt={6.75}>
      <ImagePlaceholder />
      <Box>
       <ValueTitle>Sự trải nghiệm</ValueTitle>
       <ValueSubtitle maxWidth="80%">
        Amet minim mollit non deserunt ullamco.{" "}
       </ValueSubtitle>
      </Box>
     </Box>
     <Box>
      <ImagePlaceholder />
      <Box>
       <ValueTitle>Tiết kiệm thời gian</ValueTitle>
       <ValueSubtitle maxWidth="80%">
        Amet minim mollit non deserunt ullamco.{" "}
       </ValueSubtitle>
      </Box>
     </Box>
    </Box>
   </Grid> */}
   <Grid item xs={12}>
    <Grid container>
     <Grid item md={5}>
      <Box display="flex" flexDirection="column" gap={6}>
       {goodValues.map((value, idx) => (
        <Box key={value.title} display="flex" gap={2} flexDirection="column">
         <IndexChip _color={value.color}>{0 + `${idx + 1}`}</IndexChip>
         <ValueTitle>{value.title}</ValueTitle>
         <ValueSubtitle maxWidth="75%">{value.subtitle}</ValueSubtitle>
        </Box>
       ))}
      </Box>
     </Grid>
     <Grid item md={7}>
      <Box position="relative" height="100%">
       <Image
        style={{ objectFit: "cover" }}
        src="/assets/home/good-values.png"
        width="674"
        height="632"
        priority
        alt="good-values"
       />
      </Box>
     </Grid>
    </Grid>
   </Grid>
  </Grid>
 )
}
