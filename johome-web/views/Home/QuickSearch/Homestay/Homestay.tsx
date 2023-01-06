import React, {useEffect} from "react"
import {UseFormReturn} from "react-hook-form"
import {HomestayFormValues} from "../QuickSearch"
import {
  Box,
  Autocomplete,
  Input,
  TextField,
  Grid,
  Typography,
  Button,
} from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import parse from "autosuggest-highlight/parse"
import {Calendar, NearMe, User} from "@/shared/components/Icons"
import {StyledFieldTitle} from "./Homestay.styles"
import {useGoogleMap} from "@/shared/hooks"
import {useRouter} from "next/router";

type HomestaySearchProps = {
  form: UseFormReturn<HomestayFormValues>
}

export default function HomestaySearch({form}: HomestaySearchProps) {
  const {getPlacePredictions, placePredictions, isPlacePredictionsLoading} =
    useGoogleMap()

  const router = useRouter()

  const handleSearchLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target

    getPlacePredictions({
      input: value,
      componentRestrictions: {country: "vn"},
    })
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      //  justifyContent="space-between"
      height="100%"
      gap="50px"
    >
      <Box
        display="flex"
        gap={1.25}
        alignItems="flex-start"
        width="193px"
        flexShrink={0}
      >
        <Box pt={0.5} flexShrink={0}>
          <NearMe/>
        </Box>
        <Box width="100%">
          <StyledFieldTitle>Địa điểm</StyledFieldTitle>
          <Autocomplete
            fullWidth
            options={placePredictions}
            autoHighlight
            componentsProps={{
              paper: {
                sx: {
                  width: 900,
                },
              },
            }}
            getOptionLabel={(option) => option.description}
            onChange={console.log}
            renderOption={(props, option) => {
              const matches = option.structured_formatting.main_text_matched_substrings
              const parts = parse(
                option.structured_formatting.main_text,
                matches.map((match: any) => [match.offset, match.offset + match.length])
              )

              return (
                <li {...props}>
                  <Grid container alignItems="center">
                    <Grid item>
                      <Box
                        component={LocationOnIcon}
                        sx={{color: "text.secondary", mr: 2}}
                      />
                    </Grid>
                    <Grid item xs>
                      {parts.map((part, index) => (
                        <span
                          key={index}
                          style={{
                            fontWeight: part.highlight ? 700 : 400,
                          }}
                        >
             {part.text}
            </span>
                      ))}
                      <Typography variant="body2" color="text.secondary">
                        {option.structured_formatting.secondary_text}
                      </Typography>
                    </Grid>
                  </Grid>
                </li>
              )
            }}
            freeSolo
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                placeholder="Bạn muốn đi đâu ?"
                InputProps={{...params.InputProps, disableUnderline: true}}
                onChange={handleSearchLocation}
              />
            )}
          />
        </Box>
      </Box>
      <Box
        display="flex"
        gap={1.25}
        alignItems="flex-start"
        width="238px"
        flexShrink={0}
      >
        <Box pt={0.5} flexShrink={0}>
          <Calendar/>
        </Box>
        <Box width="100%">
          <StyledFieldTitle>Nhận/trả phòng</StyledFieldTitle>
          <Autocomplete
            fullWidth
            options={placePredictions}
            autoHighlight
            getOptionLabel={(option) => option.description}
            onChange={console.log}
            renderOption={(props, option) => {
              const matches = option.structured_formatting.main_text_matched_substrings
              const parts = parse(
                option.structured_formatting.main_text,
                matches.map((match: any) => [match.offset, match.offset + match.length])
              )

              return (
                <li {...props}>
                  <Grid container alignItems="center">
                    <Grid item>
                      <Box
                        component={LocationOnIcon}
                        sx={{color: "text.secondary", mr: 2}}
                      />
                    </Grid>
                    <Grid item xs>
                      {parts.map((part, index) => (
                        <span
                          key={index}
                          style={{
                            fontWeight: part.highlight ? 700 : 400,
                          }}
                        >
             {part.text}
            </span>
                      ))}
                      <Typography variant="body2" color="text.secondary">
                        {option.structured_formatting.secondary_text}
                      </Typography>
                    </Grid>
                  </Grid>
                </li>
              )
            }}
            freeSolo
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                placeholder="Thời gian chuyến đi"
                InputProps={{...params.InputProps, disableUnderline: true}}
                onChange={handleSearchLocation}
              />
            )}
          />
        </Box>
      </Box>
      <Box
        display="flex"
        gap={1.25}
        alignItems="flex-start"
        width="178px"
        flexShrink={0}
      >
        <Box pt={0.5} flexShrink={0}>
          <User/>
        </Box>
        <Box width="100%">
          <StyledFieldTitle>Số người</StyledFieldTitle>
          <Autocomplete
            fullWidth
            options={placePredictions}
            autoHighlight
            getOptionLabel={(option) => option.description}
            onChange={console.log}
            renderOption={(props, option) => {
              const matches = option.structured_formatting.main_text_matched_substrings
              const parts = parse(
                option.structured_formatting.main_text,
                matches.map((match: any) => [match.offset, match.offset + match.length])
              )

              return (
                <li {...props}>
                  <Grid container alignItems="center">
                    <Grid item>
                      <Box
                        component={LocationOnIcon}
                        sx={{color: "text.secondary", mr: 2}}
                      />
                    </Grid>
                    <Grid item xs>
                      {parts.map((part, index) => (
                        <span
                          key={index}
                          style={{
                            fontWeight: part.highlight ? 700 : 400,
                          }}
                        >
             {part.text}
            </span>
                      ))}
                      <Typography variant="body2" color="text.secondary">
                        {option.structured_formatting.secondary_text}
                      </Typography>
                    </Grid>
                  </Grid>
                </li>
              )
            }}
            freeSolo
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                placeholder="Số lượng khách"
                InputProps={{...params.InputProps, disableUnderline: true}}
                onChange={handleSearchLocation}
              />
            )}
          />
        </Box>
      </Box>
      <Box flexShrink={0} width="104px">
        <Button sx={{borderRadius: "50%"}} onClick={() => router.push("/search")}>
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_606_1740)">
              <rect width="64" height="64" rx="32" fill="#1BBB83"/>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.9056 36.3199C33.551 37.3729 31.8487 38 30 38C25.5817 38 22 34.4183 22 30C22 25.5817 25.5817 22 30 22C34.4183 22 38 25.5817 38 30C38 31.8487 37.3729 33.551 36.3199 34.9056L41.7071 40.2929C42.0976 40.6834 42.0976 41.3166 41.7071 41.7071C41.3166 42.0976 40.6834 42.0976 40.2929 41.7071L34.9056 36.3199ZM36 30C36 33.3137 33.3137 36 30 36C26.6863 36 24 33.3137 24 30C24 26.6863 26.6863 24 30 24C33.3137 24 36 26.6863 36 30Z"
                fill="#FCFCFD"
              />
            </g>
            <defs>
              <clipPath id="clip0_606_1740">
                <rect width="64" height="64" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </Button>
      </Box>
    </Box>
  )
}
