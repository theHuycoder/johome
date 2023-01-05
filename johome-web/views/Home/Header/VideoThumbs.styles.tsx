import {Box} from "@mui/material"
import styled from "styled-components"
import {Button} from "@/shared/components"

export const VideoWrapper = styled((props) => <Box {...props} />)`
  position: relative;
  width: 100%;
  height: 100%;

  overflow: hidden;

  video {
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    transition: all 2s;
  }

  button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 10000;
  }
`

export const Cursor = styled(Box)`
  position: absolute;
  transform-origin: 50% 50%;
  width: 125vh;
  height: 125vh;
  transform: translate(35%, -4%);
  border-radius: 100%;
  box-shadow: 0 0 0 300vw rgba(255, 255, 255, 1);
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10000;
  pointer-events: none;
  /* background: url("/assets/home/he.jpeg") no-repeat center/cover; */
`

export const VideoThumbnail = styled(Box)`
  position: relative;
  width: 150px;
  height: 100px;
  overflow: hidden;
  border-radius: 16px;
  cursor: grab;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props: any) => props?.active ? "#1BBB83" : "transparent"};

  video {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    transition: all 0.8s;
    border-radius: 16px;
  }
`

export const StyledVideoButton = styled(Button)`
  position: relative;
  /* top: 50%; */
  /* right: 25% !important; */
  padding: 0;
  /* transform: translate(50%, -50%); */
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`

export const ThumbnailWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  bottom: 40%;
  right: 0;
  gap: 8px;
  transition: all 1s;
  transform: translateY(100%);
  opacity: 0;
  user-select: none;
  /* margin: auto; */
`
