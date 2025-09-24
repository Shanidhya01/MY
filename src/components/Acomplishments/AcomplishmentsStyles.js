import styled, { keyframes, css } from "styled-components";

/* ============ Enhanced Animations ============ */
const floatIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.92) rotateX(15deg);
    filter: blur(8px);
  }
  50% {
    opacity: 0.8;
    transform: translateY(10px) scale(0.98) rotateX(5deg);
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotateX(0deg);
    filter: blur(0);
  }
`;
const pulseGlow = keyframes`
  0%, 100% {
    opacity: 0.35;
    transform: scale(1);
    filter: brightness(1);
  }
  50% {
    opacity: 0.85;
    transform: scale(1.08);
    filter: brightness(1.2);
  }
`;
const shimmerEffect = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;
const counterAnimation = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
const iconFloat = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-4px) rotate(2deg);
  }
  50% {
    transform: translateY(-2px) rotate(-1deg);
  }
  75% {
    transform: translateY(-6px) rotate(1deg);
  }
`;
const borderGlow = keyframes`
  0%, 100% {
    border-color: rgba(255,255,255,.07);
    box-shadow: 
      0 8px 20px -12px rgba(0,0,0,.55),
      0 0 0 1px rgba(255,255,255,.04) inset;
  }
  50% {
    border-color: rgba(99,102,241,.3);
    box-shadow: 
      0 8px 20px -12px rgba(99,102,241,.4),
      0 16px 38px -18px rgba(0,0,0,.70),
      0 0 0 1px rgba(99,102,241,.1) inset,
      0 0 20px rgba(99,102,241,.2);
  }
`;
const textReveal = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
`;
const backgroundPulse = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const noMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transition: none !important;
    transform: none !important;
    filter: none !important;
  }
`;

/* ============ Enhanced Grid Wrapper ============ */
export const Boxes = styled.div`
  --gap: clamp(1rem, 0.8rem + 0.8vw, 1.5rem);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(180px, 100%), 1fr));
  gap: var(--gap);
  margin: clamp(1rem, 0.8rem + 1.5vw, 2rem) 0 clamp(2rem, 1.5rem + 2vw, 3rem);
  align-items: stretch;
  perspective: 1000px;

  /* Staggered animation delays */
  & > * {
    animation-delay: calc(var(--index, 0) * 0.1s);
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: repeat(auto-fill, minmax(min(170px, 100%), 1fr));
    --gap: clamp(0.8rem, 0.6rem + 0.6vw, 1.2rem);
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: repeat(auto-fill, minmax(min(160px, 100%), 1fr));
    --gap: clamp(0.8rem, 0.6rem + 0.5vw, 1rem);
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
    max-width: 480px;
    margin: 1.5rem auto 2.5rem;
    --gap: 12px;
  }

  @media ${({ theme }) => theme.breakpoints.xs} {
    grid-template-columns: 1fr;
    max-width: 280px;
    --gap: 10px;
  }
`;

