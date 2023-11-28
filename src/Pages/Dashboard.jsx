import HeaderContent from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import '../style/dashboard.css';

function Dashboard() {



    return (
        <div className="App">
        <Sidebar/>
        <HeaderContent/>
        </div>
    );
}

export default Dashboard;