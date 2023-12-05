import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CustomCalendar() {
  const [dateWithEvents, setDateWithEvents] = useState([
    { date: '2023-12-15', description: 'Deskripsi untuk kegiatan pada 15 Desember' },
    { date: '2023-12-21', description: 'Deskripsi untuk kegiatan pada 22 Desember' },
  ]);

  const tileContent = ({ date, view }) => {
    const formattedDate = date.toISOString().split('T')[0];
    if (view === 'month' && dateWithEvents.some((event) => event.date === formattedDate)) {
      return <div className="event-marker font-weight-bold" style={{ color: 'red', fontSize: '16px' }}>•</div>; // Tanda kegiatan
    }
    return null;
  };
  
  const onClickDay = (value) => {
    const selectedDate = value.toISOString().split('T')[0];
    const event = dateWithEvents.find((event) => event.date === selectedDate);
  
    if (event) {
      alert(`Deskripsi: ${event.description}`);
    }
  };
  

  return (
    <div>
      <Calendar
        tileContent={tileContent}
        calendarType="US"
        onClickDay={onClickDay}
      />
    </div>
  );
}

export default CustomCalendar;
