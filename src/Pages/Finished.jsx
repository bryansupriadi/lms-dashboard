import HeaderClass from "../Component/HeaderClass";
import SidebarContent from "../Component/SidebarContent";
import '../style/OnFinished.css';

function SudahSelesai() {

    return(
        <div className="App">
        <SidebarContent/>
        <div className="finished-page-container">
        <HeaderClass/>
        <section className="card-content-page-container">
        </section>
        </div>
        </div>
    )
}

export default SudahSelesai;