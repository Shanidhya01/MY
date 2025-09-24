import React, { useLayoutEffect, useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { FiMenu, FiX } from 'react-icons/fi';
import { BiHomeAlt, BiUser, BiCodeAlt, BiBriefcase, BiPhone } from 'react-icons/bi';
import {
  Container, Div1, Div2, Div3, NavLink, SocialIcons,
  MenuButton, MobileNav, MobileList, HeaderSpacer, BrandLink,
  NotificationBadge
} from './HeaderStyles';

// Enhanced scroll utility with smooth easing
const smoothScrollTo = (id, offset = 0) => {
  const element = document.getElementById(id);
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

// Navigation items configuration
const navigationItems = [
  { 
    id: 'home', 
    label: 'Home', 
    icon: BiHomeAlt,
    href: '#home',
    description: 'Welcome section'
  },
  { 
    id: 'projects', 
    label: 'Projects', 
    icon: BiBriefcase,
    href: '#projects',
    description: 'My work portfolio',
    badge: '5+'
  },
  { 
    id: 'tech', 
    label: 'Technologies', 
    icon: BiCodeAlt,
    href: '#tech',
    description: 'Skills & tools'
  },
  { 
    id: 'about', 
    label: 'About', 
    icon: BiUser,
    href: '#about',
    description: 'Learn about me'
  },
  { 
    id: 'contact', 
    label: 'Contact', 
    icon: BiPhone,
    href: '#contact',
    description: 'Get in touch'
  }
];

// Social media links configuration
const socialLinks = [
  {
    platform: 'github',
    href: 'https://github.com/Shanidhya01',
    icon: AiFillGithub,
    label: 'GitHub Profile',
    color: '#333'
  },
  {
    platform: 'linkedin',
    href: 'https://www.linkedin.com/in/shanidhya-kumar',
    icon: AiFillLinkedin,
    label: 'LinkedIn Profile',
    color: '#0077b5'
  },
  {
    platform: 'instagram',
    href: 'https://www.instagram.com/kshanidhya',
    icon: AiFillInstagram,
    label: 'Instagram Profile',
    color: '#E4405F'
  }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const headerRef = useRef(null);
  const mobileNavRef = useRef(null);

  // Enhanced scroll detection with header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Header background change
      setScrolled(currentScrollY > 50);
      
      // Header visibility (hide on scroll down, show on scroll up)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Active section detection
      const sections = navigationItems.map(item => item.id);
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Header height measurement
  useLayoutEffect(() => {
    const updateHeaderHeight = () => {
      const height = headerRef.current ? headerRef.current.offsetHeight : 80;
      document.documentElement.style.setProperty('--header-h', `${height}px`);
    };
    
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, [isOpen]);

  // Enhanced mobile menu controls
  const toggleMobileMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target) && 
          headerRef.current && !headerRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeMobileMenu]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeMobileMenu]);

  // Enhanced navigation handler
  const handleNavigation = useCallback((id, closeMenu = false) => {
    const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 80;
    smoothScrollTo(id, headerHeight + 20);
    
    if (closeMenu) {
      closeMobileMenu();
    }
  }, [closeMobileMenu]);

  return (
    <>
      <Container 
        ref={headerRef}
        className={`${scrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        {/* Mobile Menu Button */}
        <MenuButton
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={toggleMobileMenu}
          title={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </MenuButton>

        {/* Enhanced Brand Section */}
        <Div1>
          <Link href="/" passHref>
            <BrandLink onClick={closeMobileMenu}>
              <DiCssdeck />
              <span>Shanidhya Kumar</span>
            </BrandLink>
          </Link>
        </Div1>

        {/* Desktop Navigation */}
        <Div2>
          {navigationItems.map((item, index) => (
            <li key={item.id}>
              <NavLink
                href={item.href}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.id);
                }}
                title={item.description}
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <item.icon style={{ marginRight: '0.5rem', fontSize: '1.1rem' }} />
                {item.label}
                {item.badge && (
                  <NotificationBadge>{item.badge}</NotificationBadge>
                )}
              </NavLink>
            </li>
          ))}
        </Div2>

        {/* Enhanced Social Icons */}
        <Div3>
          {/* Social Media Links */}
          {socialLinks.map((social) => (
            <SocialIcons
              key={social.platform}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : '_self'}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={social.label}
              title={social.label}
              data-platform={social.platform}
            >
              <social.icon size="1.4rem" />
            </SocialIcons>
          ))}
        </Div3>
      </Container>

      {/* Enhanced Mobile Navigation */}
      <MobileNav 
        ref={mobileNavRef}
        id="mobile-nav" 
        data-open={isOpen}
        role="navigation"
        aria-label="Mobile navigation menu"
      >
        <MobileList>
          {navigationItems.map((item, index) => (
            <li key={item.id} style={{ '--i': index }}>
              <Link href={item.href} passHref>
                <a
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.id, true);
                  }}
                  aria-label={`${item.label} - ${item.description}`}
                >
                  <item.icon style={{ marginRight: '0.8rem', fontSize: '1.2rem' }} />
                  <span>
                    {item.label}
                    {item.badge && (
                      <NotificationBadge style={{ marginLeft: '0.5rem' }}>
                        {item.badge}
                      </NotificationBadge>
                    )}
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </MobileList>
      </MobileNav>

      {/* Enhanced Header Spacer */}
      <HeaderSpacer />

      {/* Loading indicator for smooth transitions */}
      <style jsx>{`
        .page-transition {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease-in-out;
        }
        .page-transition.loaded {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
};

export default Header;
