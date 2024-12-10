import { toast } from "react-toastify";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist((set) => ({
    cart: [],
    addToCart: (product_id) =>
      set((state) => {
        const alreadyInCart = state.cart.some((item) => item.id === product_id);
        if (!alreadyInCart) {
          return { cart: [...state.cart, { id: product_id, quantity: 1 }] };
        } else {
          return {
            cart: state.cart.map((item) =>
              item.id === product_id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        }
      }),
    QuantityMinus: (product_id) =>
      set((state) => {
        const product = state.cart.find((item) => item.id === product_id);
        if (!product) {
          return state;
        }
        if (product.quantity > 1) {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === product_id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          };
        }
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== product_id),
        };
      }),
    removeProductFromCart: (product_id) =>
      set((state) => ({
        ...state,
        cart: state.cart.filter((item) => item.id !== product_id),
      })),
    clearCart: () => set({ cart: [] }),
  })),
  {
    name: "save-storage",
  }
);

export default useCartStore;
