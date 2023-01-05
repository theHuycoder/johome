export function formatPrice(price: string | number) {
 return new Intl.NumberFormat("vi-VN", {
  currency: "VND",
  style: "currency",
 }).format(price)
}
