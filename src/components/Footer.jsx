import React from "react"
import { NavLink } from "react-router-dom"
import '../index.css' 
import { Link, useMatch, useResolvedPath  } from "react-router-dom"

export default function Footer() {
    return (
        <nav className="footer">
            <ul>
                <CustomLink to='/developers' className='footer-text disable-select'>Developers</CustomLink>
                <CustomLink to='/judges' className='footer-text disable-select'>Judges</CustomLink>
                <CustomLink to='/faculty' className='footer-text disable-select'>Faculty</CustomLink>
            </ul>
        </nav>
    )
}


function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? 'active' : ''} >
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}