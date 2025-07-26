import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <span className="logo-text">AuraForm Studio</span>
                        </div>
                        <p className="footer-desc">Creating exceptional designs through professional expertise.</p>
                    </div>
                    <div className="footer-right">
                        <div className="footer-links">
                            <div className="footer-section">
                                <h4>Connect</h4>
                                <div className="social-links">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 AuraForm Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
