import React from "react";
import "../App.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

export default function Key({ 
    value, 
    onClick, 
    width = 40,
    color
}) {
    // console.log("color : "+ value + " "+color)
    function handleClick() {
        onClick(value);
    }

    color = color ? color : "normal"

    return value !== "DELETE" ? (
        <div className={`key ${color}`} value={value} onClick={handleClick}>
            {value}
        </div>
    ) : (
        <div className="key normal" value={value} onClick={handleClick}>
            <FontAwesomeIcon icon={faDeleteLeft} className="DeleteIcon" />
        </div>
    );
}
