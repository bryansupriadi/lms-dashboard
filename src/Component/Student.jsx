import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { studentData } from '../studentData';
import '../style/ClassDetail.css';

function Student() {
    const { classCode } = useParams();
    const pageSize = 5;

    function getRandomProgress() {
        return `${Math.floor(Math.random() * 11) * 10}%`;
    }

    const filteredStudents = studentData
        .filter(student => student.classCode.toLowerCase() === classCode.toLowerCase())
        .map(student => ({
            ...student,
            progress: getRandomProgress(),
        }));

    const [currentPage, setCurrentPage] = useState(0);
    const [activeButton, setActiveButton] = useState(null);
    const [isPaginationActive, setPaginationActive] = useState(false);

    const totalPages = Math.ceil(filteredStudents.length / pageSize);

    const handlePageChange = newPage => {
        setPaginationActive(true);
        setActiveButton(newPage);
        setTimeout(() => {
            setCurrentPage(newPage);
            setPaginationActive(false);
        }, 500); // Set timeout to simulate overlay effect
    };

    const generatePageNumbers = () => {
        const pageNumbers = [];
        for (let i = 0; i < totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`${currentPage === i ? 'active' : ''} ${activeButton === i ? 'pressed' : ''} ${
                        isPaginationActive ? 'overlay' : ''
                    }`}
                >
                    {i + 1}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="student-container">
            <table className="student-table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Progress</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents
                        .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
                        .map((student, index) => (
                            <tr key={currentPage * pageSize + index + 1}>
                                <td>{currentPage * pageSize + index + 1}</td>
                                <td>{student.studentName}</td>
                                <td>
                                    <div className="progress-container">
                                        <div className="progress-bar-container">
                                            <div
                                                className="progress-bar"
                                                style={{ width: student.progress }}
                                            ></div>
                                        </div>
                                        <div className="progress-text">{student.progress}</div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <div className="pagination">{generatePageNumbers()}</div>
        </div>
    );
}

export default Student;
