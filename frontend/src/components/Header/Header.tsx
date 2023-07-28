import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <header className="w-[15vw] bg-white">
            <Link className="site-logo" to="/">Good Dollar</Link>
            <nav className="flex flex-col">
                <NavLink
                    to="/courses"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Courses
                </NavLink>
                <NavLink
                    to="/settings"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Settings
                </NavLink>
            </nav>
        </header>
    )
}