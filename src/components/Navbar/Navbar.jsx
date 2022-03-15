import React from 'react'
import Style from "../../css/Navbar.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
  return (
    <div className = {Style.Navbar}>
        <div className={Style.Helpmenu}>
            <FontAwesomeIcon icon="fa-solid fa-circle-question" />
        </div>
        <div className={Style.Header}>Foodle</div>
    </div>
  )
}

export default Navbar