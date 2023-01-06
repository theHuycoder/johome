import styled, {css} from "styled-components"
import {TextField} from "@mui/material"

export const StyledTextField = styled(TextField)`
  ${({theme: {palette, spacing}}) => css`

    .MuiInputBase-root {
      border-radius: 8px;
      //styleName: Body/Body2/Regular 15px;
      font-family: "Mulish";
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0.25px;
      text-align: left;
    }

  `}
`
