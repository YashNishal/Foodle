import React from 'react'
import "../App.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

function Navbar({hptOnClick}) {
  return (
    <div className = "Navbar">
        <div className="Rightnav">
            <div className="Helpmenu" onClick={hptOnClick}>
                <FontAwesomeIcon icon={faCircleQuestion} />
            </div>
        </div>

        <div className="Header">Foodle</div>

        
        <div className="Leftnav">
            <div className="achievments"></div>
            <div className="settings"></div>
        </div>

    </div>
  )
}

export default Navbar