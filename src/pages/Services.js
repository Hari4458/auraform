import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <div className="header-content">
                        <h1 className="page-title">Our Services</h1>
                        <p className="page-subtitle">Professional design solutions for your business</p>
                        <div className="breadcrumb">
                            <Link to="/home">Home</Link> <span>/</span> <span>Services</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services">
                <div className="container">
                    <div className="services-grid">
                        <div className="service-card" data-service="logo">
                            <div className="card-glow"></div>
                            <div className="service-icon">
                                <i className="fas fa-crown"></i>
                            </div>
                            <h3 className="service-title">Logo Design</h3>
                            <p className="service-desc">Create distinctive logos that represent your brand identity and establish strong recognition in your market.</p>
                            <div className="service-features">
                                <ul>
                                    <li><i className="fas fa-check"></i> Custom Icon Creation</li>
                                    <li><i className="fas fa-check"></i> Multiple Variations</li>
                                    <li><i className="fas fa-check"></i> Vector Files Included</li>
                                    <li><i className="fas fa-check"></i> Brand Guidelines</li>
                                </ul>
                            </div>
                            <div className="service-price">Starting at <span>$299</span></div>
                            <Link to="/contact" className="service-btn">Get Started</Link>
                        </div>

                        <div className="service-card" data-service="brand">
                            <div className="card-glow"></div>
                            <div className="service-icon">
                                <i className="fas fa-gem"></i>
                            </div>
                            <h3 className="service-title">Brand Identity</h3>
                            <p className="service-desc">Comprehensive brand development with consistent visual identity across all platforms and touchpoints.</p>
                            <div className="service-features">
                                <ul>
                                    <li><i className="fas fa-check"></i> Logo & Brand Mark</li>
                                    <li><i className="fas fa-check"></i> Color Palette</li>
                                    <li><i className="fas fa-check"></i> Typography System</li>
                                    <li><i className="fas fa-check"></i> Brand Guidelines</li>
                                </ul>
                            </div>
                            <div className="service-price">Starting at <span>$799</span></div>
                            <Link to="/contact" className="service-btn">Get Started</Link>
                        </div>

                        <div className="service-card" data-service="creative">
                            <div className="card-glow"></div>
                            <div className="service-icon">
                                <i className="fas fa-magic"></i>
                            </div>
                            <h3 className="service-title">Creative Design</h3>
                            <p className="service-desc">Custom creative solutions that engage your audience with compelling visual storytelling and design.</p>
                            <div className="service-features">
                                <ul>
                                    <li><i className="fas fa-check"></i> Custom Illustrations</li>
                                    <li><i className="fas fa-check"></i> Digital Artwork</li>
                                    <li><i className="fas fa-check"></i> Creative Concepts</li>
                                    <li><i className="fas fa-check"></i> Multiple Revisions</li>
                                </ul>
                            </div>
                            <div className="service-price">Starting at <span>$199</span></div>
                            <Link to="/contact" className="service-btn">Get Started</Link>
                        </div>

                        <div className="service-card" data-service="poster">
                            <div className="card-glow"></div>
                            <div className="service-icon">
                                <i className="fas fa-scroll"></i>
                            </div>
                            <h3 className="service-title">Poster Design</h3>
                            <p className="service-desc">Eye-catching poster designs that effectively communicate your message and grab attention.</p>
                            <div className="service-features">
                                <ul>
                                    <li><i className="fas fa-check"></i> Event Posters</li>
                                    <li><i className="fas fa-check"></i> Movie Posters</li>
                                    <li><i className="fas fa-check"></i> Promotional Materials</li>
                                    <li><i className="fas fa-check"></i> Print-Ready Files</li>
                                </ul>
                            </div>
                            <div className="service-price">Starting at <span>$149</span></div>
                            <Link to="/contact" className="service-btn">Get Started</Link>
                        </div>

                        <div className="service-card" data-service="collage">
                            <div className="card-glow"></div>
                            <div className="service-icon">
                                <i className="fas fa-puzzle-piece"></i>
                            </div>
                            <h3 className="service-title">Photo Collage Design</h3>
                            <p className="service-desc">Creative photo arrangements and compositions that tell your story through beautiful visual layouts.</p>
                            <div className="service-features">
                                <ul>
                                    <li><i className="fas fa-check"></i> Custom Layouts</li>
                                    <li><i className="fas fa-check"></i> Photo Enhancement</li>
                                    <li><i className="fas fa-check"></i> Creative Composition</li>
                                    <li><i className="fas fa-check"></i> High Resolution</li>
                                </ul>
                            </div>
                            <div className="service-price">Starting at <span>$99</span></div>
                            <Link to="/contact" className="service-btn">Get Started</Link>
                        </div>

                        <div className="service-card" data-service="greeting">
                            <div className="card-glow"></div>
                            <div className="service-icon">
                                <i className="fas fa-heart"></i>
                            </div>
                            <h3 className="service-title">Greeting Card Design</h3>
                            <p className="service-desc">Personalized greeting cards that create meaningful connections and memorable moments.</p>
                            <div className="service-features">
                                <ul>
                                    <li><i className="fas fa-check"></i> Holiday Cards</li>
                                    <li><i className="fas fa-check"></i> Birthday Cards</li>
                                    <li><i className="fas fa-check"></i> Custom Messages</li>
                                    <li><i className="fas fa-check"></i> Print & Digital</li>
                                </ul>
                            </div>
                            <div className="service-price">Starting at <span>$49</span></div>
                            <Link to="/contact" className="service-btn">Get Started</Link>
                        </div>

                        <div className="service-card" data-service="invitation">
                            <div className="card-glow"></div>
                            <div className="service-icon">
                                <i className="fas fa-envelope-open"></i>
                            </div>
                            <h3 className="service-title">Invitation Design</h3>
                            <p className="service-desc">Elegant and professional invitations that set the perfect tone for your special events.</p>
                            <div className="service-features">
                                <ul>
                                    <li><i className="fas fa-check"></i> Wedding Invitations</li>
                                    <li><i className="fas fa-check"></i> Party Invitations</li>
                                    <li><i className="fas fa-check"></i> Corporate Events</li>
                                    <li><i className="fas fa-check"></i> RSVP Cards</li>
                                </ul>
                            </div>
                            <div className="service-price">Starting at <span>$79</span></div>
                            <Link to="/contact" className="service-btn">Get Started</Link>
                        </div>

                        <div className="service-card" data-service="business">
                            <div className="card-glow"></div>
                            <div className="service-icon">
                                <i className="fas fa-id-card"></i>
                            </div>
                            <h3 className="service-title">Business Card Design</h3>
                            <p className="service-desc">Professional business cards that make a lasting impression and effectively represent your brand.</p>
                            <div className="service-features">
                                <ul>
                                    <li><i className="fas fa-check"></i> Double-sided Design</li>
                                    <li><i className="fas fa-check"></i> Premium Finishes</li>
                                    <li><i className="fas fa-check"></i> QR Code Integration</li>
                                    <li><i className="fas fa-check"></i> Multiple Formats</li>
                                </ul>
                            </div>
                            <div className="service-price">Starting at <span>$89</span></div>
                            <Link to="/contact" className="service-btn">Get Started</Link>
                        </div>

                        <div className="service-card" data-service="ideas">
                            <div className="card-glow"></div>
                            <div className="service-icon">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h3 className="service-title">Creative Consulting</h3>
                            <p className="service-desc">Strategic creative consultancy to develop your vision and transform concepts into successful designs.</p>
                            <div className="service-features">
                                <ul>
                                    <li><i className="fas fa-check"></i> Creative Strategy</li>
                                    <li><i className="fas fa-check"></i> Concept Development</li>
                                    <li><i className="fas fa-check"></i> Design Direction</li>
                                    <li><i className="fas fa-check"></i> Project Planning</li>
                                </ul>
                            </div>
                            <div className="service-price">Starting at <span>$149</span></div>
                            <Link to="/contact" className="service-btn">Get Started</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Design Process</h2>
                        <p className="section-subtitle">A proven approach to delivering exceptional design solutions</p>
                    </div>
                    <div className="process-grid">
                        <div className="process-step">
                            <div className="step-number">01</div>
                            <div className="step-icon">
                                <i className="fas fa-comments"></i>
                            </div>
                            <h4>Discovery</h4>
                            <p>We listen to your vision and understand your goals to create the perfect strategy.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">02</div>
                            <div className="step-icon">
                                <i className="fas fa-pencil-ruler"></i>
                            </div>
                            <h4>Design</h4>
                            <p>Our creative team brings your vision to life with stunning visual concepts.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">03</div>
                            <div className="step-icon">
                                <i className="fas fa-sync-alt"></i>
                            </div>
                            <h4>Refine</h4>
                            <p>We collaborate with you to perfect every detail until it exceeds expectations.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">04</div>
                            <div className="step-icon">
                                <i className="fas fa-rocket"></i>
                            </div>
                            <h4>Deliver</h4>
                            <p>Your final design is delivered with all necessary files and documentation.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
