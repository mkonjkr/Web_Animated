import React from "react";
import "./style.scss";

const AnimateText = ({text}) => {
    return (
        <div className="animate-main-container">
            {[...text].map((value, index) =>
            <div key={index} className="animate-main-item">
                {value}
            </div>
            )}
        </div>
    )
}

export default AnimateText;