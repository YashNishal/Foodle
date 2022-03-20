import React from "react";
import "../App.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

export default function Key({ value, onClick, width = 40 }) {
    // const style = {
    //   width: `${width}px`,
    //   height: '60px'
    // }

    function handleClick() {
        onClick(value);
    }
    return value !== "DELETE" ? (
        <div className="key" value={value} onClick={handleClick}>
            {value}
        </div>
    ) : (
        <div className="key" value={value} onClick={handleClick}>
            <FontAwesomeIcon icon={faDeleteLeft} className="DeleteIcon" />
        </div>
    );
}
