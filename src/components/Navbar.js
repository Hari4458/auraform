import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path || (path === '/home' && location.pathname === '/');
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <div className="logo-glow">
                        <span className="logo-text">AuraForm Studio</span>
                    </div>
                </div>
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link 
                            to="/home" 
                            className={`nav-link ${isActive('/') || isActive('/home') ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/services" 
                            className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/gallery" 
                            className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contact" 
                            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
