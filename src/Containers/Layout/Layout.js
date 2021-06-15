import React from 'react';
import './Layout.css';
import NavSideBar from '../NavsideBar/NavsideBar';
import SidePageController from '../SidePage/SidePageController';
import SidePageCompHolder from '../SidePage/SidePageController';
import Modal from '../../Components/Modal/Modal';

const Layout = () => {
    return (
        <div className="layout">
            <div className="layout1">
                {/* <h1>Parent Container</h1> */}
                {/* Here the Navbar will be displayed */}
                <NavSideBar />

            </div>

            <div className="layout2">
                <SidePageCompHolder />
                {/* <Modal/> */}
                {/* <p>Here All Products will be displayed</p> */}
            </div>
        </div>
    )
}

export default Layout;