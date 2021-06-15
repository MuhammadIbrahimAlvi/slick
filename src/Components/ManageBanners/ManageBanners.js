import React from 'react';
import './ManageBanners.css';
import ManageTop from '../ManageTop/ManageTop';
import { Switch,Route } from 'react-router-dom';
import HeadingManagement from '../Heading/Heading';
import { productRoutes } from './ManageBannerRoutes';
const ManageBanners = () => {
    // console.log(productRoutes)
    return (<>
        <div className="management-heading">
            <HeadingManagement />
        </div>
        <div className="managebannerclass">
            <div >
                <ManageTop />
            </div>
            <div className="managebannerbtm">
            <Switch>
            {productRoutes.map(o => {
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
                {/* <ManageBottom /> */}
                {/* <ManageProduct /> */}
            </div>
        </div></>
    )
}

export default ManageBanners;