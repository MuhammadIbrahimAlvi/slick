import React from 'react';
import Product1 from '../../assets/ProductPic1.png';
import './Card.css';
import coin from '../../assets/Coin.svg'
const Card = () => {
    return (
        <div>
            <div className="carddiv">
                <div className="cardimg">
                    <img src={Product1} />
                </div>
                <div className="cardcoins">
                    <img src={coin} height="15px"/><span><p>Keemat</p></span>
                </div>
                <div className="cardheadings">
                    <p>Casual</p>
                    <h4>Overcome Basic <br/>SweatShirt</h4>
                </div>
            </div>
        </div>
    )
}

export default Card;