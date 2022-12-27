import { useState } from "react";
import { Grid, Box } from "@mui/material";
import Image from "next/image";
import {
 TabButton,
 TabLabel,
 LabelIndex,
 OptionsWrapper,
} from "./ExperimentTabs.styles";
import { ExperimentOptions, options } from "./ExperimentTabs.copy";
import ExperimentDetails from "./ExperimentDetails";

export default function ExperimentTabs() {
 const [activeOption, setActiveOption] = useState<ExperimentOptions>(
  ExperimentOptions.MOUNTAIN
 );

 return (
  <Grid container>
   <Grid item xs={12}>
    <Box height="220px" position="relative">
     <Image
      src="/assets/home/experiment-mountain.svg"
      fill
      alt="mountain"
      priority
      sizes="(max-width: 768px) 100vw,
				(max-width: 1200px) 50vw,
				33vw"
     />
    </Box>
   </Grid>
   <Grid item xs={12}>
    <OptionsWrapper display="flex" pt={8.5} px={6} pb={7} gap={15.75}>
     <Box>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
       {options.map((option, index) => (
        <TabButton
         disableRipple
				 disableTouchRipple
         active={activeOption === option.value}
         key={option.value}
         hasBorder={index < options.length}
         onClick={() => setActiveOption(option.value)}
        >
         <LabelIndex>
          {index + 1 < 10 ? `0${index + 1}` : index + 1}.
         </LabelIndex>
         <TabLabel>{option.label}</TabLabel>
        </TabButton>
       ))}
      </Box>
     </Box>
     <ExperimentDetails />
    </OptionsWrapper>
   </Grid>
  </Grid>
 );
}
