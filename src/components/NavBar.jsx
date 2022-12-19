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
                    <img src="/svgs/home.svg"/>
                    <span className='link-text'>Home</span>
                </CustomLink>
                <CustomLink to='/artwork'>
                    <img src="/svgs/artwork.svg"/>
                    <span className='link-text'>Artwork</span>
                </CustomLink>
                <CustomLink to='/information'>
                    <img src="/svgs/info.svg"/>
                    <span className='link-text'>Information</span>
                </CustomLink>
                <CustomLink to='/judges'>
                    <img src="/svgs/judges.svg"/>
                    <span className='link-text'>Judges</span>
                </CustomLink>
                <CustomLink to='/faculty'>
                    <img src="/svgs/faculty.svg"/>
                    <span className='link-text'>Faculty</span>
                </CustomLink>
                <CustomLink to='/developers'>
                    <img src="/svgs/devs.svg"/>
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