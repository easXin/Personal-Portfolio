import React from "react";
import './ProgressBar.css';

const ProgressBar = ({ bgColor, completed }) => {

    const myStyle = {
        width: `${completed}%`,
        backgroundColor: bgColor
    }
    return (
        <div className="containerStyles">
            <div className="fillerStyles" style={myStyle} />
        </div>
    );
};

export default ProgressBar;