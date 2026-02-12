import React from 'react';
import { DiFirebase, DiReact, DiMongodb, DiNodejs, DiGit, DiPython, DiJava } from 'react-icons/di';
import { 
  SiNextdotjs, SiTailwindcss, SiExpress, SiMysql, SiPostgresql, 
  SiPrisma, SiFirebase, SiAppwrite, SiRedux, 
  SiTypescript, SiJavascript, SiCplusplus, 
  SiGithub, SiVercel, SiPostman, SiVite, SiGraphql
} from 'react-icons/si';
import { FaCloud, FaCode, FaServer, FaDatabase, FaDocker } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const TechBadge = ({ name, icon: Icon, color = '#fff' }) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 14px',
      margin: '6px 6px 6px 0',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      fontSize: '0.9rem',
      fontWeight: '500',
      color: 'rgba(255, 255, 255, 0.85)',
      transition: 'all 0.3s ease',
      cursor: 'default',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'rgba(255, 107, 107, 0.15)';
      e.currentTarget.style.borderColor = 'rgba(255, 107, 107, 0.4)';
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 107, 107, 0.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    <Icon size="1.2rem" color={color} />
    <span>{name}</span>
  </div>
);

const TechCategory = ({ icon: Icon, title, description, children }) => (
  <div
    style={{
      padding: '28px',
      background: 'linear-gradient(135deg, rgba(13, 20, 33, 0.7) 0%, rgba(23, 30, 43, 0.7) 100%)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      transition: 'all 0.3s ease',
      height: '100%',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 107, 107, 0.15)';
      e.currentTarget.style.borderColor = 'rgba(255, 107, 107, 0.3)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
      <div
        style={{
          padding: '12px',
          background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.2) 0%, rgba(238, 90, 111, 0.2) 100%)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon size="2.5rem" color="#ff6b6b" />
      </div>
      <div>
        <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: '700', color: '#fff' }}>
          {title}
        </h3>
        <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)' }}>
          {description}
        </p>
      </div>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0' }}>
      {children}
    </div>
  </div>
);

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Tech Stack & Skills</SectionTitle>
    <SectionText style={{ maxWidth: '800px', margin: '0 auto 50px', fontSize: '1.1rem' }}>
      Proficient in modern web technologies spanning full-stack development, from designing responsive 
      frontends to building scalable backend systems and managing databases.
    </SectionText>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        marginBottom: '40px',
      }}
    >
      <TechCategory
        icon={DiReact}
        title="Frontend"
        description="Modern UI Development"
      >
        <TechBadge name="React.js" icon={DiReact} color="#61DAFB" />
        <TechBadge name="Next.js" icon={SiNextdotjs} color="#fff" />
        <TechBadge name="TypeScript" icon={SiTypescript} color="#3178C6" />
        <TechBadge name="JavaScript" icon={SiJavascript} color="#F7DF1E" />
        <TechBadge name="Tailwind CSS" icon={SiTailwindcss} color="#06B6D4" />
        <TechBadge name="Redux" icon={SiRedux} color="#764ABC" />
        <TechBadge name="Vite" icon={SiVite} color="#646CFF" />
        <TechBadge name="HTML/CSS" icon={FaCode} color="#E34F26" />
      </TechCategory>

      <TechCategory
        icon={DiNodejs}
        title="Backend"
        description="Server & API Development"
      >
        <TechBadge name="Node.js" icon={DiNodejs} color="#339933" />
        <TechBadge name="Express.js" icon={SiExpress} color="#fff" />
        <TechBadge name="REST APIs" icon={FaServer} color="#fff" />
        <TechBadge name="Prisma" icon={SiPrisma} color="#2D3748" />
        <TechBadge name="GraphQL" icon={SiGraphql} color="#E10098" />
        <TechBadge name="Razorpay" icon={FaCloud} color="#fff" />
      </TechCategory>

      <TechCategory
        icon={DiMongodb}
        title="Databases"
        description="Data Management"
      >
        <TechBadge name="MongoDB" icon={DiMongodb} color="#47A248" />
        <TechBadge name="MySQL" icon={SiMysql} color="#4479A1" />
        <TechBadge name="PostgreSQL" icon={SiPostgresql} color="#4169E1" />
        <TechBadge name="SQL" icon={FaDatabase} color="#fff" />
        <TechBadge name="Prisma ORM" icon={SiPrisma} color="#2D3748" />
        <TechBadge name="NeonDB" icon={FaCloud} color="#fff" />
      </TechCategory>

      <TechCategory
        icon={DiFirebase}
        title="Backend Services"
        description="Cloud & Authentication"
      >
        <TechBadge name="Firebase" icon={SiFirebase} color="#FFCA28" />
        <TechBadge name="Appwrite" icon={SiAppwrite} color="#F02E65" />
        <TechBadge name="Clerk" icon={FaCloud} color="#6C47FF" />
        <TechBadge name="Cloudinary" icon={FaCloud} color="#fff" />
        <TechBadge name="JWT" icon={FaServer} color="#fff" />
      </TechCategory>

      <TechCategory
        icon={DiPython}
        title="Languages"
        description="Programming Proficiency"
      >
        <TechBadge name="JavaScript" icon={SiJavascript} color="#F7DF1E" />
        <TechBadge name="TypeScript" icon={SiTypescript} color="#3178C6" />
        <TechBadge name="C++" icon={SiCplusplus} color="#00599C" />
        <TechBadge name="Python" icon={DiPython} color="#3776AB" />
        <TechBadge name="Java" icon={DiJava} color="#007396" />
        <TechBadge name="C" icon={FaCode} color="#A8B9CC" />
      </TechCategory>

      <TechCategory
        icon={DiGit}
        title="Tools & DevOps"
        description="Development Workflow"
      >
        <TechBadge name="Git" icon={DiGit} color="#F05032" />
        <TechBadge name="GitHub" icon={SiGithub} color="#fff" />
        <TechBadge name="Vercel" icon={SiVercel} color="#fff" />
        <TechBadge name="Postman" icon={SiPostman} color="#FF6C37" />
        <TechBadge name="VS Code" icon={FaCode} color="#007ACC" />
        <TechBadge name="Docker" icon={FaDocker} color="#2496ED" />
      </TechCategory>
    </div>

    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
