import React from 'react';
import './LinkComp.css';


const LinkComp = (props) => {
    return (
        <div className="linkcompdiv">
            {/* <p>All Navigation Links are here</p> */}
            <div className="linkcomplink">
                <div className="linkcompimg"><img src={props.imgSrc} alt="Link Logo" /></div>
                <div className="link-text"><p>{props.textValue}</p></div>
            </div>

        </div>
    )
}

export default LinkComp;