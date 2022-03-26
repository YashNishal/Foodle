import React from "react";

export default function Box({ className, filled = 1, value, b }) {
    return (
        <div className={className} filled={filled} bounce = {b}>
            {value}
        </div>
    );
}
