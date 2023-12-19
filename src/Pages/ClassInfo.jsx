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
            topics: ['the beginning of', 'the middle of', 'the end of'],
            dates: ['30-3-2023', '14-2-2023', '34-3-2023'],
            names: ['ado', 'ada', 'adi', 'adu', 'ade'],
        },
        {
            class: 'LC-02',
            topics: ['Intro to React', 'State Management', 'Hooks'],
            dates: ['22-3-2023', '18-3-2023', '15-3-2023'],
            names: ['john', 'doe', 'mary', 'jane'],
        },
        {
            class: 'LD-02',
            topics: ['JavaScript Fundamentals', 'ES6 Features', 'Promises'],
            dates: ['10-3-2023', '5-3-2023', '1-3-2023'],
            names: ['bob', 'alice', 'charlie'],
        },
    ]);

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

    const sortedByDate = [...todoData].sort((a, b) => a.dates[0].localeCompare(b.dates[0]));

    const currentTodos = sortedByDate.slice(indexOfFirstTodo, indexOfLastTodo).map(todo => ({
        ...todo,
        topicsAndDates: todo.topics.map((topic, index) => ({
            topic,
            date: todo.dates[index],
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
                        totalTodos={sortedByDate.length}
                        paginate={paginate}
                    />
                </section>
            </div>
        </div>
    );
}

export default InfoKelas;
