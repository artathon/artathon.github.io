import React from "react"
import { NavLink } from "react-router-dom"
import '../index.css' 

function Footer() {
    return (
        <nav className="footer">
            <ul>
                <li><a href='/' className="link-title">Home</a></li>
                <li><a href='/about' className="link-title">About</a></li>
                <li><a href='/artwork' className="link-title">Artwork</a></li>
            </ul>
        </nav>
    )
}

export default Footer