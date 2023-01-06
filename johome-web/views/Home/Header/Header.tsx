import {useRef, useState, useEffect} from "react"
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
import {Grid, Box, Container} from "@mui/material"
import {reviews} from "./Header.copy"
import GoodValues from "../GoodValues"
import VideosThumb, {videos, Thumbnail} from "./VIdeosThumb"
import {Navbar} from "@/shared/layouts"
import {
  Cursor,
  StyledVideoButton,
  ThumbnailWrapper,
} from "./VideoThumbs.styles"
import {Carousel} from "@/shared/components"
import ReviewCard from "./ReviewCard"

export default function Header({...props}) {
  const [videoMode, setVideoMode] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const videoButtonRef = useRef<HTMLButtonElement>(null)
  const videoTextRef = useRef<HTMLParagraphElement>(null)
  const [activeVideo, setActiveVideo] = useState(1)
  const quickSearchRef = useRef<HTMLDivElement>(null)
  const reviewRef = useRef<HTMLDivElement>(null)
  const thumbnailRef = useRef<HTMLDivElement>(null)

  const onCursorClick = () => {
    if (cursorRef.current && videoButtonRef.current && quickSearchRef.current && reviewRef.current && thumbnailRef.current) {
      cursorRef.current.style.transition = "all 4s linear"
      cursorRef.current.style.transform = "scale(6)"
      videoButtonRef.current.style.opacity = "0"
      quickSearchRef.current.style.transform = "translateX(-100vw)"
      quickSearchRef.current.style.opacity = "0"
      reviewRef.current.style.transform = "translateX(-100vw)"
      reviewRef.current.style.opacity = "0"
      thumbnailRef.current.style.pointerEvents = "auto"
      thumbnailRef.current.style.transform = "translateY(0)"
      thumbnailRef.current.style.opacity = "1"
      // quickSearchRef.current.style.display = "none"
      setVideoMode(true)
    }
  }

  const onBackClick = () => {
    if (cursorRef.current && thumbnailRef.current) {
      cursorRef.current.style.transition = "all 1.2s linear"
      cursorRef.current.style.transform = "translate(35%, -4%) scale(1)"
      // quickSearchRef.current.style.display = "block"
      thumbnailRef.current.style.transform = "translateY(100%)"
      thumbnailRef.current.style.opacity = "0"
      thumbnailRef.current.style.pointerEvents = "none"

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
      videoButton.style.right = `${(cursorWidth + text.offsetWidth * 2.75) / 2}px`
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
        spread={videoMode}
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
            top: "20%",
            zIndex: 10000,
            transform: "translate(50%, -50%)",
            transition: "all 1s",
          }}
        >
          <p ref={videoTextRef} className="text">
            Khám phá ngay
          </p>
          <StyledVideoButton
            color="common.white"
            hoverColor="grey.100"
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
                  fill="#1BBB83"
                />
              </svg>
            </Box>
          </StyledVideoButton>
        </Box>
        <Box
          position="absolute"
          sx={{zIndex: 1, top: 0, left: 0, right: 0, bottom: 0}}
        >
          <Cursor
            onTransitionEnd={() => {
              if (!videoMode && videoButtonRef.current && quickSearchRef.current && reviewRef.current) {
                videoButtonRef.current.style.opacity = "1"
                quickSearchRef.current.style.transform = "translateX(0)"
                quickSearchRef.current.style.opacity = "1"
                reviewRef.current.style.transform = "translateX(0)"
                reviewRef.current.style.opacity = "1"
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
          <ThumbnailWrapper ref={thumbnailRef}>
            <BackToSearch onClick={onBackClick}>
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.90906 0.265208C4.50324 -0.109399 3.8706 -0.0840961 3.496 0.321722L0.2652 3.82168C-0.0883996 4.20474 -0.0883995 4.79518 0.265201 5.17824L3.496 8.67828C3.8706 9.0841 4.50323 9.10941 4.90905 8.73481C5.31487 8.36021 5.34018 7.72755 4.96558 7.32173L3.284 5.49997L13 5.49997C13.5523 5.49997 14 5.05225 14 4.49997C14 3.94768 13.5523 3.49997 13 3.49997L3.284 3.49997L4.96557 1.67829C5.34018 1.27247 5.31487 0.639814 4.90906 0.265208Z"
                  fill="#1BBB83	"
                />
              </svg>
              Tìm địa điểm
            </BackToSearch>
            {videos.map((video, idx) => (
              <Thumbnail
                active={idx === activeVideo - 1}
                video={video}
                key={video.id}
                onClick={() => setActiveVideo(video.id)}
              />
            ))}
          </ThumbnailWrapper>
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
                    <HeadlineDivider isVideoMode={videoMode} component="span"/>
                    Khám phá vùng đất Việt Nam
                  </Headline>
                  <HeaderTitle isVideoMode={videoMode}>
                    Trải nghiệm mỗi chuyến đi cùng{" "}
                    <TitleHighlight style={{position: "relative", bottom: "16px"}}>
                      <span>Johome</span>
                    </TitleHighlight>
                    <svg style={{position: "relative", bottom: "-7px", right: "-12px"}} width="110" height="85"
                         viewBox="0 0 110 85"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M108.321 75.6856C104.409 77.7394 95.3301 78.7175 85.8013 80.1286C76.2725 81.5398 65.8147 83.1885 54.991 84.3202C44.7283 85.512 34.3423 85.135 24.1947 83.2025C14.6377 81.3442 5.54523 77.7953 1.67458 74.8193C-2.19606 71.8433 0.618945 70.4181 10.373 69.2305C20.127 68.0429 36.3837 67.0788 55.0332 66.2265C73.6827 65.3742 90.1364 66.3663 99.6934 68.5179C109.25 70.6696 112.248 73.8133 108.321 75.6856Z"
                        fill="#63C4EE"/>
                      <path
                        d="M12.5968 76.021C12.4915 76.0221 12.3886 75.9906 12.3022 75.931C12.2158 75.8713 12.1502 75.7865 12.1146 75.6881C12.079 75.5898 12.0752 75.483 12.1036 75.3824C12.1319 75.2818 12.1912 75.1924 12.273 75.1268C24.0082 66.1626 38.4244 61.3482 53.2315 61.4482C68.8275 61.6767 84.0168 66.4211 96.9346 75.0988C97.0254 75.1586 97.0944 75.2459 97.1313 75.3477C97.1682 75.4495 97.171 75.5604 97.1394 75.6639C97.1078 75.7674 97.0434 75.8581 96.9558 75.9224C96.8682 75.9867 96.7621 76.0213 96.6531 76.021H12.5968Z"
                        fill="#FFAC12"/>
                      <path
                        d="M87.5321 79.0255H21.886C21.7533 79.0285 21.6223 78.9957 21.507 78.9305C21.3917 78.8653 21.2964 78.7702 21.2313 78.6554C21.1662 78.5405 21.1338 78.4103 21.1376 78.2786C21.1414 78.1469 21.1811 78.0187 21.2526 77.9078C24.0676 73.4228 35.6795 57.0756 53.3156 56.9498H53.5408C73.3304 56.9498 85.266 73.4088 88.1655 77.9078C88.2322 78.0196 88.2681 78.1469 88.2695 78.2768C88.271 78.4068 88.238 78.5348 88.1738 78.6481C88.1096 78.7614 88.0165 78.8559 87.9039 78.9221C87.7912 78.9884 87.663 79.024 87.5321 79.0255Z"
                        fill="#FFCA00"/>
                      <path
                        d="M55.6657 61.4499C54.4364 62.1205 53.0798 62.5297 51.6825 62.6515C49.8659 62.8183 48.0438 62.3967 46.4888 61.4499C49.7823 48.8751 38.5223 28.8253 38.5223 28.8253L40.2676 28.0149L41.8018 27.3163C59.0156 45.1027 55.6657 61.4499 55.6657 61.4499Z"
                        fill="#4D4F4E"/>
                      <path
                        d="M51.6825 62.6515C49.8659 62.8183 48.0438 62.3967 46.4888 61.4499C49.7823 48.8751 38.5223 28.8253 38.5223 28.8253L40.2676 28.0149C50.1201 38.5358 51.6121 61.6455 51.6825 62.6515Z"
                        fill="#383838"/>
                      <path
                        d="M40.7611 28.3364C40.7611 28.3364 24.7859 17.9971 17.5231 35.4062C10.2604 52.8153 20.0848 39.4162 20.0848 39.4162C20.0848 39.4162 21.8864 45.5499 23.0828 43.0629C24.2792 40.5758 25.0533 38.983 25.0533 38.983C25.0533 38.983 26.0385 43.3563 26.7986 41.7774C27.5586 40.1986 28.6987 36.7196 28.6987 36.7196C28.6987 36.7196 29.4729 39.7655 30.0359 39.1926C30.5989 38.6198 32.3582 29.5799 40.7611 28.3364Z"
                        fill="#32D4C5"/>
                      <path
                        d="M40.5071 28.5015C40.5071 28.5015 48.0372 11.0925 63.7873 21.6134C79.5373 32.1342 63.8858 26.3499 63.8858 26.3499C63.8858 26.3499 65.8 32.4696 63.4072 31.0444L59.5084 28.7251C59.5084 28.7251 61.113 32.9167 59.5929 31.9945C58.0728 31.0724 55.1592 28.781 55.1592 28.781C55.1592 28.781 56.2149 31.743 55.4267 31.5754C54.6385 31.4077 48.178 24.8968 40.5071 28.5015Z"
                        fill="#21C1AD"/>
                      <path
                        d="M40.4788 28.74C40.4788 28.74 33.4413 11.1493 52.0344 7.53055C70.6276 3.91181 55.4828 10.814 55.4828 10.814C55.4828 10.814 61.1129 13.79 58.4808 14.4606L54.0753 15.5644C54.0753 15.5644 58.1852 17.3808 56.4681 17.8139C54.7509 18.247 51.0492 18.6522 51.0492 18.6522C51.0492 18.6522 53.8642 20.0494 53.2167 20.4406C52.5693 20.8319 43.336 20.8039 40.4788 28.74Z"
                        fill="#32D4C5"/>
                      <path
                        d="M40.3802 28.1388C40.3802 28.1388 40.0706 9.19285 21.4633 12.9653C2.85607 16.7377 19.5773 17.3106 19.5773 17.3106C19.5773 17.3106 15.4673 22.2427 18.1697 21.8375L22.6738 21.1529C22.6738 21.1529 19.5913 24.4083 21.2663 24.1568C22.9412 23.9053 26.6007 22.8435 26.6007 22.8435C26.6007 22.8435 24.5035 25.1908 25.2917 25.3305C26.0799 25.4702 34.6376 21.9073 40.3802 28.1388Z"
                        fill="#32D4C5"/>
                      <path
                        d="M40.5493 28.5597C40.5493 28.5597 36.3268 22.8591 35.3556 18.444C34.3844 14.0289 36.2705 7.47601 38.7477 3.52194C41.2249 -0.432129 40.3663 6.9311 40.3663 6.9311C40.3663 6.9311 43.0828 5.77143 43.0828 6.63769C42.6049 7.86325 41.9247 9.00124 41.0701 10.0049C41.0701 10.0049 44.2933 9.51591 43.4628 10.3263C42.6324 11.1367 38.5929 22.5657 40.5493 28.5597Z"
                        fill="#21C1AD"/>
                      <path
                        d="M89.6569 7.57291C89.6569 9.58134 88.8531 11.5075 87.4225 12.9277C85.9918 14.3479 84.0515 15.1457 82.0282 15.1457C80.9818 15.1481 79.9464 14.934 78.988 14.517C77.3804 13.8227 76.0628 12.6 75.2568 11.0546C74.4508 9.50919 74.2056 7.73536 74.5624 6.03154C74.9192 4.32772 75.8563 2.79788 77.216 1.6994C78.5757 0.60092 80.2751 0.000838599 82.0282 0.000103539C83.0311 -0.00359042 84.0247 0.189765 84.952 0.569026C85.8792 0.948287 86.7217 1.50595 87.4308 2.20989C88.1399 2.91383 88.7017 3.75011 89.0838 4.67056C89.4658 5.591 89.6606 6.5774 89.6569 7.57291Z"
                        fill="#FFCA00"/>
                      <path
                        d="M72.7957 68.6992C72.7957 69.4118 69.3755 69.9847 65.153 69.9847C60.9304 69.9847 57.4961 69.4118 57.4961 68.6992C57.4961 67.9867 60.9164 67.4557 65.153 67.4557C69.3896 67.4557 72.7957 67.9727 72.7957 68.6992Z"
                        fill="#FFB000"/>
                      <path
                        d="M64.5199 68.1269L76.9341 41.1191H77.9757L65.3081 68.4762C65.2843 68.5259 65.2505 68.5701 65.2088 68.6064C65.1672 68.6426 65.1186 68.6701 65.0659 68.6871C65.0132 68.704 64.9576 68.7102 64.9025 68.7052C64.8473 68.7002 64.7938 68.6841 64.7451 68.6579C64.6938 68.6396 64.6468 68.6109 64.6072 68.5736C64.5676 68.5364 64.5362 68.4914 64.5151 68.4415C64.4939 68.3916 64.4834 68.3379 64.4842 68.2837C64.4851 68.2296 64.4972 68.1762 64.5199 68.1269Z"
                        fill="#D63C12"/>
                      <path
                        d="M94.4707 52.7299C91.5681 52.7618 88.6748 52.3998 85.8709 51.6541C83.5792 51.0933 81.327 50.3838 79.1289 49.5303C77.637 48.9575 76.0465 48.2729 74.3997 47.4764C73.2455 46.9176 72.0632 46.3028 70.8387 45.6182C68.8963 44.5284 66.8554 43.2849 64.7583 41.8457C62.6611 40.4066 60.7328 38.9396 58.6356 37.2071C58.6356 37.2071 71.6691 29.243 82.0143 33.5045H82.141L82.887 33.8398C93.3729 39.0234 94.4707 52.7299 94.4707 52.7299Z"
                        fill="#FF642E"/>
                      <path
                        d="M82.0281 33.5055C76.5388 39.0943 73.0341 42.9366 70.768 45.6192C68.8257 44.5294 66.7848 43.2859 64.6876 41.8468C64.758 41.8468 72.5415 34.1901 82.0281 33.5055Z"
                        fill="#FFCA00"/>
                      <path
                        d="M94.471 52.7309C91.5684 52.7628 88.675 52.4009 85.8712 51.6551C83.5795 51.0943 81.3273 50.3848 79.1292 49.5313C77.6372 48.9585 76.0467 48.2739 74.4 47.4775L82.0281 33.5055H82.1553L82.9013 33.8408C93.3732 39.0244 94.471 52.7309 94.471 52.7309Z"
                        fill="#EF3F0F"/>
                      <path
                        d="M85.8712 51.6551C83.5795 51.0943 81.3273 50.3848 79.1292 49.5313C79.9315 46.1781 80.9454 41.1484 81.9447 33.5057C81.9447 33.5057 81.9447 33.4219 81.9447 33.38C81.9739 33.4452 82.0117 33.5063 82.0573 33.5616C86.6317 40.5196 86.0682 49.6152 85.8712 51.6551Z"
                        fill="#FFAC12"/>
                      <path
                        d="M89.6569 7.57291C89.6569 9.58134 88.8531 11.5075 87.4225 12.9277C85.9918 14.3479 84.0515 15.1457 82.0282 15.1457V0.000103539C83.0311 -0.00359042 84.0247 0.189765 84.952 0.569026C85.8792 0.948287 86.7217 1.50595 87.4308 2.20989C88.1399 2.91383 88.7017 3.75011 89.0838 4.67056C89.4658 5.591 89.6606 6.5774 89.6569 7.57291Z"
                        fill="#FFAC12"/>
                    </svg>
                  </HeaderTitle>
                  <HeaderSubtitle
                    color={videoMode ? "white" : "grey.500"}
                    maxWidth="100%"
                  >
                    Tìm và đặt vé ngay để có trải nghiệm tuyệt vời nhất.
                  </HeaderSubtitle>
                </Box>
                {<StyledQuickSearch ref={quickSearchRef}/>}
                {(
                  <HeaderSubtitle ref={reviewRef} mb={2}>
                    <Box>
                      <Carousel
                        scrollDelay={250}
                        clickDelay={300}
                        options={{
                          align: "start",
                        }}
                        spacing={1.5}
                        style={{cursor: "grab"}}
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
          <GoodValues/>
        </Container>
      </Box>
    </>
  )
}
