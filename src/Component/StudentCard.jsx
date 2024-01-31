import { studentData } from '../studentData';

function StudentCard({ className, titleText }) {
  const classData = studentData;
  const filteredData = classData.filter(student => student.classCode === className);
  const sortedData = filteredData.sort((a, b) => a.id - b.id);
  const topFiveStudents = sortedData.slice(0, 6);

  return (
    <div className="student-card-container" style={{ width: '30vh' }}>
      <h5 className="text-primary fs-6 font-weight-bold" style={{ fontWeight: '600' }}>{titleText}</h5>
      <div style={{
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '10px',
        textAlign: 'left'
      }}>
        <p style={{ fontSize: '14px', fontWeight: '600' }}>{className}</p>
        <p style={{ color: '#979797', fontSize: '12px' }}>{`${filteredData.length} Orang`}</p>
        <ul>
          {topFiveStudents.map(student => (
            <li key={student.id} style={{ listStyle: 'none', textAlign: 'left', fontSize: '14px' }}>
              {`${student.studentName}`}
            </li>
          ))}
        </ul>
        <p style={{ fontSize: '12px', color: '#2D76E5', textAlign: 'end' }}>Lihat Selengkapnya</p>
      </div>
    </div>
  );
}

export default StudentCard;
