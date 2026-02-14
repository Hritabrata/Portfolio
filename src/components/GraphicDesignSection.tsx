import React from 'react';



const GraphicDesignSection: React.FC = () => {
    return (
        <section className="section-container graphic-design-section">
            <div className="card-slide graphic-card">
                <div className="graphic-header">
                    <h2 className="section-title">
                        <span className="script-text">Graphic</span> <br /> DESIGNER
                    </h2>
                    <span className="subtitle">By Canva</span>
                </div>

                <div className="graphic-gallery">
                    <div className="gallery-item">
                        <img src="https://placehold.co/150x250/222/fff?text=Poster1" alt="Design 1" />
                    </div>
                    <div className="gallery-item">
                        <img src="https://placehold.co/150x250/333/fff?text=Poster2" alt="Design 2" />
                    </div>
                    <div className="gallery-item">
                        <img src="https://placehold.co/150x250/444/fff?text=Poster3" alt="Design 3" />
                    </div>
                </div>

                <div className="line-accent"></div>
            </div>
        </section>
    );
};

export default GraphicDesignSection;
