import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { studentData } from '../studentData';
import '../style/ClassDetail.css';

function Task() {
    const { topic, classCode } = useParams();
    const pageSize = 5;

    function getRandomProgress() {
        return `${Math.floor(Math.random() * 11) * 10}%`;
    }

    function convertToTitleCase(str) {
        // Ganti semua karakter '-' dengan spasi
        str = str.replace(/-/g, " ");
      
        // Ganti semua kata pertama dari setiap kata dengan huruf kapital
        return str.replace(/\b\w/g, (match) => match.toUpperCase());
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
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [nilai, setNilai] = useState('');
    const [error, setError] = useState('');

    const totalPages = Math.ceil(filteredStudents.length / pageSize);

    const handlePageChange = newPage => {
        setPaginationActive(true);
        setActiveButton(newPage);
        setTimeout(() => {
            setCurrentPage(newPage);
            setPaginationActive(false);
        }, 500); // Set timeout to simulate overlay effect
    };

    const handleNilaiChange = event => {
        const inputValue = event.target.value;
        // Validasi apakah nilai yang dimasukkan adalah angka dan berada dalam rentang 1-100
        if (!(/^\d+$/.test(inputValue)) || inputValue < 1 || inputValue > 100) {
            setError('Nilai harus berupa angka 1-100');
        } else {
            setError('');
        }
        setNilai(inputValue);
    };

    const handleSubmitNilai = () => {
        // Lakukan sesuatu dengan nilai yang diinputkan, misalnya menyimpannya
        // Reset nilai dan tutup popup setelah submit
        setNilai('');
        setPopupOpen(false);
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

    const openPopup = student => {
        setSelectedStudent(student);
        setPopupOpen(true);
    };
    
    const closePopup = () => {
        setSelectedStudent(null);
        setNilai('');
        setError('');
        setPopupOpen(false);
    };

    return (
        <div className="task-container">
            <table className="task-table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Terakhir Kumpul</th>
                        <th>Nilai</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents
                        .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
                        .map((student, index) => (
                            <tr key={currentPage * pageSize + index + 1}>
                                <td>{currentPage * pageSize + index + 1}</td>
                                <td>{student.studentName}</td>
                                <td>{student.lastUpdate}</td>
                                <td>{student.task}</td>
                                <td>
                                    <button onClick={() => openPopup(student)} style={{border: 'none', backgroundColor: '#fff', color: '#2D76E5'}}>Lihat Tugas</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <div className="pagination">{generatePageNumbers()}</div>

            {isPopupOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closePopup}>
                            &times;
                        </span>
                        <h1 className='fs-4' style={{fontWeight: 'bold'}}>Tugas Mandiri</h1>
                        {/* Tampilkan detail tugas di sini */}
                        <h5 className='fs-5' style={{fontWeight: '400'}}>Topik: {convertToTitleCase(topic)}</h5>
                        <p className='pt-3'>Jawaban:</p>
                        <div className='d-flex align-items-center justify-content-center pb-2'>
                            <img src={selectedStudent?.icon} alt="tugas"/>
                        </div>
                        <p>Ini hasil jawaban saya, silahkan diperiksa. Terima kasih</p>
                        
                        {/* Form untuk memberi nilai */}
                        <form onSubmit={(e) => { e.preventDefault(); handleSubmitNilai(); }}>
                            <label>
                                Beri nilai:
                                <input type="text" value={nilai} onChange={handleNilaiChange} style={{marginLeft: '10px'}}/>
                            </label>
                            {error && <p className="error">{error}</p>}
                            {nilai !== '' && !error && <button type="submit" style={{backgroundColor: '#2D76E5', color: 'white', border: 'none', borderRadius: '10px', width: '15vh', height: '5vh', marginLeft: '10px'}}>Submit</button>}
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Task;
