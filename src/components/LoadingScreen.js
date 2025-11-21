import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div id="loading-screen" style={{ opacity: isVisible ? 1 : 0 }}>
            <div className="loading-content">
                <div className="aura-logo">
                    <div className="logo-ring"></div>
                    <div className="logo-text">AuraForm Studio</div>
                </div>
                <div className="loading-bar">
                    <div className="loading-progress"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
