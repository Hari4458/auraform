import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendContactEmail, testEmailConfig } from '../services/emailService';

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

    const [openFAQ, setOpenFAQ] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Validate required fields
            if (!formData.firstName || !formData.lastName || !formData.email || !formData.service || !formData.message) {
                throw new Error('Please fill in all required fields.');
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                throw new Error('Please enter a valid email address.');
            }

            // Test EmailJS config (for debugging)
            console.log('Testing EmailJS configuration...');
            testEmailConfig();

            // Send email using the service
            const result = await sendContactEmail(formData);

            if (result.success) {
                setSubmitStatus({
                    type: 'success',
                    message: result.message
                });
                
                // Reset form after successful submission
                setFormData({
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
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: result.message
                });
            }

        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus({
                type: 'error',
                message: error.message || 'There was an error sending your message. Please try again or contact us directly at auraformstudio.business@gmail.com'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
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
                                        <h4>Call Us</h4>
                                        <p>+91 9361411124</p>
                                        <span>Monday - Friday: 9AM - 6PM</span>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="contact-details">
                                        <h4>Email Us</h4>
                                        <p>auraformstudio.business@gmail.com</p>
                                        <span>We respond within 24 hours</span>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="contact-details">
                                        <h4>Visit Us</h4>
                                        <p><a href="https://auraform.studio" target="_blank" rel="noopener noreferrer">auraform.studio</a></p>
                                        <span>Virtual meetings available</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="social-section">
                                <h3>Collaborate With AuraForm</h3>
                                <p>Follow our journey and get inspired by our latest creations</p>
                                <div className="social-links-large">
                                    <a href="https://www.instagram.com/auraform_studio?igsh=MnR0b280ZTQ4MG9r" target="_blank" rel="noopener noreferrer" className="social-link-large">
                                        <i className="fab fa-instagram"></i>
                                        <span>Instagram</span>
                                    </a>
                                    <a href="https://x.com/AuraForm_Studio?t=Wrykur2SHtP-DyhKoxhjFg&s=09" target="_blank" rel="noopener noreferrer" className="social-link-large">
                                        <i className="fab fa-twitter"></i>
                                        <span>Twitter</span>
                                    </a>
                                    <a href="https://wa.me/919361411124" target="_blank" rel="noopener noreferrer" className="social-link-large">
                                        <i className="fab fa-whatsapp"></i>
                                        <span>Whatsapp</span>
                                    </a>
                                    <a href="https://in.linkedin.com/in/auraform-studio-967967377" target="_blank" rel="noopener noreferrer" className="social-link-large">
                                        <i className="fab fa-linkedin"></i>
                                        <span>Linkedin</span>
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
                                    {/* Status Message */}
                                    {submitStatus && (
                                        <div className={`submit-status ${submitStatus.type}`}>
                                            <div className="status-content">
                                                {submitStatus.type === 'success' ? (
                                                    <i className="fas fa-check-circle"></i>
                                                ) : (
                                                    <i className="fas fa-exclamation-triangle"></i>
                                                )}
                                                <span>{submitStatus.message}</span>
                                            </div>
                                        </div>
                                    )}

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
                                                    <option value="logo">Logo Design - ₹219</option>
                                                    <option value="ai-design">AI Design - ₹249</option>
                                                    <option value="creative">Creative Design - ₹419</option>
                                                    <option value="poster">Poster Design - ₹249</option>
                                                    <option value="collage">Photo Collage - ₹209</option>
                                                    <option value="greeting">Greeting Cards - ₹349</option>
                                                    <option value="invitation">Invitations - ₹349</option>
                                                    <option value="business">Business Cards - ₹249</option>
                                                    <option value="consulting">Creative Consulting - ₹449</option>
                                                    <option value="video">Video Editing - ₹449</option>
                                                    <option value="animation">Animation - ₹349</option>
                                                    <option value="frontend">Frontend Development - ₹999</option>
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
                                                    <option value="under-500">Under ₹500</option>
                                                    <option value="500-1000">₹500 - ₹1,000</option>
                                                    <option value="1000-2500">₹1,000 - ₹2,500</option>
                                                    <option value="2500-5000">₹2,500 - ₹5,000</option>
                                                    <option value="5000-plus">₹5,000+</option>
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
                                        <button type="submit" className={`submit-btn ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                <>
                                                    <span className="btn-text">Sending...</span>
                                                    <div className="btn-glow"></div>
                                                    <i className="fas fa-spinner fa-spin btn-icon"></i>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="btn-text">Let's Begin</span>
                                                    <div className="btn-glow"></div>
                                                    <i className="fas fa-rocket btn-icon"></i>
                                                </>
                                            )}
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
                        <div className={`faq-item ${openFAQ === 0 ? 'active' : ''}`}>
                            <div className="faq-question" onClick={() => toggleFAQ(0)}>
                                <h4>How long does a typical design project take?</h4>
                                <i className={`fas fa-chevron-${openFAQ === 0 ? 'up' : 'down'}`}></i>
                            </div>
                            <div className="faq-answer">
                                <p>Most projects take 1-3 weeks depending on complexity. Logo designs typically take 5-7 days, while complete brand identities may take 2-3 weeks. We'll provide a detailed timeline during our initial consultation.</p>
                            </div>
                        </div>
                        
                        <div className={`faq-item ${openFAQ === 1 ? 'active' : ''}`}>
                            <div className="faq-question" onClick={() => toggleFAQ(1)}>
                                <h4>What's included in your design packages?</h4>
                                <i className={`fas fa-chevron-${openFAQ === 1 ? 'up' : 'down'}`}></i>
                            </div>
                            <div className="faq-answer">
                                <p>All packages include initial concepts, revisions, final files in multiple formats (AI, EPS, PNG, JPG), and usage guidelines. Brand identity packages also include color palettes, typography guides, and brand standards.</p>
                            </div>
                        </div>
                        
                        <div className={`faq-item ${openFAQ === 2 ? 'active' : ''}`}>
                            <div className="faq-question" onClick={() => toggleFAQ(2)}>
                                <h4>Do you offer revisions?</h4>
                                <i className={`fas fa-chevron-${openFAQ === 2 ? 'up' : 'down'}`}></i>
                            </div>
                            <div className="faq-answer">
                                <p>Yes! Each package includes multiple revision rounds. We work collaboratively to ensure your vision is perfectly realized. Additional revisions beyond the package limit are available at our standard hourly rate.</p>
                            </div>
                        </div>
                        
                        <div className={`faq-item ${openFAQ === 3 ? 'active' : ''}`}>
                            <div className="faq-question" onClick={() => toggleFAQ(3)}>
                                <h4>What if I need rush delivery?</h4>
                                <i className={`fas fa-chevron-${openFAQ === 3 ? 'up' : 'down'}`}></i>
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
