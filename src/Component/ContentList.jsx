import { useState } from "react";
import { Link } from "react-router-dom";

function ContentList(page, item) {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };

  return (
    <div className="navigation-bar">
      <ul className="list-unstyled d-flex" style={{ fontSize: '17px', paddingLeft: '25px', marginTop: '10px' }}>
        <li
        className={`p-4 ${activeMenu === 0 ? 'active' : ''}`}
        style={{ marginRight: '20px', borderBottom: activeMenu === 0 ? '4px solid #2D76E5' : 'none', cursor: 'pointer' }}
        onClick={() => handleMenuClick(0)}
        >
            Materi
        </li>
        <li
          className={`p-4 ${activeMenu === 1 ? 'active' : ''}`}
          style={{ marginRight: '20px', borderBottom: activeMenu === 1 ? '4px solid #2D76E5' : 'none', cursor: 'pointer' }}
          onClick={() => handleMenuClick(1)}
        >
          Pertemuan
        </li>
        <li
          className={`p-4 ${activeMenu === 2 ? 'active' : ''}`}
          style={{ marginRight: '20px', borderBottom: activeMenu === 2 ? '4px solid #2D76E5' : 'none', cursor: 'pointer' }}
          onClick={() => handleMenuClick(2)}
        >
          Forum
        </li>
        <li
          className={`p-4 ${activeMenu === 3 ? 'active' : ''}`}
          style={{ marginRight: '20px', borderBottom: activeMenu === 3 ? '4px solid #2D76E5' : 'none', cursor: 'pointer' }}
          onClick={() => handleMenuClick(3)}
        >
          Tugas
        </li>
        <li
          className={`p-4 ${activeMenu === 4 ? 'active' : ''}`}
          style={{ marginRight: '20px', borderBottom: activeMenu === 4 ? '4px solid #2D76E5' : 'none', cursor: 'pointer' }}
          onClick={() => handleMenuClick(4)}
        >
          Siswa
        </li>
        <li
          className={`p-4 ${activeMenu === 5 ? 'active' : ''}`}
          style={{ marginRight: '20px', borderBottom: activeMenu === 5 ? '4px solid #2D76E5' : 'none', cursor: 'pointer' }}
          onClick={() => handleMenuClick(5)}
        >
          Nilai
        </li>
      </ul>
    </div>
  );
}

export default ContentList;
