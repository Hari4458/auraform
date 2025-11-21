import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <div className="header-content">
                        <h1 className="page-title">About Us</h1>
                        <p className="page-subtitle">Professional design solutions for your business</p>
                        <div className="breadcrumb">
                            <Link to="/home">Home</Link> <span>/</span> <span>About</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <div className="container">
                    <div className="about-content">
                        <div className="about-left">
                            <div className="lore-content">
                                <h2 className="section-title">Our Story</h2>
                                <p className="lore-text">
                                    At AuraForm Studio, we believe in the power of exceptional design to transform businesses. Founded with a passion for creativity and innovation, we have dedicated ourselves to helping brands reach their full potential through compelling visual solutions.
                                </p>
                                <p className="lore-text">
                                    Today, we are recognized as industry leaders in branding, web design, and creative strategy. Our team combines technical expertise with creative vision to deliver designs that not only look great but also drive real business results.
                                </p>
                                <p className="lore-text">
                                    Every project is an opportunity to create something meaningful. We work closely with our clients as true partners, understanding their goals and bringing their vision to life with precision, creativity, and professionalism.
                                </p>
                            </div>
                            
                            <div className="level-system">
                                <div className="level-header">
                                    <span className="level-title">Studio Experience</span>
                                    <span className="level-number">Professional</span>
                                </div>
                                <div className="experience-bar">
                                    <div className="exp-fill"></div>
                                    <span className="exp-text">Years in Business: 5+</span>
                                </div>
                                <div className="stats-grid">
                                    <div className="stat-item">
                                        <span className="stat-label">Creativity</span>
                                        <div className="stat-bar"><div className="stat-fill" style={{width: '95%'}}></div></div>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-label">Design Quality</span>
                                        <div className="stat-bar"><div className="stat-fill" style={{width: '90%'}}></div></div>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-label">Client Satisfaction</span>
                                        <div className="stat-bar"><div className="stat-fill" style={{width: '98%'}}></div></div>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-label">Innovation</span>
                                        <div className="stat-bar"><div className="stat-fill" style={{width: '92%'}}></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="about-right">
                            <div className="power-visual">
                                <div className="auraform-logo" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px'}}>
                                    <img src="/logos/auraform.png" alt="AuraForm Studio" style={{width: '500px', height: 'auto'}} />
                                </div>
                                <div className="achievement-badges">
                                    <div className="badge">
                                        <i className="fas fa-trophy"></i>
                                        <span>100+ Projects</span>
                                    </div>
                                    <div className="badge">
                                        <i className="fas fa-star"></i>
                                        <span>Top-Tier Designer</span>
                                    </div>
                                    <div className="badge">
                                        <i className="fas fa-shield-alt"></i>
                                        <span>Creative Lead</span>
                                    </div>
                                    <div className="badge">
                                        <i className="fas fa-magic"></i>
                                        <span>Visual Strategist</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">AuraForm Studio</h2>
                        <p className="section-subtitle">Meet the talented team behind our success</p>
                    </div>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-avatar">
                                <div className="avatar-image">
                                    <img src="/logos/hari.png" alt="Hariraj G" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
                                </div>
                                <div className="rank-badge">Senior</div>
                            </div>
                            <div className="member-info">
                                <h3>Hariraj G</h3>
                                <span className="member-role">Founder & Lead Designer</span>
                                <p className="member-desc">Experienced designer with a passion for creating brands that make a lasting impact.</p>
                                <div className="member-skills">
                                    <span>Web Design</span>
                                    <span>Logo Design</span>
                                    <span>Strategy</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="team-member">
                            <div className="member-avatar">
                                <div className="avatar-image">
                                    <img src="/logos/divya.png" alt="Divyadharshini K" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
                                </div>
                                <div className="rank-badge">Expert</div>
                            </div>
                            <div className="member-info">
                                <h3>Divyadharshini K</h3>
                                <span className="member-role">Creative Director</span>
                                <p className="member-desc">Specialist in user experience design and creating engaging digital experiences.</p>
                                <div className="member-skills">
                                    <span>Poster Design</span>
                                    <span>Digital Art</span>
                                    <span>Creative Design</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="team-member">
                            <div className="member-avatar">
                                <div className="avatar-image">
                                    <img src="/logos/renith.png" alt="Renith Joel RR" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
                                </div>
                                <div className="rank-badge">Expert</div>
                            </div>
                            <div className="member-info">
                                <h3>Renith Joel RR</h3>
                                <span className="member-role">Illustration & Editing Specialist</span>
                                <p className="member-desc">Talented artist who creates stunning visual narratives and custom illustrations.</p>
                                <div className="member-skills">
                                    <span>Illustration</span>
                                    <span>Animation</span>
                                    <span>Visual Editing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="container">
                    <div className="mission-content">
                        <div className="mission-text">
                            <h2 className="section-title">Our Purpose</h2>
                            <p className="mission-desc">
                                To unlock the full potential of every brand and elevate businesses into influential forces that inspire change and lead industries. We believe that every brand holds unique value—ready to emerge through purposeful, expert design.
                            </p>
                            <div className="mission-values">
                                <div className="value-item">
                                    <div className="value-icon">
                                        <i className="fas fa-bolt"></i>
                                    </div>
                                    <div className="value-text">
                                        <h4>Creative Excellence</h4>
                                        <p>We create bold, innovative designs driven by strategic thinking and expertise.</p>
                                    </div>
                                </div>
                                <div className="value-item">
                                    <div className="value-icon">
                                        <i className="fas fa-eye"></i>
                                    </div>
                                    <div className="value-text">
                                        <h4>Clear Vision</h4>
                                        <p>We discover innovative solutions by thinking beyond conventional approaches.</p>
                                    </div>
                                </div>
                                <div className="value-item">
                                    <div className="value-icon">
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <div className="value-text">
                                        <h4>Driven by Passion</h4>
                                        <p>Every project is fueled by deep commitment, creativity, and care.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mission-visual">
                            <div className="sacred-scroll">
                                <div className="scroll-content">
                                    <div className="scroll-text">
                                        <h3>Our Mission Statement</h3>
                                        <p>"We are committed to excellence,<br/>
                                           Creators of meaningful design,<br/>
                                           Partners in your success.<br/>
                                           Through collaboration, we<br/>
                                           Transform ideas<br/>
                                           Into impactful solutions."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="timeline-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Growth Journey</h2>
                        <p className="section-subtitle">From startup to established studio - our path has been one of continuous growth, innovation, and dedication to excellence.</p>
                    </div>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker">
                                <span className="timeline-year">05/25</span>
                            </div>
                            <div className="timeline-content">
                                <h3>Studio Founded</h3>
                                <p>AuraForm Studio was established with a mission to deliver exceptional design solutions that help businesses grow and succeed.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker">
                                <span className="timeline-year">06/25</span>
                            </div>
                            <div className="timeline-content">
                                <h3>First Major Projects</h3>
                                <p>Secured our first major clients and began building our reputation in the design industry through high-quality, impactful projects.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker">
                                <span className="timeline-year">07/25</span>
                            </div>
                            <div className="timeline-content">
                                <h3>Team Growth</h3>
                                <p>Expanded our team, refined our processes, and adopted advanced design methodologies that elevated the quality and scope of our work.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker">
                                <span className="timeline-year">08/25</span>
                            </div>
                            <div className="timeline-content">
                                <h3>Industry Recognition</h3>
                                <p>With 50+ successful projects delivered and a strong reputation for innovation, we are now recognized as a leading design studio in our field.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Grow Your Brand?</h2>
                        <p>Let's work together to transform your brand into something extraordinary.</p>
                        <Link to="/contact" className="cta-button">
                            <span className="btn-text">Get Started Today</span>
                            <div className="btn-glow"></div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
