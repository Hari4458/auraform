import React, { useState, useEffect } from 'react';

const Gallery = () => {
    const [currentFilter, setCurrentFilter] = useState('all');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxData, setLightboxData] = useState({});

    // Gallery data with actual images from logos folder
    const galleryData = [
        {
            id: 1,
            title: "Brand Identity Showcase",
            category: "brand",
            image: "/logos/brand.jpg",
            description: "Complete brand transformation with modern elements"
        },
        {
            id: 2,
            title: "Creative Design Project",
            category: "creative",
            image: "/logos/Creative.jpg",
            description: "Innovative creative design solutions"
        },
        {
            id: 3,
            title: "Brand Campaign Design",
            category: "brand",
            image: "/logos/Epic%20Brand%20Campaign.jpg",
            description: "Professional brand campaign design"
        },
        {
            id: 4,
            title: "Professional Logo Design",
            category: "logo",
            image: "/logos/logo.jpg",
            description: "Clean and modern logo design solution"
        },
        {
            id: 5,
            title: "Brand Identity Design",
            category: "brand",
            image: "/logos/mystic.jpg",
            description: "Comprehensive brand identity with creative elements"
        },
        {
            id: 6,
            title: "Poster Design Project",
            category: "poster",
            image: "/logos/poster.jpg",
            description: "Eye-catching poster design with visual impact"
        },
        {
            id: 7,
            title: "Web Portal Design",
            category: "web",
            image: "/logos/web%20portel.jpg",
            description: "Modern web portal design solution"
        },
        {
            id: 8,
            title: "Modern Web Design",
            category: "web",
            image: "/logos/web.jpg",
            description: "Contemporary web design solutions"
        }
    ];

    // Category preview data
    const categoryPreviews = {
        all: {
            image: "/logos/Epic%20Brand%20Campaign.jpg",
            title: "All Categories",
            description: "Browse our complete portfolio showcasing diverse design projects",
            count: 8
        },
        logo: {
            image: "/logos/logo.jpg",
            title: "Logo Design",
            description: "Professional logo designs that capture your brand's essence",
            count: 1
        },
        brand: {
            image: "/logos/brand.jpg",
            title: "Branding Solutions",
            description: "Complete brand identity systems that tell your unique story",
            count: 3
        },
        poster: {
            image: "/logos/poster.jpg",
            title: "Poster Design",
            description: "Eye-catching poster designs that capture attention",
            count: 1
        },
        web: {
            image: "/logos/web.jpg",
            title: "Web Design",
            description: "Modern web designs that create engaging digital experiences",
            count: 2
        },
        creative: {
            image: "/logos/Creative.jpg",
            title: "Creative Design",
            description: "Innovative creative solutions for unique design challenges",
            count: 1
        }
    };

    const handleFilterClick = (category) => {
        setCurrentFilter(category);
    };

    const openLightbox = (item) => {
        setLightboxData(item);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const filteredItems = currentFilter === 'all' 
        ? galleryData 
        : galleryData.filter(item => item.category === currentFilter);

    const currentPreview = categoryPreviews[currentFilter];

    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape' && lightboxOpen) {
                closeLightbox();
            }
        };

        document.addEventListener('keydown', handleEscKey);
        return () => document.removeEventListener('keydown', handleEscKey);
    }, [lightboxOpen]);

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <div className="header-content">
                        <h1 className="page-title">Our Portfolio</h1>
                        <p className="page-subtitle">Explore our collection of creative works</p>
                        <div className="breadcrumb">
                            <a href="/home">Home</a> <span>/</span> <span>Gallery</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery">
                <div className="container">
                    <div className="gallery-filter">
                        <button 
                            className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('all')}
                        >
                            All
                        </button>
                        <button 
                            className={`filter-btn ${currentFilter === 'logo' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('logo')}
                        >
                            Logos
                        </button>
                        <button 
                            className={`filter-btn ${currentFilter === 'brand' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('brand')}
                        >
                            Branding
                        </button>
                        <button 
                            className={`filter-btn ${currentFilter === 'poster' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('poster')}
                        >
                            Posters
                        </button>
                        <button 
                            className={`filter-btn ${currentFilter === 'web' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('web')}
                        >
                            Web Design
                        </button>
                        <button 
                            className={`filter-btn ${currentFilter === 'creative' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('creative')}
                        >
                            Creative
                        </button>
                    </div>
                    
                    {/* Category Preview Section */}
                    <div className="category-preview">
                        <div className="preview-content">
                            <div className="preview-image">
                                <img 
                                    src={currentPreview.image} 
                                    alt={currentPreview.title}
                                    onError={(e) => {
                                        e.target.src = `https://via.placeholder.com/200x150/1a1a1a/00bfff?text=${encodeURIComponent(currentPreview.title)}`;
                                    }}
                                />
                            </div>
                            <div className="preview-info">
                                <h3>{currentPreview.title}</h3>
                                <p>{currentPreview.description}</p>
                                <div className="preview-stats">
                                    <span className="stat-item">
                                        <i className="fas fa-images"></i>
                                        <span>{currentPreview.count} Project{currentPreview.count > 1 ? 's' : ''}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="gallery-grid">
                        {filteredItems.map(item => (
                            <div 
                                key={item.id} 
                                className="gallery-item" 
                                data-category={item.category}
                                onClick={() => openLightbox(item)}
                            >
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="gallery-img"
                                    onError={(e) => {
                                        e.target.src = `https://via.placeholder.com/400x300/1a1a1a/00bfff?text=${encodeURIComponent(item.title)}`;
                                    }}
                                />
                                <div className="gallery-overlay">
                                    <div className="gallery-info">
                                        <h3 className="gallery-title">{item.title}</h3>
                                        <p className="gallery-category">{item.category.toUpperCase()}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="featured-projects">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="section-subtitle">Highlights from our recent work</p>
                    </div>
                    <div className="featured-grid">
                        <div className="featured-project">
                            <div className="project-image">
                                <img src="/logos/Epic%20Brand%20Campaign.jpg" alt="Brand Campaign Design" />
                                <div className="project-overlay">
                                    <div className="project-info">
                                        <h3>Brand Campaign Design</h3>
                                        <p>Complete brand transformation for a tech startup</p>
                                        <div className="project-tags">
                                            <span>Branding</span>
                                            <span>Logo Design</span>
                                            <span>Web Design</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="featured-project">
                            <div className="project-image">
                                <img src="/logos/poster.jpg" alt="Event Poster Design" />
                                <div className="project-overlay">
                                    <div className="project-info">
                                        <h3>Event Poster Design</h3>
                                        <p>Creative poster design for music festival</p>
                                        <div className="project-tags">
                                            <span>Poster Design</span>
                                            <span>Event Marketing</span>
                                            <span>Creative</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="featured-project">
                            <div className="project-image">
                                <img src="/logos/web%20portel.jpg" alt="Web Portal Design" />
                                <div className="project-overlay">
                                    <div className="project-info">
                                        <h3>Web Portal Design</h3>
                                        <p>Modern web design with smooth animations</p>
                                        <div className="project-tags">
                                            <span>Web Design</span>
                                            <span>UI/UX</span>
                                            <span>Animation</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Testimonials */}
            <section className="testimonials">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Client Testimonials</h2>
                        <p className="section-subtitle">What our clients say about our work</p>
                    </div>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <div className="quote-icon">
                                    <i className="fas fa-quote-left"></i>
                                </div>
                                <p>"AuraForm Studio completely transformed our brand identity! Their designs exceeded our expectations and delivered outstanding results."</p>
                                <div className="client-info">
                                    <div className="client-avatar">
                                        <i className="fas fa-user-circle"></i>
                                    </div>
                                    <div className="client-details">
                                        <h4>Sarah Chen</h4>
                                        <span>CEO, TechVision Inc.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <div className="quote-icon">
                                    <i className="fas fa-quote-left"></i>
                                </div>
                                <p>"The creative solutions they provided for our project were beyond our expectations. Truly professional designers!"</p>
                                <div className="client-info">
                                    <div className="client-avatar">
                                        <i className="fas fa-user-circle"></i>
                                    </div>
                                    <div className="client-details">
                                        <h4>Marcus Rivera</h4>
                                        <span>Creative Director, Nexus Media</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <div className="quote-icon">
                                    <i className="fas fa-quote-left"></i>
                                </div>
                                <p>"Working with AuraForm was like having a team of expert designers. Every detail was handled with precision and care."</p>
                                <div className="client-info">
                                    <div className="client-avatar">
                                        <i className="fas fa-user-circle"></i>
                                    </div>
                                    <div className="client-details">
                                        <h4>Elena Kowalski</h4>
                                        <span>Founder, Artisan Brands</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Start Your Next Project?</h2>
                        <p>Join our satisfied clients and transform your vision into reality.</p>
                        <a href="/contact" className="cta-button">
                            <span className="btn-text">Get Started</span>
                            <div className="btn-glow"></div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
                        <img src={lightboxData.image} alt={lightboxData.title} />
                        <div className="lightbox-info">
                            <h3>{lightboxData.title}</h3>
                            <p>{lightboxData.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;
