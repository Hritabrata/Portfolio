import React from 'react';



const StoriesSection: React.FC = () => {
    return (
        <section className="section-container stories-section">
            <div className="card-slide stories-card">
                <div className="stories-header">
                    <h2 className="section-title">
                        <span className="script-text">Typography</span> <br />
                        INSTAGRAM <br /> STORIES
                    </h2>
                    <span className="handle">@alfatihmuiz</span>
                </div>

                <div className="stories-grid">
                    <div className="story-item">
                        <img src="https://placehold.co/200x350/555/fff?text=Story1" alt="Story" />
                    </div>
                    <div className="story-item active">
                        <img src="https://placehold.co/200x350/666/fff?text=Story2" alt="Story" />
                    </div>
                    <div className="story-item">
                        <img src="https://placehold.co/200x350/777/fff?text=Story3" alt="Story" />
                    </div>
                    <div className="story-item">
                        <img src="https://placehold.co/200x350/888/fff?text=Story4" alt="Story" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StoriesSection;
