import React from 'react';
import './NavsideBar.css';
import SidebarComp from '../../Components/SideBarComponents/SidebarComp';
const NavSideBar = () => {
    return (
        <div className="navsidebardiv">
            {/* <p>SideBar Displayer Component will be occupied here or displayed</p> */}
            <SidebarComp />
        </div>
    )
}

export default NavSideBar;