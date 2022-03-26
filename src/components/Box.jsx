import React from "react";

export default function Box({ className, filled = 1, value, b, f }) {
    return (
        <div className={className} filled={filled} bounce = {b} flip={f}>
            {value}
        </div>
    );
}
