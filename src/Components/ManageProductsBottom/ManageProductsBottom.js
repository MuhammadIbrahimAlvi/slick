import React, { useContext, useEffect, useState } from 'react';
import './ManageProductBottom.css';
import Product1 from '../../assets/ProductPic1.png';
import coin from '../../assets/Coin.svg';
import Img2 from '../../assets/pencil.svg';
import Img3 from '../../assets/trash.svg';
import { ApiContext } from '../ApiContext';
import axios from 'axios';

const ManageProductsBottom = () => {

    const recievedProds = useContext(ApiContext);

    const handleDelete=(e,id)=>{
      
        }
    

        // console.log(id);
    
   
    // console.log(recievedProds);
    return (
        <>
            {recievedProds?.map(val => {
                return (<div className="manageproductsbtm" key={val._id}>

                    <div className="div div13">
                        <img src={val.image} />

                        <p> {val.category.name}</p>

                    </div>
                    <div className="div div23">
                        {val.name}
                    </div>
                    <div className="manage-product-coin">
                        <div className="coindiv"><img src={coin} /></div>
                        <div className="price"><p>{val.price}</p></div>
                    </div>
                    <div className="manage-product-btns">
                        <div className="add-div"><img src={Img2} /></div>
                        <div className="space"></div>
                        <div className="delete-div" onClick={(e)=>handleDelete(e,val._id)}><img src={Img3} /></div>
                    </div>
                </div>)
            })}



        </>
    )
}

export default ManageProductsBottom;