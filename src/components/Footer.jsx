import React from "react"
import { NavLink } from "react-router-dom"
import '../index.css' 

function Footer() {
    return (
        <nav className="footer">
            <ul>
                <li><a href='/developers' className="link-title">Developers</a></li>
                <li><a href='/judges' className="link-title">Judges</a></li>
                <li><a href='/faculty' className="link-title">Faculty</a></li>
            </ul>
        </nav>
    )
}

export default Footer