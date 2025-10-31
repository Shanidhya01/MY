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
  BackToTop
} from './FooterStyles';

// Enhanced contact information
const contactInfo = [
  {
    id: 'phone',
    title: 'Call',
    icon: AiFillPhone,
    value: '+91 9905583008',
    href: 'tel:+919905583008',
    description: 'Available Mon-Sat'
  },
  {
    id: 'email',
    title: 'Email',
    icon: AiFillMail,
    value: 'luckykumar0011s@gmail.com',
    href: 'mailto:luckykumar0011s@gmail.com',
    description: 'I typically respond within 24 hours'
  },
  {
    id: 'location',
    title: 'Location',
    icon: AiFillEnvironment,
    value: 'Bengaluru, India',
    href: 'https://maps.google.com/?q=Bengaluru,India',
    description: 'Open to remote opportunities worldwide'
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

// Quick links for better navigation
const quickLinks = [
  {
    id: 'projects',
    title: 'My Work',
    links: [
      { label: 'Featured Projects', href: '#projects' },
      { label: 'GitHub Portfolio', href: 'https://github.com/Shanidhya01' },
      { label: 'Live Demos', href: '#projects' },
      { label: 'Code Snippets', href: 'https://github.com/Shanidhya01' }
    ]
  },
  {
    id: 'about',
    title: 'About Me',
    links: [
      { label: 'My Story', href: '#about' },
      { label: 'Skills & Tech', href: '#tech' },
      { label: 'Resume/CV', href: '/Shanidhya_Resume.pdf', download: true },
      { label: 'Experience', href: '#about' }
    ]
  },
  {
    id: 'resources',
    title: 'Resources',
    links: [
      { label: 'Blog Posts', href: '#blog' },
      { label: 'Tutorials', href: '#tutorials' },
      { label: 'Useful Tools', href: '#tools' },
      { label: 'Reading List', href: '#resources' }
    ]
  }
];

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
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

  useEffect(() => {
    const handleScroll = throttle(() => {
      setShowBackToTop(window.scrollY > 500);
    }, 100); // Throttle to every 100ms

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
    <FooterWrapper id="contact">
      {/* Contact Information Section */}
      <LinkList>
        {contactInfo.map((contact, index) => (
          <LinkColumn key={contact.id} style={{ '--delay': index }}>
            <LinkTitle>
              <contact.icon style={{ marginRight: '0.5rem', fontSize: '1rem' }} />
              {contact.title}
            </LinkTitle>
            <LinkItem 
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : '_self'}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              title={contact.description}
            >
              {contact.value}
              {contact.href.startsWith('http') && (
                <FiExternalLink style={{ marginLeft: '0.5rem', fontSize: '0.8rem', opacity: 0.6 }} />
              )}
            </LinkItem>
            
            {/* Copy button for email and phone */}
            {(contact.id === 'email' || contact.id === 'phone') && (
              <button
                onClick={() => copyToClipboard(contact.value, contact.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.6)',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  marginTop: '0.5rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.color = 'rgba(255,255,255,0.9)'}
                onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}
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
              color: 'rgba(255,255,255,0.5)', 
              fontSize: '0.8rem', 
              margin: '0.5rem 0 0 0',
              lineHeight: '1.4'
            }}>
              {contact.description}
            </p>
          </LinkColumn>
        ))}
      </LinkList>

      <FooterDivider />

      {/* Quick Links Section */}
      <LinkList>
        {quickLinks.map((section, sectionIndex) => (
          <LinkColumn key={section.id} style={{ '--delay': sectionIndex + 3 }}>
            <LinkTitle>{section.title}</LinkTitle>
            {section.links.map((link, linkIndex) => (
              <LinkItem
                key={linkIndex}
                href={link.href}
                download={link.download}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }
                }}
              >
                {link.download && <BiDownload style={{ marginRight: '0.3rem' }} />}
                {link.label}
                {link.href.startsWith('http') && (
                  <FiExternalLink style={{ marginLeft: '0.5rem', fontSize: '0.8rem', opacity: 0.6 }} />
                )}
              </LinkItem>
            ))}
          </LinkColumn>
        ))}
      </LinkList>

      <FooterDivider />

      {/* Enhanced Social and Brand Section */}
      <SocialIconsContainer>
        <CompanyContainer>
          <div className="brand">
            <DiCssdeck />
            <h3>Shanidhya Kumar</h3>
          </div>
          <Slogan className="typing">
            Crafting digital experiences that make a difference. Always learning, always building, always innovating.
          </Slogan>
          
          {/* Additional info */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem', 
            marginTop: '1rem',
            flexWrap: 'wrap',
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.6)'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <BiCode /> Full Stack Developer
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <BiCalendar /> Available for opportunities
            </span>
          </div>
        </CompanyContainer>

        <SocialContainer>
          {socialLinks.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.label} - ${social.stats}`}
              title={`${social.label} - ${social.stats}`}
              data-platform={social.platform}
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
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <social.icon size="1.5rem" />
            </a>
          ))}
        </SocialContainer>
      </SocialIconsContainer>

      <FooterDivider />

      {/* Copyright Section */}
      <Copyright>
        <p style={{ margin: '0 0 0.5rem 0' }}>
          © {currentYear} Shanidhya Kumar. Built with{' '}
          <BiHeart style={{ color: '#ef4444', margin: '0 0.2rem' }} />{' '}
          using React & Next.js
        </p>
        <p style={{ margin: '0', fontSize: '0.8rem', opacity: '0.7' }}>
          Designed and developed with attention to detail and passion for clean code.{' '}
          <a 
            href="https://github.com/Shanidhya01" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#6366f1', textDecoration: 'none' }}
          >
            View source code
          </a>
        </p>
      </Copyright>

      {/* Back to Top Button */}
      <BackToTop
        visible={showBackToTop}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        title="Back to top"
      >
        <BiChevronUp />
      </BackToTop>
    </FooterWrapper>
  );
};

export default Footer;
