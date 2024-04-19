import Link from "next/link";
import React from "react";

const Pagination = ({
  nPages,
  currentPage,
  setCurrentPage,
  setRecoredsPerPage,
}) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1); // [...Array(nPages + 1).keys()].slice(1) generates an array of numbers from 1 to nPages.
  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1); // checking if the page is last or not if the page is last it does update the current page.
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav className="">
      <ul className="flex justify-around items-center pagination">
        <li className="page-item">
          <Link
            className="hover:text-red-500 page-link"
            onClick={goToPrevPage}
            href="#"
          >
            Previous
          </Link>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={currentPage === pgNumber ? "text-red-500" : ""}
          >
            <Link
              onClick={() => setCurrentPage(pgNumber)}
              className="hover:text-red-500 page-link"
              href="#"
            >
              {pgNumber}
            </Link>
          </li>
        ))}
        <li className="page-item">
          <Link className="page-link" onClick={goToNextPage} href="#">
            Next
          </Link>
        </li>
        <li className="flex flex-col justify-center items-cente">
          Rows Per Page
          <select
            name="choice"
            className="border-gray-700 border"
            onChange={(e) => setRecoredsPerPage(Number(e.target.value))}
          >
            <option value="4" selected>
              4
            </option>
            <option value="6">6</option>
            <option value="8">8</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
