import React from "react"
import { Link } from "gatsby"

import navStyles from "./navigation.module.scss"

const Navigation = () => (
    <nav className={`nav ${navStyles.nav}`}>
        <h2 className="visually-hidden">
            Navigation
        </h2>
        <ul id="navigation" tabIndex="-1">
            <li><Link to="/">App Home</Link></li>
            <li><Link to="/dropdown">Dropdown demo</Link></li>
        </ul>
    </nav>
)

export default Navigation
