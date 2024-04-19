'use client'
import Link from "next/link";


const Datasheet = ({currentRecords}) => {
  return (
    <>
      <table className="table-fixed border-separate border-spacing-y-2.5 w-full">
        <TableHeadings />
        <Records records={currentRecords}/>
      </table>
    </>
  );
};

export default Datasheet;



// This is the sub component for headings of the table.
const TableHeadings = () => {
  return (
    <thead>
      <tr className="bg-slate-300 text-gray-700 text-left">
        <th className="w-36">Date</th>
        <th className="w-max">Report Name</th>
        <th className="w-24 text-center">Download</th>
      </tr>
    </thead>
   
  );
};


// Records Component

const Records = ({records})=>{
    return   <tbody>
    {records.map((record) => {
      let fileDate = new Date(record.Date);
      return (
        <tr className="font-medium text-slate-700">
          <td>
            <div className="file_date">
              {fileDate.toLocaleDateString()}
            </div>
            <div className="text-xs file_time">
              {fileDate.toLocaleTimeString()}
            </div>
          </td>
          <td>{record.File}</td>
          <td className="flex justify-center">
            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="ml-auto w-5"
              >
                <path d="M12 1.5a.75.75 0 0 1 .75.75V7.5h-1.5V2.25A.75.75 0 0 1 12 1.5ZM11.25 7.5v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
              </svg>
            </Link>
          </td>
        </tr>
      );
    })}
  </tbody>
}