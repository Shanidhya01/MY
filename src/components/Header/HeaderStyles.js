import styled, { keyframes, css } from 'styled-components';
import { IoIosArrowDropdown } from 'react-icons/io';

/* ============ Enhanced Animations ============ */
const fadeDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px) scale(0.98);
    filter: blur(4px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
`;

const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const mobileSlideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%) scaleY(0.8);
    filter: blur(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scaleY(1);
    filter: blur(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 8px rgba(99, 102, 241, 0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(-4px);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(99, 102, 241, 0.6);
  }
`;

/* Reduced motion helper */
const noMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transform: none !important;
    filter: none !important;
    transition: none !important;
  }
`;

/* ============ Enhanced Container ============ */
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1200;
  
  /* Enhanced glassmorphism background */
  --header-bg: rgba(15, 22, 36, 0.92);
  --header-border: rgba(255, 255, 255, 0.12);
  --header-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background: var(--header-bg);
  border-bottom: 1px solid var(--header-border);
  box-shadow: var(--header-shadow);
  
  animation: ${fadeDown} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  ${noMotion};

  /* Enhanced grid layout */
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: "brand nav icons";
  align-items: center;
  gap: 1rem;
  padding: 1rem clamp(1rem, 2.5vw, 2rem);
  min-height: 80px;

  /* Scroll effect */
  &.scrolled {
    --header-bg: rgba(15, 22, 36, 0.95);
    --header-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(15px);
    border-bottom-color: rgba(255, 255, 255, 0.2);
  }

  /* Enhanced hover effects */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(99, 102, 241, 0.5) 25%,
      rgba(14, 165, 233, 0.5) 50%,
      rgba(251, 191, 36, 0.5) 75%,
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media ${(p) => p.theme.breakpoints.md} {
    padding: 0.8rem clamp(0.8rem, 2vw, 1.5rem);
    min-height: 70px;
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    grid-template-columns: 50px 1fr auto;
    grid-template-areas: "menu brand icons";
    padding: 0.6rem 1rem;
    min-height: 65px;
    gap: 0.8rem;
  }
`;

/* ============ Enhanced Brand Section ============ */
export const Div1 = styled.div`
  grid-area: brand;
  display: flex;
  align-items: center;
  justify-self: start;
  
  animation: ${slideInLeft} 0.8s ease-out 0.2s both;
  ${noMotion};

  @media ${(p) => p.theme.breakpoints.sm} {
    justify-self: center;
  }
`;

