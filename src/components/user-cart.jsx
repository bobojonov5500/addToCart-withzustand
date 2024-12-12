import React, { useEffect, useState } from "react";
import useCartStore from "../store/cart-store";
import { useQuery } from "@tanstack/react-query";
import ApiCalling from "../api/api-call";
import whyDidYouRender from "@welldone-software/why-did-you-render";
import Loader from "../ui/loader";
import { useMemo } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete, MdDeleteOutline } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";

const Cart = () => {
  const {
    cart,
    addToCart,
    QuantityMinus,
    removeProductFromCart,
  } = useCartStore((state) => state);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["Posts"],
    queryFn: () => ApiCalling.getPosts(),
    refetchOnWindowFocus: false,
  });
  const cartProducts = useMemo(() => {
    if (!data) return [];
    return cart
      .map((cartItem) => data.find((product) => product.id === cartItem.id))
      .filter(Boolean);
  }, [cart, data]);
  if (isError) {
    return (
      <h2 className="text-red-500 font-semibold text-center">
        {error.message}
      </h2>
    );
  }
  return (
    <div className="max-w-[1200px] my-8 px-4 min-w-custom:px-0 mx-auto">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="">
          {cartProducts && cartProducts.length > 0 ? (
            cartProducts.map((product, index) => (
              <div
                className="flex mb-3 border-4 p-1  rounded-lg "
                key={product.id}
              >
                <div className="max-w-[33%]">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={product?.img}
                    alt="img"
                  />
                </div>
                <div className="max-w-[66%]  ml-[50px]">
                  <span className="text-[25px] font-semibold">
                    {product.name}
                  </span>
                  <p className="mr-3">{product.description}</p>
                  <div className="flex mt-5 flex-col gap-2">
                    <span className="font-bold text-[30px]">
                      ${product.price}
                    </span>
                    <div className="opacity-70">
                      <span className="text-[20px] ">
                        Total Price for this Product:
                      </span>
                      <span className="font-semibold ml-[8px] text-[20px] ">
                        x{cart[index].quantity}=
                      </span>
                      <span className=" text-[20px] font-semibold">
                        ${cart[index].quantity * product.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-5 flex-wrap">
                      <div className="flex py-2 px-2 rounded-md items-center border min-w-[120px] justify-between">
                        <button
                          onClick={
                            cart[index].quantity === 1
                              ? null
                              : () => QuantityMinus(product.id)
                          }
                          disabled={cart[index].quantity === 1}
                        >
                          <FaMinus
                            className={`${
                              cart[index].quantity === 1 ? "opacity-50" : ""
                            }`}
                          />
                        </button>
                        <span className="font-semibold">
                          {cart[index].quantity}
                        </span>
                        <button onClick={() => addToCart(product.id)}>
                          <FaPlus />
                        </button>
                      </div>
                      <button className="bg-green-500  flex items-center gap-2 text-white py-2 px-2 rounded-md ">
                        purchase now
                        <BiSolidPurchaseTag className="text-[20px]" />
                      </button>
                      <button
                        onClick={() => {
                          removeProductFromCart(product.id);
                        }}
                        className="bg-red-500 flex items-center gap-2  text-white py-2 px-2 rounded-md "
                      >
                        Delete Product
                        <MdDelete className="text-[20px] " />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3 className="text-[30px] text-center ">
              there is no any product yet!!
            </h3>
          )}
        </div>
      )}
    </div>
  );
};

Cart.whyDidYouRender = true;
export default Cart;
