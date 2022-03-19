import React from "react";
import "../App.scss"


export default function Grid({data}) {

    const Box = ({data}) => {
        return (
            data.map( (row,i) => row.map( (cell,j) => <div key={i+'_'+j} className="box" filled={data[i][j] === "" ? 0 : 1}>{data[i][j]}</div>))
        );
    };

    return (
        <div className="board">
            <div className="Grid">
                <Box data={data} />
            </div>
        </div>
    );

    
}
