import { Product } from "@/typings/productTypings";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => {
      return {
        cart: [],
        addToCart: (product) => {
          set((state) => ({
            cart: [...state.cart, product],
          }));
        },
        removeFromCart: (product) => {
          const productToRemove = get().cart.findIndex(
            (p) => p.meta.sku === product.meta.sku
          );
          set((state) => {
            const newCart = [...state.cart];

            newCart.splice(productToRemove, 1);
            return { cart: newCart };
          });
        },
      };
    },
    { name: "cart-info" }
  )
);

export default useCartStore;
