import React, { Children } from "react"
import { NavLink } from "react-router-dom"
import '../index.css' 
import { Link, useMatch, useResolvedPath } from "react-router-dom"



export default function NavBar() {
    return (
        <nav className="nav">
            <Link to='/' className="site-text">SDS Artathon</Link>
            <ul>
                <CustomLink to='/' className='link-text disable-select'>Home</CustomLink>
                <CustomLink to='/artwork' className='link-text disable-select'>Artwork</CustomLink>
                <CustomLink to='/about' className='link-text disable-select'>About</CustomLink>
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