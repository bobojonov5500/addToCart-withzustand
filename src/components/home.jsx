import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import ApiCalling from "../api/api-call";
import Card from "./card";
import Loader from "../ui/loader";
import Input from "../ui/input";
import { useSearchParams } from "react-router-dom";
import whyDidYouRender from "@welldone-software/why-did-you-render";
import ReactPaginate from "react-paginate";
import PaginateLabel from "../ui/pagination";

const Home = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["getdata"],
    queryFn: () => ApiCalling.getPosts(),
    refetchOnWindowFocus: false,
  });
  if (isError) {
    return (
      <h1 className="text-center text-[30px] mt-5 text-red-600">
        Error: {error.message}
      </h1>
    );
  }
  const filteredData =
    data?.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    }) || [];
  useEffect(() => {
    if (searchTerm === "") {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  }, [searchTerm]);
  const itemsPerPage = 8;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredData?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredData?.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredData?.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="max-w-full px-8 my-6">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Input search={searchTerm} setSearch={setSearchParams} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
            {currentItems.length > 0 ? (
              currentItems?.map((item) => <Card key={item.id} item={item} />)
            ) : (
              <div className="text-center  text-[20px]">not found!</div>
            )}
          </div>
        </>
      )}
      <div className="flex justify-center mt-6">
        <PaginateLabel
          pageCount={pageCount}
          handlePageClick={handlePageClick}
        />
      </div>
    </div>
  );
};

Home.whyDidYouRender = true;
export default Home;
