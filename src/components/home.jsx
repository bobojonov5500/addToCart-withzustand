import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import ApiCalling from "../api/api-call";
import Card from "./card";
import Loader from "../ui/loader";
import Input from "../ui/input";
import { useSearchParams } from "react-router-dom";
import whyDidYouRender from "@welldone-software/why-did-you-render";

const Home = () => {
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
  const filteredData = data?.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  useEffect(() => {
    if (searchTerm === "") {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  }, [searchTerm]);

  return (
    <div className="max-w-full px-8 my-6">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Input search={searchTerm} setSearch={setSearchParams} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
            {filteredData.length > 0 ? (
              filteredData?.map((item) => <Card key={item.id} item={item} />)
            ) : (
              <div className="text-center  text-[20px]">not found!</div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

Home.whyDidYouRender = true;
export default Home;
