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
        const formattedMinute = String(minute).padStart(2, '0');;
    
        return `${day} ${month} ${year}, ${hour}:${formattedMinute}`;
      };

    return(
        <div class="header-container d-flex justify-content-between fixed-top" style={{marginLeft: "19vh"}}>
        <section class='left-content' style={{paddingTop: "2vh", marginLeft: "21vh"}}>
            <h2 class="text-white fs-3">Beranda</h2>
        </section>
        <section class='right-content d-flex pt-2'>
            <img
                src={hasNotification ? bellIcon : bellnotif}
                alt="Notification Bell"
                class="img-fluid"
                style={{width: "30px", height: "30px", marginRight: "30px", marginTop: "1vh", marginLeft: "2vh"}}
            />
            <p class="notification-text ms-auto bg-white text-primary rounded-3 p-2 text-center" style={{fontSize: "16px"}}>
                {formatDateTime(currentDateTime)}
            </p>
        </section>
    </div>
    
    )
}

export default HeaderContent;