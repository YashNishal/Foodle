import React from "react";
import "../App.scss";

export default function Grid({ data, color }) {
    const Box = ({ data,color }) => {
        return data.map((row, i) =>
            row.map((cell, j) => {
                let bgColor = ""
                
                if(color[i][j] === "Green") {
                    bgColor = "Green";
                }
                else if(color[i][j] === "Yellow") {
                    bgColor = "Yellow";
                }
                else if(color[i][j] === "Grey") {
                    bgColor = "Grey";
                }

                
                return (<div
                    key={i + "_" + j}
                    className={`box ${bgColor}`}
                    filled={data[i][j] === "" ? 0 : 1}
                >
                    {data[i][j]}
                </div>);
            })
        );
    };

    return (
        <div className="board">
            <div className="Grid">
                <Box data={data} color={color} />
            </div>
        </div>
    );
}
