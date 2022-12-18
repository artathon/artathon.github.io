import React from "react"
import { NavLink } from "react-router-dom"
import '../index.css' 

function NavBar() {
    return (
        <nav className="nav">
            <a href='/' className="site-title">SDS Artathon</a>
            <ul>
                <li><a href='/' className="link-title">Home</a></li>
                <li><a href='/about' className="link-title">About</a></li>
                <li><a href='/artwork' className="link-title">Artwork</a></li>
            </ul>
        </nav>
    )
}

export default NavBar