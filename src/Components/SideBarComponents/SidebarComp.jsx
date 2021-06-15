import React from 'react';
import './SidebarComp.css';
import LogoComp from '../LogoComponent/LogoComp';
import NavigationComp from '../NavigationComponents/NavigationComp';
import ExploreComp from '../ExploreComponent/ExploreComp';

const SidebarComp =()=>{
    return(
        <div className="sidebarcompdiv">
            {/* <p>Container Sidebar</p> */}
            <LogoComp/>
            <NavigationComp/>
            <ExploreComp/>
        </div>
    )
}

export default SidebarComp;