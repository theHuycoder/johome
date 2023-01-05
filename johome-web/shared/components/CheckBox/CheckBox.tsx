import { Checkbox, FormControlLabelProps, CheckboxProps } from "@mui/material"
import { StyledFormControlLabel } from "./CheckBox.styles"

type Props = Omit<FormControlLabelProps, "control"> & {
 checkboxProps?: CheckboxProps
}

export default function CheckBox({ checkboxProps, ...props }: Props) {
 return (
  <StyledFormControlLabel
   {...props}
   control={<Checkbox {...checkboxProps} />}
  />
 )
}
