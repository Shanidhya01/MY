import React from 'react';
import styled, { keyframes } from 'styled-components';

/* ============ Enhanced Animations ============ */
const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const particleFloat = keyframes`
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0.6;
  }
  25% {
    transform: translate(30px, -30px) rotate(90deg);
    opacity: 0.8;
  }
  50% {
    transform: translate(-20px, 20px) rotate(180deg);
    opacity: 0.4;
  }
  75% {
    transform: translate(20px, 30px) rotate(270deg);
    opacity: 0.7;
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

/* ============ Modern Background Container ============ */
const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  
  /* Modern gradient background */
  background: ${({ variant }) => {
    switch (variant) {
      case 'hero':
        return `
          radial-gradient(ellipse at top left, rgba(99, 102, 241, 0.2) 0%, transparent 35%),
          radial-gradient(ellipse at top right, rgba(139, 92, 246, 0.15) 0%, transparent 35%),
          radial-gradient(ellipse at bottom center, rgba(6, 182, 212, 0.1) 0%, transparent 35%),
          linear-gradient(135deg, 
            #0d1117 0%, 
            #161b22 20%, 
            #21262d 40%, 
            #161b22 60%, 
            #0d1117 100%
          )
        `;
      case 'flowing':
        return `
          linear-gradient(-45deg, 
            #0d1117, 
            #161b22, 
            #21262d, 
            #30363d
          )
        `;
      default:
        return `
          linear-gradient(135deg, 
            #0d1117 0%, 
            #161b22 50%, 
            #0d1117 100%
          )
        `;
    }
  }};
  
  background-size: ${({ variant }) => {
    switch (variant) {
      case 'hero':
        return '100% 100%, 100% 100%, 100% 100%, 100% 100%';
      case 'flowing':
        return '400% 400%';
      default:
        return '100% 100%';
    }
  }};
  
  background-position: center;
  background-attachment: fixed;
  
  ${({ variant, animated }) => variant === 'flowing' && animated && `
    animation: ${gradientFlow} 20s ease infinite;
  `}
  
  /* Smooth rendering */
  backface-visibility: hidden;
  transform: translateZ(0);
  will-change: background-position;
`;

/* ============ Enhanced Particle System ============ */
const ParticleLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.7;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle 2px at 20% 30%, rgba(99, 102, 241, 0.6), transparent 3px),
      radial-gradient(circle 1px at 60% 70%, rgba(139, 92, 246, 0.5), transparent 2px),
      radial-gradient(circle 1px at 80% 10%, rgba(6, 182, 212, 0.6), transparent 2px),
      radial-gradient(circle 1px at 40% 80%, rgba(16, 185, 129, 0.4), transparent 2px),
      radial-gradient(circle 1px at 10% 60%, rgba(245, 158, 11, 0.5), transparent 2px);
    background-size: 600px 600px, 400px 400px, 300px 300px, 500px 500px, 350px 350px;
  }
  
  &::before {
    animation: ${particleFloat} 25s linear infinite;
  }
  
  &::after {
    animation: ${particleFloat} 30s linear infinite reverse;
    opacity: 0.5;
  }
  
  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      animation: none;
    }
  }
`;

/* ============ Shimmer Effect ============ */
const ShimmerLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background: linear-gradient(
    110deg,
    transparent 0%,
    rgba(255, 255, 255, 0.05) 45%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 55%,
    transparent 100%
  );
  background-size: 300% 100%;
  animation: ${shimmer} 12s ease-in-out infinite;
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* ============ Main Component ============ */
const SmoothBackground = ({
  variant = 'hero',
  animated = true,
  particles = true,
  shimmer = true,
  className = '',
  children
}) => {
  return (
    <BackgroundContainer 
      variant={variant} 
      animated={animated}
      className={className}
    >
      {particles && <ParticleLayer />}
      {shimmer && <ShimmerLayer />}
      {children}
    </BackgroundContainer>
  );
};

export default SmoothBackground;

/* ============ Background Variants ============ */
export const backgroundVariants = {
  hero: {
    variant: 'hero',
    animated: true,
    particles: true,
    shimmer: true,
  },
  flowing: {
    variant: 'flowing',
    animated: true,
    particles: true,
    shimmer: false,
  },
  minimal: {
    variant: 'default',
    animated: false,
    particles: false,
    shimmer: false,
  }
};