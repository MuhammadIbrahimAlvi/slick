import React from 'react';
import './ManageProduct.css';
import ManageProductsBottom from '../ManageProductsBottom/ManageProductsBottom';
const ManageProduct=()=>{
    return(
        <div>
            <div className="manageprodtop">
                <div className="div11">Category</div>
                <div className="div22">Product Name</div>
                <div className="div33">Price</div>
                <div className="div44"></div>
            </div>
            <div className="manageprodbtm">
               <ManageProductsBottom/>
            </div>
        </div>
    )
}

export default ManageProduct;