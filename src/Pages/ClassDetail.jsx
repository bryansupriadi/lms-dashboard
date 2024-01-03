import { useState } from "react";
import ContentList from "../Component/ContentList";
import HeaderClass from "../Component/HeaderClass";
import SidebarContent from "../Component/SidebarContent";
import { useParams } from "react-router-dom";
import "../style/ClassDetail.css";

function ClassDetail() {
  const { topic } = useParams();
  const [contentVisible, setContentVisible] = useState(true);

  function convertToTitleCase(str) {
    return str
      .replace(/-/g, " ")
      .replace(/\b\w/g, (match) => match.toUpperCase());
  }

  const handleContentVisibility = (isVisible) => {
    setContentVisible(isVisible);
  };

  return (
    <div className="App">
      <SidebarContent />
      <div className="class-detail-page-container">
        <HeaderClass />
        <div className="content-detail d-flex flex-column align-items-start text-start bg-white rounded-3">
          <span
            className="fs-4"
            style={{
              fontWeight: "700",
              paddingLeft: "45px",
              paddingTop: "20px",
            }}
          >
            Topik : {convertToTitleCase(topic)}
          </span>
          <ContentList
            onMenuClick={() => handleContentVisibility(false)}
            contentVisible={contentVisible}
          />
        </div>
      </div>
    </div>
  );
}

export default ClassDetail;
