import React from 'react';
import Link from 'next/link';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {
	const validProjects = projects.filter((p) => p && p.image && p.title && (p.id !== undefined && p.id !== null));
	return (
		<Section nopadding id="projects">
			<SectionDivider $animate $center />
			<SectionTitle main>Featured Projects</SectionTitle>

			<div style={{ maxWidth: 1400, margin: '0 auto', padding: '2rem 1rem 4rem' }}>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(4, 1fr)',
						gap: '2rem'
					}}
				>
					{validProjects.map((project) => (
						<div
							key={project.id}
							style={{
								background: 'rgba(30,41,59,0.6)',
								border: '1px solid rgba(99,102,241,0.2)',
								borderRadius: 16,
								overflow: 'hidden'
							}}
						>
							<Link href={`/project/${project.id}`}>
								<a style={{ display: 'block' }}>
									<div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden' }}>
										<img
											src={project.image}
											alt={project.title}
											loading="lazy"
											style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
										/>
									</div>
								</a>
							</Link>
							<div style={{ padding: '1rem' }}>
								<Link href={`/project/${project.id}`}>
									<a style={{ textDecoration: 'none' }}>
										<h3
											style={{
												margin: 0,
												fontSize: '1.05rem',
												fontWeight: 700,
												color: '#e2e8f0'
											}}
										>
											{project.title}
										</h3>
									</a>
								</Link>
								{/* Source / Live links */}
								<div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
									{project.source && (
										<a
											href={project.source}
											target="_blank"
											rel="noopener noreferrer"
											style={{
												textDecoration: 'none',
												fontSize: '0.9rem',
												fontWeight: 600,
												color: '#fff',
												padding: '0.6rem 1rem',
												borderRadius: 10,
												background: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
											}}
										>
											Source
										</a>
									)}
									{project.visit && (
										<a
											href={project.visit}
											target="_blank"
											rel="noopener noreferrer"
											style={{
												textDecoration: 'none',
												fontSize: '0.9rem',
												fontWeight: 600,
												color: '#fff',
												padding: '0.6rem 1rem',
												borderRadius: 10,
												background: 'linear-gradient(135deg, #06b6d4, #3b82f6)'
											}}
										>
											Live
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
};

export default Projects;
