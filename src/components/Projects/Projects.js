import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
import { FiExternalLink, FiCode } from 'react-icons/fi';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { ProjectsContainer, ProjectCard, ProjectImage, ProjectImageOverlay, ProjectContent, ProjectTitle, ProjectDescription, ProjectTechStack, TechTag, ProjectLinks, ProjectLink } from './ProjectsStyles';
import { projects } from '../../constants/constants';

const Projects = () => {
	const validProjects = projects.filter((p) => p && p.image && p.title && (p.id !== undefined && p.id !== null));
	const [hoveredProject, setHoveredProject] = useState(null);

	return (
		<Section nopadding id="projects">
			<SectionDivider $animate $center />
			<SectionTitle main>Featured Projects</SectionTitle>
			<p style={{
				textAlign: 'center',
				color: 'rgba(255,255,255,0.6)',
				fontSize: '1.1rem',
				maxWidth: '700px',
				margin: '-1rem auto 3rem',
				lineHeight: '1.6'
			}}>
				A collection of my best work showcasing modern web development with cutting-edge technologies
			</p>

			<ProjectsContainer>
				{validProjects.map((project, index) => (
					<ProjectCard
						key={project.id}
						onMouseEnter={() => setHoveredProject(project.id)}
						onMouseLeave={() => setHoveredProject(null)}
					>
						<ProjectImage $isHovered={hoveredProject === project.id}>
							<img
								src={project.image}
								alt={project.title}
								loading="lazy"
							/>
							<ProjectImageOverlay $isHovered={hoveredProject === project.id}>
								<div style={{
									display: 'flex',
									gap: '1rem',
									flexDirection: 'column',
									alignItems: 'center'
								}}>
									{project.source && (
										<a
											href={project.source}
											target="_blank"
											rel="noopener noreferrer"
											style={{
												display: 'flex',
												alignItems: 'center',
												gap: '0.5rem',
												padding: '0.75rem 1.5rem',
												background: 'rgba(255, 255, 255, 0.95)',
												color: '#1e293b',
												borderRadius: '12px',
												fontWeight: '600',
												textDecoration: 'none',
												transition: 'transform 0.2s',
												boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
											}}
											onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
											onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
										>
											<AiOutlineGithub size={20} /> View Code
										</a>
									)}
									{project.visit && (
										<a
											href={project.visit}
											target="_blank"
											rel="noopener noreferrer"
											style={{
												display: 'flex',
												alignItems: 'center',
												gap: '0.5rem',
												padding: '0.75rem 1.5rem',
												background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
												color: '#fff',
												borderRadius: '12px',
												fontWeight: '600',
												textDecoration: 'none',
												transition: 'transform 0.2s',
												boxShadow: '0 4px 16px rgba(99, 102, 241, 0.4)'
											}}
											onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
											onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
										>
											<FiExternalLink size={20} /> Live Demo
										</a>
									)}
								</div>
							</ProjectImageOverlay>
						</ProjectImage>

						<ProjectContent>
							<Link href={`/project/${project.id}`}>
								<a style={{ textDecoration: 'none' }}>
									<ProjectTitle>{project.title}</ProjectTitle>
								</a>
							</Link>
							
							{project.description && (
								<ProjectDescription>{project.description}</ProjectDescription>
							)}

							{project.tags && project.tags.length > 0 && (
								<ProjectTechStack>
									{project.tags.slice(0, 4).map((tag, i) => (
										<TechTag key={i}>{tag}</TechTag>
									))}
									{project.tags.length > 4 && (
										<TechTag style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)' }}>
											+{project.tags.length - 4} more
										</TechTag>
									)}
								</ProjectTechStack>
							)}

							<ProjectLinks>
								<Link href={`/project/${project.id}`}>
									<ProjectLink>
										<FiCode /> View Details
									</ProjectLink>
								</Link>
							</ProjectLinks>
						</ProjectContent>
					</ProjectCard>
				))}
			</ProjectsContainer>
		</Section>
	);
};

export default Projects;
