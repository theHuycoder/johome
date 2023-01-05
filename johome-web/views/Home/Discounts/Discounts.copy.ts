import dayjs from "dayjs"

export const discounts = [
 {
  title: "Coco Riverside Lodge",
  subtitle:
   "Tận hưởng không gian sang trọng, đầy đủ tiện nghi. Dịch vụ đi thuyền, khám phá văn hóa địa phương. Sale 20% còn 699.000 VNĐ. Áp dụng từ 29/12/2022- 01/09/2023",
  image: "/assets/home/discount-1.png",
  originalPrice: 899000,
  salePrice: 699000,
  date: {
   from: dayjs("2022-12-29").format(),
   to: dayjs("2023-01-09").format(),
  },
  salePercent: 20,
 },
 {
  title: "Love paradise",
  subtitle:
   "Tận hưởng không gian sang trọng, đầy đủ tiện nghi. Dịch vụ đi thuyền, khám phá văn hóa địa phương. Sale 20% còn 699.000 VNĐ. Áp dụng từ 01- 07/01/2023",
  image: "/assets/home/discount-2.png",
  originalPrice: 999000,
  salePrice: 799000,
  date: {
   from: dayjs("2023-01-03").format(),
   to: dayjs("2023-01-07").format(),
  },
  salePercent: 15,
 },
 {
  title: "Spring garden",
  subtitle:
   "Tận hưởng không gian sang trọng, đầy đủ tiện nghi. Dịch vụ đi thuyền, khám phá văn hóa địa phương. Sale 20% còn 699.000 VNĐ. Áp dụng từ 04- 11/01/2023.",
  image: "/assets/home/discount-3.png",
  originalPrice: 699000,
  salePrice: 499000,
  date: {
   from: dayjs("2023-01-04").format(),
   to: dayjs("2023-01-11").format(),
  },
  salePercent: 15,
 },
]
