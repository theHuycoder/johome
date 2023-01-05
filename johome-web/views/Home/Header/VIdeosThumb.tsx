import React, { useRef, useState, useEffect } from "react"
import {
 VideoWrapper,
 Cursor,
 VideoThumbnail,
 StyledVideoButton,
 ThumbnailWrapper,
} from "./VideoThumbs.styles"
import { Carousel, Button } from "@/shared/components"
import { Box, Fade, Typography, Container } from "@mui/material"

export const videos = [
 {
  id: 1,
  src: "https://res.cloudinary.com/dyotzt92h/video/upload/v1672849733/production_ID_3850448_jfyw3k.mp4",
  type: "video/mp4",
 },
 {
  id: 2,
  src: "https://res.cloudinary.com/dyotzt92h/video/upload/v1672900157/pexels-hac-hai-9792717_2_aridka.mp4",
  type: "video/mp4",
 },
 {
  id: 3,
  src: "https://res.cloudinary.com/dyotzt92h/video/upload/v1672844647/40b376ec-57ec756a_koouaq.mp4",
  type: "video/mp4",
 },
]

export const Thumbnail = ({ video, ...props }: any) => {
 const videoRef = useRef<HTMLVideoElement>(null)

 useEffect(() => {
  if (!videoRef.current) return

  const video = videoRef.current

  const mouseover = () => {
   video.play()
  }

  const mouseout = () => {
   video.pause()
  }

  video.addEventListener("mouseover", mouseover)
  video.addEventListener("mouseout", mouseout)

  return () => {
   video.removeEventListener("mouseover", mouseover)
   video.removeEventListener("mouseout", mouseout)
  }
 }, [])

 return (
  <VideoThumbnail {...props}>
   <video ref={videoRef} loop muted autoPlay={false}>
    <source src={video.src} type="video/mp4" />
   </video>
  </VideoThumbnail>
 )
}

export default function VideosThumb({
 onChangeMode,
 videoMode,
 activeVideo,
 setActiveVideo,
}: any) {
 const videoRefs = useRef<HTMLVideoElement[]>([])

 useEffect(() => {
  videoRefs.current.forEach((videoRef) => {
   videoRef?.load()
   if (Number(videoRef?.id) === activeVideo) {
    videoRef.play()
   }
  })
 }, [activeVideo])

 return (
  <>
   <VideoWrapper active={videoMode}>
    {videos.map((video, idx) => (
     <Fade
      in={activeVideo === video.id}
      timeout={{
       enter: 300,
      }}
      key={video.id}
     >
      <video
       // loop
       id={video.id.toString()}
       muted
       onEnded={() => {
        if (activeVideo === videos.length) setActiveVideo(1)
        else setActiveVideo(activeVideo + 1)
       }}
       key={video.id}
       ref={(ref) => videoRefs.current.push(ref as HTMLVideoElement)}
      >
       <source src={video.src} type={video.type} />
      </video>
     </Fade>
    ))}
    <Container
     maxWidth="xl"
     sx={{
      height: "100%",
      position: "relative",
     }}
    ></Container>
   </VideoWrapper>
  </>
 )
}
