import Clock from '../Assets/clock_11450928.png';
import Loc from '../Assets/streamline_travel-map-location-pin-navigation-map-maps-pin-gps-location.png';
import Link from '../Assets/arcticons_url-checker.png';
import '../style/ClassDetail.css';
import { useParams } from 'react-router-dom';
import { todoTemp, doneTemp } from '../data';

function Meeting() {
  const { topic, classCode } = useParams();
  const dataToUse = window.location.pathname.includes('kelas-berlangsung') ? todoTemp : doneTemp;

  const filteredData = dataToUse.find(item => 
    item.topic.toLowerCase().replace(/\s/g, '-') === topic &&
    item.classCode.toLowerCase() === classCode
  );

  return (
    <div className="meeting-container">
      <div className="meeting-date d-flex p-2 mb-1">
        <img src={Clock} alt="clock" />
        <div className="date-time" style={{ marginLeft: '5vh', color: '#222', fontSize: '18px', display: 'flex', flexDirection: 'column' }}>
          <span>{filteredData.date}</span>
          <span>{filteredData.time} GMT +7</span>
        </div>
      </div>
      <div className="meeting-loc p-2 mb-2">
        <img src={Loc} alt="location" />
        <span style={{ marginLeft: '5vh', color: '#222', fontSize: '18px' }}>{filteredData.place || 'Online'}</span>
      </div>
      {filteredData.status === 'Online' && (
        <div className="meeting-link p-2 mt-1">
          <img src={Link} alt="link" />
          <a
            href={filteredData.zoomLink || filteredData.material}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: '5vh', color: '#222', fontSize: '18px' }}
          >
            <span>{filteredData.zoomLink}</span>
          </a>
        </div>
      )}
    </div>
  );
}

export default Meeting;
