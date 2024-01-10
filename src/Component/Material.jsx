import { useParams } from "react-router-dom";
import Book from "../Assets/codicon_book.png";
import VC from "../Assets/Group 36779.png";
import '../style/ClassDetail.css';
import { todoTemp, doneTemp } from "../data";

function Material() {
  // Menggunakan useParams untuk mendapatkan nilai dari parameter URL
  const { topic, classCode } = useParams();

  // Menentukan data yang akan digunakan berdasarkan nilai page
  const dataToUse = window.location.pathname.includes('kelas-berlangsung') ? todoTemp : doneTemp;

  // Melakukan filtering berdasarkan nilai parameter URL
  const filteredData = dataToUse.find(item => 
    item.topic.toLowerCase().replace(/\s/g, '-') === topic &&
    item.classCode.toLowerCase() === classCode
  );

  // Menampilkan data yang telah difilter
  return (
    <div className="material-container">
      <div className="material-ppt p-2 mb-1">
        <img src={Book} alt="book" />
        <a
          href={filteredData.material}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: '5vh', color: '#222', fontSize: '18px' }}
        >
          <span>Materi mengenai topik</span>
        </a>
      </div>
      <div className="material-video p-2 mb-2">
        <img src={VC} alt="video" />
        <a
          href={filteredData.video1}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: '5.3vh', color: '#222', fontSize: '18px' }}
        >
          <span>Video 1</span>
        </a>
      </div>
      <div className="material-video p-2 mt-1">
        <img src={VC} alt="video" />
        <a
          href={filteredData.video2}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: '5.3vh', color: '#222', fontSize: '18px' }}
        >
          <span>Video 2</span>
        </a>
      </div>
    </div>
  );
}

export default Material;
