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
    general: {
      title: "Những điều thú vị bạn nên biết về du lịch núi Việt Nam",
      description: "Du lịch núi là một trong những loại hình du lịch phổ biến và sôi động nhất Việt Nam hiện nay. Đất nước ta với lợi thế gần 3.500km đường bờ biển nên cơ hội phát triển du lịch biển là rất lớn. Johome khẳng định cung cấp cho bạn sự lựa chọn tối ưu các homestay khu vực bờ biển.\n"
    },
    images: [],
    locations: [],
  },
  [ExperimentOptions.SEA]: {
    general: {
      title: "Những điều thú vị bạn nên biết về du lịch biển Việt Nam",
      description: "Du lịch biển là một trong những loại hình du lịch phổ biến và sôi động nhất Việt Nam hiện nay. Đất nước ta với lợi thế gần 3.500km đường bờ biển nên cơ hội phát triển du lịch biển là rất lớn. Johome khẳng định cung cấp cho bạn sự lựa chọn tối ưu các homestay khu vực bờ biển.\n"
    },
    images: [],
    locations: [],
  },
  [ExperimentOptions.CITY]: {
    general: {
      title: "Những điều thú vị bạn nên biết về du lịch thành phố Việt Nam",
      description: "Du lịch núi là một trong những loại hình du lịch phổ biến và sôi động nhất Việt Nam hiện nay. Đất nước ta với lợi thế gần 3.500km đường bờ biển nên cơ hội phát triển du lịch biển là rất lớn. Johome khẳng định cung cấp cho bạn sự lựa chọn tối ưu các homestay khu vực bờ biển.\n"
    },
    images: [],
    locations: [],
  },
  [ExperimentOptions.FOREST]: {
    general: {
      title: "Những điều thú vị bạn nên biết về du lịch rừng Việt Nam",
      description: "Du lịch rừng là một trong những loại hình du lịch phổ biến và sôi động nhất Việt Nam hiện nay. Đất nước ta với lợi thế gần 3.500km đường bờ biển nên cơ hội phát triển du lịch biển là rất lớn. Johome khẳng định cung cấp cho bạn sự lựa chọn tối ưu các homestay khu vực bờ biển.\n"
    },
    images: [],
    locations: [],
  },
};

export const getExperimentContent = (option: ExperimentOptions) => {
  return experimentContents[option];
};
