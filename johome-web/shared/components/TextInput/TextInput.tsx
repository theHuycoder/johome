import React from "react"
import { TextFieldProps } from "@mui/material"
import { StyledTextField } from "./TextInput.styles"

export type TextInputProps = TextFieldProps

export default function TextInput(props: TextFieldProps) {
 return <StyledTextField {...props} />
}
