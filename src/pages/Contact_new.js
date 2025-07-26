import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <div className="header-content">
                        <h1 className="page-title">Contact Us</h1>
                        <p className="page-subtitle">Let's bring your vision to life together</p>
                        <div className="breadcrumb">
                            <Link to="/home">Home</Link> <span>/</span> <span>Contact</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact">
                <div className="container">
                    <div className="contact-content">
                        <div className="contact-left">
                            <div className="contact-intro">
                                <h2>Let's Build Something Remarkable</h2>
                                <p>Every legendary journey starts with a single message. Share your vision with us, and let's forge something extraordinary together.</p>
                            </div>
                            
                            <div className="contact-info">
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="contact-details">
                                        <h4>Summon Us</h4>
                                        <p>+1 (555) 123-4567</p>
                                        <span>Monday - Friday: 9AM - 6PM</span>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="contact-details">
                                        <h4>Send a Scroll</h4>
                                        <p>hello@auraformstudio.com</p>
                                        <span>We respond within 24 hours</span>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="contact-details">
                                        <h4>Our Sanctuary</h4>
                                        <p>Design Realm, Creative District</p>
                                        <span>Virtual meetings available</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="social-section">
                                <h3>Collaborate With AuraForm</h3>
                                <p>Follow our journey and get inspired by our latest creations</p>
                                <div className="social-links-large">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className="social-link-large">
                                        <i className="fab fa-instagram"></i>
                                        <span>Instagram</span>
                                    </a>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className="social-link-large">
                                        <i className="fab fa-dribbble"></i>
                                        <span>Dribbble</span>
                                    </a>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className="social-link-large">
                                        <i className="fab fa-behance"></i>
                                        <span>Behance</span>
                                    </a>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a href="#" className="social-link-large">
                                        <i className="fab fa-twitter"></i>
                                        <span>Twitter</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="contact-right">
                            <div className="contact-form-container">
                                <div className="form-header">
                                    <h3>Get Started with AuraForm</h3>
                                    <p>Tell us about your design adventure</p>
                                </div>
                                
                                <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
                                    {/* Personal Information Section */}
                                    <div className="form-section">
                                        <div className="form-row">
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    id="firstName" 
                                                    name="firstName" 
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required 
                                                />
                                                <label htmlFor="firstName">First Name</label>
                                                <div className="input-glow"></div>
                                            </div>
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    id="lastName" 
                                                    name="lastName" 
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required 
                                                />
                                                <label htmlFor="lastName">Last Name</label>
                                                <div className="input-glow"></div>
                                            </div>
                                        </div>
                                        
                                        <div className="form-group">
                                            <input 
                                                type="email" 
                                                id="email" 
                                                name="email" 
                                                value={formData.email}
                                                onChange={handleChange}
                                                required 
                                            />
                                            <label htmlFor="email">Your Email</label>
                                            <div className="input-glow"></div>
                                        </div>
                                        
                                        <div className="form-row">
                                            <div className="form-group">
                                                <input 
                                                    type="tel" 
                                                    id="phone" 
                                                    name="phone" 
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="phone">Phone Number (Optional)</label>
                                                <div className="input-glow"></div>
                                            </div>
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    id="company" 
                                                    name="company" 
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="company">Organization (Optional)</label>
                                                <div className="input-glow"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Details Section */}
                                    <div className="form-section">
                                        <div className="form-row">
                                            <div className="form-group">
                                                <select 
                                                    id="service" 
                                                    name="service" 
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="">Select Your Quest Type</option>
                                                    <option value="logo">Logo Design - $299</option>
                                                    <option value="brand">Brand Identity - $799</option>
                                                    <option value="creative">Creative Design - $199</option>
                                                    <option value="poster">Poster Design - $149</option>
                                                    <option value="collage">Photo Collage - $99</option>
                                                    <option value="greeting">Greeting Cards - $49</option>
                                                    <option value="invitation">Invitations - $79</option>
                                                    <option value="business">Business Cards - $89</option>
                                                    <option value="ideas">Creative Consultation - $149</option>
                                                    <option value="custom">Custom Project</option>
                                                </select>
                                                <label htmlFor="service">Service Type</label>
                                                <div className="input-glow"></div>
                                            </div>
                                            <div className="form-group">
                                                <select 
                                                    id="budget" 
                                                    name="budget" 
                                                    value={formData.budget}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select Your Budget Range</option>
                                                    <option value="under-500">Under $500</option>
                                                    <option value="500-1000">$500 - $1,000</option>
                                                    <option value="1000-2500">$1,000 - $2,500</option>
                                                    <option value="2500-5000">$2,500 - $5,000</option>
                                                    <option value="5000-plus">$5,000+</option>
                                                </select>
                                                <label htmlFor="budget">Budget Range</label>
                                                <div className="input-glow"></div>
                                            </div>
                                        </div>
                                        
                                        <div className="form-group">
                                            <select 
                                                id="timeline" 
                                                name="timeline" 
                                                value={formData.timeline}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select Timeline</option>
                                                <option value="urgent">ASAP (Rush Fee Applies)</option>
                                                <option value="1-week">Within 1 Week</option>
                                                <option value="2-weeks">Within 2 Weeks</option>
                                                <option value="1-month">Within 1 Month</option>
                                                <option value="flexible">Flexible Timeline</option>
                                            </select>
                                            <label htmlFor="timeline">Project Timeline</label>
                                            <div className="input-glow"></div>
                                        </div>
                                    </div>

                                    {/* Project Description Section */}
                                    <div className="form-section">
                                        <div className="form-group">
                                            <textarea 
                                                id="message" 
                                                name="message" 
                                                rows="6" 
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                            <label htmlFor="message">Tell Us About Your Vision</label>
                                            <div className="input-glow"></div>
                                            <div className="textarea-helper">
                                                Describe your project, goals, style preferences, and any specific requirements.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-submit-section">
                                        <button type="submit" className="submit-btn">
                                            <span className="btn-text">Let's Begin</span>
                                            <div className="btn-glow"></div>
                                            <i className="fas fa-rocket btn-icon"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <p className="section-subtitle">Answers to the most common queries from our clients and collaborators.</p>
                    </div>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <div className="faq-question">
                                <h4>How long does a typical design project take?</h4>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                <p>Most projects take 1-3 weeks depending on complexity. Logo designs typically take 5-7 days, while complete brand identities may take 2-3 weeks. We'll provide a detailed timeline during our initial consultation.</p>
                            </div>
                        </div>
                        
                        <div className="faq-item">
                            <div className="faq-question">
                                <h4>What's included in your design packages?</h4>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                <p>All packages include initial concepts, revisions, final files in multiple formats (AI, EPS, PNG, JPG), and usage guidelines. Brand identity packages also include color palettes, typography guides, and brand standards.</p>
                            </div>
                        </div>
                        
                        <div className="faq-item">
                            <div className="faq-question">
                                <h4>Do you offer revisions?</h4>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                <p>Yes! Each package includes multiple revision rounds. We work collaboratively to ensure your vision is perfectly realized. Additional revisions beyond the package limit are available at our standard hourly rate.</p>
                            </div>
                        </div>
                        
                        <div className="faq-item">
                            <div className="faq-question">
                                <h4>What if I need rush delivery?</h4>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                <p>We offer expedited delivery for urgent projects. Rush fees apply based on the timeline and project complexity. Contact us to discuss your specific needs and timeline.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Unleash Your Brand's Power?</h2>
                        <p>Every legend starts with a single step. Take yours today.</p>
                        <div className="cta-buttons">
                            <a href="#contact-form" className="cta-button">
                                <span className="btn-text">Get Started</span>
                                <div className="btn-glow"></div>
                            </a>
                            <Link to="/gallery" className="cta-button secondary">
                                <span className="btn-text">View Our Work</span>
                                <div className="btn-glow"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
