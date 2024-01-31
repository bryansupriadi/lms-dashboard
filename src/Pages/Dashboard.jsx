import ForumCard from "../Component/ForumCard";
import HeaderContent from "../Component/Header";
import IndependentTask from "../Component/IndependentTask";
import SidebarContent from "../Component/SidebarContent";
import StudentCard from "../Component/StudentCard";
import UpcomingClass from "../Component/UpcomingClass";
import '../style/dashboard.css';

function Dashboard() {
  const upcomingClassInfo = {
    classTime: "10:00-11:30",
    className: "LC-02",
    topic: "Pelatihan Microsoft Office Excel",
  };

  const classList = ['LB-02', 'LC-02', 'LD-02'];

  return (
    <div className="App">
      <SidebarContent />
      <div className="dashboard-page-container">
        <HeaderContent />
        <div className="content-container d-flex flex-column">
          <UpcomingClass upcomingClassInfo={upcomingClassInfo} />
          <div className="content-dashboard d-flex align-items-center justify-content-center text-center bg-white rounded-3">
            <div className="d-flex flex-column"style={{paddingRight: '20vh'}}>
              <IndependentTask />
              <h5 className="text-primary fs-6 font-weight-bold text-start" style={{ fontWeight: '600', paddingTop: '5vh' }}>Forum</h5>
              <ForumCard classText="LB-02" />
              <ForumCard classText="LC-02" />
              <ForumCard classText="LD-02" />
            </div> 
            <div className="d-flex flex-column" style={{marginBottom: '32vh'}}>
              <h5 className="text-primary fs-6 font-weight-bold text-start" style={{ fontWeight: '600', paddingTop: '10vh' }}>Kelas Saya</h5>
              <div className="d-flex flex-row">
              {classList.map((className) => (
                <StudentCard key={className} className={className} />
              ))}
            </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
