import { useQuery } from "@tanstack/react-query";
import React from "react";
import ApiCalling from "../api/api-call";
import Card from "./card";
import Loader from "../ui/loader";

const Home = () => {
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

  return (
    <div className="max-w-full px-8 my-6">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {data?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
