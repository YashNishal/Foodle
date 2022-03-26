import React from 'react'
import Stats from './Stats.jsx'

function GameWin({victory, restart, color}) {
  // return (
  //     victory ?
  //   <div className='modal-bg'>
  //       <div className='modal'>
  //           <p>You have won!!!</p>

  //           <button onClick={() => restart()}>RESTART</button>
  //       </div>
  //   </div>
  //   :
  //   null
  // )
  return (
    victory ?
    <div className='modal-bg'>
        <div className='modal'>
          <p>You win!!!</p>

          <p>Your statistics:</p>
          <Stats color={color}/>

          <button className={'restart-btn'} onClick={() => restart()}>RESTART</button>
        </div>
    </div>
    :
    null
  )
}

export default GameWin