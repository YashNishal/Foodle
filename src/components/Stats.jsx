import React from 'react'
import Box from "./Box.jsx"

function Stats({color}) {
  return (
    <div className='board'>
        <div className='Grid'>
        {
            color.map((row, i) =>
            row.map((cell, j) => 
                <Box
                    key={i + " " + j}
                    className={`stats ${color[i][j]}`}
                />
            )
        )
        }
        </div>
    </div>
    )
}

export default Stats