import React from "react";
import useCartStore from "../store/cart-store";

const Card = ({ item }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div className="max-w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col">
      <a href="#">
        <img className="rounded-t-lg" src={item?.img} alt />
      </a>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item?.name}
          </h5>
          <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ${item?.price.slice(0, -3)}
          </p>
        </div>
        <p className="text-[15px] text-gray-700 dark:text-gray-400 flex-grow">
          {item?.description}
        </p>
        <div className="flex text-[15px]   mt-5 justify-between">
          <button
            onClick={() => addToCart(item)}
            className="border hover:shadow-[0_10px_15px_rgba(72,187,120,0.5)] rounded-lg px-2 py-1 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            Add to Cart
          </button>

          <button className="border rounded-lg border-yellow-600 text-yellow-600 px-2 py-1 hover:bg-yellow-600 hover:text-white hover:shadow-[0_10px_15px_rgba(251,191,36,0.5)] transition-all duration-300">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
