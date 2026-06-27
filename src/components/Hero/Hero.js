import React, { useState, useEffect } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { BiCodeAlt, BiMapPin } from 'react-icons/bi';
import {
  LeftSection,
  HeroTitle,
  GradientText,
  TypingText,
  Cursor,
  HeroDescription,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  SocialLinks,
  SocialLink,
  InfoBadges,
  InfoBadge,
} from './HeroStyles';

const roles = [
  'Full-Stack Developer',
  'MERN Stack Engineer',
  'Open Source Contributor',
  'Problem Solver',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          75
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <LeftSection>
      <p style={{
        fontSize: '1.1rem',
        fontWeight: 600,
        color: 'rgba(255,255,255,0.7)',
        margin: 0,
        letterSpacing: '0.05em',
      }}>
        Hi there, I'm
      </p>

      <HeroTitle>
        <GradientText>Shanidhya Kumar</GradientText>
      </HeroTitle>

      <TypingText>
        <span>{displayed}</span>
        <Cursor>|</Cursor>
      </TypingText>

      <HeroDescription>
        Aspiring full-stack developer passionate about building secure, scalable,
        and user-friendly applications. I love turning ideas into impactful
        solutions through creative problem-solving and clean code.
      </HeroDescription>

      <InfoBadges>
        <InfoBadge>
          <BiMapPin />
          Bengaluru, India
        </InfoBadge>
        <InfoBadge>
          <BiCodeAlt />
          25+ Projects
        </InfoBadge>
        <InfoBadge>
          <span style={{ color: '#10b981', fontSize: '0.7rem' }}>●</span>
          Available for Hire
        </InfoBadge>
      </InfoBadges>

      <ButtonGroup>
        <PrimaryButton href="/Shanidhya_Resume.pdf" download>
          <FiDownload /> Download Resume
        </PrimaryButton>
        <SecondaryButton
          as="a"
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          View Projects <FiArrowRight />
        </SecondaryButton>
      </ButtonGroup>

      <SocialLinks>
        <SocialLink
          href="https://github.com/Shanidhya01"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <AiFillGithub />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/shanidhya-kumar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <AiFillLinkedin />
        </SocialLink>
      </SocialLinks>
    </LeftSection>
  );
};

export default Hero;
