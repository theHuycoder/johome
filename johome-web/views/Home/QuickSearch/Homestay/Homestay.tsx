import React, { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { HomestayFormValues } from "../QuickSearch";
import {
 Box,
 Autocomplete,
 Input,
 TextField,
 Grid,
 Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import parse from "autosuggest-highlight/parse";
import { Calendar, NearMe, User } from "@/shared/components/Icons";
import { StyledFieldTitle } from "./Homestay.styles";
import { useGoogleMap } from "@/shared/hooks";

type HomestaySearchProps = {
 form: UseFormReturn<HomestayFormValues>;
};

export default function HomestaySearch({ form }: HomestaySearchProps) {
 const { getPlacePredictions, placePredictions, isPlacePredictionsLoading } =
  useGoogleMap();

 const handleSearchLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { value } = e.target;

  getPlacePredictions({
   input: value,
   componentRestrictions: { country: "vn" },
  });
 };

 return (
  <Box display="flex" alignItems="center" justifyContent="space-between">
   <Box
    display="flex"
    gap={2.25}
    alignItems="flex-start"
    flexBasis="calc(100% /3)"
   >
    <Box pt={0.5} flexShrink={0}>
     <NearMe />
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
         width: 700,
        },
       },
      }}
      getOptionLabel={(option) => option.description}
      onChange={console.log}
      renderOption={(props, option) => {
       const matches =
        option.structured_formatting.main_text_matched_substrings;
       const parts = parse(
        option.structured_formatting.main_text,
        matches.map((match: any) => [match.offset, match.offset + match.length])
       );

       return (
        <li {...props}>
         <Grid container alignItems="center">
          <Grid item>
           <Box
            component={LocationOnIcon}
            sx={{ color: "text.secondary", mr: 2 }}
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
       );
      }}
      freeSolo
      renderInput={(params) => (
       <TextField
        {...params}
        variant="standard"
        placeholder="Bạn muốn đi đâu ?"
        InputProps={{ ...params.InputProps, disableUnderline: true }}
        onChange={handleSearchLocation}
       />
      )}
     />
    </Box>
   </Box>
   <Box
    display="flex"
    gap={2.25}
    alignItems="flex-start"
    flexBasis="calc(100% /3)"
   >
    <Box pt={0.5} flexShrink={0}>
     <Calendar />
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
       const matches =
        option.structured_formatting.main_text_matched_substrings;
       const parts = parse(
        option.structured_formatting.main_text,
        matches.map((match: any) => [match.offset, match.offset + match.length])
       );

       return (
        <li {...props}>
         <Grid container alignItems="center">
          <Grid item>
           <Box
            component={LocationOnIcon}
            sx={{ color: "text.secondary", mr: 2 }}
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
       );
      }}
      freeSolo
      renderInput={(params) => (
       <TextField
        {...params}
        variant="standard"
        placeholder="Thời gian chuyến đi"
        InputProps={{ ...params.InputProps, disableUnderline: true }}
        onChange={handleSearchLocation}
       />
      )}
     />
    </Box>
   </Box>
   <Box
    display="flex"
    gap={2.25}
    alignItems="flex-start"
    flexBasis="calc(100% /3)"
   >
    <Box pt={0.5} flexShrink={0}>
     <User />
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
       const matches =
        option.structured_formatting.main_text_matched_substrings;
       const parts = parse(
        option.structured_formatting.main_text,
        matches.map((match: any) => [match.offset, match.offset + match.length])
       );

       return (
        <li {...props}>
         <Grid container alignItems="center">
          <Grid item>
           <Box
            component={LocationOnIcon}
            sx={{ color: "text.secondary", mr: 2 }}
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
       );
      }}
      freeSolo
      renderInput={(params) => (
       <TextField
        {...params}
        variant="standard"
        placeholder="Số lượng khách"
        InputProps={{ ...params.InputProps, disableUnderline: true }}
        onChange={handleSearchLocation}
       />
      )}
     />
    </Box>
   </Box>
  </Box>
 );
}
