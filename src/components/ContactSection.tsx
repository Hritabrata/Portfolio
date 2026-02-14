import React from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';

const ContactSection: React.FC = () => {
    const contactLinks = [
        {
            icon: <Linkedin size={24} />,
            label: "LinkedIn",
            value: "Hritabrata Dam",
            url: "https://www.linkedin.com/in/hritabrata-dam-384101275"
        },
        {
            icon: <Mail size={24} />,
            label: "Email",
            value: "hritabrata1998@gmail.com",
            url: "mailto:hritabrata1998@gmail.com"
        },
        {
            icon: <Github size={24} />,
            label: "GitHub",
            value: "@Hritabrata",
            url: "https://github.com/Hritabrata"
        }
    ];

    return (
        <section className="section-container contact-section">
            <div className="contact-content">
                <div className="contact-header">
                    <h2 className="contact-title">Let's Connect</h2>
                    <p className="contact-subtitle">
                        Feel free to reach out for collaborations, opportunities, or just a friendly chat!
                    </p>
                </div>

                <div className="contact-links-grid">
                    {contactLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link-card"
                        >
                            <div className="contact-icon">
                                {link.icon}
                            </div>
                            <div className="contact-info">
                                <span className="contact-label">{link.label}</span>
                                <span className="contact-value">{link.value}</span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="contact-footer">
                    <p>© 2026 Hritabrata Dam. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
