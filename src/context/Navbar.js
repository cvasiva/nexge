import React, { useEffect, useRef, useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';
import Nexgen_icon from "../context/Images/Nexgen_icon.png"
import "../context/navbar.css"
import { IoMdMenu } from "react-icons/io";
import { BsX } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavbarPage = (args) => {

    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [active, setActive] = useState(null)
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    return (
        <div>
            <div className='nav_bg'>
                <nav className={colorChange ? "nav1 nav12" : "nav1"}>
                    <Link to="/" className="title">
                        <NavbarBrand href="/"><img src={Nexgen_icon} alt="Nexgen_icon" style={{ width: "50%" }} /></NavbarBrand>
                    </Link>
                    <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes className='fs-2' /> : <FaBars className='fs-2' />}
                    </div>
                    <ul className={menuOpen ? "open ul1" : "ul1"}>
                        <li className='li1'>
                            <Link to="/" className={active === true ? "nav_bgfont" : "nav_bgfont"}><span>Home</span></Link>
                        </li>
                        <li className='li1'>
                            <Link to="/services" className={active === true ? "nav_bgfont" : "nav_bgfont"}>Services</Link>
                        </li>
                        <li className='li1'>
                            <Link to="/price" className={active === true ? "nav_bgfont" : "nav_bgfont"}>Price & Plan</Link>
                        </li>
                        <li className='li1'>
                            <Link to="/viewportfolio" className={active === true ? "nav_bgfont" : "nav_bgfont"}> View Portfolio</Link>
                        </li>
                        <li className='li1'>
                            <Link to="/bloge" className={active === true ? "nav_bgfont" : "nav_bgfont"}>Blogs</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default NavbarPage
