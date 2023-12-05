import { useEffect, useState } from "react";
import '../style/dashboard.css';

function HeaderClass() {
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
        const formattedMinute = String(minute).padStart(2, '0');

        return `${day} ${month} ${year}, ${hour}:${formattedMinute}`;
    };

    return (
        <div className="header-container d-flex justify-content-between fixed-top" style={{ marginLeft: "19vh" }}>
            <section className='left-content' style={{ paddingTop: "2vh", marginLeft: "21vh" }}>
                <h2 className="text-white fs-3">Daftar Kelas</h2>
            </section>
            <section className='right-content d-flex pt-2'>
                <p className="notification-text ms-auto bg-white text-primary rounded-3 p-2 text-center" style={{ fontSize: "16px" }}>
                    {formatDateTime(currentDateTime)}
                </p>
            </section>
        </div>
    );
}

export default HeaderClass;
