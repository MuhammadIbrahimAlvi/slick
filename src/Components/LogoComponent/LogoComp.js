import React from 'react';
import './LogoComp.css';
import logo from '../../assets/Logo.svg';
const LogoComp =()=>{
    return(
        <div className="logocompdiv">
            <img src={logo}/><div className="margindiv"></div><h4><b>Slick</b></h4>
        </div>
    )
}

export default LogoComp;