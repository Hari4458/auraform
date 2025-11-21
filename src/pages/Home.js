import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Home Section */}
            <section id="home" className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="hero-logo">
                            <div className="auraform-logo-hero" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '80px'}}>
                                <img src="/logos/auraform.png" alt="AuraForm Studio" style={{width: '300px', height: 'auto'}} />
                            </div>
                        </div>
                        <h1 className="hero-title">
                            <span className="title-line">AuraForm Studio</span>
                            <span className="title-subtitle">Unleashing Creativity</span>
                        </h1>
                        <p className="hero-description">
                            Step into the realm where design meets power. We forge visual experiences that transcend ordinary creativity.
                        </p>
                        <Link to="/services" className="cta-button">
                            <span className="btn-text">Explore Our Designs</span>
                            <div className="btn-glow"></div>
                        </Link>
                    </div>
                    <div className="floating-elements">
                        <div className="floating-rune rune-1">⚡</div>
                        <div className="floating-rune rune-2">◆</div>
                        <div className="floating-rune rune-3">✦</div>
                        <div className="floating-rune rune-4">⬟</div>
                    </div>
                </div>
            </section>

            {/* Quick Stats Section */}
            <section className="quick-stats">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <div className="stat-number">20+</div>
                            <div className="stat-label">Happy Clients</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-star"></i>
                            </div>
                            <div className="stat-number">Epics</div>
                            <div className="stat-label">Studio Level</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">
                                <i className="fas fa-magic"></i>
                            </div>
                            <div className="stat-number">∞</div>
                            <div className="stat-label">Creative Power</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="services-preview">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Arsenal</h2>
                        <p className="section-subtitle">Discover the power of our design services</p>
                    </div>
                    <div className="preview-grid">
                        <div className="preview-card">
                            <div className="preview-icon">
                                <i className="fas fa-crown"></i>
                            </div>
                            <h3>Logo Design</h3>
                            <p>Forge legendary symbols that represent your brand's true power</p>
                        </div>
                        <div className="preview-card">
                            <div className="preview-icon">
                                <i className="fas fa-gem"></i>
                            </div>
                            <h3>AI Design</h3>
                            <p>Complete brand transformation with magical consistency</p>
                        </div>
                        <div className="preview-card">
                            <div className="preview-icon">
                                <i className="fas fa-scroll"></i>
                            </div>
                            <h3>Creative Design</h3>
                            <p>Unleash creative spells that captivate and inspire audiences</p>
                        </div>
                    </div>
                    <div className="preview-cta">
                        <Link to="/services" className="cta-button">
                            <span className="btn-text">View All Services</span>
                            <div className="btn-glow"></div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
