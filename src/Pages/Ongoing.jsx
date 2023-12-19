import { useState } from "react";
import HeaderClass from "../Component/HeaderClass";
import SidebarContent from "../Component/SidebarContent";
import CardPart from "../Component/ClassCard";
import Pagination from "../Component/Pagination";
import '../style/OnFinished.css';
import { Link } from "react-router-dom";

function SedangBerjalan() {
    const [currentPage, setCurrentPage] = useState(1);
    const [todosPerPage] = useState(3);

    const [todoData, setTodoData] = useState([
        {   topic: 'Pelatihan Microsoft Office Excel', 
            status: 'Online', 
            classCode: 'LB-02', 
            zoomLink: 'https://binus.zoom.us/j/97970210339?pwd=NU04NWMxcDBta200TTBEODBp...', 
            date: '1 January 2024',
            time: '10:00-11:30' 
        }, 
        {   topic: 'Pelatihan Microsoft Office Excel', 
            status: 'Online', 
            classCode: 'LC-02',
            zoomLink: 'https://binus.zoom.us/j/97970210339?pwd=NU04NWMxcDBta200TTBEODBp...', 
            date: '20 December 2023',
            time: '10:00-11:30' 
        },  
        {   topic: 'Internet untuk Bisnis', 
            status: 'Online', 
            classCode: 'LD-02', 
            zoomLink: 'https://binus.zoom.us/j/97970210339?pwd=NU04NWMxcDBta200TTBEODBp...', 
            date: '4 February 2024',
            time: '10:00-11:30' 
        }, 
      ]);

      const sortedTodoData = [...todoData].sort((a, b) => {
        const timeA = new Date(a.date);
        const timeB = new Date(b.date);
        return timeA - timeB;
      });

      const formattedDate = (date) => {
          const day = date.getDate();
          const month = date.toLocaleString("id-ID", { month: "long" });
          const year = date.getFullYear();
      
          return `${day} ${month} ${year}`;
      };

      const formattedSortedTodoData = sortedTodoData.map(item => {
          return {
              ...item,
              date: formattedDate(new Date(item.date))
          };
      });

      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      const currentTodos = formattedSortedTodoData.slice(indexOfFirstTodo, indexOfLastTodo);
      const paginate = pageNumber => setCurrentPage(pageNumber);

    return(
        <div className="App">
        <SidebarContent/>
        <div className="ongoing-page-container">
        <HeaderClass />
        <section className="content-ongoing d-flex flex-column align-items-center text-start bg-white rounded-3">
          <Link to="/kelas-berlangsung" style={{ textDecoration: 'none' }}>
          <CardPart data={currentTodos} page="kelas-berlangsung"/>
          </Link>
          {formattedSortedTodoData.length > todosPerPage && (
            <Pagination
            todosPerPage={todosPerPage}
            totalTodos={formattedSortedTodoData.length}
            paginate={paginate}
            />
          )}
        </section>
        </div>
        </div>
    )

}

export default SedangBerjalan;