import React from 'react';
import { Play } from 'lucide-react';



const VideoSection: React.FC = () => {
    return (
        <section className="section-container video-section">
            <div className="card-slide video-card">
                <div className="video-header">
                    <h2 className="section-title">
                        <span className="script-text">Editor</span> <br /> VIDEO
                    </h2>
                    <span className="subtitle">By Capcut</span>
                </div>

                <div className="video-grid">
                    <div className="video-item main">
                        <img src="https://placehold.co/400x250/222/fff?text=Video1" alt="Video" />
                        <div className="play-overlay"><Play size={32} fill="white" /></div>
                    </div>

                    <div className="video-column">
                        <div className="video-item sub">
                            <img src="https://placehold.co/200x120/333/fff?text=Video2" alt="Video" />
                            <div className="play-overlay mini"><Play size={20} fill="white" /></div>
                        </div>
                        <div className="video-item sub">
                            <img src="https://placehold.co/200x120/444/fff?text=Video3" alt="Video" />
                            <div className="play-overlay mini"><Play size={20} fill="white" /></div>
                        </div>
                    </div>
                </div>

                <div className="more-info">
                    <span>more <br /> info</span>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
