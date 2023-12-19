import { useState } from "react";
import HeaderClass from "../Component/HeaderClass";
import SidebarContent from "../Component/SidebarContent";
import CardPart from "../Component/ClassInfoCard";
import Pagination from "../Component/Pagination";
import '../style/OnFinished.css';

function InfoKelas() {
    const [currentPage, setCurrentPage] = useState(1);
    const [todosPerPage] = useState(3);

    const [todoData] = useState([
        {
            class: 'LB-02',
            topics: ['Internet untuk Bisnis', 'Cara Mengelola Bisnis', 'Bisnis Era Modern'],
            dates: ['30-3-2023', '14-2-2023', '34-3-2023'],
            names: ['ado', 'ada', 'adi', 'adu', 'ade'],
        },
        {
            class: 'LC-02',
            topics: ['Penggunaan Sosial Media', 'Pemanfaatan Sosial Media sebagai Promosi', 'Marketing Era Modern'],
            dates: ['22-3-2023', '18-3-2023', '15-3-2023'],
            names: ['john', 'doe', 'mary', 'jane'],
        },
        {
            class: 'LD-02',
            topics: ['Manfaat E-Commerce', 'Online Marketplace', 'Keamanan Online Marketplace'],
            dates: ['10-3-2023', '5-3-2023', '1-3-2023'],
            names: ['bob', 'alice', 'charlie'],
        },
    ]);

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

    // Sort by 'class' property in ascending order
    const sortedByClass = [...todoData].sort((a, b) => a.class.localeCompare(b.class));

    // Create currentTodos array based on the sorted 'class' order
    const currentTodos = sortedByClass.slice(indexOfFirstTodo, indexOfLastTodo).map(todo => ({
        ...todo,
        topicsAndDates: todo.dates.map((date, index) => ({
            date,
            topic: todo.topics[index],
        })).sort((a, b) => a.date.localeCompare(b.date)),
        sortedNames: todo.names.sort((a, b) => a.localeCompare(b)),
    }));

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="App">
            <SidebarContent />
            <div className="ongoing-page-container">
                <HeaderClass />
                <section className="content-ongoing d-flex flex-column align-items-center text-start bg-white rounded-3">
                    <CardPart data={currentTodos} />
                    <Pagination
                        todosPerPage={todosPerPage}
                        totalTodos={sortedByClass.length}
                        paginate={paginate}
                    />
                </section>
            </div>
        </div>
    );
}

export default InfoKelas;