/* ============ Enhanced Single Box (Define First) ============ */
export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: clamp(1rem, 0.8rem + 0.6vw, 1.4rem);
  border-radius: 16px;
  background: 
    linear-gradient(165deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 50%, transparent 100%),
    linear-gradient(225deg, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
    linear-gradient(315deg, rgba(14, 165, 233, 0.05) 0%, transparent 50%);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 12px 32px -16px rgba(0, 0, 0, 0.6),
    0 4px 16px -8px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  min-height: 120px;
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
  transform-style: preserve-3d;

  animation: ${floatIn} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  ${noMotion};

  /* Enhanced multi-layer glow */
  &::before {
    content: "";
    position: absolute;
    inset: -10%;
    background: 
      radial-gradient(circle at 30% 25%, rgba(99, 102, 241, 0.6), transparent 65%),
      radial-gradient(circle at 70% 75%, rgba(14, 165, 233, 0.5), transparent 70%),
      radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.4), transparent 65%);
    filter: blur(40px) saturate(200%);
    opacity: 0;
    transform: scale(0.8) rotateZ(180deg);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: -2;
    animation: ${pulseGlow} 6s ease-in-out infinite;
    ${noMotion};
  }

  /* Shimmer effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 25%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.1) 75%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 200% 100%;
    opacity: 0;
    transform: skewX(-20deg);
    transition: all 0.6s ease;
    pointer-events: none;
    z-index: 1;
  }

  /* Enhanced hover effects */
  &:hover {
    transform: translateY(-8px) rotateX(5deg) scale(1.02);
    border-color: rgba(255, 255, 255, 0.25);
    box-shadow: 
      0 0 30px -8px rgba(99, 102, 241, 0.6),
      0 20px 50px -20px rgba(0, 0, 0, 0.8),
      0 8px 32px -12px rgba(99, 102, 241, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.12) inset;

    &::before {
      opacity: 0.8;
      transform: scale(1.1) rotateZ(0deg);
    }

    &::after {
      left: 100%;
      opacity: 1;
      animation: ${shimmerEffect} 0.8s ease-out;
      ${noMotion};
    }
  }

  /* Focus state for accessibility */
  &:focus-visible {
    outline: 2px solid #6366f1;
    outline-offset: 4px;
    transform: translateY(-4px);
  }

  /* Active state */
  &:active {
    transform: translateY(-4px) scale(0.98);
    transition-duration: 0.1s;
  }

  /* Intersection observer trigger */
  &.animate-in {
    animation-play-state: running;
  }

  /* Loading state */
  &.loading {
    animation: ${borderGlow} 2s ease-in-out infinite;
    ${noMotion};
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    min-height: 110px;
    border-radius: 14px;
    gap: 0.4rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    min-height: 100px;
    border-radius: 12px;
    gap: 0.3rem;
  }
