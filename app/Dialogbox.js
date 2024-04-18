import Link from "next/link";

const Dialogbox = () => {
  const reportDate = new Date(Date.UTC(2024, 4, 19, 3, 12, 0));
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="dialogbox container max-w-[90vw] mx-auto bg-white rounded-lg shadow">
      {/* Title of the dialog box with with filter and close button */}
      <header className="flex px-5">
        <h2 className="mx-auto font-medium">Recently Generated Reports</h2>
        {/* Close button */}
        <div className="action_container content-center">
          <button
            type="button"
            className="px-2 py-1 mx-2 rounded-md border-spacing-1 bg-slate-200 hover:bg-slate-800 hover:text-white hover:drop-shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            type="button"
            className="px-2 py-1 mx-2 rounded-md border-spacing-1 bg-slate-200 hover:bg-slate-800 hover:text-white hover:drop-shadow-lg"
          >
            <svg
              className="hover:fill-white w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 30 30"
            >
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Main data imported in the table */}
      <main>
        <table className="table-fixed w-full border-separate border-spacing-y-2.5">
          <thead>
            <tr className="bg-slate-300 text-gray-700 text-left">
              <th className="">Date</th>
              <th className="w-max">Report Name</th>
              <th className="text-center w-24">
                Download
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{reportDate.toLocaleString("en-US", dateOptions)}</td>
              <td>Report 1</td>
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
            <tr>
              <td>{reportDate.toLocaleString("en-US", dateOptions)}</td>
              <td>Report 1</td>
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
            <tr>
              <td>{reportDate.toLocaleString("en-US", dateOptions)}</td>
              <td>Report 1</td>
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
          </tbody>
        </table>
      </main>
      {/* custom paginator with a row selector */}
      <footer></footer>
    </div>
  );
};

export default Dialogbox;
