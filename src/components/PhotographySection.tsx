import React from 'react';
import { Camera } from 'lucide-react';



const PhotographySection: React.FC = () => {
    return (
        <section className="section-container photography-section">
            <div className="card-slide photography-card">
                <div className="photo-header">
                    <h2 className="section-title">
                        <span className="script-text">Editor</span> PHOTO
                    </h2>
                    <div className="camera-icon">
                        <span className="small-text">By Lightroom</span>
                        <Camera size={24} />
                    </div>
                </div>

                <div className="photo-strip">
                    <div className="photo-item"><img src="https://placehold.co/200x200/abc/fff?text=Photo1" alt="Photo" /></div>
                    <div className="photo-item"><img src="https://placehold.co/200x200/bcd/fff?text=Photo2" alt="Photo" /></div>
                    <div className="photo-item"><img src="https://placehold.co/200x200/cde/fff?text=Photo3" alt="Photo" /></div>
                    <div className="photo-item"><img src="https://placehold.co/200x200/def/fff?text=Photo4" alt="Photo" /></div>
                    <div className="photo-item"><img src="https://placehold.co/200x200/efg/fff?text=Photo5" alt="Photo" /></div>
                </div>

                <div className="arrow-accent">
                    <span>&rarr;</span>
                </div>
            </div>
        </section>
    );
};

export default PhotographySection;