`;

/* ============ Enhanced Big Number ============ */
export const BoxNum = styled.h5`
  margin: 0;
  font-weight: 800;
  font-size: clamp(2.5rem, 2.2rem + 1.8vw, 3.8rem);
  line-height: 0.9;
  letter-spacing: 0.02em;
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #e2e8f0 30%,
    #93c5fd 60%,
    #6366f1 100%
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  
  animation: 
    ${counterAnimation} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both,
    ${backgroundPulse} 4s ease-in-out infinite;
  ${noMotion};

  /* Enhanced glow effect */
  &::before {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    filter: blur(8px);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  ${Box}:hover &::before {
    opacity: 0.3;
  }

  /* Counter animation trigger */
  &[data-animate="true"] {
    animation-play-state: running;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: clamp(2.2rem, 2rem + 1.5vw, 3.2rem);
  }
`;

/* ============ Enhanced Text ============ */
export const BoxText = styled.p.attrs({ className: 'box-text' })`
  margin: 0;
  font-size: clamp(1rem, 0.92rem + 0.6vw, 1.35rem);
  line-height: 1.3;
  letter-spacing: 0.025em;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  /* Text reveal effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    animation: ${textReveal} 1.5s ease-out 0.3s both;
    ${noMotion};
  }

  /* Enhanced hover state */
  ${Box}:hover & {
    color: #ffffff;
    text-shadow: 0 2px 8px rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: clamp(0.95rem, 0.88rem + 0.5vw, 1.2rem);
    line-height: 1.25;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: clamp(0.9rem, 0.85rem + 1vw, 1.15rem);
    line-height: 1.2;
  }
`;

/* ============ Enhanced Call To Action Wrapper ============ */
export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: clamp(2.5rem, 2.2rem + 2.5vw, 6rem);
  gap: 1.5rem;
  flex-wrap: wrap;
  text-align: center;
  position: relative;
  
  animation: ${floatIn} 1s 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  ${noMotion};

  /* Decorative background */
  &::before {
    content: '';
    position: absolute;
    inset: -20px;
    background: 
      radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%);
    border-radius: 20px;
    opacity: 0;
    transition: opacity 0.6s ease;
    z-index: -1;
  }

  &:hover::before {
    opacity: 1;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    padding-bottom: clamp(2.2rem, 2rem + 2vw, 4.5rem);
    gap: 1.3rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    padding-bottom: 3.5rem;
    gap: 1.2rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding-bottom: 2.5rem;
    flex-direction: column;
    gap: 1.2rem;
  }

  @media ${({ theme }) => theme.breakpoints.xs} {
    padding-bottom: 2rem;
    gap: 1rem;
  }
`;

/* ============ Enhanced CTA Text ============ */
export const JoinText = styled.h5`
  margin: 0;
  font-size: clamp(1.4rem, 1.2rem + 0.9vw, 2rem);
  line-height: 1.25;
  letter-spacing: 0.02em;
  font-weight: 700;
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #e2e8f0 40%,
    #93c5fd 70%,
    #6366f1 100%
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  opacity: 0.9;
  position: relative;
  
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${backgroundPulse} 5s ease-in-out infinite;
  ${noMotion};

  /* Subtle glow */
  &::before {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    filter: blur(12px);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  ${Join}:hover & {
    opacity: 1;
    transform: translateY(-2px);
    
    &::before {
      opacity: 0.4;
    }
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: clamp(1.3rem, 1.1rem + 0.8vw, 1.8rem);
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-bottom: 0.6rem;
    font-size: clamp(1.2rem, 1rem + 0.7vw, 1.6rem);
  }
`;

/* ============ Enhanced Icons Container ============ */
export const IconContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  position: relative;

  @media ${({ theme }) => theme.breakpoints.md} {
    gap: 1rem;
    min-height: 48px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 200px;
    gap: 0.8rem;
    min-height: 44px;
  }

  @media ${({ theme }) => theme.breakpoints.xs} {
    width: 160px;
    gap: 0.6rem;
  }

  /* Enhanced icon styling */
  a, button {
    --size: 50px;
    width: var(--size);
    height: var(--size);
    display: grid;
    place-items: center;
    border-radius: 16px;
    background: 
      linear-gradient(145deg, #1e2534, #141a24),
      linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02));
    color: #e2e8f0;
    font-size: 1.25rem;
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 
      0 8px 20px -12px rgba(0, 0, 0, 0.6),
      0 4px 12px -8px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.05) inset;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    outline: none;
    overflow: hidden;
    
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    animation: ${iconFloat} 4s ease-in-out infinite;
    animation-delay: calc(var(--index, 0) * 0.2s);
    ${noMotion};

    /* Glow effect */
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(14, 165, 233, 0.2));
      opacity: 0;
      transition: opacity 0.4s ease;
      border-radius: inherit;
    }

    /* Ripple effect */
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: width 0.3s ease, height 0.3s ease;
    }

    &:hover {
      transform: translateY(-8px) scale(1.05);
      background: 
        linear-gradient(145deg, #2a3441, #1a212e),
        linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05));
      border-color: rgba(255, 255, 255, 0.25);
      box-shadow: 
        0 0 25px -8px rgba(99, 102, 241, 0.6),
        0 12px 30px -15px rgba(0, 0, 0, 0.8),
        0 6px 20px -10px rgba(99, 102, 241, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.1) inset;
      color: #ffffff;
      animation-play-state: paused;

      &::before {
        opacity: 1;
      }

      &::after {
        width: 100%;
        height: 100%;
        opacity: 0;
      }
    }

    &:active {
      transform: translateY(-4px) scale(0.98);
      transition-duration: 0.1s;
    }

    &:focus-visible {
      outline: 2px solid #6366f1;
      outline-offset: 4px;
      transform: translateY(-4px);
    }

    /* Platform specific colors */
    &[data-platform="github"]:hover::before {
      background: linear-gradient(135deg, rgba(51, 51, 51, 0.4), rgba(85, 85, 85, 0.3));
    }

    &[data-platform="linkedin"]:hover::before {
      background: linear-gradient(135deg, rgba(0, 119, 181, 0.4), rgba(0, 88, 133, 0.3));
    }

    &[data-platform="twitter"]:hover::before {
      background: linear-gradient(135deg, rgba(29, 161, 242, 0.4), rgba(13, 139, 217, 0.3));
    }

    @media ${({ theme }) => theme.breakpoints.md} {
      --size: 48px;
      font-size: 1.2rem;
      border-radius: 14px;
    }

    @media ${({ theme }) => theme.breakpoints.sm} {
      --size: 44px;
      font-size: 1.1rem;
      border-radius: 12px;
    }

    @media ${({ theme }) => theme.breakpoints.xs} {
      --size: 40px;
      font-size: 1rem;
      border-radius: 10px;
    }
  }
`;

/* ============ Additional Enhancement Components ============ */
export const SectionDivider = styled.div`
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4);
  margin: 2rem auto;
  border-radius: 2px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: inherit;
    filter: blur(6px);
    opacity: 0.6;
    border-radius: inherit;
  }
`;
export const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid #6366f1;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  ${noMotion};
`;
