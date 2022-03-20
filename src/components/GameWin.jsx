import React from 'react'

function GameWin({victory}) {
  return (
      victory === true?
    <div>GameWin</div>
    :
    null
  )
}

export default GameWin