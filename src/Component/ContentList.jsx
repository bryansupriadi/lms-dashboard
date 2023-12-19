import { useState } from "react";
import MateriComponent from "../Component/Material";
import PertemuanComponent from "../Component/Meeting";
import ForumComponent from "../Component/Forum";
import TugasComponent from "../Component/Task";
import SiswaComponent from "../Component/Student";
import NilaiComponent from "../Component/Score";


function ContentList() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };

  const renderComponent = () => {
    switch (activeMenu) {
      case 0:
        return <MateriComponent />;
      case 1:
        return <PertemuanComponent />;
      case 2:
        return <ForumComponent />;
      case 3:
        return <TugasComponent />;
      case 4:
        return <SiswaComponent />;
      case 5:
        return <NilaiComponent />;
      default:
        return null;
    }
  };

  const data = [
    { id: 0, label: "Materi" },
    { id: 1, label: "Pertemuan" },
    { id: 2, label: "Forum" },
    { id: 3, label: "Tugas" },
    { id: 4, label: "Siswa" },
    { id: 5, label: "Nilai" },
  ];

  return (
    <div className="navigation-bar">
      <ul className="list-unstyled d-flex" style={{ fontSize: '17px', paddingLeft: '25px', marginTop: '10px' }}>
        {data.map((item) => (
          <li
            key={item.id}
            className={`p-4 ${activeMenu === item.id ? 'active' : ''}`}
            style={{
              marginRight: '20px',
              borderBottom: activeMenu === item.id ? '4px solid #2D76E5' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => handleMenuClick(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div className="content-container">
      {renderComponent()}
      </div>
    </div>
  );
}

export default ContentList;
