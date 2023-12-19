// import { useState } from "react";
// import { useNavigate} from "react-router-dom";

// const navigate = useNavigate();

// const handleSubmit = () => {
//   navigate("#")
// }

const CardPart = ({ data }) => (
  <div style={{ width: '100%', margin: '0 auto', padding: '20px' }}>
    {data.map((item, index) => (
      <div key={index} style={{ 
        display: 'flex', /* Use Flexbox */
        flexDirection: 'column', /* Stack children vertically */
        justifyContent: 'center', /* Center items vertically */
        width: '100%', 
        height: '150px', 
        marginRight: '0px', 
        marginBottom: '2%', 
        padding: '5px 20px', 
        borderRadius: '10px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
        <div className="class-code pb-1">
          Class <span style={{ marginLeft: '55px', fontWeight: '700' }}>{item.class}</span>
        </div>
        {item.topicsAndDates && Array.isArray(item.topicsAndDates) && item.topicsAndDates.length > 0 && (
          <>
            <div className="date-topic pb-1">
              Date <span style={{ marginLeft: '62px' }}>{item.topicsAndDates[0].date}</span>
            </div>
            <div className="date-topic pb-2">
              Topic <span style={{ marginLeft: '54px' }}>{item.topicsAndDates[0].topic}</span>
            </div>
          </>
        )}
        <button 
          type="button" 
          className="btn btn-primary" 
          style={{
            width: "150px",
            position: "fixed",
            bottom: "10px",
            right: "10px",
          }} 
          // onClick={handleSubmit}
        >
          Class Detail
        </button>
      </div>
    ))}
  </div>
);

export default CardPart;
