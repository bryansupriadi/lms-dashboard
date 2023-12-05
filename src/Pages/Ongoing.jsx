import ActiveClass from "../Component/ActiveClass";
import HeaderClass from "../Component/HeaderClass";
import SidebarContent from "../Component/SidebarContent";
import '../style/OnFinished.css';

function SedangBerjalan() {

    return(
        <div className="App">
        <SidebarContent/>
        <div className="ongoing-page-container">
        <HeaderClass />
        <section className="content-ongoing d-flex align-items-center justify-content-center text-center bg-white rounded-3">
        <h3>test</h3>
        </section>
        </div>
        </div>
    )

}

export default SedangBerjalan;