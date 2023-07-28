import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <header>
            <Link className="site-logo" to="/">Good Dollar</Link>
            <nav>
                <NavLink
                    to="/courses"
                    // style={({isActive}) => isActive ? activeStyles : null}
                >
                    Courses
                </NavLink>
                <NavLink
                    to="/settings"
                    // style={({isActive}) => isActive ? activeStyles : null}
                >
                    Settings
                </NavLink>
            </nav>
        </header>
    )
}