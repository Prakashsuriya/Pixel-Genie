import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    // Effect to handle scrolling to sections when hash changes
    useEffect(() => {
        if (location.hash && isHome) {
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                const element = document.querySelector(location.hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location.hash, isHome]);

    // Custom scroll function for hash links
    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false); // Close mobile menu if open

        const hash = href.split('#')[1];

        if (isHome) {
            // Already on home page, just scroll to section
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Navigate to home page with hash, useEffect will handle scrolling
            navigate(`/#${hash}`);
        }
    };

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'About', href: '/#about' },
        { name: 'Services', href: '/#services' },
        { name: 'Contact', href: '/#contact' }
    ];

    return (
        <React.Fragment>
            {/* Header Wrapper: Centers the unified pill at the top */}
            <div className="position-absolute w-100 d-flex justify-content-center p-4" style={{ zIndex: 1000, pointerEvents: 'none', top: 0 }}>
                <motion.header
                    className="d-flex align-items-center justify-content-between px-5 py-3 rounded-pill"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                    style={{
                        width: '100%',
                        maxWidth: '1400px', // Increased max-width
                        pointerEvents: 'auto',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
                        height: '75px', // Fixed height to ensure centering logic works reliably
                        position: 'relative' // Ensure relative context for absolute children
                    }}
                >
                    {/* 1. Left: Logo Area */}
                    <div className="logo-area d-flex align-items-center ms-3">
                        <Link to="/" className="d-block text-decoration-none">
                            <img
                                src="/images/PixelGenie Logo- 1.png"
                                alt="Pixel Genie"
                                style={{
                                    height: '50px',
                                    filter: 'none' // Original color
                                }}
                            />
                        </Link>
                    </div>

                    {/* 2. Center: Navigation Links - VERTICALLY CENTERED */}
                    <nav className="d-none d-lg-flex align-items-center justify-content-center gap-2"
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%', // Move to 50% from top
                            transform: 'translate(-50%, -50%)', // Center it back
                            height: '100%',
                            display: 'flex',
                            pointerEvents: 'none' // Allow clicks to pass through
                        }}>
                        {navLinks.map((link) => (
                            <div key={link.name} className="d-flex align-items-center h-100">
                                <a
                                    href={link.href}
                                    className="btn btn-sm rounded-pill px-3 py-2 fw-bold border-0 d-flex align-items-center justify-content-center"
                                    style={{
                                        color: 'var(--text-main)',
                                        fontSize: '17px',
                                        transition: 'all 0.3s ease',
                                        letterSpacing: '0.5px',
                                        pointerEvents: 'auto'
                                    }}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.05)'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                >
                                    {link.name}
                                </a>
                            </div>
                        ))}
                    </nav>

                    {/* 3. Right: CTA Buttons */}
                    <div className="d-none d-lg-flex align-items-center gap-3 me-3">
                        {/* WhatsApp Icon */}
                        <a href="https://wa.me/918553322586" target="_blank" rel="noopener noreferrer" className="btn rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: 'rgba(37, 211, 102, 0.1)',
                                border: '1px solid rgba(37, 211, 102, 0.3)',
                                color: '#25D366'
                            }}>
                            <i className="fa-brands fa-whatsapp fs-5"></i>
                        </a>

                        {/* Book a Call Button */}
                        <a href="tel:+918553322586" className="btn rounded-pill d-flex align-items-center gap-3 ps-4 pe-2 py-2"
                            style={{
                                border: '1px solid var(--theme-color)',
                                color: 'var(--text-main)',
                                backgroundColor: 'transparent'
                            }}>
                            <span className="fw-bold fs-6">Book a Call</span>
                            <span className="rounded-circle d-flex align-items-center justify-content-center text-white"
                                style={{ width: '40px', height: '40px', backgroundColor: 'var(--theme-color)' }}>
                                <i className="fa-solid fa-arrow-right"></i>
                            </span>
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="d-lg-none ms-auto" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ cursor: 'pointer', zIndex: 1001 }}>
                        <i className={`fa ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} fa-2x`} style={{ color: 'var(--text-main)' }}></i>
                    </div>
                </motion.header>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu-overlay position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center"
                        style={{ zIndex: 999, background: '#020617' }}
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <ul className="list-unstyled text-center">
                            {navLinks.map((link, idx) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="mb-4"
                                >
                                    <a
                                        href={link.href}
                                        className="display-5 fw-bold text-decoration-none"
                                        style={{ color: 'var(--text-main)' }}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
};

export default Header;
