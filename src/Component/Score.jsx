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
                
                            return (
                                <tr key={currentPage * pageSize + index + 1}>
                                    <td>{currentPage * pageSize + index + 1}</td>
                                    <td>{student.studentName}</td>
                                    <td>{student.task}</td>
                                    <td>{student.preTest}</td>
                                    <td>{student.postTest}</td>
                                    <td>{progressLevel}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            <div className="pagination">{generatePageNumbers()}</div>
        </div>
    );
}

export default Student;

// import React from 'react';
// import { FaUser } from 'react-icons/fa'; // Import the user icon
// import '../style/RoundedTable.css'; // You can create a separate CSS file for styling

// function Score({ data }) {
//     return (
//         <div className="rounded-table-container">
//           <table className="rounded-table">
//             <thead>
//               <tr>
//                 <th>Number</th>
//                 <th>Picture</th>
//                 <th>Name</th>
//                 <th>Task</th>
//                 <th>Pre Test</th>
//                 <th>Post Test</th>
//                 <th>Notes</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((student, index) => (
//                 <tr key={student.id}>
//                   <td>{index + 1}</td>
//                   <td>
//                     {student.profileImage ? (
//                       <img src={student.profileImage} alt={student.studentName} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
//                     ) : (
//                       <FaUser size={30} style={{ marginRight: '10px' }} />
//                     )}
//                   </td>
//                   <td>{student.studentName}</td>
//                   <td>{student.task}</td>
//                   <td>{student.preTest}</td>
//                   <td>{student.postTest}</td>
//                   <td>{/* Add notes content if available */}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       );
// }

// export default Score;