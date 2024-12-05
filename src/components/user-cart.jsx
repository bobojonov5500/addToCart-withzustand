import React from "react";
import useCartStore from "../store/cart-store";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  return <div>cart</div>;
};

export default Cart;
