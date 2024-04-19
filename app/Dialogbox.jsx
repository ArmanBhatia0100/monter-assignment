"use client";
import Header from "./Header";
import Datasheet from "./Datasheet";
import Pagination from "./Pagination";
import reports from "./records";
import { useState } from "react";

const Dialogbox = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecoredsPerPage] = useState(4);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = reports.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(reports.length / recordsPerPage);

  return (
    <div className="bg-slate shadow-md mx-auto mt-5 pb-4 rounded-lg max-w-[90vw] container dialogbox">
      <Header /> {/* This included the title and action btns */}
      <Datasheet currentRecords={currentRecords} />{" "}
      {/* Main data imported in the table */}
      <hr className="mb-2"></hr>
      {/* custom paginator with a row selector */}
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
