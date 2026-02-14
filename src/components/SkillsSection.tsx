import React from 'react';



const SkillsSection: React.FC = () => {
    return (
        <section className="section-container skills-section">
            <div className="card-slide skills-card">
                <div className="skills-content">
                    <div className="skills-text">
                        <h2 className="section-title small-title">Creative <br /><span className="script-text">SKILLS</span></h2>

                        <ul className="skills-list">
                            <li>Lightroom</li>
                            <li>Capcut Video Editor</li>
                            <li>Canva</li>
                            <li>Picsart</li>
                            <li>Phonto</li>
                        </ul>
                    </div>

                    <div className="skills-illustration">
                        {/* Placeholder for illustration */}
                        <img src="https://placehold.co/500x300/e0e0e0/1a1a1a?text=Illustration" alt="Skills Illustration" />
                    </div>
                </div>

                <div className="skills-footer">
                    <span>PORTFOLIO</span>
                    <span>2022-2023</span>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
