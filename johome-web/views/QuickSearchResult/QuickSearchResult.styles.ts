import styled from 'styled-components'
import {Box} from "@mui/material";


export const Searchbar = styled.div`
  background: linear-gradient(30.13deg, #FCFCFD 14.92%, rgba(252, 252, 253, 0.83) 99.51%);
  /* xl */

  box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04);
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding: 40px 64px;
  justify-content: space-between;

  .searchbox {
    display: flex;
    align-items: center;
    gap: 16px;
    // width: 25%;
    flex-shrink: 0;
    flex-grow: 0;

    * {
      flex-shrink: 0;
    }
  }

  .text {
    //styleName: Heading/Heading5/Medium 25px;
    font-family: "Mulish";
    font-size: 25px;
    font-weight: 800;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;

  }
`

export const BackToHome = styled.div`
  height: 40px;
  width: 153px;
  border-radius: 90px;
  padding: 12px 16px 12px 16px;
  //styleName: Button/Button1/Medium14px;
  font-family: "Mulish";
  font-size: 14px;
  font-weight: 800;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #1F2937;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 18px;
  border: 2px solid #E5E7EB;
`

export const SaleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .sale {
    font-family: Mulish;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    padding: 3px 9px;
    border: 2px solid #58C27D;
    border-radius: 4px;
    width: fit-content;
    color: #58C27D
  }

  .location {
    width: fit-content;
    font-family: "Mulish";
    font-size: 15px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
    color: #23262F;
    padding: 1px 16px;
    background: #E5E7EB;
    border-radius: 4px;
  }
`

export const Tab = styled.div`
  width: fit-content;
  padding: 6px 24px;
  //styleName: Button/Button1/Medium14px;
  font-family: "Mulish";
  font-size: 14px;
  font-weight: 800;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-align: left;
  border-radius: 100px;
  cursor: pointer;

  color: ${(props: any) => props.active ? "#FFF" : "#374151"};
  background-color: ${(props: any) => props.active ? "#FF6F20" : "#E5E7EB"};

`
export const SaleBanner = styled.div`

  box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  width: 544px;
  height: 213px;
  padding: 24px 32px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-shrink: 0;

  background: url("/assets/search-result/sale-banner.png") no-repeat center/cover;
  color: #FFF;

  .small-text {
    //styleName: Sub/Sub3 Bold 15px;
    font-family: "Mulish";
    font-size: 15px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
  }

  .big-text {
    //styleName: Heading/Heading1/Light 101px;
    font-family: "Mulish";
    font-size: 101px;
    font-weight: 800;
    line-height: 106px;
    letter-spacing: -1.5px;
    text-align: left;
  }

`

export const LocationMaker = styled.div`
  background: ${(props: any) => props.active ? "#00A062" : "#FFFFFF"};
  box-shadow: 0px 20px 25px rgba(24, 132, 62, 0.25), 0px 10px 10px rgba(3, 103, 66, 0.04);
  border-radius: 16px 16px 16px 0px;
  width: 91px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  //styleName: Caption/Caption2/Bold 12px;
  font-family: "Mulish";
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  color: ${(props: any) => props.active ? "#FFFFFF" : "#000000"};
  position: relative;
  z-index: ${(props: any) => props.active ? 100 : 0};
`

export const MapWrapper = styled.div`
  width: 544px;
  flex-shrink: 0;
  //flex-grow: 0;
  height: 1026px;
  background: #F3F4F6;
  /* Text/4 */

  border: 1.5px solid #D1D5DB;
  border-radius: 24px;
  overflow: hidden;
`

export const TourWrapper = styled(Box)`
  position: relative;
  background: ${(props: any) => props.active ? "#E3F5ED" : "#FFFFFF"};
  width: 544px;
  height: 239px;

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

  .filter {
    //styleName: Caption/Caption1/Regular13px;
    font-family: "Mulish";
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.4000000059604645px;
    text-align: left;

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
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

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
    width: 185px;
    height: 185px;
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

export const PagingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`

export const PagingNumber = styled.div`
  //styleName: Button/Button1/Medium14px;
  font-family: "Mulish";
  font-size: 14px;
  font-weight: 800;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  width: 32px;
  height: 32px;
  background: #FFFFFF;
  border-radius: 100px;
  box-shadow: ${(props: any) => props.active ? "0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)" : "none"};
  color: ${(props: any) => props.active ? "#1BBB83" : "#6B7280"};
`