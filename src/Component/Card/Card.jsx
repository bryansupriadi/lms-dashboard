const Card = ({ topic, date, status, classCode, zoomLink, time }) => {
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '300px' }}>
        <div style={{ textAlign: 'right' }}>
          <strong>{topic}</strong>
        </div>
        <div style={{ textAlign: 'left' }}>{date}</div>
        <hr />
        <div>Status: {status}</div>
        <div>Kode Kelas: {classCode}</div>
        <div>Link Zoom: {zoomLink}</div>
        <div>Waktu: {time}</div>
      </div>
    );
  };
  
  export default Card;