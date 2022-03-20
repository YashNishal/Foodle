import React from 'react'

function GameWin({over, restart}) {
  return (
    over === true?
    <div className='modal-bg'>
        <div className='modal'>
            <p>Game over!!!</p>

            <button onClick={() => restart()}>RESTART</button>
        </div>
    </div>
    :
    null
  )
}

export default GameWin