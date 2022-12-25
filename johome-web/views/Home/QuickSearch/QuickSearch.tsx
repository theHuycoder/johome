import React, { useState } from "react";
import {
 StyledQuickSearch,
 StyledTab,
 StyledTabList,
} from "./QuickSearch.styles";
import { BoxProps, Box } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { useForm } from "react-hook-form";
import HomestaySearch from "./Homestay";

enum TabValue {
 HOMESTAY = "HOMESTAY",
 CAR_BOOKING = "CAR_BOOKING",
 TOURS = "TOURS",
}

export type HomestayFormValues = {
 location: string;
 dateRange: string;
 people: number;
};

export default function QuickSearch({ ...props }: BoxProps) {
 const [activeTab, setActiveTab] = useState<TabValue>(TabValue.HOMESTAY);

 const handleChangeTab = (event: React.SyntheticEvent, newValue: TabValue) =>
  setActiveTab(newValue);

 const homestayForm = useForm<HomestayFormValues>();

 return (
  <StyledQuickSearch {...props}>
   <TabContext value={activeTab}>
    <Box
     sx={{
      borderBottom: 1,
      borderColor: "divider",
      boxSizing: "border-box",
     }}
    >
     <StyledTabList
      // indicatorColor="secondary"
      onChange={handleChangeTab}
      aria-label="lab API tabs example"
     >
      <StyledTab label="Homestay" value={TabValue.HOMESTAY} />
      <StyledTab label="Đặt xe" value={TabValue.CAR_BOOKING} />
      <StyledTab label="Tham quan" value={TabValue.TOURS} />
     </StyledTabList>
    </Box>
    <Box>
     <Box pt={2.625}>
      <TabPanel value={TabValue.HOMESTAY}>
       <HomestaySearch form={homestayForm} />
      </TabPanel>
      <TabPanel value={TabValue.CAR_BOOKING}>Item Two</TabPanel>
      <TabPanel value={TabValue.TOURS}>Item Three</TabPanel>
     </Box>
    </Box>
   </TabContext>
  </StyledQuickSearch>
 );
}
