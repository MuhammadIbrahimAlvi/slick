import React, { useContext } from 'react';
import  {ApiContext2}  from '../ApiContext2';
import Img from '../../assets/stadium.png';
import Img2 from '../../assets/pencil.svg';
import Img3 from '../../assets/trash.svg';
import Img4 from '../../assets/link.svg';

import './ManageBottom.css';
const ManageBottom = () => {
    //  const data = useContext(ApiContext2);       
           
return(  <div className="managebtmdiv">
<div className="imgdiv">
    <img src={Img} />
</div>
<div className="linkdiv">
    <div className="innerimg">
        <img src={Img4} />
    </div>
    <div className="innerlink">
        <p>https://images.pexels.com/photos/6231/marketing-color-colors-wheel.jpg?auto=compress&cs…</p>
    </div>
</div>
<div className="add-div"><img src={Img2} /></div>
<div className="space"></div>
<div className="delete-div" ><img src={Img3} /></div>
</div>)

      
      
    
}
export default ManageBottom;
