import { Link } from "react-router-dom";

const CardPart = ({ title, data, page }) => (
    <div className="card-container">
      <div className="part-title">{title}</div>
      {data.map((item, index) => (
        <Link 
        key={index} 
        to={`/${page}/${item.topic.replace(/\s+/g, '-').toLowerCase()}/${item.classCode.toLowerCase()}`}
        style={{ textDecoration: 'none' }}
        >
        <div className="card">
          <div className="topic pb-2" style={{fontWeight: '700'}}>{item.topic}</div>
          <div className={`status ${item.status.toLowerCase()}`} style={{ color: item.status === 'Online' ? '#62E160' : '#FF0000', paddingBottom: '2px', fontWeight: '700' }}>{item.status}</div>
          <div className="class-code pb-1">
          Kode Kelas <span style={{ marginLeft: '30px' }}>{item.classCode}</span>
        </div>
        {item.status === 'Online' ? (
          <div className="zoom-link pb-1">
              Link Zoom <span style={{ marginLeft: '32px' }}><a href={item.zoomLink} target="_blank" rel="noopener noreferrer">{item.zoomLink}</a></span>
          </div>
          ) : (
          <div className="tempat pb-1">
              Tempat <span style={{ marginLeft: '53px' }}>{item.place}</span>
          </div>
        )}
        <div className="time">
          Waktu <span style={{ marginLeft: '59px' }}>{item.date} ({item.time})</span>
        </div>
        </div>
        </Link>
      ))}
    </div>
  );

export default CardPart;