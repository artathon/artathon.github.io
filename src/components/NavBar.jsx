import React, { Children } from "react"
import { NavLink } from "react-router-dom"
import '../index.css' 

export default function NavBar() {
    return (
        <nav className="nav">
            <a href='/' className="site-title">SDS Artathon</a>
            <ul>
                <CustomLink href='/' className='link-title'>Home</CustomLink>
                <CustomLink href='/artwork' className='link-title'>Artwork</CustomLink>
                <CustomLink href='/about' className='link-title'>About</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({href, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === href ? 'active' : ''} >
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}