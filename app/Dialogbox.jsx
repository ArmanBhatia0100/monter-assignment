"use client";
import Header from "./Header";
import Datasheet from "./Datasheet";
import Pagination from "./Pagination";
import reports from "./records";
import { useState } from "react";

const Dialogbox = () => {
  const [currentPage, setCurrentPage] = useState(1); // The initial page number when the app loads.
  const [recordsPerPage, setRecoredsPerPage] = useState(4); // The initial number of records per page.
  const indexOfLastRecord = currentPage * recordsPerPage; // This show the index of the last record.
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage; // This shows the index of the first record on a page.
  const currentRecords = reports.slice(indexOfFirstRecord, indexOfLastRecord); // This show the list of the records on a specific page.
  const nPages = Math.ceil(reports.length / recordsPerPage); // This will round off the number so that we dont have any decimal number of pages.

  {
    /* Components used in the UX:->
       "Header": Includes the title and action btns.
       "DataSheet": Data imported in the table.
       "Paginaion": This has the pagination and "Row Selector" button.
     */
  }

  return (
    <div className="bg-slate shadow-md mx-auto mt-5 pb-4 rounded-lg max-w-[90vw] container dialogbox">
      <Header />
      <Datasheet currentRecords={currentRecords} /> <hr className="mb-2"></hr>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setRecoredsPerPage={setRecoredsPerPage}
      />
    </div>
  );
};

export default Dialogbox;
