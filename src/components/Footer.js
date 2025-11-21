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
                                    <a href="https://x.com/AuraForm_Studio?t=Wrykur2SHtP-DyhKoxhjFg&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.instagram.com/auraform_studio?igsh=MnR0b280ZTQ4MG9r" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                                    <a href="https://in.linkedin.com/in/auraform-studio-967967377" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
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
