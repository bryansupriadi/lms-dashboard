import { useState } from "react";
import HeaderClass from "../Component/HeaderClass";
import SidebarContent from "../Component/SidebarContent";
import CardPart from "../Component/ClassCard";
import Pagination from "../Component/Pagination";
import '../style/OnFinished.css';

function SedangBerjalan() {
    const [currentPage, setCurrentPage] = useState(1);
    const [todosPerPage] = useState(3);

    const [todoData, setTodoData] = useState([
        {   topic: 'Pelatihan Microsoft Office Excel', 
            status: 'Online', 
            classCode: 'LB-02', 
            zoomLink: 'https://binus.zoom.us/j/97970210339?pwd=NU04NWMxcDBta200TTBEODBp...', 
            time: '30 November 2023 (10:00-11:30)' 
        }, 
        {   topic: 'Pelatihan Microsoft Office Excel', 
            status: 'Online', 
            classCode: 'LC-02', 
            zoomLink: 'https://binus.zoom.us/j/97970210339?pwd=NU04NWMxcDBta200TTBEODBp...', 
            time: '24 November 2023 (10:00-11:30)' 
        },  
        {   topic: 'Internet untuk Bisnis', 
            status: 'Online', 
            classCode: 'LD-02', 
            zoomLink: 'https://binus.zoom.us/j/97970210339?pwd=NU04NWMxcDBta200TTBEODBp...', 
            time: '13 November 2023 (10:00-11:30)' 
        }, 
      ]);

      const sortedTodoData = [...todoData].sort((a, b) => {
        // Ubah format waktu ke objek Date untuk membandingkan
        const timeA = new Date(a.time);
        const timeB = new Date(b.time);
        return timeA - timeB;
        });

      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      const currentTodos = sortedTodoData.slice(indexOfFirstTodo, indexOfLastTodo);
      const paginate = pageNumber => setCurrentPage(pageNumber);

    return(
        <div className="App">
        <SidebarContent/>
        <div className="ongoing-page-container">
        <HeaderClass />
        <section className="content-ongoing d-flex flex-column align-items-center text-start bg-white rounded-3">
          <CardPart data={currentTodos} />
          {sortedTodoData.length > todosPerPage && (
            <Pagination
            todosPerPage={todosPerPage}
            totalTodos={sortedTodoData.length}
            paginate={paginate}
            />
          )}
        </section>
        </div>
        </div>
    )

}

export default SedangBerjalan;