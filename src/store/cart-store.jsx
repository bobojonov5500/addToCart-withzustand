import { toast } from "react-toastify";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist((set) => ({
    cart: [],
    addToCart: (product) =>
      set((state) => {
        const alreadyInCart = state.cart.some(
          (cartItem) => cartItem.id === product.id
        );
        if (!alreadyInCart) {
          toast.success(`${product?.name} added to cart`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return { cart: [...state.cart, product] };
        }
        toast.error(`${product?.name} already in cart`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return state;
      }),
    removeFromCart: (product_id) =>
      set((state) => ({
        cart: state.cart.filter((product) => product.id !== product_id),
      })),
    clearCart: () => set({ cart: [] }),
  })),
  {
    name: "save-storage",
  }
);

export default useCartStore;
