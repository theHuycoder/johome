export enum ExperimentOptions {
 MOUNTAIN = "mountain",
 SEA = "sea",
 CITY = "city",
 FOREST = "forest",
}

export enum DetailTabs {
 GENERAL = "general",
 IMAGES = "images",
 LOCATIONS = "locations",
}

export const options = [
 {
  label: "Đồi núi",
  value: ExperimentOptions.MOUNTAIN,
 },
 {
  label: "Bờ biển",
  value: ExperimentOptions.SEA,
 },
 {
  label: "Thành phố",
  value: ExperimentOptions.CITY,
 },
 {
  label: "Rừng",
  value: ExperimentOptions.FOREST,
 },
];

export const detailTabs = [
 {
  key: DetailTabs.GENERAL,
  label: "Tổng quan",
 },
 {
  key: DetailTabs.IMAGES,
  label: "Hình ảnh",
 },
 {
  key: DetailTabs.LOCATIONS,
  label: "Địa điểm",
 },
];

export const experimentContents = {
 [ExperimentOptions.MOUNTAIN]: {
  general: {},
  images: [],
  locations: [],
 },
 [ExperimentOptions.SEA]: {
  general: {},
  images: [],
  locations: [],
 },
 [ExperimentOptions.CITY]: {
  general: {},
  images: [],
  locations: [],
 },
 [ExperimentOptions.FOREST]: {
  general: {},
  images: [],
  locations: [],
 },
};

export const getExperimentContent = (option: ExperimentOptions) => {
 return experimentContents[option];
};
