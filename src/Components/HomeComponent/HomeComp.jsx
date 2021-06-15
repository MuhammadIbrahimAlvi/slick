import React from 'react';
import Aux from '../Hoc/Auxiliary';
import SideHeadComp from '../SidePageHeading/SideHeadComp';
import BellIconComp from '../BellIconSidePage/BellIconComp';
import Carousel from '../Carousel/Carousel';
import Home from '../HomeHead/Home';
// import './SidePageCompHolder.css';
import Card from '../ProductsCard/Card';
const HomeComp = () => {
    return (
        <Aux>
            {/* <p>Here All the SidePage Components will be aligned</p> */}
            <div className="topsidecomp">
                <div className="sideheadcomp">
                
                </div>
                <div className="topsidediv1">
                <Home/>
                    {/* <SideHeadComp /> */}
                </div>
                <div className="topsidediv2">
                    <BellIconComp />
                </div>
            </div>
            <div className="midsidecomp">
                <Carousel />
            </div>
            {/* <div className="sidepagecompholderhead"><h4>Listed Products</h4></div> */}

            <div className="btmsidecomp">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            {/* <div>
                <p>Management will be done here</p>
            </div> */}
        </Aux>
    )
}
export default HomeComp;