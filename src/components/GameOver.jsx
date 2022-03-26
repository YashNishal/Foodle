import React from 'react'
import Stats from './Stats'

function GameOver({over, restart, answer, data, color}) {
  console.log(color);
  return (
    over ?
    <div className='modal-bg'>
        <div className='modal'>
          <p>The answer was:</p>
          <p>{answer}</p>

          <p>Your statistics:</p>
          <Stats color={color}/>

          <button className={'restart-btn'} onClick={() => restart()}>RESTART</button>
        </div>
    </div>
    :
    null
  )
}

export default GameOver