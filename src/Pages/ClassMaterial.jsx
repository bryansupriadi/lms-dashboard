import ContentList from "../Component/ContentList";
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
            <span className="fs-4" style={{fontWeight: '700', paddingLeft: '45px', paddingTop: '20px'}}>Topik : {convertToTitleCase(topic)}</span>
            <ContentList/>
        </div>
        <div>
        </div>
        </div>
        </div>
    )
}

export default ClassDetail;