import styled from "styled-components";
import {Box} from "@mui/material"

export const TourWrapper = styled(Box)`
  position: relative;
  background: ${(props: any) => props.active ? "#E3F5ED" : "#FFFFFF"};

  &:hover {
    background: #E3F5ED;
  }

  transition: all 0.4s;

  box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  padding: 28px;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;

  .location {
    //styleName: Caption/Caption2/Bold 12px;
    font-family: "Mulish";
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: #00A062;
  }

  .name {
    //styleName: Heading/Heading7/Semibold 18px;
    font-family: "Mulish";
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
  }

  .description {
    //styleName: Caption/Caption1/Regular13px;
    font-family: "Mulish";
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.4000000059604645px;
    text-align: left;
    color: #6B7280;
  }

  .price-box {
    font-family: "Mulish";
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;

    //styleName: Heading/Heading7/Semibold 18px;
    font-family: Mulish;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;

    .price {
      color: #1BBB83;
    }

    .currency {
      color: #FF8244;
    }
  }

  .stars {
    //styleName: Caption/Caption1/Regular13px;
    font-family: "Mulish";
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.4000000059604645px;
    text-align: left;
    color: #23262F;
  }

  .img-wrapper {
    position: relative;
    width: 130px;
    height: 130px;
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;

    img {
      object-fit: cover;
    }

    .content-wrapper {
      display: flex;
      flex-direction: column;
    }
  }
`