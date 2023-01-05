import React, {useState, forwardRef} from "react"
import {
  StyledQuickSearch,

} from "./QuickSearch.styles"
import {BoxProps, Box} from "@mui/material"
import {useForm} from "react-hook-form"
import HomestaySearch from "./Homestay"

enum TabValue {
  HOMESTAY = "HOMESTAY",
  CAR_BOOKING = "CAR_BOOKING",
  TOURS = "TOURS",
}

export type HomestayFormValues = {
  location: string
  dateRange: string
  people: number
}

export default forwardRef<HTMLDivElement, BoxProps>((function QuickSearch(props, ref) {
  const [activeTab, setActiveTab] = useState<TabValue>(TabValue.HOMESTAY)

  const handleChangeTab = (event: React.SyntheticEvent, newValue: TabValue) =>
    setActiveTab(newValue)

  const homestayForm = useForm<HomestayFormValues>()

  return (
    <StyledQuickSearch {...props} ref={ref}>
      <Box height="100%" width="100%">
        <HomestaySearch form={homestayForm}/>
      </Box>
    </StyledQuickSearch>
  )
}))
