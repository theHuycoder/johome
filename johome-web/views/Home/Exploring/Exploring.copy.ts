import { DealUnits } from "@/shared/utils/units"

export const exploringDeals = [
 {
  id: 1,
  name: "Coco Riverside Lodge",
  location: "Vũng Liêm, Vĩnh Long",
  stars: 4.8,
  reviews: 100,
  price: 999000,
  unit: DealUnits.PER_NIGHT,
  currency: "VND",
  image: "/assets/home/exploring-1.jpg",
 },
 {
  id: 2,
  name: "The grandlux resort",
  location: "Tân Bình, Hồ Chí Minh",
  stars: 4.8,
  reviews: 100,
  price: 999000,
  unit: DealUnits.PER_NIGHT,
  currency: "VND",
  image: "/assets/home/exploring-1.jpg",
 },
 {
  id: 3,
  name: "Căn Tường Vi ",
  location: "Ba Vì, Hà Nội ",
  stars: 4.8,
  reviews: 100,
  price: 999000,
  unit: DealUnits.PER_NIGHT,
  currency: "VND",
  image: "/assets/home/exploring-1.jpg",
 },
 {
  id: 4,
  name: "The grandlux resort",
  location: "Tân Bình, Hồ Chí Minh",
  stars: 4.8,
  reviews: 100,
  price: 999000,
  unit: DealUnits.PER_NIGHT,
  currency: "VND",
  image: "/assets/home/exploring-1.jpg",
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
