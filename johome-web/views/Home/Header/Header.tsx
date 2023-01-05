import { useRef, useState, useEffect } from "react"
import {
 StyledHeader,
 StyledHeaderContainer,
 HeaderTitle,
 HeaderSubtitle,
 StyledQuickSearch,
 Headline,
 HeadlineDivider,
 TitleHighlight,
 BackToSearch,
} from "./Header.styles"
import { Grid, Box, Container, Fade } from "@mui/material"
import { miniAvatars, reviews } from "./Header.copy"
import Image from "next/image"
import GoodValues from "../GoodValues"
import VideosThumb, { videos, Thumbnail } from "./VIdeosThumb"
import { Navbar } from "@/shared/layouts"
import {
 Cursor,
 StyledVideoButton,
 ThumbnailWrapper,
} from "./VideoThumbs.styles"
import { Carousel } from "@/shared/components"
import ReviewCard from "./ReviewCard"

export default function Header({ ...props }) {
 const [videoMode, setVideoMode] = useState(false)
 const cursorRef = useRef<HTMLDivElement>(null)
 const videoButtonRef = useRef<HTMLButtonElement>(null)
 const videoTextRef = useRef<HTMLParagraphElement>(null)
 const [activeVideo, setActiveVideo] = useState(1)

 const onCursorClick = () => {
  if (cursorRef.current && videoButtonRef.current) {
   cursorRef.current.style.transition = "all 2s linear"
   cursorRef.current.style.transform = "scale(3)"
   videoButtonRef.current.style.opacity = "0"
   setVideoMode(true)
  }
 }

 const onBackClick = () => {
  if (cursorRef.current && videoButtonRef.current) {
   cursorRef.current.style.transition = "all 1.2s linear"
   cursorRef.current.style.transform = "translate(50%, 0%) scale(1)"
   setVideoMode(false)
  }
 }

 useEffect(() => {
  if (!videoButtonRef.current || !cursorRef.current || !videoTextRef.current)
   return

  const videoButton = videoButtonRef.current
  const cursor = cursorRef.current
  const text = videoTextRef.current

  const resize = () => {
   const cursorWidth = cursor.offsetWidth
   videoButton.style.right = `${(cursorWidth + text.offsetWidth * 1.05) / 2}px`
  }

  resize()
  window.addEventListener("resize", resize)

  return () => {
   window.removeEventListener("resize", resize)
  }
 }, [])

 return (
  <>
   <Navbar
    logoVariant="colorful"
    linkColor={videoMode ? "common.white" : "grey.600"}
   />
   <StyledHeader mb={"23px"} {...props}>
    <Box
     className="video-btn"
     display="flex"
     alignItems="center"
     gap={1}
     ref={videoButtonRef}
     sx={{
      position: "absolute",
      top: "50%",
      zIndex: 10000,
      transform: "translate(50%, -50%)",
      transition: "all 1s",
     }}
    >
     <p ref={videoTextRef} className="text">
      Khám phá ngay
     </p>
     <StyledVideoButton
      color="primary.main"
      hoverColor="primary.600"
      onClick={onCursorClick}
      disabled={videoMode}
     >
      <Box height="22px">
       <svg
        width="19"
        height="22"
        viewBox="0 0 19 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
       >
        <path
         d="M0.700195 3.38562C0.700195 1.03509 3.28068 -0.402389 5.27925 0.834822L17.5797 8.44937C19.4743 9.62221 19.4743 12.3782 17.5797 13.551L5.27925 21.1655C3.28068 22.4028 0.700195 20.9653 0.700195 18.6148V3.38562Z"
         fill="#FFFFFF"
        />
       </svg>
      </Box>
     </StyledVideoButton>
    </Box>
    <Box
     position="absolute"
     sx={{ zIndex: 1, top: 0, left: 0, right: 0, bottom: 0 }}
    >
     <Cursor
      onTransitionEnd={() => {
       if (!videoMode && videoButtonRef.current) {
        videoButtonRef.current.style.opacity = "1"
       }
      }}
      ref={cursorRef}
     ></Cursor>
     <VideosThumb
      activeVideo={activeVideo}
      setActiveVideo={setActiveVideo}
      videoMode={videoMode}
     />
    </Box>
    <StyledHeaderContainer>
     {videoMode && (
      <ThumbnailWrapper>
       <BackToSearch onClick={onBackClick}>
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
          d="M4.90906 0.265208C4.50324 -0.109399 3.8706 -0.0840961 3.496 0.321722L0.2652 3.82168C-0.0883996 4.20474 -0.0883995 4.79518 0.265201 5.17824L3.496 8.67828C3.8706 9.0841 4.50323 9.10941 4.90905 8.73481C5.31487 8.36021 5.34018 7.72755 4.96558 7.32173L3.284 5.49997L13 5.49997C13.5523 5.49997 14 5.05225 14 4.49997C14 3.94768 13.5523 3.49997 13 3.49997L3.284 3.49997L4.96557 1.67829C5.34018 1.27247 5.31487 0.639814 4.90906 0.265208Z"
          fill="#1BBB83	"
         />
        </svg>
        Tìm địa điểm
       </BackToSearch>
       {videos.map((video, idx) => (
        <Thumbnail
         video={video}
         key={video.id}
         onClick={() => setActiveVideo(video.id)}
        />
       ))}
      </ThumbnailWrapper>
     )}
     <Grid container>
      <Grid item lg={6}>
       <Box display="flex" flexDirection="column" gap={7}>
        <Box>
         <Headline
          isVideoMode={videoMode}
          mt={3}
          mb={2}
          display="flex"
          alignItems="center"
          gap={0.5}
         >
          <HeadlineDivider isVideoMode={videoMode} component="span" />
          Khám phá vùng đất Việt Nam
         </Headline>
         <HeaderTitle isVideoMode={videoMode}>
          Trải nghiệm mỗi chuyến đi cùng{" "}
          <TitleHighlight>
           <span>Johome</span>
          </TitleHighlight>
          <span>
           <svg
            width="79"
            height="61"
            viewBox="0 0 79 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
           >
            <g clip-path="url(#clip0_909_2050)">
             <path
              d="M77.0203 54.1695C74.2403 55.6395 67.7903 56.3395 61.0203 57.3495C54.2503 58.3595 46.8203 59.5395 39.1303 60.3495C31.8389 61.2025 24.4599 60.9327 17.2503 59.5495C10.4603 58.2195 4.0003 55.6795 1.2503 53.5495C-1.4997 51.4195 0.500292 50.3995 7.43029 49.5495C14.3603 48.6995 25.9103 48.0095 39.1603 47.3995C52.4103 46.7895 64.1003 47.4995 70.8903 49.0395C77.6803 50.5795 79.8103 52.8295 77.0203 54.1695Z"
              fill="#63C4EE"
             />
             <path
              d="M9.01023 54.4096C8.93547 54.4104 8.86232 54.3879 8.80093 54.3452C8.73955 54.3025 8.69298 54.2417 8.6677 54.1714C8.64241 54.101 8.63966 54.0245 8.65983 53.9525C8.67999 53.8805 8.72208 53.8166 8.78023 53.7696C17.1178 47.3538 27.3601 43.908 37.8802 43.9796C48.9608 44.1432 59.7525 47.5388 68.9302 53.7496C68.9948 53.7924 69.0438 53.8549 69.07 53.9277C69.0962 54.0006 69.0982 54.0799 69.0758 54.154C69.0533 54.2281 69.0076 54.293 68.9453 54.339C68.8831 54.3851 68.8077 54.4098 68.7302 54.4096H9.01023Z"
              fill="#FFAC12"
             />
             <path
              d="M62.25 56.5598H15.61C15.5158 56.5619 15.4227 56.5384 15.3408 56.4917C15.2588 56.4451 15.1911 56.377 15.1449 56.2948C15.0987 56.2127 15.0757 56.1195 15.0783 56.0252C15.081 55.9309 15.1092 55.8392 15.16 55.7598C17.16 52.5498 25.41 40.8498 37.94 40.7598H38.1C52.16 40.7598 60.64 52.5398 62.7 55.7598C62.7474 55.8398 62.7729 55.9309 62.774 56.0239C62.775 56.1169 62.7515 56.2086 62.7059 56.2896C62.6603 56.3707 62.5942 56.4383 62.5142 56.4858C62.4341 56.5332 62.343 56.5587 62.25 56.5598Z"
              fill="#FFCA00"
             />
             <path
              d="M39.6097 43.9808C38.7363 44.4607 37.7725 44.7536 36.7797 44.8408C35.4891 44.9602 34.1945 44.6585 33.0897 43.9808C35.4297 34.9808 27.4297 20.6308 27.4297 20.6308L28.6697 20.0508L29.7597 19.5508C41.9897 32.2808 39.6097 43.9808 39.6097 43.9808Z"
              fill="#4D4F4E"
             />
             <path
              d="M36.7797 44.8408C35.4891 44.9602 34.1945 44.6585 33.0897 43.9808C35.4297 34.9808 27.4297 20.6308 27.4297 20.6308L28.6697 20.0508C35.6697 27.5808 36.7297 44.1208 36.7797 44.8408Z"
              fill="#383838"
             />
             <path
              d="M29.0203 20.2809C29.0203 20.2809 17.6703 12.8808 12.5103 25.3408C7.3503 37.8008 14.3303 28.2109 14.3303 28.2109C14.3303 28.2109 15.6103 32.6009 16.4603 30.8209C17.3103 29.0409 17.8603 27.9009 17.8603 27.9009C17.8603 27.9009 18.5603 31.0309 19.1003 29.9009C19.6403 28.7709 20.4503 26.2809 20.4503 26.2809C20.4503 26.2809 21.0003 28.4608 21.4003 28.0508C21.8003 27.6408 23.0503 21.1709 29.0203 20.2809Z"
              fill="#32D4C5"
             />
             <path
              d="M28.8398 20.399C28.8398 20.399 34.1898 7.93904 45.3798 15.469C56.5698 22.999 45.4498 18.859 45.4498 18.859C45.4498 18.859 46.8098 23.239 45.1098 22.219L42.3398 20.559C42.3398 20.559 43.4798 23.559 42.3998 22.899C41.3198 22.239 39.2498 20.599 39.2498 20.599C39.2498 20.599 39.9998 22.719 39.4398 22.599C38.8798 22.479 34.2898 17.819 28.8398 20.399Z"
              fill="#21C1AD"
             />
             <path
              d="M28.8198 20.5697C28.8198 20.5697 23.8198 7.97972 37.0298 5.38972C50.2398 2.79972 39.4798 7.73971 39.4798 7.73971C39.4798 7.73971 43.4798 9.86972 41.6098 10.3497L38.4798 11.1397C38.4798 11.1397 41.3998 12.4397 40.1798 12.7497C38.9598 13.0597 36.3298 13.3497 36.3298 13.3497C36.3298 13.3497 38.3298 14.3497 37.8698 14.6297C37.4098 14.9097 30.8498 14.8897 28.8198 20.5697Z"
              fill="#32D4C5"
             />
             <path
              d="M28.7497 20.1395C28.7497 20.1395 28.5297 6.57946 15.3097 9.27946C2.08971 11.9795 13.9697 12.3895 13.9697 12.3895C13.9697 12.3895 11.0497 15.9195 12.9697 15.6295L16.1697 15.1395C16.1697 15.1395 13.9797 17.4695 15.1697 17.2895C16.3597 17.1095 18.9597 16.3495 18.9597 16.3495C18.9597 16.3495 17.4697 18.0295 18.0297 18.1295C18.5897 18.2295 24.6697 15.6795 28.7497 20.1395Z"
              fill="#32D4C5"
             />
             <path
              d="M28.8698 20.4407C28.8698 20.4407 25.8698 16.3607 25.1798 13.2007C24.4898 10.0407 25.8298 5.35068 27.5898 2.52068C29.3498 -0.309319 28.7398 4.96068 28.7398 4.96068C28.7398 4.96068 30.6698 4.13068 30.6698 4.75068C30.3303 5.62784 29.847 6.44232 29.2398 7.16068C29.2398 7.16068 31.5298 6.81068 30.9398 7.39068C30.3498 7.97068 27.4798 16.1507 28.8698 20.4407Z"
              fill="#21C1AD"
             />
             <path
              d="M63.7596 5.42004C63.7596 6.85751 63.1886 8.23611 62.1721 9.25255C61.1557 10.269 59.7771 10.84 58.3396 10.84C57.5961 10.8417 56.8605 10.6885 56.1796 10.39C55.0375 9.89314 54.1013 9.01803 53.5287 7.91195C52.956 6.80587 52.7818 5.5363 53.0353 4.31685C53.2889 3.09739 53.9546 2.00246 54.9207 1.21625C55.8867 0.430053 57.0941 0.000563275 58.3396 3.71782e-05C59.0521 -0.00260665 59.7581 0.135781 60.4169 0.407226C61.0756 0.67867 61.6742 1.0778 62.178 1.58162C62.6818 2.08544 63.081 2.68399 63.3524 3.34277C63.6239 4.00155 63.7622 4.70753 63.7596 5.42004Z"
              fill="#FFCA00"
             />
             <path
              d="M51.7802 49.1693C51.7802 49.6793 49.3502 50.0893 46.3502 50.0893C43.3502 50.0893 40.9102 49.6793 40.9102 49.1693C40.9102 48.6593 43.3402 48.2793 46.3502 48.2793C49.3602 48.2793 51.7802 48.6493 51.7802 49.1693Z"
              fill="#FFB000"
             />
             <path
              d="M45.9004 48.7597L54.7204 29.4297H55.4604L46.4604 49.0097C46.4434 49.0452 46.4194 49.0769 46.3898 49.1028C46.3603 49.1288 46.3257 49.1484 46.2883 49.1606C46.2509 49.1727 46.2114 49.1772 46.1722 49.1736C46.133 49.17 46.095 49.1584 46.0604 49.1397C46.0239 49.1266 45.9905 49.1061 45.9624 49.0794C45.9343 49.0527 45.912 49.0205 45.8969 48.9848C45.8819 48.9491 45.8744 48.9106 45.875 48.8719C45.8756 48.8331 45.8843 48.7949 45.9004 48.7597Z"
              fill="#D63C12"
             />
             <path
              d="M67.1797 37.7397C65.1175 37.7626 63.0618 37.5035 61.0697 36.9698C59.4415 36.5684 57.8414 36.0606 56.2797 35.4497C55.2197 35.0397 54.0897 34.5497 52.9197 33.9797C52.0997 33.5797 51.2597 33.1398 50.3897 32.6498C49.0097 31.8698 47.5597 30.9797 46.0697 29.9497C44.5797 28.9197 43.2097 27.8697 41.7197 26.6297C41.7197 26.6297 50.9797 20.9297 58.3297 23.9797H58.4197L58.9497 24.2198C66.3997 27.9298 67.1797 37.7397 67.1797 37.7397Z"
              fill="#FF642E"
             />
             <path
              d="M58.3395 23.9805C54.4395 27.9805 51.9495 30.7305 50.3395 32.6505C48.9595 31.8705 47.5095 30.9805 46.0195 29.9505C46.0695 29.9505 51.5995 24.4705 58.3395 23.9805Z"
              fill="#FFCA00"
             />
             <path
              d="M67.1799 37.7405C65.1177 37.7633 63.062 37.5042 61.0699 36.9705C59.4417 36.5691 57.8416 36.0613 56.2799 35.4505C55.2199 35.0405 54.0899 34.5505 52.9199 33.9805L58.3399 23.9805H58.4299L58.9599 24.2205C66.3999 27.9305 67.1799 37.7405 67.1799 37.7405Z"
              fill="#EF3F0F"
             />
             <path
              d="M61.0703 36.9706C59.4421 36.5692 57.842 36.0615 56.2803 35.4506C56.8503 33.0506 57.5703 29.4506 58.2803 23.9806C58.2803 23.9806 58.2803 23.9206 58.2803 23.8906C58.301 23.9373 58.3279 23.9811 58.3603 24.0206C61.6103 29.0006 61.2103 35.5106 61.0703 36.9706Z"
              fill="#FFAC12"
             />
             <path
              d="M63.7598 5.42004C63.7598 6.85751 63.1888 8.23611 62.1724 9.25255C61.1559 10.269 59.7773 10.84 58.3398 10.84V3.71782e-05C59.0523 -0.00260665 59.7583 0.135781 60.4171 0.407226C61.0759 0.67867 61.6744 1.0778 62.1783 1.58162C62.6821 2.08544 63.0812 2.68399 63.3527 3.34277C63.6241 4.00155 63.7625 4.70753 63.7598 5.42004Z"
              fill="#FFAC12"
             />
            </g>
            <defs>
             <clipPath id="clip0_909_2050">
              <rect width="78.23" height="60.8" fill="white" />
             </clipPath>
            </defs>
           </svg>
          </span>
         </HeaderTitle>
         <HeaderSubtitle
          color={videoMode ? "white" : "grey.500"}
          maxWidth="100%"
         >
          Tìm và đặt vé ngay để có trải nghiệm tuyệt vời nhất.
         </HeaderSubtitle>
        </Box>
        {!videoMode && <StyledQuickSearch />}
        {!videoMode && (
         <HeaderSubtitle mb={2}>
          {/* <Box display="flex" alignItems="center" ml="5px">
           {miniAvatars.map((avatar) => (
            <MiniAvatar key={avatar.key} ml="-5px">
             <Image src={avatar.url} fill priority alt={avatar.key} />
            </MiniAvatar>
           ))}
           <MiniAvatar ml="-10px">3K+</MiniAvatar>
          </Box> */}
          <Box>
           <Carousel
            scrollDelay={250}
            clickDelay={300}
            options={{
             align: "start",
            }}
            spacing={1.5}
            style={{ cursor: "grab" }}
            slides={reviews}
            SlideComponent={ReviewCard}
           />
          </Box>
         </HeaderSubtitle>
        )}
       </Box>
      </Grid>
      <Grid item lg={12} mt={17}></Grid>
     </Grid>
    </StyledHeaderContainer>
   </StyledHeader>
   <Box>
    <Container maxWidth="xl">
     <GoodValues />
    </Container>
   </Box>
  </>
 )
}
