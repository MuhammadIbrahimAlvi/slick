import React, { useState } from 'react';
import './ManageTop.css';
import Button from '@material-ui/core/Button';
import HeadingManagement from '../Heading/Heading';
import { NavLink } from 'react-router-dom';
const ManageTop = () => {

    return (<>
    
        <div className="managebannertop">
        
            <NavLink to="/management/bottom" ><div className="managebannerdiv1" >Manage Banners <div className="line"></div></div></NavLink>
         <NavLink to="/management/products">   <div className="managebannerdiv2" >Manage Products <div className="line"></div></div></NavLink>
            <div className="managebannerdiv3">
                <Button variant="contained" color="primary" className="btn" disableElevation>
                    Add New
                </Button></div>
        </div></>
    )
}

export default ManageTop;