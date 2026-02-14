import React from 'react';
import { CheckCircle } from 'lucide-react';
import heroImage from '../assets/half.jpg';

const AboutSection: React.FC = () => {
    return (
        <section className="section-container about-section dark-theme">
            <div className="about-content-wrapper">
                <div className="about-text-column">
                    <span className="subtitle-sm">HELLO</span>
                    <h2 className="big-title">I'M HRITABRATA</h2>
                    <p className="about-desc">
                        Frontend Developer skilled in React JS || Next JS || Typescript || JavaScript 💻 ||Creating responsive and user-centric web applications 🌐||Passionate about clean, efficient code💻 ||
                    </p>

                    <div className="stats-row">
                        <div className="stat-item">
                            <CheckCircle className="stat-icon" size={24} color="#ff7b00" />
                            <div>
                                <span className="stat-num">1+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                        </div>
                        <div className="stat-item">
                            <CheckCircle className="stat-icon" size={24} color="#ff7b00" />
                            <div>
                                <span className="stat-num">10+</span>
                                <span className="stat-label">Completed Project</span>
                            </div>
                        </div>
                        {/* <div className="stat-item">
                            <CheckCircle className="stat-icon" size={24} color="#ff7b00" />
                            <div>
                                <span className="stat-num">151+</span>
                                <span className="stat-label">Happy Client</span>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="about-image-column">
                    <img src={heroImage} alt="Anthony" className="about-image" />
                    <div className="spiral-accent"></div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
