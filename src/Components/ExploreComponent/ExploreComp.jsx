import React from 'react';
import './ExploreComp.css';
import Polygon from '../../assets/Polygon1.svg';
import Polygon1 from '../../assets/Polygon2.svg';
import Button from '@material-ui/core/Button';
const ExploreComp = () => {

    return (
        <div>
            {/* <p>FireBase related logo will be displayed here</p> */}
            <div className="explorecompdiv">
                <div className="explorecompdiv1"> <h2>Boost Your</h2><img src={Polygon} alt="Polygon-1" /></div>
                <div className="explorecompdiv2"><h2>Sales Fast!</h2> <img src={Polygon1} alt="Polygon-2" /></div>
                <div className="explorecompbtndiv">
                    <Button variant="contained" color="primary" disableElevation>
                        Explore Pro
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ExploreComp;