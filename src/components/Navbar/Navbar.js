import React from 'react'
import Style from "../../css/Navbar.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className = {Style.Navbar}>
        <div className={Style.Rightnav}>
            <div className={Style.Helpmenu}>
                <FontAwesomeIcon icon={faCircleQuestion} />
            </div>
        </div>

        <div className={Style.Header}>Foodle</div>

        
        <div className={Style.Leftnav}>
            <div className={Style.achievments}></div>
            <div className={Style.settings}></div>
        </div>

    </div>
  )
}

export default Navbar