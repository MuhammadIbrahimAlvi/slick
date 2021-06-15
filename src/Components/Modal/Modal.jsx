import React from 'react';
import './Modal.css';
import Button from '@material-ui/core/Button';

const Modal = () => {
    let addNewBanner = (
        <>
            <div className="banner-header">
                <div className="header-text"><h4>Add New Banner</h4></div>
                <div className="header-cross"><Button variant="contained" color="primary" disableElevation>
                    X
                    </Button></div>
            </div>
            <div className="field-container">
                <h5>Enter Image URL</h5>
                <input type="text" id="" placeholder="Write Here" />
            </div>
            <div className="field-button">
                <Button variant="contained" color="primary" disableElevation>
                    Save
                </Button>
            </div>
        </>
    )
    let addNewProduct = (
        <>
            <div className="banner-header">
                <div className="header-text"><h4>Add New Banner</h4></div>
                <div className="header-cross"><Button variant="contained" color="primary" disableElevation>
                    X
                    </Button></div>
            </div>
            <div className='product-form'>
                <div className="product-inner-div">
                    <form>
                        <label htmlFor="">Enter Image URL</label><br />
                        <input type="text" id="url" placeholder="Write Here" /><br /><br />
                        <label htmlFor="items">Select Category</label><br />
                        <select id="items" >
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                        <input type="text" id="url" placeholder="Write Here" /><br /><br />
                        <label htmlFor="">Price</label><br />
                        <input type="text" id="url" placeholder="Eg.4500" />
                    </form>
                </div>
            </div>
            <div className="field-button">
                <Button variant="contained" color="primary" disableElevation>
                    Save
                </Button>
            </div>
        </>
    )
    return (
        <div className="modal-container">
            <div className="modal-field">
                {/* {addNewBanner}  */}
               {/* {addNewProduct} */}
            </div>
        </div>
    )
}

export default Modal;