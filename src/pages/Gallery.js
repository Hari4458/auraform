import React, { useState, useEffect } from 'react';

const Gallery = () => {
    const [currentFilter, setCurrentFilter] = useState('all');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxData, setLightboxData] = useState({});

    // Gallery data with actual images from logos folder
    const galleryData = [
        {
            id: 1,
            title: "Creative Design Project",
            category: "creative",
            image: "/logos/Creative.jpg",
            description: "Innovative creative design solutions"
        },
        {
            id: 2,
            title: "Professional Logo Design",
            category: "logo",
            image: "/logos/auraform.png",
            description: "Clean and modern logo design solution"
        },
        {
            id: 3,
            title: "Poster Design Project",
            category: "poster",
            image: "/logos/poster.jpg",
            description: "Eye-catching poster design with visual impact"
        },
        {
            id: 4,
            title: "AI-Generated Design",
            category: "ai-design",
            image: "/logos/af.png",
            description: "Cutting-edge AI-powered design solutions"
        },
        {
            id: 5,
            title: "Photo Collage Artwork",
            category: "collage",
            image: "/logos/collage.png",
            description: "Creative photo arrangements and compositions"
        },
        {
            id: 6,
            title: "Greeting Card Design",
            category: "greeting",
            image: "/logos/greeting card.png",
            description: "Personalized greeting cards for special occasions"
        },
        {
            id: 7,
            title: "Wedding Invitation",
            category: "invitation",
            image: "/logos/invitation.png",
            description: "Elegant wedding invitation design"
        },
        {
            id: 8,
            title: "Business Card Design",
            category: "business",
            image: "/logos/business.png",
            description: "Professional business card with modern aesthetics"
        },
        {
            id: 9,
            title: "Creative Strategy Project",
            category: "consulting",
            image: "/logos/Creative.jpg",
            description: "Strategic creative consulting and concept development"
        },
        {
            id: 10,
            title: "Video Editing Project",
            category: "video",
            image: "/logos/Video.mov",
            isVideo: true,
            description: "Professional video editing with motion graphics"
        },
        {
            id: 11,
            title: "2D Animation",
            category: "animation",
            image: "/logos/Animation.mp4",
            isVideo: true,
            description: "Dynamic 2D animation and motion graphics"
        },
        {
            id: 12,
            title: "Frontend Development",
            category: "frontend",
            image: "/logos/web%20portel.jpg",
            description: "Modern React-based frontend development"
        }
    ];

    // Category preview data
    const categoryPreviews = {
        all: {
            image: "/logos/Creative.jpg",
            title: "All Categories",
            description: "Browse our complete portfolio showcasing diverse design projects",
            count: 12
        },
        logo: {
            image: "/logos/auraform.png",
            title: "Logo Design",
            description: "Professional logo designs that capture your company's essence",
            count: 1
        },
        'ai-design': {
            image: "/logos/af.png",
            title: "AI Design",
            description: "Cutting-edge AI-powered design solutions with innovative results",
            count: 0
        },
        poster: {
            image: "/logos/poster.jpg",
            title: "Poster Design",
            description: "Eye-catching poster designs that capture attention",
            count: 1
        },
        collage: {
            image: "/logos/collage.png",
            title: "Photo Collage Design",
            description: "Creative photo arrangements that tell your story through beautiful layouts",
            count: 0
        },
        greeting: {
            image: "/logos/greeting card.png",
            title: "Greeting Card Design",
            description: "Personalized greeting cards that create meaningful connections",
            count: 0
        },
        invitation: {
            image: "/logos/invitation.png",
            title: "Invitation Design",
            description: "Elegant invitations that set the perfect tone for special events",
            count: 0
        },
        business: {
            image: "/logos/business.png",
            title: "Business Card Design",
            description: "Professional business cards that make lasting impressions",
            count: 0
        },
        consulting: {
            image: "/logos/Creative.jpg",
            title: "Creative Consulting",
            description: "Strategic creative consultancy to develop your vision",
            count: 0
        },
        video: {
            image: "/logos/Video.mov",
            title: "Video Editing",
            description: "Professional video editing that transforms footage into compelling stories",
            count: 0
        },
        animation: {
            image: "/logos/Animation.mp4",
            title: "Animation",
            description: "Dynamic animations that bring your ideas to life",
            count: 0
        },
        frontend: {
            image: "/logos/web%20portel.jpg",
            title: "Frontend Development",
            description: "Modern responsive websites built with cutting-edge technologies",
            count: 0
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
                            className={`filter-btn ${currentFilter === 'ai-design' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('ai-design')}
                        >
                            AI Design
                        </button>
                        <button 
                            className={`filter-btn ${currentFilter === 'poster' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('poster')}
                        >
                            Posters
                        </button>
                        <button 
                            className={`filter-btn ${currentFilter === 'collage' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('collage')}
                        >
                            Photo Collage
                        </button>
                        <button 
                            className={`filter-btn ${currentFilter === 'greeting' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('greeting')}
                        >
                            Greeting Cards
                        </button>
                        <button 
                            className={`filter-btn ${currentFilter === 'invitation' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('invitation')}
                        >
                            Invitations
                        </button>
                        <button 
                            className={`filter-btn ${currentFilter === 'business' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('business')}
                        >
                            Business Cards
                        </button>
                        <button 
                            className={`filter-btn ${currentFilter === 'consulting' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('consulting')}
                        >
                            Creative Consulting
                        </button>
                        <button 
                            className={`filter-btn ${currentFilter === 'video' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('video')}
                        >
                            Video Editing
                        </button>
                        <button 
                            className={`filter-btn ${currentFilter === 'animation' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('animation')}
                        >
                            Animation
                        </button>
                        <button 
                            className={`filter-btn ${currentFilter === 'frontend' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('frontend')}
                        >
                            Frontend Development
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
                                {(currentPreview.image.endsWith('.mov') || currentPreview.image.endsWith('.mp4')) ? (
                                    <video 
                                        src={currentPreview.image} 
                                        className="preview-video"
                                        muted
                                        loop
                                        autoPlay
                                        playsInline
                                        preload="auto"
                                        onError={(e) => {
                                            console.log('Preview video failed to load:', e.target.src);
                                            e.target.style.display = 'none';
                                            const img = document.createElement('img');
                                            img.src = `https://via.placeholder.com/200x150/1a1a1a/00bfff?text=${encodeURIComponent(currentPreview.title)}`;
                                            e.target.parentNode.insertBefore(img, e.target);
                                        }}
                                    />
                                ) : (
                                    <img 
                                        src={currentPreview.image} 
                                        alt={currentPreview.title}
                                        onError={(e) => {
                                            e.target.src = `https://via.placeholder.com/200x150/1a1a1a/00bfff?text=${encodeURIComponent(currentPreview.title)}`;
                                        }}
                                    />
                                )}
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
                                {item.isVideo ? (
                                    <video 
                                        src={item.image} 
                                        className="gallery-img gallery-video"
                                        muted
                                        loop
                                        autoPlay
                                        playsInline
                                        preload="auto"
                                        onError={(e) => {
                                            console.log('Video failed to load:', e.target.src);
                                            e.target.style.display = 'none';
                                            const img = document.createElement('img');
                                            img.src = `https://via.placeholder.com/400x300/1a1a1a/00bfff?text=${encodeURIComponent(item.title)}`;
                                            img.className = 'gallery-img';
                                            e.target.parentNode.insertBefore(img, e.target);
                                        }}
                                    />
                                ) : (
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="gallery-img"
                                        onError={(e) => {
                                            e.target.src = `https://via.placeholder.com/400x300/1a1a1a/00bfff?text=${encodeURIComponent(item.title)}`;
                                        }}
                                    />
                                )}
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
                                <img src="/logos/Creative.jpg" alt="Creative Design Project" />
                                <div className="project-overlay">
                                    <div className="project-info">
                                        <h3>Creative Design Project</h3>
                                        <p>Innovative creative design solutions for digital media</p>
                                        <div className="project-tags">
                                            <span>Creative Design</span>
                                            <span>Digital Art</span>
                                            <span>Visual Identity</span>
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
                                <img src="/logos/auraform.png" alt="Professional Logo Design" />
                                <div className="project-overlay">
                                    <div className="project-info">
                                        <h3>Professional Logo Design</h3>
                                        <p>Clean and modern logo design solution</p>
                                        <div className="project-tags">
                                            <span>Logo Design</span>
                                            <span>Visual Identity</span>
                                            <span>Creative</span>
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
                                <p>"AuraForm Studio-oda design work romba nalla irunthuchu! Enga company-ku oru perfect logo design pannaanga. Very satisfied!"</p>
                                <div className="client-info">
                                    <div className="client-avatar">
                                        <i className="fas fa-user-circle"></i>
                                    </div>
                                    <div className="client-details">
                                        <h4>Karthik Raman</h4>
                                        <span>Business Owner, Chennai</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <div className="quote-icon">
                                    <i className="fas fa-quote-left"></i>
                                </div>
                                <p>"Enoda wedding invitation card design panradhu ku AuraForm-a approach panninen. Avanga work quality super! Friends ellam praise pannanga."</p>
                                <div className="client-info">
                                    <div className="client-avatar">
                                        <i className="fas fa-user-circle"></i>
                                    </div>
                                    <div className="client-details">
                                        <h4>Priya Sankaran</h4>
                                        <span>Teacher, Coimbatore</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <div className="quote-icon">
                                    <i className="fas fa-quote-left"></i>
                                </div>
                                <p>"Enga small business-ku poster design vennum-nu sollinen. AuraForm team romba creative-a pannaanga. Price-um reasonable!"</p>
                                <div className="client-info">
                                    <div className="client-avatar">
                                        <i className="fas fa-user-circle"></i>
                                    </div>
                                    <div className="client-details">
                                        <h4>Murugan Selvam</h4>
                                        <span>Shop Owner, Madurai</span>
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
                        {lightboxData.isVideo ? (
                            <video 
                                src={lightboxData.image} 
                                className="lightbox-video"
                                controls
                                autoPlay
                                muted
                                loop
                                playsInline
                                onError={(e) => {
                                    console.log('Lightbox video failed to load:', e.target.src);
                                }}
                            />
                        ) : (
                            <img 
                                src={lightboxData.image} 
                                alt={lightboxData.title} 
                                className="lightbox-img"
                                onError={(e) => {
                                    e.target.src = `https://via.placeholder.com/800x600/1a1a1a/00bfff?text=${encodeURIComponent(lightboxData.title)}`;
                                }}
                            />
                        )}
                        <div className="lightbox-info">
                            <h3>{lightboxData.title}</h3>
                            <p>{lightboxData.description}</p>
                            <div className="lightbox-category">
                                <span>{lightboxData.category?.toUpperCase()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Gallery;
