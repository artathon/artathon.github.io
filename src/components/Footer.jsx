import React from "react"
import { NavLink } from "react-router-dom"
import '../index.css' 
import { Link, useMatch, useResolvedPath  } from "react-router-dom"

export default function Footer() {
    return (
        <nav className="footer">
            <ul className="footer-nav">
                    <span>School of Data Science Student Organization</span>
            </ul>

        </nav>
    )
}
