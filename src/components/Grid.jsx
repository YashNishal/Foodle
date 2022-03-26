import React from "react";
import "../App.scss";
import Box from "./Box";

export default function Grid({ data, color, bounce, flip }) {
    const Boxes = ({ data, color }) => {
        return data.map((row, i) =>
            row.map((cell, j) => {
                let bgColor = "";

                if (color[i][j] === "Green") {
                    bgColor = "Green";
                } else if (color[i][j] === "Yellow") {
                    bgColor = "Yellow";
                } else if (color[i][j] === "Grey") {
                    bgColor = "Grey";
                }

                return (
                    <Box
                        key={i + " " + j}
                        className={`box ${bgColor}`}
                        filled={data[i][j] === "" ? 0 : 1}
                        value={data[i][j]}
                        b = { (bounce[0] === i && bounce[1] === j)? "1" : "0"}
                        f = { (flip[0] === i && flip[1] === j)? "1" : "0"}
                    />
                );
            })
        );
    };

    return (
        <div className="board">
            <div className="Grid">
                <Boxes data={data} color={color} />
            </div>
        </div>
    );
}
