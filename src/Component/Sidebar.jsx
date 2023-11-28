import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaUser, FaChalkboardTeacher, FaSignOutAlt } from "react-icons/fa";
import Home from '../Assets/sidebar/Home (1).png';
import Daftar from '../Assets/sidebar/Vector.png';
import Detail from '../Assets/sidebar/icon-park_doc-search-two.png';
import SignOut from '../Assets/sidebar/Sign_out_squre.png';
import '../style/sidebar.css';

const SidebarContent = () => {

  const [profileImage, setProfileImage] = useState(null);
  
  
  return (
    <Sidebar className="sidebar-container" style={{ position: 'absolute', left: '0', marginLeft: '10px', height: '90vh', borderRadius: '10px', overflow: 'hidden', backgroundColor: 'white' }}>
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
              <h6>John Doe</h6>
            </div>
          </div>
        </MenuItem>
        <MenuItem icon={<img src={Home} alt="home"/>}>Dashboard</MenuItem>
        <MenuItem icon={<img src={Daftar} alt="daftar"/>}>Daftar Kelas</MenuItem>
        <MenuItem icon={<img src={Detail} alt="detail"/>}>Detail Kelas</MenuItem>
      </Menu>
      <Menu iconShape="square" className="logout-button-sidebar">
        <MenuItem icon={<img src={SignOut} alt= "signout"/>}>Log Out</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarContent;
