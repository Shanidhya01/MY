import styled, { keyframes, css, createGlobalStyle } from 'styled-components';

/* ============ Enhanced Animations ============ */
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const backgroundShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

const floatingParticles = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.7;
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
    opacity: 1;
  }
  66% {
    transform: translateY(-10px) rotate(240deg);
    opacity: 0.8;
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.8;
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(99, 102, 241, 0.6);
  }
`;

const progressSlide = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const spin = keyframes`
  0% { 
    transform: rotate(0deg); 
  }
  100% { 
    transform: rotate(360deg); 
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

/* ============ Accessibility & Motion Preferences ============ */
const reduceMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transition: none !important;
    transform: none !important;
  }
`;

/* ============ Global Styles Enhancement ============ */
export const GlobalStyles = createGlobalStyle`
  * {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(15, 23, 42, 0.8);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border-radius: 4px;
    transition: background 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #4f46e5, #7c3aed);
  }

  ::selection {
    background: rgba(99, 102, 241, 0.3);
    color: white;
  }

  :focus-visible {
    outline: 2px solid #6366f1;
    outline-offset: 2px;
    border-radius: 4px;
  }

  html {
    font-size: clamp(14px, 1.5vw, 18px);
    overflow-x: hidden;
  }

  body {
    overflow-x: hidden;
    position: relative;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  }

  /* Enhanced focus management */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: #6366f1;
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 10000;
    transition: top 0.3s ease;
    
    &:focus {
      top: 6px;
    }
  }

  /* Animation keyframes */
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(300px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideOutRight {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(300px);
    }
  }

  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* Utility classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Loading states */
  .loading-shimmer {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.05) 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  /* Enhanced smooth scrolling for all browsers */
  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    * {
      border-color: ButtonText !important;
    }
  }

  /* Print styles */
  @media print {
    * {
      background: white !important;
      color: black !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }
    
    a, a:visited {
      text-decoration: underline;
    }
    
    .no-print {
      display: none !important;
    }
  }
`;

/* ============ Skip Link ============ */
export const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 6px;
  background: #6366f1;
  color: white;
  padding: 8px 12px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 10000;
  transition: top 0.3s ease;
  font-size: 0.9rem;
  font-weight: 600;
  
  &:focus {
    top: 6px;
  }
`;

/* ============ Progress Bar ============ */
export const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba(15, 23, 42, 0.8);
  z-index: 9999;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.progress || 0}%;
    height: 100%;
    background: linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transform: translateX(${props => props.progress < 100 ? '0' : '100px'});
    transition: transform 0.3s ease;
  }
  
  ${props => props.isLoading && css`
    &::after {
      animation: ${progressSlide} 1.5s infinite;
      ${reduceMotion};
    }
  `}
`;

/* ============ Enhanced Container ============ */
export const Container = styled.div`
  --container-padding: clamp(1rem, 4vw, 2rem);
  --max-width: ${props => {
    switch(props.size) {
      case 'xs': return '480px';
      case 'sm': return '768px';
      case 'md': return '1024px';
      case 'lg': return '1280px';
      case 'xl': return '1536px';
      case 'full': return '100%';
      default: return '1280px';
    }
  }};
  
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--container-padding);
  position: relative;
  box-sizing: border-box;
  
  ${props => props.animated && css`
    animation: ${fadeInUp} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: ${props.delay || '0s'};
    ${reduceMotion};
  `}
  
  ${props => props.centered && css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: ${props.fullHeight ? '100vh' : 'auto'};
  `}
  
  ${props => props.glass && css`
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  `}

  @media ${({ theme }) => theme.breakpoints.xl} {
    --container-padding: clamp(1.5rem, 3vw, 2.5rem);
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    --container-padding: clamp(1.2rem, 2.5vw, 2rem);
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    --container-padding: clamp(1rem, 2vw, 1.5rem);
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    --container-padding: 1rem;
  }

  @media ${({ theme }) => theme.breakpoints.xs} {
    --container-padding: 0.75rem;
  }
`;

/* ============ Layout Wrapper ============ */
export const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background: ${props => props.theme.colors?.body || '#0f172a'};
  
  /* Animated background gradient */
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.06) 0%, transparent 50%);
    background-size: 100% 100%, 80% 80%, 60% 60%;
    animation: ${backgroundShift} 20s ease-in-out infinite;
    pointer-events: none;
    z-index: -2;
    ${reduceMotion};
  }
  
  /* Floating particles effect */
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.15), transparent),
      radial-gradient(2px 2px at 40px 70px, rgba(99, 102, 241, 0.3), transparent),
      radial-gradient(1px 1px at 90px 40px, rgba(139, 92, 246, 0.25), transparent),
      radial-gradient(1px 1px at 130px 80px, rgba(6, 182, 212, 0.2), transparent);
    background-repeat: repeat;
    background-size: 150px 100px;
    animation: ${floatingParticles} 15s linear infinite;
    opacity: 0.4;
    pointer-events: none;
    z-index: -1;
    ${reduceMotion};
  }
