import styled, { css } from "styled-components"
import { ButtonBase, Typography, Box } from "@mui/material"
import Tab from "@mui/material/Tab"

export const OptionsWrapper = styled(Box)`
 ${({ theme: { palette, spacing } }: any) => css`
  min-width: 1200px;
  display: flex;
  background: linear-gradient(
   30.13deg,
   #fcfcfd 14.92%,
   rgba(252, 252, 253, 0.83) 99.51%
  );
  /* xl */

  box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1),
   0px 10px 10px rgba(0, 0, 0, 0.04);
  border-radius: 24px;
 `}
`

export const TabButton = styled(ButtonBase)`
 ${({ theme: { palette, spacing }, hasBorder, active }: any) => css`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: ${spacing(2)};
  border-bottom: ${hasBorder ? `2px solid ${palette.grey[200]}` : "none"};
  color: ${active ? palette.primary.main : palette.grey[500]};
  padding: ${spacing(3)} ${spacing(0)} ${spacing(2)};
  min-width: ${spacing(36.25)};
 `}
`

export const TabLabel = styled(Typography)`
 ${({ theme: { palette } }: any) => css`
  font-family: "Mulish", sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 46px;
  letter-spacing: 0.25px;
  text-align: left;
 `}
`

export const LabelIndex = styled(Typography)`
 ${({ theme: { palette, typography } }: any) => css`
  ${{ ...typography.subtitle1 }}
 `}
`

export const DetailsWrapper = styled(Box)`
 ${({ theme: { palette, spacing } }: any) => css`
  border-radius: ${spacing(3)};

  background-color: ${palette.grey[200]};
  width: 100%;
  height: ${spacing(45)};
  overflow: hidden;
 `}
`

export const DetailTab = styled(Tab)`
 ${({ theme: { palette, spacing } }: any) => css`
  //styleName: Button/Button1/Medium14px;
  font-family: "Mulish";
  font-size: 14px;
  font-weight: 800;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-align: left;
  text-transform: none;

  &.Mui-selected {
   color: ${palette.common.black};
  }
 `}
`
