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
        const day = date.getDate();
        const month = date.toLocaleString("id-ID", { month: "long" });
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();
    
        return `${day} ${month} ${year}, ${hour}:${minute}`;
      };

    return(
        <div className="App">
            <div className="header-container">
                <section className='left-content'>
                    <h2>Beranda</h2>
                </section>
                <section className='right-content'>
                    <img
                    src={hasNotification ? bellIcon : bellnotif}
                    alt="Notification Bell"
                    />
                    <p>{formatDateTime(currentDateTime)}</p>
                </section>
            </div>
        </div>
    )
}

export default HeaderContent;