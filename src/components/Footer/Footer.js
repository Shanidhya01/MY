import React, { useState, useEffect } from 'react';
import { 
  AiFillGithub, 
  AiFillInstagram, 
  AiFillLinkedin, 
  AiFillTwitterCircle,
  AiFillMail,
  AiFillPhone,
  AiFillEnvironment
} from 'react-icons/ai';
import { 
  BiChevronUp, 
  BiHeart, 
  BiCode,
  BiDownload,
  BiCalendar
} from 'react-icons/bi';
import { DiCssdeck } from 'react-icons/di';
import { FiExternalLink, FiCopy, FiCheck } from 'react-icons/fi';

import { SocialIcons } from '../Header/HeaderStyles';
import { 
  FooterWrapper, 
  LinkColumn, 
  LinkItem, 
  LinkList, 
  LinkTitle, 
  Slogan, 
  SocialContainer, 
  SocialIconsContainer,
  CompanyContainer,
  FooterDivider,
  Copyright,
  BackToTop,
  GlobalFooterStyles
} from './FooterStyles';

// Enhanced contact information
const contactInfo = [
  {
    id: 'email',
    title: 'Email',
    icon: AiFillMail,
    value: 'luckykumar0011s@gmail.com',
    href: 'mailto:luckykumar0011s@gmail.com',
    description: 'Response within 24 hours'
  },
  {
    id: 'phone',
    title: 'Phone',
    icon: AiFillPhone,
    value: '+91 9905583008',
    href: 'tel:+919905583008',
    description: 'Available Mon-Sat, 10 AM - 6 PM'
  },
  {
    id: 'location',
    title: 'Location',
    icon: AiFillEnvironment,
    value: 'Bengaluru, Karnataka',
    href: 'https://maps.google.com/?q=Bengaluru,Karnataka,India',
    description: 'Open to remote & relocation'
  }
];

// Enhanced social media links
const socialLinks = [
  {
    platform: 'github',
    href: 'https://github.com/Shanidhya01',
    icon: AiFillGithub,
    label: 'GitHub',
    color: '#333',
    stats: '50+ repositories'
  },
  {
    platform: 'linkedin',
    href: 'https://www.linkedin.com/in/shanidhya-kumar',
    icon: AiFillLinkedin,
    label: 'LinkedIn',
    color: '#0077b5',
    stats: 'Professional network'
  },
  {
    platform: 'instagram',
    href: 'https://www.instagram.com/kshanidhya',
    icon: AiFillInstagram,
    label: 'Instagram',
    color: '#E4405F',
    stats: 'Behind the scenes'
  },
  {
    platform: 'twitter',
    href: 'https://x.com/kumar_shanidhya',
    icon: AiFillTwitterCircle,
    label: 'Twitter',
    color: '#1DA1F2',
    stats: 'Tech thoughts & updates'
  }
];



