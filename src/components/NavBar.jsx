import React, { Children } from "react"
import { NavLink } from "react-router-dom"
import '../index.css' 
import { Link, useMatch, useResolvedPath } from "react-router-dom"



export default function NavBar() {
    return (
        <nav className="navbar">
            <ul className='navbar-nav'>
                <Link to='/' className="site-logo">SDS</Link>

                <CustomLink to='/'>
                    <span className='link-text'>Home</span>
                </CustomLink>
                <CustomLink to='/artwork'>
                    <span className='link-text'>Artwork</span>
                </CustomLink>
                <CustomLink to='/about'>
                    <span className='link-text'>About</span>
                </CustomLink>
                <CustomLink to='/judges'>
                    <span className='link-text'>Judges</span>
                </CustomLink>
                <CustomLink to='/faculty'>
                    <span className='link-text'>Faculty</span>
                </CustomLink>
                <CustomLink to='/developers'>
                    <span className='link-text'>Developers</span>
                </CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={`${isActive ? 'active' : ''} nav-item disable-select`} >
            <Link to={`${to}`} {...props} className='nav-link'>
                {children}
            </Link>
        </li>
    )
}