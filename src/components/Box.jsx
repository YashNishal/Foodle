import React from "react";

export default function Box({ className, filled = 0, value, b, f }) {
    return (
        <div className={className} filled={filled} bounce={b} flip={f}>
            {value}
        </div>
    );
}
