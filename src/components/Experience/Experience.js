import React from 'react';
import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents';

const ExperienceCard = ({ title, duration, organization, description, achievements, link }) => (
  <div
    style={{
      marginBottom: '40px',
      padding: '24px',
      background: 'linear-gradient(135deg, rgba(13, 20, 33, 0.8) 0%, rgba(23, 30, 43, 0.8) 100%)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 107, 107, 0.2)';
      e.currentTarget.style.borderColor = 'rgba(255, 107, 107, 0.3)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    }}
  >
    {/* Accent bar */}
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '4px',
        background: 'linear-gradient(180deg, #ff6b6b 0%, #ee5a6f 100%)',
      }}
    />

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
      <h3 style={{ margin: 0, fontWeight: '700', fontSize: '1.4rem', color: '#fff' }}>
        {title}
      </h3>
      <span
        style={{
          padding: '6px 16px',
          background: 'rgba(255, 107, 107, 0.15)',
          border: '1px solid rgba(255, 107, 107, 0.3)',
          borderRadius: '20px',
          fontSize: '0.85rem',
          fontWeight: '600',
          color: '#ff6b6b',
          whiteSpace: 'nowrap',
        }}
      >
        {duration}
      </span>
    </div>

    <p style={{ margin: '0 0 20px', fontSize: '1.05rem', fontWeight: '500', color: 'rgba(255, 255, 255, 0.8)' }}>
      {organization}
    </p>

    {description && (
      <p style={{ margin: '0 0 16px', fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6' }}>
        {description}
      </p>
    )}

    <div style={{ paddingLeft: '12px', borderLeft: '2px solid rgba(255, 107, 107, 0.3)' }}>
      {achievements.map((achievement, index) => (
        <div
          key={index}
          style={{
            marginBottom: '12px',
            paddingLeft: '20px',
            position: 'relative',
            fontSize: '0.95rem',
            lineHeight: '1.7',
            color: 'rgba(255, 255, 255, 0.85)',
          }}
        >
          <span
            style={{
              position: 'absolute',
              left: 0,
              top: '8px',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#ff6b6b',
            }}
          />
          {achievement}
        </div>
      ))}
    </div>

    {link && (
      <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginRight: '8px' }}>
          🔗 View Achievements:
        </span>
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#0070f3',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: '0.9rem',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#ff6b6b';
            e.target.style.textDecoration = 'underline';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#0070f3';
            e.target.style.textDecoration = 'none';
          }}
        >
          {link.text}
        </a>
      </div>
    )}
  </div>
);

const Experience = () => (
  <Section id="experience">
    <SectionTitle>Professional Experience</SectionTitle>
    <SectionText style={{ maxWidth: '900px', margin: '0 auto' }}>
      <ExperienceCard
        title="Full Stack Developer"
        duration="July 2025 – October 2025"
        organization="Arimart Technology Pvt. Ltd. – E-commerce Group Buying Platform (Remote)"
        achievements={[
          'Engineered core platform modules using the MERN stack, enabling dynamic product listings and real-time inventory updates',
          'Built and documented REST APIs for products, orders, and payments; integrated Razorpay with automated payment verification',
          'Optimized MongoDB schema design and query performance, reducing API latency by 25–30% and supporting user analytics',
        ]}
      />

      <ExperienceCard
        title="Hacktoberfest 2025 – Supercontributor"
        duration="October 2025"
        organization="DigitalOcean"
        description="Actively contributed to open-source projects during the month-long global celebration of open source."
        achievements={[
          'Contributed to open-source projects during Hacktoberfest 2025 with 6+ accepted pull requests across multiple repositories',
          'Collaborated with global developers on GitHub and maintained high-quality code standards with open-source maintainers',
          'Earned the Supercontributor and Tree Planted badges for exceptional contributions',
          'Ranked among the Top 10,000 contributors worldwide for early and consistent recognition',
        ]}
        link={{
          url: 'https://holopin.io/@shanidhya01',
          text: 'holopin.io/@shanidhya01 →',
        }}
      />
    </SectionText>
  </Section>
);

export default Experience;
