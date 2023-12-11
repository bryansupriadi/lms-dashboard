import { useState } from "react";
import HeaderClass from "../Component/HeaderClass";
import SidebarContent from "../Component/SidebarContent";
import CardPart from "../Component/ClassCard";
import Pagination from "../Component/Pagination";
import '../style/OnFinished.css';

function SedangBerjalan() {
    const [currentPage, setCurrentPage] = useState(1);
    const [todosPerPage] = useState(3);

    const [doneData, setDoneData] = useState([
        {   topic: 'Internet untuk Bisnis', 
            status: 'Offline', 
            classCode: 'LB-02', 
            zoomLink: 'https://binus.zoom.us/j/97970210339?pwd=NU04NWMxcDBta200TTBEODBp...', 
            time: '22 Oktober 2023 (10:00-11:30)' 
        },
        {   topic: 'Pelatihan Microsoft Office Excel', 
            status: 'Online', 
            classCode: 'LC-02', 
            zoomLink: 'https://binus.zoom.us/j/97970210339?pwd=NU04NWMxcDBta200TTBEODBp...', 
            time: '13 November 2023 (10:00-11:30)' 
        }, 
        {   topic: 'Internet untuk Bisnis', 
            status: 'Offline', 
            classCode: 'LD-02', 
            zoomLink: 'https://binus.zoom.us/j/97970210339?pwd=NU04NWMxcDBta200TTBEODBp...', 
            time: '13 November 2023 (10:00-11:30)' 
        },
      ]);

      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      const currentTodos = doneData.slice(indexOfFirstTodo, indexOfLastTodo);
      const paginate = pageNumber => setCurrentPage(pageNumber);

    return(
        <div className="App">
        <SidebarContent/>
        <div className="finish-page-container">
        <HeaderClass />
        <section className="content-finish d-flex flex-column align-items-center text-start bg-white rounded-3">
          <CardPart data={currentTodos} />
          <Pagination
          todosPerPage={todosPerPage}
          totalTodos={doneData.length}
          paginate={paginate}
        />
        </section>
        </div>
        </div>
    )

}

export default SedangBerjalan;