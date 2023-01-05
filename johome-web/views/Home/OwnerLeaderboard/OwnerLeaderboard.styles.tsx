import styled from "styled-components"
import {Box} from "@mui/material"
import {width} from "@mui/system"

export const TabWrapper = styled(Box)`
  width: fit-content;
  height: 48px;
  position: relative;
  display: flex;
  align-items: center;
  background: #FFFFFF;
  /* Inner */

  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 100px;

  & * {
    transition: all 0.4s;
  }

  & .slider {
    position: absolute;
    top: 4px;
    bottom: 4px;
    width: 46%;
    background: #ffffff;
    /* md */
    z-index: 1;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 100px;
  }

  .tab {
    width: 120px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    //styleName: Button/Button1/Medium14px;
    font-family: "Mulish";
    font-size: 14px;
    font-weight: 800;
    line-height: 16px;
    letter-spacing: 0.5px;
    text-align: center;
    color: #6b7280;
    position: relative;
    z-index: 2;

    &.active {
      color: #00af6d;
    }
  }

`
export const LeaderBoard = styled(Box)`
  background: linear-gradient(30.13deg, #FCFCFD 14.92%, rgba(252, 252, 253, 0.83) 99.51%);
  border-radius: 24px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  z-index: 100;
  position: relative;
`

export const LeaderRow = styled(Box)`
  display: flex;
  align-items: center;
  gap: 32px;

  .info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .name {
    //styleName: Heading/Heading5/Medium 25px;
    font-family: "Mulish";
    font-size: 25px;
    font-weight: 800;
    line-height: 35px;
    letter-spacing: 0em;
    color: #000000;
  }

  .info-text {
    //styleName: Body/Body2/Regular 15px;
    font-family: "Mulish";
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0.25px;
    text-align: center;

  }
`

export const Avatar = styled(Box)`
  width: 142px;
  height: 80px;
  //styleName: Heading/Heading5/Medium 25px;
  font-family: "Mulish";
  font-size: 25px;
  font-weight: 800;
  line-height: 35px;
  letter-spacing: 0em;
  color: #1BBB83;
  border: 1.5px solid #D1D5DB;
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding: 4px;

  .text {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img-wrapper {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
  }

  img {
    border-radius: 50%;
    object-fit: cover;
  }
`