export const BrandLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  line-height: 1;
  font-size: 1.05rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  padding: 6px 8px;
  position: relative;
  overflow: hidden;

  /* Enhanced hover effects */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(14, 165, 233, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: inherit;
  }

  &:hover {
    transform: translateY(-2px) scale(1.02);
    color: #6366f1;
    
    &::before {
      opacity: 1;
    }
  }

  &:focus-visible {
    outline: 2px solid #6366f1;
    outline-offset: 4px;
  }

  /* Icon styling */
  & > svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }

  &:hover > svg {
    transform: rotate(5deg) scale(1.1);
  }

  /* Text styling */
  span {
    white-space: nowrap;
    background: linear-gradient(135deg, #ffffff, #e2e8f0);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease;
  }

  &:hover span {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    background-clip: text;
    -webkit-background-clip: text;
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 1.2rem;
    gap: 6px;
    padding: 4px 6px;
    
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

/* ============ Enhanced Navigation ============ */
export const Div2 = styled.ul`
  grid-area: nav;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(0.8rem, 0.8rem + 0.8vw, 1.5rem);
  
  animation: ${fadeDown} 0.8s ease-out 0.4s both;
  ${noMotion};

  @media ${(p) => p.theme.breakpoints.sm} {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.85);
  position: relative;
  padding: 0.6rem 0.4rem;
  display: inline-flex;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 6px;
  overflow: hidden;

  /* Enhanced gradient underline */
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #6366f1, #0ea5e9, #fbbf24);
    background-size: 200% 100%;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 2px;
    transform: translateX(-50%);
    animation: ${shimmer} 2s linear infinite;
    animation-play-state: paused;
  }

  /* Background hover effect */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.05);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: inherit;
  }

  &:hover {
    color: #ffffff;
    transform: translateY(-2px);
    text-shadow: 0 2px 8px rgba(255, 255, 255, 0.3);
    
    &::after {
      width: 70%;
      animation-play-state: running;
    }
    
    &::before {
      opacity: 1;
    }
  }

  &:focus-visible {
    outline: 2px solid #6366f1;
    outline-offset: 4px;
    color: #ffffff;
  }

  /* Active state */
  &.active {
    color: #6366f1;
    
    &::after {
      width: 70%;
      background: #6366f1;
    }
  }

  @media ${(p) => p.theme.breakpoints.md} {
    font-size: 0.9rem;
    padding: 0.5rem 0.3rem;
  }
`;

/* ============ Enhanced Social Icons ============ */
export const Div3 = styled.div`
  grid-area: icons;
  display: flex;
  align-items: center;
  justify-self: end;
  gap: 0.5rem;
  
  animation: ${slideInRight} 0.8s ease-out 0.6s both;
  ${noMotion};
`;

export const SocialIcons = styled.a`
  color: #ffffff;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);

  /* Icon sizing */
  & > svg {
    width: 20px;
    height: 20px;
    transition: all 0.3s ease;
    z-index: 2;
    position: relative;
  }

  /* Enhanced hover background */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    opacity: 0;
    transition: all 0.3s ease;
    border-radius: inherit;
  }

  /* Shimmer effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
    border-color: rgba(255, 255, 255, 0.3);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      left: 100%;
    }
    
    & > svg {
      transform: scale(1.1);
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    }
  }

  &:focus-visible {
    outline: 2px solid #6366f1;
    outline-offset: 4px;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }

  /* Platform-specific colors */
  &[data-platform="github"]:hover::before {
    background: linear-gradient(135deg, #333, #555);
  }
  
  &[data-platform="linkedin"]:hover::before {
    background: linear-gradient(135deg, #0077b5, #005885);
  }
  
  &[data-platform="twitter"]:hover::before {
    background: linear-gradient(135deg, #1da1f2, #0d8bd9);
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    width: 36px;
    height: 36px;
    
    & > svg {
      width: 18px;
      height: 18px;
    }
  }
`;

/* ============ Enhanced Mobile Menu ============ */
export const MenuButton = styled.button`
  grid-area: menu;
  display: none;
  
  @media ${(p) => p.theme.breakpoints.sm} {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.08);
    color: #e2e8f0;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 1.2rem;
    position: relative;
    overflow: hidden;

    /* Animated background */
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(14, 165, 233, 0.2));
      opacity: 0;
      transition: opacity 0.3s ease;
      border-radius: inherit;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-1px);
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
      
      &::before {
        opacity: 1;
      }
    }

    &:focus-visible {
      outline: 2px solid #6366f1;
      outline-offset: 2px;
    }

    &:active {
      transform: translateY(0);
    }

    /* Menu icon animation */
    &[aria-expanded="true"] {
      background: rgba(99, 102, 241, 0.2);
      border-color: rgba(99, 102, 241, 0.4);
      
      svg {
        transform: rotate(90deg);
      }
    }

    svg {
      transition: transform 0.3s ease;
    }
  }
`;

export const MobileNav = styled.nav`
  position: fixed;
  top: var(--header-h, 65px);
  left: 0;
  right: 0;
  z-index: 1190;
  
  background: rgba(15, 22, 36, 0.98);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

  transform-origin: top;
  transform: scaleY(0.8) translateY(-20px);
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 0;
  overflow: hidden;

  &[data-open="true"] {
    transform: scaleY(1) translateY(0);
    opacity: 1;
    pointer-events: auto;
    max-height: 100vh;
    animation: ${mobileSlideDown} 0.4s ease-out;
    ${noMotion};
  }

  /* Enhanced gradient border */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #6366f1, #0ea5e9, #fbbf24);
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0.8rem;
  display: grid;
  gap: 0.3rem;

  a {
    display: block;
    padding: 0.8rem 1rem;
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);

    /* Staggered animation */
    opacity: 0;
    transform: translateX(-30px);
    animation: ${slideInLeft} 0.4s ease-out forwards;
    animation-delay: calc(var(--i, 0) * 0.1s);

    /* Hover background */
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(14, 165, 233, 0.2));
      opacity: 0;
      transition: opacity 0.3s ease;
      border-radius: inherit;
    }

    &:hover {
      color: #ffffff;
      transform: translateX(6px);
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(255, 255, 255, 0.2);
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
      
      &::before {
        opacity: 1;
      }
    }

    &:active {
      transform: translateX(3px);
    }

    /* Active state */
    &.active {
      color: #6366f1;
      background: rgba(99, 102, 241, 0.1);
      border-color: rgba(99, 102, 241, 0.3);
    }
  }
`;

/* ============ Utility Components ============ */
export const HeaderSpacer = styled.div`
  height: var(--header-h, 80px);
  transition: height 0.3s ease;

  @media ${(p) => p.theme.breakpoints.md} {
    height: var(--header-h, 70px);
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    height: var(--header-h, 65px);
  }
`;

export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  align-items: center;
  background: none;
  font-size: 0.8rem;
  line-height: 1;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  position: relative;
  overflow: hidden;

  /* Background hover effect */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.05);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: inherit;
  }

  &:hover {
    color: #ffffff;
    transform: translateY(-1px);
    
    &::before {
      opacity: 1;
    }
  }

  &:focus-visible {
    outline: 2px solid #6366f1;
    outline-offset: 2px;
    color: #ffffff;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 6px;
  display: flex;
  align-self: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1) rotate(180deg)' : 'scaleY(1) rotate(0deg)')};
  filter: ${({ isOpen }) => (isOpen ? 'drop-shadow(0 2px 4px rgba(99, 102, 241, 0.4))' : 'none')};
`;

/* ============ Special Effects ============ */
export const NotificationBadge = styled.span`
  position: absolute;
  top: -2px;
  right: -2px;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  font-size: 0.6rem;
  font-weight: 600;
  padding: 1px 4px;
  border-radius: 8px;
  min-width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${pulse} 2s infinite;
  ${noMotion};
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: inherit;
    border-radius: inherit;
    opacity: 0.3;
    animation: ${glow} 2s ease-in-out infinite;
    ${noMotion};
  }
`;

export const ThemeToggle = styled.button`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-1px) scale(1.05);
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
    
    svg {
      transform: rotate(20deg);
    }
  }

  &:focus-visible {
    outline: 2px solid #6366f1;
    outline-offset: 2px;
  }
`;