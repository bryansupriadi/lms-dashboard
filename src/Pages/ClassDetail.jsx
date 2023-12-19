import ContentList from "../Component/ContentList";
import HeaderClass from "../Component/HeaderClass";
import SidebarContent from "../Component/SidebarContent";
import { useParams } from "react-router-dom";
import tunjuk from "../Assets/pointingup.jpg";
import "../style/ClassDetail.css";

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
            <img src={tunjuk} alt="tunjuk-tangan" className="pointing-up-img"/>
            <span className="fs-5 mx-auto d-block text-primary" style={{marginBottom : '30px', fontWeight: '700'}}>Silahkan klik menu di atas</span>
        </div>
        <div>
        </div>
        </div>
        </div>
    )
}
 
export default ClassDetail;