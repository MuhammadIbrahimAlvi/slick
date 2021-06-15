import React from 'react';
import Aux from '../../Components/Hoc/Auxiliary';
import SidePageCompHolder from '../../Components/SidePageComp/SidePageCompHolder';
import ManageBanners from '../../Components/ManageBanners/ManageBanners';
const SidePageController = () => {
    return (
        <Aux>
            {/* <p>Side Page where all the products slider etc will be contained</p> */}
            <SidePageCompHolder />
            {/* <ManageBanners/> */}
        </Aux>

    )
}

export default SidePageController;