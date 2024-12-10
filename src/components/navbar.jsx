import React from "react";
import { Link } from "react-router-dom";
import useCartStore from "../store/cart-store";

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  return (
    <div className="bg-green-500">
      <div className="flex  max-w-[1200px] mx-auto py-3 justify-between items-center ">
        <Link to="/" className="font-bold">
          Home
        </Link>
        <div>
          <Link className="font-semibold mr-3">user</Link>
          <Link to={"/cart"} className="font-semibold">
            cart
            {cart.length > 0 && (
              <span className="inline-flex items-center justify-center w-6 h-6 ml-[5px] text-[15px] font-semibold text-white bg-red-500 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
