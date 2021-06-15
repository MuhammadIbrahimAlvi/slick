import React from 'react';
import Aux from '../Hoc/Auxiliary';
import SideHeadComp from '../SidePageHeading/SideHeadComp';
import BellIconComp from '../BellIconSidePage/BellIconComp';
import Carousel from '../Carousel/Carousel'
import './SidePageCompHolder.css';
import Card from '../ProductsCard/Card';
import ManageBanners from '../ManageBanners/ManageBanners'
import SideHeadManagementComp from '../SideHeadManagementComp/SideHeadManagementComp';
import HomeComp from '../HomeComponent/HomeComp';
import { pageRoutes } from './SidePageRoutes';
import { Route, Switch } from 'react-router';
const SidePageCompHolder = () => {
    // console.log(pageRoutes);
    return (
        <Aux>
            <Switch>
            {pageRoutes.map(o => {
                return (
                    <Route
                    exact={o.exact || false}
                    // component={o.component}
                    path={o.path}>
                        {o.component}
                        </Route>
                )
            })}
            </Switch>
            {/* <HomeComp/>
            <ManageBanners/> */}
            {/* <p>Here All the SidePage Components will be aligned</p> */}
            {/* <div className="topsidecomp">
                <div className="topsidediv1">
                    <SideHeadComp />
                    <SideHeadManagementComp/>
                </div>
                <div className="topsidediv2">
                    <BellIconComp />
                </div>
            </div>
            <div className="midsidecomp">
                <Carousel /> */}

            {/* </div> */}
            {/* <div className="sidepagecompholderhead"><h4>Listed Products</h4></div> */}

            {/* <div className="btmsidecomp">

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div> */}
            {/* <div>
                <p>Management will be done here</p>
            </div> */}

        </Aux>
    )
}
export default SidePageCompHolder;