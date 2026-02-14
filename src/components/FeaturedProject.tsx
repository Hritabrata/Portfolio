import React from 'react';
import { ExternalLink } from 'lucide-react';

const FeaturedProject: React.FC = () => {
    const projects = [
        {
            title: "TTEN Portal",
            description: "West Bengal TOTO Enrolment Number Official portal, for TOTO vehicle registration and Enrolment number application.",
            url: "https://tten.wb.gov.in/",
            tag: "West Bengal Government Transport Department",
            color: "#4F46E5"
        },
        {
            title: "Vyoma Innovus Global Attendance",
            description: "Attendance management system for Vyoma Innovus Global, Track employee attendance, location data, and manage leave requests with our comprehensive dashboard.",
            url: "https://vigpl.com/attendance/login",
            tag: "Enterprise Attendance System",
            color: "#059669"
        },
        {
            title: "Street Vendor Portal",
            description: "West Bengal Street Vendor Management System - Digital platform for vendor registration and management.",
            url: "https://streetvendor.wb.gov.in/cov/login",
            tag: "West Bengal Street Vendor Management System",
            color: "#DC2626"
        },
        {
            title: "Haat Management",
            description: "Jalpaiguri Haat Management System - Comprehensive solution for managing local markets and vendors.",
            url: "https://haatmgmtjpgzp.wb.gov.in/",
            tag: "Jalpaiguri Haat Management System",
            color: "#EA580C"
        },
        {
            title: "Common Admission Portal 2026",
            description: "The official centralized platform for admission to Polytechnic & ITI courses. Empowering youth through technical skill development.",
            url: "https://vigpl.com/",
            tag: "West Bengal Education Portal",
            color: "#7C3AED"
        }
    ];

    return (
        <section className="section-container featured-section">
            <div className="featured-content">
                <h2 className="section-header">Featured Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card-new"
                            style={{ '--accent-color': project.color } as React.CSSProperties}
                        >
                            <div className="project-card-header">
                                <span className="project-tag" style={{ backgroundColor: `${project.color}15`, color: project.color }}>
                                    {project.tag}
                                </span>
                                <ExternalLink size={20} className="external-icon" />
                            </div>

                            <h3 className="project-card-title">{project.title}</h3>
                            <p className="project-card-desc">{project.description}</p>

                            <div className="project-card-footer">
                                <span className="view-link">
                                    Visit Site
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProject;
