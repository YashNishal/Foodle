import React from "react";

export default function Box({ className, filled = 1, value }) {
    return (
        <div className={className} filled={filled}>
            {value}
        </div>
    );
}
