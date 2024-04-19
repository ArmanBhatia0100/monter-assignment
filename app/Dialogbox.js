"use client";
import Header from "./Header";
import Datasheet from "./Datasheet";
import Pagination from "./Pagination";
import reports from "./records";
import { useState } from "react";

const Dialogbox = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecoredsPerPage] = useState(6);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = reports.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(reports.length / recordsPerPage);
  return (
    <div className="dialogbox container max-w-[90vw] mx-auto mt-5 pb-4 rounded-lg shadow-md bg-slate">
      <Header /> {/* This included the title and action btns */}
      <Datasheet currentRecords={currentRecords} />{" "}
      {/* Main data imported in the table */}
      <hr className="mb-2"></hr>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />{" "}
      {/* custom paginator with a row selector */}
    </div>
  );
};

export default Dialogbox;
