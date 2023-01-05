import styled from 'styled-components';
import {Box} from '@mui/material';

export const MemberContent = styled(Box)`
  text-align: center;
  position: relative;
  z-index: 2;

  .head {
    //styleName: Caption/Caption2/Bold 12px;
    font-family: "Mulish";
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0px;
    color: #FF8244;
  }

  .title {
    //styleName: Heading/Heading4/Regular 36px;
    font-family: "Mulish";
    font-size: 36px;
    font-weight: 700;
    line-height: 46px;
    letter-spacing: 0.25px;
    color: #1F2937;
  }

`