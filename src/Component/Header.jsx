import bellIcon from '../Assets/bell.png';
import bellnotif from '../Assets/Bell_light.png';
import { useEffect, useState } from "react";
import '../style/dashboard.css';

function HeaderContent() {

    const [hasNotification, setHasNotification] = useState(true);
    const [currentDateTime, setCurrentDateTime] = useState(new Date());


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const formatDateTime = (date) => {
        const options = {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        };
        return date.toLocaleString("id-ID", options);
      };

    return(
        <div className="App">
        <div className="header-container">
        <h2>Beranda</h2>
        <img
        src={hasNotification ? bellIcon : bellnotif}
        alt="Notification Bell"
        />
        <p>{formatDateTime(currentDateTime)}</p>
        </div>
        </div>
    )
}

export default HeaderContent;