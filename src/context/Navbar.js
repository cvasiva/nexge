import React, { useRef, useState } from 'react'
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

    // const navRef = useRef();

    // const showNavbar = () => {
    //     navRef.current.classList.toggle(
    //         "responsive_nav"
    //     );
    // };
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className='nav_bg'>
            <nav>
                <Link to="/" className="title">
                    <NavbarBrand href="/"><img src={Nexgen_icon} alt="Nexgen_icon" style={{ width: "50%" }} /></NavbarBrand>
                </Link>
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes className='fs-2'/> :<FaBars className='fs-2'/>}
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <Link to="/" className='nav_bgfont'>Home</Link>
                    </li>
                    <li>
                        <Link to="/services" className='nav_bgfont'>Services</Link>
                    </li>
                    <li>
                        <Link to="/viewportfolio" className='nav_bgfont'>View Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/price" className='nav_bgfont'>Price & Plan</Link>
                    </li>
                    <li>
                        <Link to="/bloge" className='nav_bgfont'>Blogs</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default NavbarPage
