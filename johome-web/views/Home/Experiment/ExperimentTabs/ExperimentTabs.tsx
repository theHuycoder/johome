import {useState} from "react"
import {Grid, Box, Fade, Container} from "@mui/material"
import Image from "next/image"
import {
  TabButton,
  TabLabel,
  LabelIndex,
  OptionsWrapper,
} from "./ExperimentTabs.styles"
import {ExperimentOptions, options} from "./ExperimentTabs.copy"
import ExperimentDetails from "./ExperimentDetails"
import {SectionTitle} from "@/shared/components/Typography"

const images = {
  [ExperimentOptions.MOUNTAIN]: "/assets/home/mountain.jpg",
  [ExperimentOptions.SEA]: "/assets/home/sea.jpg",
  [ExperimentOptions.CITY]: "/assets/home/city.jpg",
  [ExperimentOptions.FOREST]: "/assets/home/forest.jpg",
}

export default function ExperimentTabs() {
  const [activeOption, setActiveOption] = useState<ExperimentOptions>(
    ExperimentOptions.MOUNTAIN
  )

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box height="840px" position="relative">
          <Fade
            easing={{enter: "ease-in", exit: "ease-out"}}
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
              //  sizes="(max-width: 768px) 100vw,
              // 	 (max-width: 1200px) 50vw,
              // 	 33vw"
            />
          </Fade>
          <Fade
            easing={{enter: "ease-in", exit: "ease-out"}}
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
            easing={{enter: "ease-in", exit: "ease-out"}}
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
            easing={{enter: "ease-in", exit: "ease-out"}}
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
          <Box
            position="absolute"
            sx={{top: "500px", left: "50%", transform: "translate(-50%,0)"}}
          >
            <Container maxWidth="xl">
              <OptionsWrapper
                display="flex"
                flexDirection="column"
                pt={8.5}
                px={6}
                pb={7}
                gap={8}
              >
                <Box display="flex" alignItems="center" justifyContent="space-between">
                  <SectionTitle>Đa dạng các loại hình du lịch</SectionTitle>
                </Box>
                <Box display="flex" gap="126px">
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
                  <ExperimentDetails activeOption={activeOption}/>
                </Box>
              </OptionsWrapper>
            </Container>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
