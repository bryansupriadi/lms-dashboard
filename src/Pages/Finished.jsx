import { useState } from "react";
import HeaderClass from "../Component/HeaderClass";
import SidebarContent from "../Component/SidebarContent";
import CardPart from "../Component/ClassCard";
import Pagination from "../Component/Pagination";
import '../style/OnFinished.css';

function SudahSelesai() {
    const [currentPage, setCurrentPage] = useState(1);
    const [donePerPage] = useState(3);

    const [doneData, setDoneData] = useState([
        {   topic: 'Internet untuk Bisnis', 
            status: 'Offline', 
            classCode: 'LB-02', 
            tempat: 'Menara Tower', 
            time: '22 October 2023 (10:00-11:30)' 
        },
        {   topic: 'Pelatihan Microsoft Office Excel', 
            status: 'Online', 
            classCode: 'LC-02', 
            zoomLink: 'https://binus.zoom.us/j/97970210339?pwd=NU04NWMxcDBta200TTBEODBp...', 
            time: '22 November 2023 (10:00-11:30)' 
        }, 
        {   topic: 'Internet untuk Bisnis', 
            status: 'Offline', 
            classCode: 'LD-02', 
            tempat: 'Auditorium', 
            time: '4 December 2023 (10:00-11:30)' 
        },
      ]);

      const sortedDoneData = [...doneData].sort((a, b) => {
        const timeA = new Date(a.time);
        const timeB = new Date(b.time);
        return timeB - timeA;
      });

      const formattedTime = (time) => {
          const day = time.getDate();
          const month = time.toLocaleString("id-ID", { month: "long" });
          const year = time.getFullYear();
      
          return `${day} ${month} ${year}`;
      };

      const formattedSortedDoneData = sortedDoneData.map(item => {
          return {
              ...item,
              time: formattedTime(new Date(item.time))
          };
      });

      const indexOfLastDone = currentPage * donePerPage;
      const indexOfFirstDone = indexOfLastDone - donePerPage;
      const currentDone = formattedSortedDoneData.slice(indexOfFirstDone, indexOfLastDone);
      const paginate = pageNumber => setCurrentPage(pageNumber);

    return(
        <div className="App">
        <SidebarContent/>
        <div className="finish-page-container">
        <HeaderClass />
        <section className="content-finish d-flex flex-column align-items-center text-start bg-white rounded-3">
          <CardPart data={currentDone} />
          {formattedSortedDoneData.length > donePerPage && (
            <Pagination
            todosPerPage={donePerPage}
            totalTodos={formattedSortedDoneData.length}
            paginate={paginate}
            />
          )}
        </section>
        </div>
        </div>
    )

}

export default SudahSelesai;