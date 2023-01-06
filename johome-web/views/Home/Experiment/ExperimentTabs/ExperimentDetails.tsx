import {useState, useMemo} from "react"
import {
  ExperimentOptions,
  detailTabs,
  DetailTabs,
  getExperimentContent,
} from "./ExperimentTabs.copy"
import {DetailsWrapper, DetailTab} from "./ExperimentTabs.styles"

import Box from "@mui/material/Box"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import {Typography} from "@mui/material";

type ExperimentDetailsProps = {
  activeOption?: ExperimentOptions
}

export default function ExperimentDetails({
                                            activeOption,
                                            ...props
                                          }: ExperimentDetailsProps) {
  const [activeTab, setActiveTab] = useState<DetailTabs>(DetailTabs.GENERAL)

  const handleChange = (event: React.SyntheticEvent, newValue: DetailTabs) => {
    setActiveTab(newValue)
  }

  const content = useMemo(
    () => (activeOption ? getExperimentContent(activeOption) : null),
    [activeOption]
  )

  return (
    <DetailsWrapper {...props}>
      <Box sx={{width: "100%", typography: "body1"}}>
        <TabContext value={activeTab}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              padding: "14px 12px 12px",
            }}
          >
            <TabList
              TabIndicatorProps={{
                sx: {display: "none"},
              }}
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              {detailTabs.map((tab) => (
                <DetailTab
                  disableRipple
                  disableTouchRipple
                  label={tab.label}
                  value={tab.key}
                  key={tab.key}
                />
              ))}
            </TabList>
          </Box>
          <Box px={1}>
            <TabPanel value={DetailTabs.GENERAL}>
              <Typography maxWidth="80%" mb={2} variant="h5" fontWeight={800}>{content?.general.title}</Typography>
              <Typography variant="body2">{content?.general.description}</Typography>
            </TabPanel>
            <TabPanel value={DetailTabs.IMAGES}>
              <Typography maxWidth="80%" mb={2} variant="h5" fontWeight={700}>{content?.general.title}</Typography>
              <Typography variant="body2">{content?.general.description}</Typography>
            </TabPanel>
            <TabPanel value={DetailTabs.LOCATIONS}>
              <Typography maxWidth="80%" mb={2} variant="h5" fontWeight={700}>{content?.general.title}</Typography>
              <Typography variant="body2">{content?.general.description}</Typography>
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </DetailsWrapper>
  )
}
