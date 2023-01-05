import styled, { css } from "styled-components"
import { Tab } from "@mui/material"

export const StyledTab = styled(({ isLeft, isRight, ...props }) => (
 <Tab {...props} />
))`
 ${({ theme: { palette, spacing }, isLeft, isRight, activeIdx, idx }: any) => {
  return css`
   transition: background 0.3s;
   font-family: "Mulish";
	 /* padding-left: ${isLeft || isRight ? spacing(6.75) : spacing(4)};
	 padding-right: ${isLeft || isRight ? spacing(6.75) : spacing(4)}; */
	 width: 170px;
   font-size: 14px;
   font-weight: 800;
   line-height: 16px;
   letter-spacing: 0.5px;
   text-align: left;
   text-transform: none;
   border-top-left-radius: ${isLeft ? spacing(3) : 0};
   border-bottom-left-radius: ${isLeft ? spacing(3) : 0};
   border-top-right-radius: ${isRight ? spacing(3) : 0};
   border-bottom-right-radius: ${isRight ? spacing(3) : 0};
   border-top: 1px solid ${palette.grey[400]};
   border-bottom: 1px solid ${palette.grey[400]};
   border-left: ${activeIdx === idx - 1
    ? "none"
    : `1px solid ${palette.grey[400]}`};
   border-right: ${!isRight ? "none" : `1px solid ${palette.grey[400]}`};
   /* border-left: ${isRight ? "none" : `1px solid ${palette.grey[400]}`}; */

   &.Mui-selected {
    color: ${palette.primary.main};
    border-color: ${palette.primary.main};
    background-color: ${palette.primary[50]};
    border: 1px solid;
   }
  `
 }}
`
