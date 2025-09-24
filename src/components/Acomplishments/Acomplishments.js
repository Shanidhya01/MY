import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  AiFillGithub, 
  AiFillLinkedin, 
  AiFillProject,
  AiFillStar,
  AiFillTrophy,
  AiFillCode,
  AiFillHeart,
  AiFillRocket
} from 'react-icons/ai';
import { 
  BiTrendingUp, 
  BiGitRepoForked, 
  BiTime,
  BiDownload,
  BiGroup,
  BiCodeAlt
} from 'react-icons/bi';
import { FiExternalLink, FiRefreshCw } from 'react-icons/fi';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { 
  Box, 
  Boxes, 
  BoxNum, 
  BoxText, 
  Join, 
  JoinText, 
  IconContainer
} from './AcomplishmentsStyles';

// Enhanced data with icons, descriptions, and links
const accomplishmentsData = [
  { 
    id: 'projects',
    number: 12, 
    text: 'Projects Completed',
    icon: AiFillProject,
    description: 'Full-stack applications built with modern technologies',
    link: '#projects',
    color: '#6366f1',
    // category: 'development',
    // isExternal: false
  },
  { 
    id: 'connections',
    number: 900, 
    text: 'LinkedIn Connections',
    icon: AiFillLinkedin,
    description: 'Professional network across tech industry',
    link: 'https://www.linkedin.com/in/shanidhya-kumar',
    color: '#0077b5',
    // category: 'networking',
    // isExternal: true
  },
  { 
    id: 'followers',
    number: 2, 
    text: 'GitHub Followers',
    icon: AiFillGithub,
    description: 'Developers following my open source journey',
    link: 'https://github.com/Shanidhya01',
    color: '#333',
    // category: 'community',
    // isExternal: true
  },
  { 
    id: 'stars',
    number: 9, 
    text: 'GitHub Stars',
    icon: AiFillStar,
    description: 'Stars received on contributions',
    link: 'https://github.com/Shanidhya01',
    color: '#f59e0b',
    // category: 'recognition',
    // isExternal: true
  },
  {
    id: 'experience',
    number: 2,
    text: 'Years Experience',
    icon: BiTime,
    description: 'Years of hands-on development experience',
    link: '#about',
    color: '#10b981',
    // category: 'experience',
    // isExternal: false
  },
  {
    id: 'technologies',
    number: 15,
    text: 'Technologies Mastered',
    icon: BiCodeAlt,
    description: 'Programming languages and frameworks',
    link: '#tech',
    color: '#8b5cf6',
    // category: 'skills',
    // isExternal: false
  }
];

// Additional stats for enhanced version
const additionalStats = [
  {
    id: 'commits',
    number: 500,
    text: 'Git Commits',
    icon: BiGitRepoForked,
    description: 'Code contributions and version control',
    color: '#ef4444'
  },
  {
    id: 'downloads',
    number: 1200,
    text: 'Project Views',
    icon: BiDownload,
    description: 'Total project downloads and views',
    color: '#06b6d4'
  }
];

// Fixed Counter animation hook - no conditional returns
const useCounterAnimation = (target, duration = 2000, shouldAnimate = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!shouldAnimate) {
      setCount(0);
      return;
    }
    
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [target, duration, shouldAnimate]);
  
  return count;
};

// Fixed Intersection Observer hook - no conditional returns
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px',
      ...options
    });
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  return [ref, isIntersecting];
};