`;

/* ============ Main Content Area ============ */
export const MainContent = styled.main`
  flex: 1;
  position: relative;
  z-index: 1;
  padding: 0;
  
  ${props => props.animated && css`
    animation: ${fadeInUp} 0.8s ease-out both;
    animation-delay: 0.2s;
    ${reduceMotion};
  `}
  
  /* Focus management for screen readers */
  &:focus {
    outline: none;
  }
`;

/* ============ Animation Wrappers ============ */
export const AnimatedWrapper = styled.div`
  animation: ${fadeInUp} 0.5s ease-out both;
  animation-delay: 0.1s;
  ${reduceMotion};
`;

export const FadeTransition = styled.div`
  opacity: ${props => props.visible ? 1 : 0};
  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(20px)'};
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  pointer-events: ${props => props.visible ? 'auto' : 'none'};
  ${reduceMotion};
`;

/* ============ Additional Animation Keyframes ============ */
const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(300px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOutRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(300px);
  }
`;

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

/* ============ Enhanced Notification Styles (Update existing NotificationContainer) ============ */
export const NotificationContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 350px;
  pointer-events: none; /* Allow clicks to pass through container */
  
  .notification {
    padding: 1rem 1.5rem;
    border-radius: 8px;
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 0.9rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    user-select: none;
    pointer-events: auto; /* Enable clicks on notifications */
    position: relative;
    overflow: hidden;
    animation: ${slideInRight} 0.3s ease-out both;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #6366f1, #8b5cf6);
    }
    
    &:hover {
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    }
    
    &--success {
      background: rgba(16, 185, 129, 0.15);
      border-color: rgba(16, 185, 129, 0.3);
      
      &::before {
        background: linear-gradient(90deg, #10b981, #059669);
      }
    }
    
    &--warning {
      background: rgba(245, 158, 11, 0.15);
      border-color: rgba(245, 158, 11, 0.3);
      
      &::before {
        background: linear-gradient(90deg, #f59e0b, #d97706);
      }
    }
    
    &--error {
      background: rgba(239, 68, 68, 0.15);
      border-color: rgba(239, 68, 68, 0.3);
      
      &::before {
        background: linear-gradient(90deg, #ef4444, #dc2626);
      }
    }
    
    &--info {
      background: rgba(99, 102, 241, 0.15);
      border-color: rgba(99, 102, 241, 0.3);
      
      &::before {
        background: linear-gradient(90deg, #6366f1, #4f46e5);
      }
    }
    
    button {
      background: none;
      border: none;
      color: inherit;
      margin-left: 0.5rem;
      cursor: pointer;
      font-size: 1.2rem;
      line-height: 1;
      padding: 0;
      opacity: 0.7;
      transition: opacity 0.2s ease;
      
      &:hover {
        opacity: 1;
      }
      
      &:focus {
        outline: 2px solid rgba(255, 255, 255, 0.3);
        outline-offset: 2px;
        border-radius: 2px;
      }
    }
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    top: 0.5rem;
    right: 0.5rem;
    left: 0.5rem;
    max-width: none;
    
    .notification {
      padding: 0.8rem 1.2rem;
      font-size: 0.85rem;
    }
  }
`;

/* ============ Enhanced Loading Components ============ */
export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => props.fullScreen ? '100vh' : '200px'};
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  text-align: center;
`;

export const LoadingSpinner = styled.div`
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  border: 3px solid rgba(99, 102, 241, 0.2);
  border-top: 3px solid #6366f1;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: 6px;
    border: 2px solid transparent;
    border-top: 2px solid #8b5cf6;
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite reverse;
  }
  
  ${reduceMotion};
`;

export const LoadingText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin: 0;
  animation: ${pulse} 1.5s ease-in-out infinite;
  font-weight: 500;
  letter-spacing: 0.025em;
  ${reduceMotion};
`;

/* ============ Card Component ============ */
export const Card = styled.div`
  background: ${props => props.glass ? 
    'rgba(255, 255, 255, 0.05)' : 
    props.background || 'rgba(255, 255, 255, 0.02)'};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.rounded || '16px'};
  padding: ${props => props.padding || 'clamp(1.5rem, 4vw, 2rem)'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  ${props => props.glass && css`
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  `}
  
  ${props => props.hover && css`
    cursor: pointer;
    
    &:hover {
      transform: translateY(-4px);
      border-color: rgba(99, 102, 241, 0.3);
      box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(99, 102, 241, 0.1) inset;
    }
  `}
  
  ${props => props.glow && css`
    animation: ${glow} 2s ease-in-out infinite;
    ${reduceMotion};
  `}
  
  ${props => props.shimmer && css`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
      );
      background-size: 200% 100%;
      animation: ${shimmer} 2s infinite;
      ${reduceMotion};
    }
  `}
`;

/* ============ Utility Components ============ */
export const Spacer = styled.div`
  height: ${props => props.size || '1rem'};
  width: 100%;
  
  @media ${({ theme }) => theme.breakpoints.md} {
    height: ${props => props.mdSize || props.size || '0.8rem'};
  }
  
  @media ${({ theme }) => theme.breakpoints.sm} {
    height: ${props => props.smSize || props.mdSize || props.size || '0.6rem'};
  }
`;

export const Divider = styled.div`
  width: ${props => props.width || '100%'};
  height: 1px;
  background: ${props => props.gradient ? 
    'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent)' :
    'rgba(255, 255, 255, 0.1)'};
  margin: ${props => props.margin || '2rem auto'};
  position: relative;
  
  ${props => props.animated && css`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.6),
        transparent
      );
      animation: ${shimmer} 2s infinite;
      ${reduceMotion};
    }
  `}
`;

/* ============ Responsive Visibility ============ */
export const Show = styled.div`
  ${props => props.above && css`
    display: none;
    
    @media (min-width: ${props.above}) {
      display: ${props.display || 'block'};
    }
  `}
  
  ${props => props.below && css`
    display: ${props.display || 'block'};
    
    @media (min-width: ${props.below}) {
      display: none;
    }
  `}
`;

export const Hide = styled.div`
  ${props => props.above && css`
    display: ${props.display || 'block'};
    
    @media (min-width: ${props.above}) {
      display: none;
    }
  `}
  
  ${props => props.below && css`
    display: none;
    
    @media (min-width: ${props.below}) {
      display: ${props.display || 'block'};
    }
  `}
`;

/* ============ Back To Top Button ============ */
export const BackToTopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px) scale(0.8);
  
  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5);
    animation: ${bounce} 0.6s ease-in-out;
    ${reduceMotion};
  }
  
  &:active {
    transform: translateY(-2px) scale(0.95);
  }
  
  &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    opacity: 0.7;
    animation: ${pulse} 1s ease-in-out infinite;
    ${reduceMotion};
  }

  /* Show/hide states */
  &[data-visible="true"] {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
    bottom: 1.5rem;
    right: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    bottom: 1rem;
    right: 1rem;
  }
`;

/* ============ Grid System ============ */
export const Grid = styled.div`
  display: grid;
  gap: ${props => props.gap || '2rem'};
  grid-template-columns: ${props => {
    if (props.columns) {
      if (typeof props.columns === 'number') {
        return `repeat(${props.columns}, 1fr)`;
      }
      return props.columns;
    }
    return 'repeat(auto-fit, minmax(300px, 1fr))';
  }};
  
  ${props => props.alignItems && css`
    align-items: ${props.alignItems};
  `}
  
  ${props => props.justifyItems && css`
    justify-items: ${props.justifyItems};
  `}

  @media ${({ theme }) => theme.breakpoints.lg} {
    gap: ${props => props.gap || '1.5rem'};
    grid-template-columns: ${props => 
      props.lgColumns || 'repeat(auto-fit, minmax(280px, 1fr))'};
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    gap: ${props => props.gap || '1.2rem'};
    grid-template-columns: ${props => 
      props.mdColumns || 'repeat(auto-fit, minmax(250px, 1fr))'};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    gap: ${props => props.gap || '1rem'};
    grid-template-columns: ${props => 
      props.smColumns || '1fr'};
  }
`;

/* ============ Flex System ============ */
export const Flex = styled.div`
  display: flex;
  gap: ${props => props.gap || '1rem'};
  
  ${props => props.direction && css`
    flex-direction: ${props.direction};
  `}
  
  ${props => props.align && css`
    align-items: ${props.align};
  `}
  
  ${props => props.justify && css`
    justify-content: ${props.justify};
  `}
  
  ${props => props.wrap && css`
    flex-wrap: ${props.wrap === true ? 'wrap' : props.wrap};
  `}
  
  ${props => props.responsive && css`
    @media ${({ theme }) => theme.breakpoints.md} {
      flex-direction: column;
      gap: ${props.responsiveGap || '1rem'};
    }
  `}

  @media ${({ theme }) => theme.breakpoints.sm} {
    gap: ${props => props.smGap || props.gap || '0.8rem'};
  }
`;

/* ============ Section Wrapper ============ */
export const SectionWrapper = styled.section`
  position: relative;
  padding: clamp(3rem, 8vw, 6rem) 0;
  
  ${props => props.variant === 'hero' && css`
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 0;
  `}
  
  ${props => props.variant === 'compact' && css`
    padding: clamp(2rem, 5vw, 4rem) 0;
  `}
  
  ${props => props.background && css`
    background: ${props.background};
  `}
  
  ${props => props.glass && css`
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  `}
  
  ${props => props.animated && css`
    animation: ${props.animationType === 'left' ? slideInFromLeft : 
                props.animationType === 'right' ? slideInFromRight : fadeInUp} 
               0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation-delay: ${props.delay || '0s'};
    ${reduceMotion};
  `}

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: clamp(2.5rem, 6vw, 4rem) 0;
    
    ${props => props.variant === 'compact' && css`
      padding: clamp(1.5rem, 4vw, 3rem) 0;
    `}
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: clamp(2rem, 5vw, 3rem) 0;
    
    ${props => props.variant === 'compact' && css`
      padding: clamp(1rem, 3vw, 2rem) 0;
    `}
  }
`;
