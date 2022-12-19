import React from "react"
import { NavLink } from "react-router-dom"
import '../index.css' 
import { Link, useMatch, useResolvedPath  } from "react-router-dom"

export default function Footer() {
    return (
        <nav className="footer">
            <ul className="footer-nav">
                <CustomLink to='https://datascience.charlotte.edu/'>
                    <span className="">School of Data Science Student Organization</span>
                </CustomLink>
            </ul>

        </nav>
    )
}


function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? 'active' : ''} >
            <Link to={`${to}`} {...props} className='footer-link' target='_blank'>
                {children}
            </Link>
        </li>
    )
}