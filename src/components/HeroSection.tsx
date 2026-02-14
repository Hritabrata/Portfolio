import React from 'react';
import heroImage from '../assets/Gemini_Generated_Image.png';

const HeroSection: React.FC = () => {
    return (
        <section className="hero-section">
            <div className="hero-wrapper">
                {/* Background Text Layer - Behind Image */}
                <div className="text-layer-back">
                    <h1 className="big-text top">I'M A</h1>
                    <h1 className="big-text middle">SOFTWARE</h1>
                    {/* Solid DESIGNER text behind image for the depth effect base */}
                    <h1 className="big-text bottom">DEVELOPER</h1>
                </div>

                {/* Image Layer - Middle */}
                <div className="image-layer">
                    <div className="orange-shape"></div>
                    <img src={heroImage} alt="Portrait" className="hero-image" />
                </div>

                {/* Foreground Text Layer - On Top of Image */}
                <div className="text-layer-front">
                    {/* Outline DESIGNER text on top for depth */}
                    <h1 className="big-text middle outline">SOFTWARE</h1>
                    <h1 className="big-text bottom outline">DEVELOPER</h1>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
