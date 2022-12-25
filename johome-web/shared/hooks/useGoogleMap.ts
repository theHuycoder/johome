import { useEffect } from "react";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

export default function useGoogleMap() {
 const {
  placesService,
  placePredictions,
  getPlacePredictions,
  isPlacePredictionsLoading,
 } = usePlacesService({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  debounce: 500,
  language: "vi",
 });

 return {
  placesService,
  placePredictions,
  getPlacePredictions,
  isPlacePredictionsLoading,
 };
}
