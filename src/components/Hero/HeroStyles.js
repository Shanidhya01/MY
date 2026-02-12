import styled, { keyframes, css } from 'styled-components';

/* ============ Animations ============ */
const fadeSlide = keyframes`
  0%   {opacity:0; transform:translateY(42px) scale(.96); filter:blur(8px);}
  55%  {opacity:1; transform:translateY(-6px) scale(1.01); filter:blur(0);}
  100% {opacity:1; transform:translateY(0) scale(1);}
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const gradientShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 30px rgba(99, 102, 241, 0.4),
                0 0 60px rgba(99, 102, 241, 0.2),
                0 0 90px rgba(99, 102, 241, 0.1);
  }
  50% {
    box-shadow: 0 0 40px rgba(99, 102, 241, 0.6),
                0 0 80px rgba(99, 102, 241, 0.4),
                0 0 120px rgba(99, 102, 241, 0.2);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const accentPulse = keyframes`
  0%,100% {opacity:.45; transform:scale(1);}
  50% {opacity:.9; transform:scale(1.05);}
`;

/* Reduced motion helper */
const noMotion = css`
  @media (prefers-reduced-motion: reduce){
    animation:none !important;
    transform:none !important;
    filter:none !important;
  }
`;

/* ============ Container ============ */
export const LeftSection = styled.div`
  --content-max: 880px;
  --pad-x: clamp(0.75rem, 1.2rem + 1vw, 2.25rem);
  position: relative;
  width: 100%;
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 0 var(--pad-x);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(1.4rem, 1rem + 1.2vw, 2.4rem);
  animation: ${fadeSlide} .85s cubic-bezier(.19,1,.22,1);
  ${noMotion};

  /* Smooth spacing control for direct children */
  & > * {
    margin: 0;
  }

  /* Optional modifier to center text */
  &.center {
    text-align: center;
    align-items: center;
  }

  /* Accent backdrop (toggle with .with-bg) */
  &.with-bg::before,
  &.with-bg::after {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    pointer-events: none;
  }
  &.with-bg::before {
    background:
      radial-gradient(circle at 22% 28%, rgba(99,102,241,.22), transparent 60%),
      radial-gradient(circle at 78% 70%, rgba(14,165,233,.18), transparent 65%);
    filter: blur(60px);
  }
  &.with-bg::after {
    background:
      linear-gradient(120deg, rgba(255,255,255,.06), rgba(255,255,255,0));
    mix-blend-mode: overlay;
    opacity: .4;
  }

  /* Decorative vertical accent line (toggle with .accent) */
  &.accent::before {
    content:"";
    position:absolute;
    left:0;
    top:8%;
    width:3px;
    height:84%;
    background: linear-gradient(180deg,#6366f1,#0ea5e9,#fbbf24 85%);
    border-radius:4px;
    animation:${accentPulse} 6s ease-in-out infinite;
    ${noMotion};
  }

  /* When combined */
  &.accent.center::before {
    left: 50%;
    transform: translateX(-50%);
    height: 72%;
  }

  /* Typography helpers (apply class to container) */
  &.tight h1,
  &.tight h2,
  &.tight p {
    letter-spacing: .01em;
  }

  &.wide h1,
  &.wide h2 {
    letter-spacing: .05em;
  }

  /* Responsive refinement */
  @media ${(p) => p.theme.breakpoints.lg} {
    --content-max: 900px;
  }
  @media ${(p) => p.theme.breakpoints.md} {
    --content-max: 100%;
    gap: clamp(1.25rem, 1rem + .8vw, 2rem);
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    --pad-x: clamp(.9rem, .6rem + 3vw, 1.4rem);
    gap: 1.4rem;
  }
`;

/* ============ Optional Word Reveal (use if needed) ============ */
const wordIn = keyframes`
  0%   {opacity:0; transform:translateY(30px) scale(.94); filter:blur(6px);}
  55%  {opacity:1; transform:translateY(-4px) scale(1.02); filter:blur(0);}
  100% {opacity:1; transform:translateY(0) scale(1);}
`;

export const TitleWrapper = styled.h1`
  margin: 0;
  font-weight: 700;
  line-height: 1.05;
  font-size: clamp(1.6rem, 1.2rem + 1.2vw, 2.6rem);
  display: flex;
  flex-wrap: wrap;
  gap: .7rem .8rem;
  align-items: flex-start;
  background: linear-gradient(90deg,#ffffff,#cbd5e1 60%,#93c5fd);
  -webkit-background-clip: text;
  color: transparent;
  ${noMotion};
`;

export const Word = styled.span`
  opacity: 0;
  display: inline-block;
  animation: ${wordIn} .85s cubic-bezier(.19,1,.22,1) forwards;
  animation-delay: calc(var(--i) * 140ms);
  will-change: transform, opacity, filter;
  ${noMotion};
`;

/* Blinking caret (optional) */
export const Caret = styled.span`
  width: 2px;
  height: 1em;
  background: #93c5fd;
  align-self: flex-end;
  margin-left: .25rem;
  animation: caretBlink 1s steps(1,end) infinite;
  @keyframes caretBlink { 50% { opacity: 0; } }
  ${noMotion};
`;

/* ============ New Enhanced Hero Components ============ */
export const HeroContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;

  @media ${(p) => p.theme.breakpoints.md} {
    padding: 3rem 1.5rem;
    min-height: auto;
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 2rem 1rem;
  }
`;

export const HeroContent = styled.div`
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media ${(p) => p.theme.breakpoints.lg} {
    gap: 3rem;
  }

  @media ${(p) => p.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: ${fadeInLeft} 0.8s ease-out;
  ${noMotion};

  @media ${(p) => p.theme.breakpoints.md} {
    align-items: center;
  }
`;

export const Greeting = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  animation: ${fadeInUp} 0.6s ease-out 0.1s both;
  ${noMotion};
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
  color: #fff;
  animation: ${fadeInUp} 0.6s ease-out 0.2s both;
  ${noMotion};
`;

export const GradientText = styled.span`
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientShift} 3s ease infinite;
  ${noMotion};
`;

export const TypingText = styled.div`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 600;
  color: #a5b4fc;
  min-height: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  animation: ${fadeInUp} 0.6s ease-out 0.3s both;
  ${noMotion};

  @media ${(p) => p.theme.breakpoints.md} {
    justify-content: center;
  }
`;

export const Cursor = styled.span`
  animation: ${blink} 1s steps(1) infinite;
  color: #6366f1;
  font-weight: 400;
  ${noMotion};
`;

export const HeroDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0;
  animation: ${fadeInUp} 0.6s ease-out 0.4s both;
  ${noMotion};

  @media ${(p) => p.theme.breakpoints.md} {
    max-width: 100%;
  }
`;

export const InfoBadges = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  animation: ${fadeInUp} 0.6s ease-out 0.5s both;
  ${noMotion};

  @media ${(p) => p.theme.breakpoints.md} {
    justify-content: center;
  }
`;

export const InfoBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 25px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;

  svg {
    color: #6366f1;
  }

  &:hover {
    background: rgba(99, 102, 241, 0.2);
    border-color: rgba(99, 102, 241, 0.5);
    transform: translateY(-2px);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
  animation: ${fadeInUp} 0.6s ease-out 0.6s both;
  ${noMotion};

  @media ${(p) => p.theme.breakpoints.md} {
    justify-content: center;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(99, 102, 241, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid rgba(99, 102, 241, 0.3);
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: rgba(99, 102, 241, 0.15);
    border-color: rgba(99, 102, 241, 0.5);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.2);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  animation: ${fadeInUp} 0.6s ease-out 0.7s both;
  ${noMotion};

  @media ${(p) => p.theme.breakpoints.md} {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(99, 102, 241, 0.2);
    border-color: rgba(99, 102, 241, 0.5);
    color: #fff;
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
  }
`;

export const HeroRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeInRight} 0.8s ease-out 0.3s both;
  ${noMotion};

  @media ${(p) => p.theme.breakpoints.md} {
    order: -1;
  }
`;

export const ProfileImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  will-change: transform;
  ${noMotion};

  @media ${(p) => p.theme.breakpoints.md} {
    max-width: 350px;
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    max-width: 280px;
  }
`;

export const ProfileImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(99, 102, 241, 0.3);
  box-shadow: 0 0 40px rgba(99, 102, 241, 0.3);
  position: relative;
  will-change: box-shadow;
  ${noMotion};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: 0 0 50px rgba(99, 102, 241, 0.4);
  }
`;

export const FloatingBadge = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(99, 102, 241, 0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  will-change: transform;
  ${noMotion};

  @media ${(p) => p.theme.breakpoints.sm} {
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
  }
`;