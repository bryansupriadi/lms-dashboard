import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaUser } from "react-icons/fa";
import Home from '../Assets/sidebar/Home (1).png';
import Berjalan from '../Assets/sidebar/writing.png';
import Selesai from '../Assets/sidebar/done.png';
import Kelas from '../Assets/sidebar/training.png';
import SignOut from '../Assets/sidebar/Sign_out_squre.png';
import '../style/sidebar.css';
import { Link } from "react-router-dom";

const SidebarContent = () => {

  const [profileImage, setProfileImage] = useState(null);
  
  
  return (
    <Sidebar className="sidebar-container" style={{ position: 'fixed', left: '0', marginLeft: '10px', height: '95%', maxHeight: '95%', borderRadius: '10px', overflow: 'hidden', backgroundColor: 'white' }}>
      <Menu iconShape="square">
        <MenuItem style={{height: '100px'}}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {profileImage ? (
              <img src={profileImage} alt="profile" style={{ width: '30px', height: '30px', borderRadius: '50%'}} />
            ) : (
              <FaUser size={30} style={{ marginRight: '10px'}} />
            )}
            <div className="sidebar-name">
              <h6>Dashboard</h6>
              <h6>User Name</h6>
            </div>
          </div>
        </MenuItem>
        <MenuItem icon={<img src={Home} alt="home"/>}>
          <Link to="/dashboard" style={{textDecoration: 'none', color: "#000"}}>Dashboard</Link>
        </MenuItem>
        <MenuItem icon={<img src={Kelas} alt="kelas"/>}>
          <Link to="/info-kelas" style={{textDecoration: 'none', color: "#000"}}>Info Kelas</Link>
        </MenuItem>
        <MenuItem icon={<img src={Berjalan} alt="berlangsung"/>}>
          <Link to="/kelas-berlangsung" style={{textDecoration: 'none', color: '#000'}}>Kelas Berlangsung</Link>
        </MenuItem>
        <MenuItem icon={<img src={Selesai} alt="selesai"/>}>
          <Link to="/kelas-selesai" style={{textDecoration: 'none', color: '#000'}}>Kelas Selesai</Link>
        </MenuItem>
      </Menu>
      <Menu iconShape="square" className="logout-button-sidebar">
        <MenuItem icon={<img src={SignOut} alt= "signout"/>}>
        <Link to="/" style={{textDecoration: 'none', color: '#000'}}>
        Keluar
        </Link></MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarContent;