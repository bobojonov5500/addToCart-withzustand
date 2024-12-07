import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const PaginateLabel = ({ pageCount, handlePageClick }) => {
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        previousLabel="< Previous"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="flex items-center gap-2"
        pageClassName="inline-block"
        pageLinkClassName="py-2 px-4 border rounded-lg hover:bg-gray-200 transition"
        previousLinkClassName="py-2 px-4 border rounded-lg hover:bg-gray-200 transition"
        nextLinkClassName="py-2 px-4 border rounded-lg hover:bg-gray-200 transition"
        breakLinkClassName="py-2 px-4 border rounded-lg"
        activeLinkClassName="bg-blue-500 text-white border-blue-500"
      />
    </>
  );
};
export default PaginateLabel;
