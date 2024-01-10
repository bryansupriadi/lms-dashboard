import { useState } from "react";
import HeaderClass from "../Component/HeaderClass";
import SidebarContent from "../Component/SidebarContent";
import CardPart from "../Component/ClassCard";
import Pagination from "../Component/Pagination";
import { Link } from "react-router-dom";
import '../style/OnFinished.css';
import { doneTemp } from "../data";

function SudahSelesai() {
    const [currentPage, setCurrentPage] = useState(1);
    const [donePerPage] = useState(3);


      const sortedDoneData = [...doneTemp].sort((a, b) => {
        const timeA = new Date(a.date);
        const timeB = new Date(b.date);
        return timeB - timeA;
      });

      const formattedTime = (date) => {
          const day = date.getDate();
          const month = date.toLocaleString("id-ID", { month: "long" });
          const year = date.getFullYear();
      
          return `${day} ${month} ${year}`;
      };

      const formattedSortedDoneData = sortedDoneData.map(item => {
          return {
              ...item,
              date: formattedTime(new Date(item.date))
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
        <Link to="/kelas-selesai" style={{ textDecoration: 'none' }}>
            <CardPart data={currentDone} page="kelas-selesai"/>
        </Link>
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