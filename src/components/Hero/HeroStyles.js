import styled, { keyframes, css } from 'styled-components';

/* ============ Animations ============ */
const fadeSlide = keyframes`
  0%   {opacity:0; transform:translateY(42px) scale(.96); filter:blur(8px);}
  55%  {opacity:1; transform:translateY(-6px) scale(1.01); filter:blur(0);}
  100% {opacity:1; transform:translateY(0) scale(1);}
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