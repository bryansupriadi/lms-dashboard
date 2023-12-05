import CustomCalendar from "../Component/Calendar";
import HeaderContent from "../Component/Header";
import SidebarContent from "../Component/SidebarContent";
import UpcomingClass from "../Component/UpcomingClass";
import '../style/dashboard.css';

function Dashboard() {
  const upcomingClassInfo = {
    classTime: "10:00 AM",
    className: "LB01",
    topic: "Internet Untuk Bisnis",
  };

    return (
        <div className="App">
        <SidebarContent/>
        <div className="dashboard-page-container">
          <HeaderContent />
          <div className="content-container d-flex flex-column">
          <UpcomingClass upcomingClassInfo={upcomingClassInfo}/>
          <div className="content-dashboard d-flex flex-column align-items-center justify-content-center text-center bg-white rounded-3">
          <CustomCalendar/>
          </div>
          </div>
          </div>
        </div>
    );
}

export default Dashboard;