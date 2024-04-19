import Link from "next/link";

const Datasheet = () => {
  const reports = [
    {
      Date: "11/29/2023",
      file: "Duis.ppt",
    },
    {
      Date: "5/1/2023",
      file: "PraesentBlandit.avi",
    },
    {
      Date: "6/21/2023",
      file: "AnteVivamusTortor.png",
    },
    {
      Date: "8/26/2023",
      file: "AliquamEratVolutpat.png",
    },
    {
      Date: "7/1/2023",
      file: "OrciLuctus.xls",
    },
    {
      Date: "1/12/2024",
      file: "QuisqueErat.avi",
    },
    {
      Date: "5/21/2023",
      file: "PedeAcDiam.pdf",
    },
    {
      Date: "11/28/2023",
      file: "NullaUltrices.xls",
    },
    {
      Date: "9/9/2023",
      file: "Aliquet.ppt",
    },
    {
      Date: "8/23/2023",
      file: "Penatibus.avi",
    },
    {
      Date: "10/12/2023",
      file: "VelDapibus.txt",
    },
    {
      Date: "7/31/2023",
      file: "Posuere.xls",
    },
    {
      Date: "5/22/2023",
      file: "IdNulla.mov",
    },
    {
      Date: "6/18/2023",
      file: "PhasellusIn.mov",
    },
    {
      Date: "10/3/2023",
      file: "EuNibh.avi",
    },
    {
      Date: "3/5/2024",
      file: "PretiumQuisLectus.doc",
    },
    {
      Date: "12/20/2023",
      file: "LaoreetUtRhoncus.xls",
    },
    {
      Date: "10/31/2023",
      file: "Sagittis.avi",
    },
    {
      Date: "10/5/2023",
      file: "LigulaSuspendisseOrnare.xls",
    },
    {
      Date: "9/17/2023",
      file: "Proin.png",
    },
    {
      Date: "11/8/2023",
      file: "BlanditMiIn.xls",
    },
    {
      Date: "6/29/2023",
      file: "Tincidunt.ppt",
    },
    {
      Date: "3/20/2024",
      file: "RutrumAcLobortis.mp3",
    },
    {
      Date: "1/14/2024",
      file: "TurpisIntegerAliquet.jpeg",
    },
    {
      Date: "6/29/2023",
      file: "BlanditUltricesEnim.ppt",
    },
    {
      Date: "5/28/2023",
      file: "HacHabitassePlatea.mp3",
    },
    {
      Date: "5/1/2023",
      file: "SapienDignissimVestibulum.avi",
    },
    {
      Date: "1/30/2024",
      file: "NullaFacilisi.pdf",
    },
    {
      Date: "1/27/2024",
      file: "TurpisDonec.ppt",
    },
    {
      Date: "7/31/2023",
      file: "NibhInLectus.ppt",
    },
    {
      Date: "11/14/2023",
      file: "MagnaAt.txt",
    },
    {
      Date: "8/31/2023",
      file: "Ultrices.avi",
    },
    {
      Date: "11/18/2023",
      file: "Vestibulum.mp3",
    },
    {
      Date: "12/15/2023",
      file: "AnteIpsumPrimis.ppt",
    },
    {
      Date: "9/25/2023",
      file: "Erat.tiff",
    },
    {
      Date: "3/9/2024",
      file: "Porttitor.gif",
    },
    {
      Date: "7/4/2023",
      file: "MaurisNon.avi",
    },
    {
      Date: "6/15/2023",
      file: "VestibulumAnte.png",
    },
    {
      Date: "11/16/2023",
      file: "NislNunc.tiff",
    },
    {
      Date: "12/7/2023",
      file: "HacHabitassePlatea.xls",
    },
    {
      Date: "2/23/2024",
      file: "NasceturRidiculusMus.avi",
    },
    {
      Date: "11/26/2023",
      file: "IdNulla.avi",
    },
    {
      Date: "3/10/2024",
      file: "LacusMorbiSem.avi",
    },
    {
      Date: "9/14/2023",
      file: "InFaucibusOrci.ppt",
    },
    {
      Date: "1/20/2024",
      file: "Morbi.mp3",
    },
    {
      Date: "2/23/2024",
      file: "Blandit.avi",
    },
    {
      Date: "8/3/2023",
      file: "Nec.ppt",
    },
    {
      Date: "9/24/2023",
      file: "SitAmet.mp3",
    },
    {
      Date: "3/15/2024",
      file: "ElitSodales.ppt",
    },
    {
      Date: "8/28/2023",
      file: "Semper.gif",
    },
    {
      Date: "9/26/2023",
      file: "LaoreetUtRhoncus.gif",
    },
    {
      Date: "12/29/2023",
      file: "SapienNon.ppt",
    },
    {
      Date: "5/5/2023",
      file: "A.avi",
    },
    {
      Date: "6/23/2023",
      file: "LoremQuisque.xls",
    },
    {
      Date: "11/29/2023",
      file: "EtiamPretiumIaculis.mp3",
    },
    {
      Date: "8/12/2023",
      file: "OrnareImperdiet.mpeg",
    },
    {
      Date: "6/12/2023",
      file: "LigulaSit.ppt",
    },
    {
      Date: "4/5/2024",
      file: "QuisOrci.mov",
    },
    {
      Date: "5/1/2023",
      file: "MontesNascetur.gif",
    },
    {
      Date: "4/28/2023",
      file: "PraesentBlanditNam.avi",
    },
    {
      Date: "6/14/2023",
      file: "Praesent.xls",
    },
    {
      Date: "3/14/2024",
      file: "Vitae.ppt",
    },
    {
      Date: "11/19/2023",
      file: "AnteNulla.jpeg",
    },
    {
      Date: "5/10/2023",
      file: "IpsumDolor.txt",
    },
    {
      Date: "7/27/2023",
      file: "MattisEgestasMetus.xls",
    },
    {
      Date: "1/5/2024",
      file: "Elit.xls",
    },
    {
      Date: "5/22/2023",
      file: "Viverra.avi",
    },
    {
      Date: "12/9/2023",
      file: "Convallis.mp3",
    },
    {
      Date: "9/8/2023",
      file: "SapienVariusUt.mp3",
    },
    {
      Date: "4/15/2024",
      file: "Tellus.xls",
    },
    {
      Date: "5/23/2023",
      file: "Nulla.mov",
    },
    {
      Date: "12/29/2023",
      file: "VitaeQuam.tiff",
    },
    {
      Date: "5/27/2023",
      file: "VolutpatIn.xls",
    },
    {
      Date: "2/8/2024",
      file: "Semper.ppt",
    },
    {
      Date: "4/24/2023",
      file: "RhoncusAliquet.tiff",
    },
    {
      Date: "9/19/2023",
      file: "Nulla.ppt",
    },
    {
      Date: "4/27/2023",
      file: "ScelerisqueQuam.mp3",
    },
    {
      Date: "10/7/2023",
      file: "DiamNam.txt",
    },
    {
      Date: "7/1/2023",
      file: "ViverraEgetCongue.mp3",
    },
    {
      Date: "5/22/2023",
      file: "Velit.ppt",
    },
    {
      Date: "7/7/2023",
      file: "Suscipit.mp3",
    },
    {
      Date: "1/5/2024",
      file: "In.doc",
    },
    {
      Date: "11/30/2023",
      file: "NibhLigula.mp3",
    },
    {
      Date: "5/17/2023",
      file: "Diam.tiff",
    },
    {
      Date: "5/28/2023",
      file: "Ligula.txt",
    },
    {
      Date: "5/12/2023",
      file: "OrciLuctus.avi",
    },
    {
      Date: "12/18/2023",
      file: "Ante.ppt",
    },
    {
      Date: "4/28/2023",
      file: "Mauris.mp3",
    },
    {
      Date: "5/15/2023",
      file: "AcDiamCras.mpeg",
    },
    {
      Date: "1/29/2024",
      file: "LaciniaNisiVenenatis.jpeg",
    },
    {
      Date: "2/25/2024",
      file: "Vivamus.mp3",
    },
    {
      Date: "9/20/2023",
      file: "NisiNamUltrices.tiff",
    },
    {
      Date: "4/23/2023",
      file: "NullaQuisque.jpeg",
    },
    {
      Date: "5/26/2023",
      file: "ConsectetuerEget.avi",
    },
    {
      Date: "11/26/2023",
      file: "VehiculaConsequat.mov",
    },
    {
      Date: "6/25/2023",
      file: "ConsequatMorbiA.xls",
    },
    {
      Date: "4/17/2024",
      file: "SuspendisseOrnare.mp3",
    },
    {
      Date: "8/21/2023",
      file: "MaecenasPulvinar.ppt",
    },
    {
      Date: "8/21/2023",
      file: "ArcuAdipiscingMolestie.doc",
    },
    {
      Date: "4/15/2024",
      file: "Nisl.png",
    },
  ];
  return (
    <>
      <table className="table-fixed border-separate border-spacing-y-2.5 w-full">
        <TableHeadings />
        <tbody>
          {reports.map((report) => {
            let fileDate = new Date(report.Date);
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
                <td>{report.file}</td>
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
