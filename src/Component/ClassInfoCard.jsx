const CardPart = ({ data }) => (
  <div className="card-container">
    {data.map((item, index) => (
      <div key={index} className="card">
        <div className="class-code pb-1">
          Class <span style={{ marginLeft: '30px' }}>{item.class}</span>
        </div>
        {item.topicsAndDates && Array.isArray(item.topicsAndDates) && item.topicsAndDates.length > 0 && (
          <>
            <div className="date-topic pb-1">
              Date <span style={{ marginLeft: '62px' }}>{item.topicsAndDates[0].date}</span>
            </div>
            <div className="date-topic pb-2">
              Topic <span style={{ marginLeft: '54px', fontWeight: '700' }}>{item.topicsAndDates[0].topic}</span>
            </div>
          </>
        )}
      </div>
    ))}
  </div>
);

export default CardPart;
