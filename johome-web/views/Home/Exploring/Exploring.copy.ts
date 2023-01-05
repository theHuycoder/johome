import { DealUnits } from "@/shared/utils/units"

export const exploringDeals = [
 {
  id: 1,
  name: "Coco Riverside Lodge",
  location: "Vũng Liêm, Vĩnh Long",
  stars: 4.8,
  reviews: 170,
  price: 999000,
  unit: DealUnits.PER_NIGHT,
  currency: "VND",
  image: "/assets/home/exploring-1.jpg",
 },
 {
  id: 2,
  name: "U Lesa",
  location: "Tân Bình, Hồ Chí Minh",
  stars: 4.8,
  reviews: 200,
  price: 599000,
  unit: DealUnits.PER_NIGHT,
  currency: "VND",
  image: "/assets/home/exploring-2.jpg",
 },
 {
  id: 3,
  name: "Căn Tường Vi ",
  location: "Ba Vì, Hà Nội ",
  stars: 4.8,
  reviews: 127,
  price: 1999000,
  unit: DealUnits.PER_NIGHT,
  currency: "VND",
  image: "/assets/home/exploring-3.jpg",
 },
 {
  id: 4,
  name: "Madam Diêu Hao",
  location: "Mê Linh, Hà Nội",
  stars: 4.7,
  reviews: 100,
  price: 1600000,
  unit: DealUnits.PER_NIGHT,
  currency: "VND",
  image: "/assets/home/exploring-4.jpg",
 },
 {
  id: 5,
  name: "Nomini homestay",
  location: "Đà Lạt, Lâm Đồng",
  stars: 4.9,
  reviews: 360,
  price: 3100000,
  unit: DealUnits.PER_NIGHT,
  currency: "VND",
  image: "/assets/home/exploring-5.jpg",
 },
 {
  id: 6,
  name: "Rustic Bungalow Đôi",
  location: "Ba Vì, Hà Nội ",
  stars: 4.8,
  reviews: 210,
  price: 2500000,
  unit: DealUnits.PER_NIGHT,
  currency: "VND",
  image: "/assets/home/exploring-6.jpg",
 },
 {
  id: 7,
  name: "Moon Hana",
  location: "Sóc Sơn, Hà Nội",
  stars: 4.8,
  reviews: 170,
  price: 1200000,
  unit: DealUnits.PER_NIGHT,
  currency: "VND",
  image: "/assets/home/exploring-7.jpg",
 },
 {
  id: 8,
  name: "Green Mountain",
  location: "Hoa Lư, Ninh Bình ",
  stars: 4.9,
  reviews: 570,
  price: 800000,
  unit: DealUnits.PER_NIGHT,
  currency: "VND",
  image: "/assets/home/exploring-8.jpg",
 },
]

export enum ExploringTabKeys {
 POPULAR = "popular",
 FAVORITE = "favorite",
 FOR_YOU = "for_you",
}

export const exploringTabs = [
 {
  key: ExploringTabKeys.POPULAR,
  label: "Phổ biến",
 },
 {
  key: ExploringTabKeys.FAVORITE,
  label: "Được yêu thích",
 },
 {
  key: ExploringTabKeys.FOR_YOU,
  label: "Dành cho bạn",
 },
]