const Footer = () => {
  // const [showBackToTop, setShowBackToTop] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);
  const [currentYear] = useState(new Date().getFullYear());

  // Back to top visibility
  // Simple throttle utility
  function throttle(fn, wait) {
    let lastTime = 0;
    return function(...args) {
      const now = Date.now();
      if (now - lastTime >= wait) {
        lastTime = now;
        fn.apply(this, args);
      }
    };
  }

  // useEffect(() => {
  //   const handleScroll = throttle(() => {
  //     setShowBackToTop(window.scrollY > 500);
  //   }, 100); // Throttle to every 100ms

  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // Smooth scroll to top
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // };

  // Copy to clipboard functionality
  const copyToClipboard = async (text, itemId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemId);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Enhanced link click handler
  const handleLinkClick = (href, isExternal = false) => {
    if (isExternal) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <GlobalFooterStyles />
      <FooterWrapper id="contact">
      {/* Contact Information Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        {contactInfo.map((contact, index) => (
          <div 
            key={contact.id}
            style={{
              padding: '2rem 1.5rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Icon circle */}
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))',
              border: '2px solid rgba(99, 102, 241, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem',
              boxShadow: '0 4px 16px rgba(99, 102, 241, 0.2)'
            }}>
              <contact.icon size="1.5rem" style={{ color: '#6366f1' }} />
            </div>
            
            <h4 style={{
              margin: '0 0 0.75rem',
              fontSize: '0.85rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.7)'
            }}>
              {contact.title}
            </h4>
            
            <a 
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : '_self'}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              title={contact.description}
              style={{
                fontSize: '1.05rem',
                fontWeight: '600',
                color: '#fff',
                textDecoration: 'none',
                marginBottom: '0.75rem',
                display: 'inline-block',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#6366f1'}
              onMouseLeave={(e) => e.target.style.color = '#fff'}
            >
              {contact.value}
              {contact.href.startsWith('http') && (
                <FiExternalLink style={{ marginLeft: '0.5rem', fontSize: '0.9rem', opacity: 0.7 }} />
              )}
            </a>
            
            {/* Copy button for email and phone */}
            {(contact.id === 'email' || contact.id === 'phone') && (
              <button
                onClick={() => copyToClipboard(contact.value, contact.id)}
                style={{
                  background: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  borderRadius: '8px',
                  color: '#6366f1',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 0.9rem',
                  marginTop: '0.75rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(99, 102, 241, 0.2)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'rgba(99, 102, 241, 0.1)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {copiedItem === contact.id ? (
                  <>
                    <FiCheck /> Copied!
                  </>
                ) : (
                  <>
                    <FiCopy /> Copy
                  </>
                )}
              </button>
            )}
            
            <p style={{ 
              color: 'rgba(255,255,255,0.55)', 
              fontSize: '0.85rem', 
              margin: '0.75rem 0 0 0',
              lineHeight: '1.5'
            }}>
              {contact.description}
            </p>
          </div>
        ))}
      </div>

      <FooterDivider />
      {/* Enhanced Social and Brand Section */}
      <SocialIconsContainer>
        <CompanyContainer>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              padding: '12px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <DiCssdeck size="2rem" />
            </div>
            <div>
              <h3 style={{
                margin: 0,
                fontSize: '1.5rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>Shanidhya Kumar</h3>
              <p style={{
                margin: '4px 0 0',
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.6)'
              }}>Full Stack Developer</p>
            </div>
          </div>
          
          <Slogan>
            Building scalable web applications with modern technologies. Passionate about clean code, 
            innovative solutions, and creating exceptional user experiences.
          </Slogan>
          
          {/* Status badges */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            marginTop: '1.25rem',
            flexWrap: 'wrap'
          }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.4rem 0.8rem',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '20px',
              fontSize: '0.75rem',
              color: '#10b981',
              fontWeight: '500'
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                background: '#10b981',
                borderRadius: '50%',
                animation: 'pulse 2s ease-in-out infinite'
              }} />
              Available for Opportunities
            </span>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.4rem 0.8rem',
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '20px',
              fontSize: '0.75rem',
              color: '#6366f1',
              fontWeight: '500'
            }}>
              <BiCode /> MERN Stack
            </span>
          </div>
        </CompanyContainer>

        <div style={{ marginTop: '2rem' }}>
          <h4 style={{
            textAlign: 'center',
            fontSize: '1.1rem',
            fontWeight: '700',
            color: '#fff',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}>
            Connect With Me
          </h4>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.label} - ${social.stats}`}
              title={`${social.label} - ${social.stats}`}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.background = 'rgba(99, 102, 241, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.5)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.25)';
                e.currentTarget.style.color = '#6366f1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
              }}
            >
              <social.icon size="1.5rem" />
            </a>
          ))}
          </div>
        </div>
      </SocialIconsContainer>

      <FooterDivider />

      {/* Copyright Section */}
      <Copyright>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '1.5rem 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <p style={{ margin: 0, fontSize: '0.85rem' }}>
            © {currentYear} Shanidhya Kumar. Built with{' '}
            <BiHeart style={{ color: '#ef4444', margin: '0 0.2rem', verticalAlign: 'middle' }} />{' '}
            using <strong>React & Next.js</strong>
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.85rem' }}>
            <a 
              href="https://github.com/Shanidhya01" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: 'rgba(255,255,255,0.7)', 
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#6366f1'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
            >
              View Source
            </a>
            <a 
              href="#projects" 
              style={{ 
                color: 'rgba(255,255,255,0.7)', 
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#6366f1'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
            >
              Portfolio
            </a>
            <a 
              href="#tech" 
              style={{ 
                color: 'rgba(255,255,255,0.7)', 
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#6366f1'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
            >
              Tech Stack
            </a>
          </div>
        </div>
      </Copyright>

      {/* Back to Top Button */}
      {/* <BackToTop
        visible={showBackToTop}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        title="Back to top"
      >
        <BiChevronUp />
      </BackToTop> */}
    </FooterWrapper>
    </>
  );
};

export default Footer;
