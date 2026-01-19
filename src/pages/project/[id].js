import { useRouter } from 'next/router';
import Link from 'next/link';
import { Layout } from '../../layout/Layout';
import { projects } from '../../constants/constants';
import { IoArrowBackSharp } from "react-icons/io5";


const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <Layout>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 1rem' }}>
          <h2 style={{ color: '#e2e8f0' }}>Project Not Found</h2>
          <p style={{ color: '#94a3b8' }}>The project you’re looking for doesn’t exist.</p>
          <Link href="/#projects">
            <a style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              borderRadius: 12,
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 600
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Back to Projects
            </a>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 1rem 4rem' }}>
        <Link href="/#projects">
          <a style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1.5rem',
            padding: '0.6rem 1.25rem',
            borderRadius: 10,
            background: '#0f172a',
            border: '1px solid white',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 600
          }}>
            <IoArrowBackSharp /> Back 
          </a>
        </Link>

        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          margin: '0 0 1rem',
          backgroundImage: 'linear-gradient(135deg, #e2e8f0, #94a3b8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>{project.title}</h1>

        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            maxHeight: 560,
            objectFit: 'cover',
            borderRadius: 16,
            border: '1px solid rgba(99,102,241,0.2)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            marginBottom: '2rem'
          }}
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2rem' }}>
          <div>
            <h2 style={{ color: '#a78bfa', marginBottom: '0.75rem' }}>About This Project</h2>
            <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>{project.description}</p>

            <h2 style={{ color: '#a78bfa', margin: '2rem 0 0.75rem' }}>Technologies Used</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tags?.map((tag, i) => (
                <span key={i} style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: 8,
                  background: 'rgba(99,102,241,0.15)',
                  border: '1px solid rgba(99,102,241,0.3)',
                  color: '#a78bfa',
                  fontSize: '0.85rem',
                  fontWeight: 500
                }}>{tag}</span>
              ))}
            </div>
          </div>

          <aside style={{ position: 'sticky', top: 24, height: 'fit-content' }}>
            <div style={{
              background: 'rgba(30,41,59,0.6)',
              border: '1px solid rgba(99,102,241,0.2)',
              borderRadius: 12,
              padding: '1.25rem'
            }}>
              <h3 style={{ color: '#e2e8f0', margin: '0 0 1rem' }}>Links</h3>
              {project.source && (
                <a href={project.source} target="_blank" rel="noopener noreferrer" style={{
                  display: 'block',
                  padding: '0.75rem 1rem',
                  borderRadius: 10,
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 600,
                  marginBottom: '0.75rem'
                }}>View Source</a>
              )}
              {project.visit && (
                <a href={project.visit} target="_blank" rel="noopener noreferrer" style={{
                  display: 'block',
                  padding: '0.75rem 1rem',
                  borderRadius: 10,
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 600
                }}>Live Demo</a>
              )}
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
