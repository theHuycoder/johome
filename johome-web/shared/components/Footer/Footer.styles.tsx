import styled from 'styled-components';
import {Box} from '@mui/material'


export const Link = styled(Box)`
  cursor: pointer;
  //styleName: Button/Button1/Medium14px;
  font-family: "Mulish";
  font-size: 14px;
  font-weight: 800;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-align: center;
  color: #1BBB83;

`

export const FooterColumn = styled(Box)`
  .title {
    //styleName: Heading/Heading7/Semibold 18px;
    font-family: "Mulish";
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 32px;
  }

  .links-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .link {
      //styleName: Caption/Caption1/Regular13px;
      font-family: "Mulish";
      font-size: 13px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0.4000000059604645px;
      text-align: left;
      cursor: pointer;

      &:hover {
        color: #1BBB83;
      }
    }
  }
`