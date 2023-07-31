import React from "react"
import { NavLink } from "react-router-dom"
import logoLine from "../../assets/goodstream_lineWHITE.png"
import headerBkg from "../../assets/header_bkg.png"

export default function Header() {
    const activeStyles = {
        color: "#215786"
    }
    
    return (
        <header className="w-[16vw] rounded-r-[20px] text-fl shadow-xl text-white bg-[url('././assets/header_bkg3.png')]">
            <img className="w-auto h-10 ml-[1.5vw] object-cover my-[3vh]" src={logoLine} alt="..." />
            <nav className="flex flex-col">
                <NavLink
                    className="pl-[2vw] py-[1vh] hover:bg-[white] hover:text-primary-color transition duration-1000 ease-in-out"
                    to="/courses"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Courses
                </NavLink>
                <NavLink
                    className="pl-[2vw] py-[1vh] hover:bg-[white] hover:text-primary-color transition duration-600 ease-in-out"
                    to="/add-courses"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Add Courses
                </NavLink>
                <NavLink
                    className="pl-[2vw] py-[1vh] hover:bg-[white] hover:text-primary-color transition duration-1000 ease-in-out"
                    to="/settings"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Settings
                </NavLink>
                <NavLink
                    className="mt-[50vh] pl-[2vw] py-[1vh] font-light hover:bg-[white] hover:text-primary-color transition duration-1000 ease-in-out"
                    to="/"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Logout
                </NavLink>
            </nav>
        </header>
    )
}