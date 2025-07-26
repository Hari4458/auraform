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
                        <p className="page-subtitle">The story behind our legendary design mastery</p>
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
                                <h2 className="section-title">Our Origin Story</h2>
                                <p className="lore-text">
                                    In a world where ordinary design agencies settle for routine creativity, AuraForm Studio emerged with a bold purpose. Through countless challenges and breakthrough moments, we discovered the true depth of our creative potential.
                                </p>
                                <p className="lore-text">
                                    Today, we stand as industry leaders creators of bold brands, powerful identities, and immersive visual journeys. Our skillset is sharp, our vision clear, and our passion unmatched across branding, web design, and creative strategy.
                                </p>
                                <p className="lore-text">
                                    Every project is a new challenge to embrace, every client a partner on a mission to reveal their brand's untapped power. We don't just deliver designs we bring your vision to life with clarity, impact, and meaning.
                                </p>
                            </div>
                            
                            <div className="level-system">
                                <div className="level-header">
                                    <span className="level-title">Studio Level</span>
                                    <span className="level-number">Master Tier</span>
                                </div>
                                <div className="experience-bar">
                                    <div className="exp-fill"></div>
                                    <span className="exp-text">Experience: 2500/2500</span>
                                </div>
                                <div className="stats-grid">
                                    <div className="stat-item">
                                        <span className="stat-label">Creativity</span>
                                        <div className="stat-bar"><div className="stat-fill" style={{width: '95%'}}></div></div>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-label">Design Power</span>
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
                                <div className="power-orb">
                                    <div className="orb-core"></div>
                                    <div className="orb-rings">
                                        <div className="orb-ring"></div>
                                        <div className="orb-ring"></div>
                                        <div className="orb-ring"></div>
                                    </div>
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
                        <p className="section-subtitle">Meet the legendary designers behind the magic</p>
                    </div>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-avatar">
                                <div className="avatar-image">
                                    <i className="fas fa-user-ninja"></i>
                                </div>
                                <div className="rank-badge">S-Rank</div>
                            </div>
                            <div className="member-info">
                                <h3>Alex Chen</h3>
                                <span className="member-role">Guild Master & Lead Designer</span>
                                <p className="member-desc">A legendary hunter who awakened the power to see beyond ordinary design.</p>
                                <div className="member-skills">
                                    <span>Brand Identity</span>
                                    <span>Logo Design</span>
                                    <span>Strategy</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="team-member">
                            <div className="member-avatar">
                                <div className="avatar-image">
                                    <i className="fas fa-user-astronaut"></i>
                                </div>
                                <div className="rank-badge">A-Rank</div>
                            </div>
                            <div className="member-info">
                                <h3>Maya Rodriguez</h3>
                                <span className="member-role">Creative Sorceress</span>
                                <p className="member-desc">Master of visual spells and enchanting user experiences.</p>
                                <div className="member-skills">
                                    <span>UI/UX Design</span>
                                    <span>Web Design</span>
                                    <span>Animation</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="team-member">
                            <div className="member-avatar">
                                <div className="avatar-image">
                                    <i className="fas fa-user-secret"></i>
                                </div>
                                <div className="rank-badge">A-Rank</div>
                            </div>
                            <div className="member-info">
                                <h3>Jordan Kim</h3>
                                <span className="member-role">Illustration Assassin</span>
                                <p className="member-desc">Strikes with precision to create stunning visual narratives.</p>
                                <div className="member-skills">
                                    <span>Illustration</span>
                                    <span>Digital Art</span>
                                    <span>Concept Design</span>
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
                                        <h4>Creative Power</h4>
                                        <p>We craft bold, attention-grabbing designs driven by strategic vision.</p>
                                    </div>
                                </div>
                                <div className="value-item">
                                    <div className="value-icon">
                                        <i className="fas fa-eye"></i>
                                    </div>
                                    <div className="value-text">
                                        <h4>Clarity of Vision</h4>
                                        <p>We uncover new possibilities by seeing beyond surface-level ideas.</p>
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
                                        <h3>The Designer's Creed</h3>
                                        <p>"I am a seeker of beauty,<br/>
                                           A forger of dreams,<br/>
                                           A awakener of potential.<br/>
                                           Through design, I shall<br/>
                                           Transform the ordinary<br/>
                                           Into the legendary."</p>
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
                        <h2 className="section-title">Our Creative Journey</h2>
                        <p className="section-subtitle">From aspiring designers to industry leading creatives our path has been one of relentless growth, bold innovation, and uncompromising passion.</p>
                    </div>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker">
                                <span className="timeline-year">2020</span>
                            </div>
                            <div className="timeline-content">
                                <h3>The Beginning</h3>
                                <p>AuraForm Studio was founded with a mission to bring bold, imaginative design to life blending creativity with a unique visual edge.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker">
                                <span className="timeline-year">2021</span>
                            </div>
                            <div className="timeline-content">
                                <h3>Early Milestones</h3>
                                <p>Secured our first major clients and began making our mark within the creative industry through impactful, standout projects.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker">
                                <span className="timeline-year">2023</span>
                            </div>
                            <div className="timeline-content">
                                <h3>Rapid Expansion</h3>
                                <p>Grew our team, refined our craft, and adopted advanced design strategies that elevated the quality and depth of our work.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker">
                                <span className="timeline-year">2025</span>
                            </div>
                            <div className="timeline-content">
                                <h3>Creative Mastery</h3>
                                <p>With 100+ successful projects delivered and a reputation for innovation, we now stand among the leading design studios in the industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Elevate Your Brand?</h2>
                        <p>Let's combine our legendary powers to transform your brand into something extraordinary.</p>
                        <Link to="/contact" className="cta-button">
                            <span className="btn-text">Start Your Journey</span>
                            <div className="btn-glow"></div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
