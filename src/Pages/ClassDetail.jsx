import HeaderClass from "../Component/HeaderClass";
import SidebarContent from "../Component/SidebarContent";
import { useParams } from "react-router-dom";

function ClassDetail() {

    const { topic } = useParams();

    function convertToTitleCase(str) {
        return str
          .replace(/-/g, " ")
          .replace(/\b\w/g, (match) => match.toUpperCase());
      }

    return(
        <div className="App">
        <SidebarContent/>
        <div className="class-detail-page-container">
        <HeaderClass/>
        <div className="content-detail d-flex flex-column align-items-start text-start bg-white rounded-3">
            <span className="fs-4 p-3" style={{fontWeight: '700'}}>Topik : {convertToTitleCase(topic)}</span>
        </div>
        <div>
        </div>
        </div>
        </div>
    )
}

export default ClassDetail;