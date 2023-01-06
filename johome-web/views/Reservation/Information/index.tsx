import {Box, FormControl, FormControlLabel, FormGroup, Grid, RadioGroup, Radio} from '@mui/material';
import styled from 'styled-components'
import {CheckBox, TextInput} from "@/shared/components";
import React from "react";

const SectionTitle = styled.div`
  font-family: "Mulish";
  font-size: 25px;
  font-weight: 800;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;
  color: #1F2937;
  margin-bottom: 24px;
`

const InputField = styled.div`
  background: #F3F4F6;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 8px 16px;


  label {
    //styleName: Caption/Caption2/Bold 12px;
    font-family: "Mulish";
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: #777E90;

  }

  input {
    outline: none;
    border: none;
    //styleName: Sub/Sub3 Bold 15px;
    font-family: "Mulish";
    font-size: 15px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0.10000000149011612px;
    text-align: left;
    color: #23262F;
  }
`

const FormFieldLabel = styled.div`
  //styleName: Heading/Heading7/Semibold 18px;
  font-family: "Mulish";
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 24px;
`

export default function Information() {
  return (
    <Grid container mt="52px">
      <Grid item xs={12} mb={7}>
        <SectionTitle>
          Chi tiết đặt phòng
        </SectionTitle>
        <Grid container spacing={2.75}>
          <Grid item lg={6}>
            <InputField>
              <Box display="flex" flexDirection="column">
                <label>Ngày nhận/trả phòng</label>
                <input type="text" value="15-22/10,2023"/>
              </Box>
              <Box>
                <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 22C0 21.4477 0.447715 21 1 21H17C17.5523 21 18 21.4477 18 22C18 22.5523 17.5523 23 17 23H1C0.447716 23 0 22.5523 0 22Z"
                    fill="#6B7280"/>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M13.7071 3.12101C13.3166 2.73049 12.6834 2.73049 12.2929 3.12101L11.4142 3.99966L15 7.58545L15.8787 6.7068C16.2692 6.31627 16.2692 5.68311 15.8787 5.29259L13.7071 3.12101ZM3.91425 11.4996L10 5.41387L13.5858 8.99966L7.50003 15.0854L3.91425 11.4996ZM2.50003 12.9139L2 13.4139V16.9997H5.58579L6.08582 16.4996L2.50003 12.9139ZM10.8787 1.7068C12.0503 0.535232 13.9497 0.535232 15.1213 1.7068L17.2929 3.87837C18.4645 5.04995 18.4645 6.94944 17.2929 8.12101L7 18.4139C6.62493 18.789 6.11622 18.9997 5.58579 18.9997H2C0.89543 18.9997 0 18.1042 0 16.9997V13.4139C0 12.8835 0.210714 12.3747 0.585786 11.9997L10.8787 1.7068Z"
                        fill="#6B7280"/>
                </svg>
              </Box>
            </InputField>
          </Grid>
          <Grid item lg={6}>
            <InputField>
              <Box display="flex" flexDirection="column">
                <label>Số người</label>
                <input type="text" value="2 người lớn"/>
              </Box>
              <Box>
                <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 22C0 21.4477 0.447715 21 1 21H17C17.5523 21 18 21.4477 18 22C18 22.5523 17.5523 23 17 23H1C0.447716 23 0 22.5523 0 22Z"
                    fill="#6B7280"/>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M13.7071 3.12101C13.3166 2.73049 12.6834 2.73049 12.2929 3.12101L11.4142 3.99966L15 7.58545L15.8787 6.7068C16.2692 6.31627 16.2692 5.68311 15.8787 5.29259L13.7071 3.12101ZM3.91425 11.4996L10 5.41387L13.5858 8.99966L7.50003 15.0854L3.91425 11.4996ZM2.50003 12.9139L2 13.4139V16.9997H5.58579L6.08582 16.4996L2.50003 12.9139ZM10.8787 1.7068C12.0503 0.535232 13.9497 0.535232 15.1213 1.7068L17.2929 3.87837C18.4645 5.04995 18.4645 6.94944 17.2929 8.12101L7 18.4139C6.62493 18.789 6.11622 18.9997 5.58579 18.9997H2C0.89543 18.9997 0 18.1042 0 16.9997V13.4139C0 12.8835 0.210714 12.3747 0.585786 11.9997L10.8787 1.7068Z"
                        fill="#6B7280"/>
                </svg>
              </Box>
            </InputField>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <SectionTitle>Thông tin cá nhân</SectionTitle>
        <Grid container rowSpacing={3} columnSpacing={2.25}>
          <Grid item lg={6}>
            <TextInput fullWidth label="Họ"/>
          </Grid>
          <Grid item lg={6}>
            <TextInput fullWidth label="Tên"/>
          </Grid>
          <Grid item lg={12}>
            <TextInput fullWidth label="Email"/>
          </Grid>
          <Grid item lg={12}>
            <TextInput fullWidth label="Số điện thoại"/>
          </Grid>
          <Grid item lg={12}>
            <FormGroup sx={{marginTop: ""}}>
              <CheckBox label="Tôi muốn xác nhận qua số điện thoại"/>
            </FormGroup>
            <Box sx={{height: "2px", backgroundColor: "#E5E7EB", mt: "16px"}}/>
            <FormControl sx={{marginTop: "48px"}}>
              <FormFieldLabel>Bạn đặt phòng cho ai?</FormFieldLabel>
              <RadioGroup name="reserve-for" defaultValue="myself">
                <FormControlLabel control={<Radio/>} label="Tôi là khách lưu trú" value="myself"/>
                <FormControlLabel control={<Radio/>} label="Tôi đặt phòng cho người khác" value="other"/>
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}