import React, { Children } from "react"
import { NavLink } from "react-router-dom"
import '../index.css' 
import { Link, useMatch, useResolvedPath } from "react-router-dom"



export default function NavBar() {
    return (
        <nav className="navbar">
            <ul className='navbar-nav'>
                <div className="site-logo">
                    <Link className='site-logo-text' to='/'>SDS</Link>
                </div>
                <CustomLink to='/'>
                    <img className='icon' src="/svgs/home.svg"/>
                    <span className='link-text'>Home</span>
                </CustomLink>
                <CustomLink to='/artwork'>
                    <img className='icon' src="/svgs/artwork.svg"/>
                    <span className='link-text'>Artwork</span>
                </CustomLink>
                <CustomLink to='/information'>
                    <img className='icon' src="/svgs/info.svg"/>
                    <span className='link-text'>Information</span>
                </CustomLink>
                <CustomLink to='/judges'>
                    <img className='icon' src="/svgs/judges.svg"/>
                    <span className='link-text'>Judges</span>
                </CustomLink>
                <CustomLink to='/faculty'>
                    <img className='icon' src="/svgs/faculty.svg"/>
                    <span className='link-text'>Faculty</span>
                </CustomLink>
                <CustomLink to='/developers'>
                    <img className='icon' src="/svgs/devs.svg"/>
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