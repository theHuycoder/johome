import styled from 'styled-components'
import {Box} from '@mui/material'

export const Stepper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

`

export const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  //styleName: Button/Button1/Medium14px;
  font-family: "Mulish";
  font-size: 14px;
  font-weight: 800;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: ${(props: any) => props?.color || ""};

  .step-number {
    width: 32px;
    height: 32px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    //styleName: Button/Button1/Medium14px;
    text-align: center;
    color: #FFFFFF;
    background: ${(props: any) => props?.bgColor || ""};
  }
`

export const StepDivider = styled.div`
  width: 16px;
  height: 2px;
  margin-right: 16px;
  background: ${(props: any) => props?.isDone ? "#00AF6D" : "#D1D5DB"}
`

export const Title = styled.div`
  //styleName: Heading/Heading3/Semibold 50px;
  font-family: "Mulish";
  font-size: 50px;
  font-weight: 800;
  line-height: 60px;
  letter-spacing: 0em;
  text-align: left;
  padding-bottom: 32px;
  border-bottom: 2px solid #E5E7EB;
`

export const ReservationDetailCard = styled(Box)`
  width: 480px;
  //height: 969px;
  padding: 48px;

  background: #FFFFFF;
  box-shadow: 0px 4px 23px rgba(35, 177, 125, 0.15);
  border-radius: 24px;

  .img-wrapper {
    width: 384px;
    height: 230px;
    position: relative;
    background: #F3F4F6;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 24px;

    img {
      object-fit: cover;
    }
  }

  .title {
    //styleName: Heading/Heading5/Medium 25px;
    font-family: "Mulish";
    font-size: 25px;
    font-weight: 800;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: #1F2937;
  }

  .owner {
    display: flex;
    //align-items: center;
    gap: 12px;
    flex-direction: column;
    //styleName: Caption/Caption1/Regular13px;
    //styleName: Sub/Sub2/Regular 15px;
    //styleName: Sub/Sub2/Regular 15px;
    font-family: "Mulish";
    font-size: 15px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
    color: #6B7280;


    .avatar {
      width: 24px;
      height: 24px;
      border-radius: 48px;
      position: relative;
      overflow: hidden;
    }

    .name {
      //styleName: Heading/Heading7/Semibold 18px;
      font-family: "Mulish";
      font-size: 18px;
      font-weight: 700;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
      color: #374151;
    }
  }

  .summary {
    background: #F3F4F6;
    border-radius: 20px;
    padding: 20px 26px;

    .info-box {
      display: flex;
      align-items: center;
      gap: 18px;

      .label {
        //styleName: Caption/Caption2/Bold 12px;
        font-family: "Mulish";
        font-size: 12px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;
        color: #777E90;
      }

      .value {
        //styleName: Sub/Sub3 Bold 15px;
        font-family: "Mulish";
        font-size: 15px;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0.10000000149011612px;
        text-align: left;
        color: #23262F;
      }
    }
  }
`
export const CouponInput = styled.div`
  border: 2px solid #E5E7EB;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;

  input {
    outline: none;
    background: none;
    border: none;
    //styleName: Body/Body2/Regular 15px;
    font-family: "Mulish";
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0.25px;
    text-align: left;
    text-transform: uppercase;

  }
`
export const PriceDetails = styled(Box)`
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 8px 0;
  }

  .label {
    //styleName: Sub/Sub2/Regular 15px;
    font-family: "Mulish";
    font-size: 15px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
    color: #777E90;
  }

  .value {
    //styleName: Sub/Sub3 Bold 15px;
    font-family: "Mulish";
    font-size: 15px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0.10000000149011612px;
    text-align: right;
    color: #23262F;
  }
`
