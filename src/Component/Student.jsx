import { studentData } from "../studentData";
import { useTable, usePagination } from 'react-table';
import Pagination from "./Pagination";

function Student() {
    function getRandomProgress() {
        const randomPercentage = Math.floor(Math.random() * 11) * 10; // 0%, 10%, 20%, ..., 100%
        return `${randomPercentage}%`;
    }

    const columns = [
        {
            Header: 'No',
            accessor: 'id',
        },
        {
            Header: 'Name',
            accessor: 'studentName',
        },
        {
            Header: 'Progress',
            accessor: 'progress',
            Cell: ({ row }) => <div>{getRandomProgress()}</div>,
        },
    ];

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
    } = useTable(
        {
            columns,
            data: studentData,
            initialState: { pageIndex: 0 }, // Set the initial page index to 0
            pageSize: 5,
        },
        usePagination
    );

    return (
        <div className="student-container">
            <table {...getTableProps()} className="student-table">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {/* Render the pagination component */}
            <Pagination
                todosPerPage={5} // or adjust accordingly
                totalTodos={studentData.length}
                paginate={(pageNumber) => {
                    // Use setPage method provided by usePagination
                    setPageSize(pageNumber);
                }}
            />
        </div>
    );
}

export default Student;
