import { useState } from "react";
import { Grid, Box, Fade } from "@mui/material";
import Image from "next/image";
import {
 TabButton,
 TabLabel,
 LabelIndex,
 OptionsWrapper,
} from "./ExperimentTabs.styles";
import { ExperimentOptions, options } from "./ExperimentTabs.copy";
import ExperimentDetails from "./ExperimentDetails";

const images = {
 [ExperimentOptions.MOUNTAIN]: "/assets/home/experiment-mountain.svg",
 [ExperimentOptions.SEA]: "/assets/home/experiment-sea.svg",
 [ExperimentOptions.CITY]: "/assets/home/experiment-mountain.svg",
 [ExperimentOptions.FOREST]: "/assets/home/experiment-sea.svg",
};

export default function ExperimentTabs() {
 const [activeOption, setActiveOption] = useState<ExperimentOptions>(
  ExperimentOptions.MOUNTAIN
 );

 return (
  <Grid container>
   <Grid item xs={12}>
    <Box height="220px" position="relative">
     <Fade
      easing={{ enter: "ease-in", exit: "ease-out" }}
      in={activeOption === ExperimentOptions.MOUNTAIN}
      timeout={{
       enter: 500,
       exit: 500,
      }}
     >
      <Image
       src={images[ExperimentOptions.MOUNTAIN]}
       fill
       alt="mountain"
       priority
       style={{
        objectFit: "cover",
        transition: "all 0.4s",
       }}
       sizes="(max-width: 768px) 100vw,
				 (max-width: 1200px) 50vw,
				 33vw"
      />
     </Fade>
     <Fade
      easing={{ enter: "ease-in", exit: "ease-out" }}
      in={activeOption === ExperimentOptions.SEA}
      timeout={{
       enter: 500,
       exit: 500,
      }}
     >
      <Image
       src={images[ExperimentOptions.SEA]}
       fill
       alt="sea"
       priority
       style={{
        objectFit: "cover",
        transition: "all 0.4s",
       }}
       sizes="(max-width: 768px) 100vw,
				(max-width: 1200px) 50vw,
				33vw"
      />
     </Fade>
     <Fade
      easing={{ enter: "ease-in", exit: "ease-out" }}
      in={activeOption === ExperimentOptions.CITY}
      timeout={{
       enter: 500,
       exit: 500,
      }}
     >
      <Image
       src={images[ExperimentOptions.CITY]}
       fill
       alt="city"
       priority
       style={{
        objectFit: "cover",
        transition: "all 0.4s",
       }}
       sizes="(max-width: 768px) 100vw,
				 (max-width: 1200px) 50vw,
				 33vw"
      />
     </Fade>
     <Fade
      easing={{ enter: "ease-in", exit: "ease-out" }}
      in={activeOption === ExperimentOptions.FOREST}
      timeout={{
       enter: 500,
       exit: 500,
      }}
     >
      <Image
       src={images[ExperimentOptions.FOREST]}
       fill
       alt="forest"
       priority
       style={{
        objectFit: "cover",
        transition: "all 0.4s",
       }}
       sizes="(max-width: 768px) 100vw,
				(max-width: 1200px) 50vw,
				33vw"
      />
     </Fade>
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