const Acomplishments = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  const [isLoading, setIsLoading] = useState(false);
  const [showAdditionalStats, setShowAdditionalStats] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Handle navigation clicks
  const handleNavigation = useCallback((link, isExternal) => {
    if (isExternal) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  // Filter data based on category
  const filteredData = selectedCategory === 'all' 
    ? accomplishmentsData 
    : accomplishmentsData.filter(item => item.category === selectedCategory);

  const displayData = showAdditionalStats 
    ? [...filteredData, ...additionalStats] 
    : filteredData;

  // Get unique categories
  // const categories = ['all', ...new Set(accomplishmentsData.map(item => item.category))];

  // Refresh data simulation
  const handleRefresh = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <Section id="accomplishments" ref={sectionRef}>
      <SectionTitle>
        <AiFillTrophy style={{ marginRight: '0.5rem', color: '#f59e0b' }} />
        Personal Achievements
      </SectionTitle>
      
      {/* Enhanced description */}
      <div style={{ 
        textAlign: 'center', 
        maxWidth: '600px', 
        margin: '0 auto 2rem',
        color: 'rgba(255,255,255,0.7)',
        fontSize: '1.1rem',
        lineHeight: '1.6'
      }}>
        A snapshot of my journey in software development, community engagement, 
        and continuous learning. These numbers represent the passion and dedication 
        I bring to every project.
      </div>

      {/* Category Filter */}
      {/* <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        margin: '1.5rem 0',
        flexWrap: 'wrap'
      }}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              border: selectedCategory === category 
                ? '1px solid #6366f1' 
                : '1px solid rgba(255,255,255,0.2)',
              background: selectedCategory === category 
                ? 'rgba(99,102,241,0.2)' 
                : 'rgba(255,255,255,0.05)',
              color: selectedCategory === category ? '#ffffff' : 'rgba(255,255,255,0.7)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '0.9rem',
              textTransform: 'capitalize'
            }}
          >
            {category}
          </button>
        ))}
      </div> */}

      {/* Stats Grid */}
      <Boxes>
        {displayData.map((card, index) => {
          const animatedNumber = useCounterAnimation(card.number, 2000 + (index * 200), isVisible);
          
          return (
            <Box 
              key={card.id} 
              style={{ '--index': index }}
              onClick={() => card.link && handleNavigation(card.link, card.isExternal)}
              className={isVisible ? 'animate-in' : ''}
              title={card.description}
            >
              {/* Icon */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                marginBottom: '0.5rem'
              }}>
                <card.icon 
                  style={{ 
                    fontSize: '1.5rem', 
                    color: card.color || '#6366f1',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                  }} 
                />
                {card.isExternal && (
                  <FiExternalLink 
                    style={{ 
                      fontSize: '0.9rem', 
                      color: 'rgba(255,255,255,0.5)' 
                    }} 
                  />
                )}
              </div>

              {/* Number with animation */}
              <BoxNum data-text={`${animatedNumber}+`}>
                {isLoading ? (
                  <div style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderTop: '2px solid #6366f1',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }} />
                ) : (
                  `${animatedNumber}+`
                )}
              </BoxNum>

              {/* Text */}
              <BoxText>{card.text}</BoxText>

              {/* Progress bar for visual appeal */}
              <div style={{
                width: '100%',
                height: '2px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '1px',
                marginTop: '0.5rem',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: isVisible ? '100%' : '0%',
                  height: '100%',
                  background: `linear-gradient(90deg, ${card.color || '#6366f1'}, ${card.color || '#6366f1'}80)`,
                  transition: 'width 1.5s ease',
                  transitionDelay: `${index * 0.2}s`
                }} />
              </div>
            </Box>
          );
        })}
      </Boxes>

      {/* Enhanced CTA Section */}
      <Join>
        <JoinText data-text="Let's Connect & Build Something Amazing Together">
          Let's Connect & Build Something Amazing Together
          <AiFillRocket style={{ marginLeft: '0.5rem', color: '#f59e0b' }} />
        </JoinText>
        
        <IconContainer>
          {/* GitHub */}
          <a
            href="https://github.com/Shanidhya01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            data-platform="github"
            style={{ '--index': 0 }}
          >
            <AiFillGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shanidhya-kumar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
            data-platform="linkedin"
            style={{ '--index': 1 }}
          >
            <AiFillLinkedin />
          </a>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            aria-label="Refresh statistics"
            disabled={isLoading}
            style={{ '--index': 2 }}
          >
            <FiRefreshCw style={{ 
              animation: isLoading ? 'spin 1s linear infinite' : 'none' 
            }} />
          </button>

          {/* Toggle Additional Stats */}
          <button
            onClick={() => setShowAdditionalStats(!showAdditionalStats)}
            aria-label={showAdditionalStats ? 'Hide additional stats' : 'Show additional stats'}
            style={{ '--index': 3 }}
          >
            <BiTrendingUp />
          </button>
        </IconContainer>
      </Join>

      {/* Additional Info */}
      <div style={{
        textAlign: 'center',
        margin: '2rem 0',
        color: 'rgba(255,255,255,0.5)',
        fontSize: '0.9rem'
      }}>
        <p style={{ margin: '0' }}>
          Stats updated regularly • Last updated: {new Date().toLocaleDateString()}
        </p>
        <p style={{ margin: '0.5rem 0 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
          Made with <AiFillHeart style={{ color: '#ef4444' }} /> and lots of coffee ☕
        </p>
      </div>

      {/* CSS for spin animation */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </Section>
  );
};

export default Acomplishments;
