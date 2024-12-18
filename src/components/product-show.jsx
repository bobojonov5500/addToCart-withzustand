import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link, useNavigation, useParams } from "react-router-dom";
import ApiCalling from "../api/api-call";
import useCartStore from "../store/cart-store";
import { FaMinus, FaPlus } from "react-icons/fa";
import Loader from "../ui/loader";

const Product = () => {
  // const navigation = useNavigation();
  const { id } = useParams();
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["post", { id }],
    queryFn: () => ApiCalling.getPost(id),
    refetchOnWindowFocus: false,
  });
  if (isError) {
    return <h2 className="text-red-500 font-semibold">{error.message}</h2>;
  }
  const { addToCart, cart, QuantityMinus } = useCartStore((state) => state);
  const currentItem = cart.filter((item) => item?.id === data?.id);

  return (
    <div>
      {isLoading ? (
        <div className="flex   justify-center items-center ">
          <div className=" mt-5">
            <Loader />
          </div>
        </div>
      ) : (
        <div>
          <section className="py-6  bg-white md:py-8  antialiased">
            <div className="max-w-screen-xl  px-4 mx-auto 2xl:px-0">
              <div className="lg:grid  lg:grid-cols-2 lg:gap-8 xl:gap-16">
                <div className="shrink-0  max-w-md lg:max-w-lg mx-auto ">
                  <img
                    className=" h-auto rounded-xl object-cover "
                    src={data?.img}
                    alt="#"
                  />
                </div>
                <div className="mt-6 sm:mt-8 lg:mt-0">
                  <span className="text-[40px] ">{data?.name}</span>
                  <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">
                    {data?.description}
                  </h1>
                  <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                    <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl ">
                      ${data?.price}
                    </p>
                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        <svg
                          className="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                        (5.0)
                      </p>
                      <a
                        href="#"
                        className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline "
                      >
                        345 Reviews
                      </a>
                    </div>
                  </div>
                  <div className="mt-6  flex gap-3 items-center">
                    <button
                      href="#"
                      className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      role="button"
                    >
                      Add to favorites
                    </button>
                    <div>
                      {currentItem[0]?.quantity > 0 ? (
                        <div className="flex items-center gap-3">
                          <Link
                            to={"/cart"}
                            className="text-white  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                            role="button"
                          >
                            Savatga o'tish
                          </Link>
                          <div className="flex py-2 justify-between border px-2 rounded-lg w-[150px]">
                            <button
                              onClick={() => QuantityMinus(data?.id)}
                              className="text-[14px]"
                            >
                              <FaMinus />
                            </button>
                            <span className="text-[20px] font-semibold">
                              {currentItem[0]?.quantity}
                            </span>
                            <button
                              onClick={() => addToCart(data?.id)}
                              className="text-[14px]"
                            >
                              <FaPlus />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(data?.id)}
                          href="#"
                          className="text-white  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                          role="button"
                        >
                          Savatga qo'shish
                        </button>
                      )}
                    </div>
                  </div>
                  <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                  <p className="mb-6 text-gray-500 dark:text-gray-400">
                    Studio quality three mic array for crystal clear calls and
                    voice recordings. Six-speaker sound system for a remarkably
                    robust and high-quality audio experience. Up to 256GB of
                    ultrafast SSD storage.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Two Thunderbolt USB 4 ports and up to two USB 3 ports.
                    Ultrafast Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched
                    Magic Mouse with Magic Keyboard or Magic Keyboard with Touch
                    ID.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Product;
