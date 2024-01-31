import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { studentData } from '../studentData';
import '../style/ClassDetail.css';

function Score() {
    const { classCode, page } = useParams();
    const pageSize = 5;

    const filteredStudents = studentData
        .filter(student => student.classCode.toLowerCase() === classCode.toLowerCase())
        .map(student => ({
            ...student,
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
                        <th>Nama</th>
                        <th>Tugas</th>
                        <th>Pre-Test</th>
                        <th>Post-Test</th>
                        <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                {filteredStudents
                    .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
                    .map((student, index) => {
                        // Calculate the average score
                        const averageScore = Math.round(
                            (student.task + student.preTest + student.postTest) / 3
                        );
                
                        // Determine the progress level based on the average score
                        let progressLevel;
                        if (averageScore < 50) {
                            progressLevel = "Buruk";
                        } else if (averageScore >= 50 && averageScore < 65) {
                            progressLevel = "Kurang Baik";
                        } else if (averageScore >= 65 && averageScore < 80) {
                            progressLevel = "Cukup Baik";
                        } else if (averageScore >= 80 && averageScore < 90) {
                            progressLevel = "Baik";
                        } else {
                            progressLevel = "Sangat Baik";
                        }
                
                        // Cek apakah page adalah "kelas-berlangsung"
                        const isKelasBerlangsung = page === 'kelas-berlangsung';
                
                        // Set nilai kolom Tugas, Pre-Test, Post-Test, dan Keterangan menjadi kosong
                        const tugasValue = isKelasBerlangsung ? '' : student.task;
                        const preTestValue = isKelasBerlangsung ? '' : student.preTest;
                        const postTestValue = isKelasBerlangsung ? '' : student.postTest;
                        const keteranganValue = isKelasBerlangsung ? '' : progressLevel;
                
                        return (
                            <tr key={currentPage * pageSize + index + 1}>
                                <td>{currentPage * pageSize + index + 1}</td>
                                <td>{student.studentName}</td>
                                <td>{tugasValue}</td>
                                <td>{preTestValue}</td>
                                <td>{postTestValue}</td>
                                <td>{keteranganValue}</td>
                            </tr>
                        );
                    })}                
                </tbody>
            </table>
            <div className="pagination">{generatePageNumbers()}</div>
        </div>
    );
}

export default Score;
