import { Product } from "@/typings/productTypings";

export function getCartTotal(products: Product[]): string {
  const total = products.reduce((acc: number, currentProduct: Product) => {
    return acc + currentProduct.price;
  }, 0);

  return `${products[0]?.currency} ${total.toFixed(2)}`;
}
