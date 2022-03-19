import React from 'react'
import "../App.scss"

export default function Key({
    value,
    onClick,
    width = 40
}) {

  const style = {
    width: `${width}px`,
    height: '60px'

  }

  function handleClick() {
    onClick(value);
  }

  return (
    <div style={style} className="key" onClick={handleClick}>{value}</div>
  )
}
