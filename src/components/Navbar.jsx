import React, { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <nav className='navbar navbar-expand-lg'>
            <div className="container-fluid mr-4 navigation">
                <div className="logo">Art Vista</div>
                <ul className={`navbar-nav menu ${isOpen ? 'active' : ''}`}>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/paitings">
                            Paintings
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/sculpture">
                            Sculptures
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/textile art">
                            Textile Art
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/folk Art">
                            Folk Art
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/traditional crafts">
                            Traditional Crafts
                        </Link>
                    </li>
                    {/* Add other menu items as needed */}
                </ul>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>
    );
};
export default Navbar;