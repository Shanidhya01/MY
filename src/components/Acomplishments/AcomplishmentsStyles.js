import styled, { keyframes, css } from "styled-components";

/* Animations */
const floatIn = keyframes`
  0% {opacity:0; transform:translateY(28px) scale(.94)}
  100% {opacity:1; transform:translateY(0) scale(1)}
`;
const pulseGlow = keyframes`
  0%,100% {opacity:.35; transform:scale(1)}
  50% {opacity:.75; transform:scale(1.06)}
`;

const noMotion = css`
  @media (prefers-reduced-motion: reduce){
    animation:none !important;
    transition:none !important;
    transform:none !important;
  }
`;

/* Grid Wrapper (smaller boxes) */
export const Boxes = styled.div`
  --gap: clamp(.75rem, .6rem + .6vw, 1.2rem);
  width:100%;
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(min(160px,100%),1fr));
  gap:var(--gap);
  margin:clamp(.8rem,.6rem + 1.2vw,1.6rem) 0 clamp(1.8rem,1.2rem + 1.6vw,2.4rem);
  align-items:stretch;

  @media ${({theme})=>theme.breakpoints.md}{
    grid-template-columns:repeat(auto-fill, minmax(min(150px,100%),1fr));
  }
  @media ${({theme})=>theme.breakpoints.sm}{
    grid-template-columns:repeat(2,1fr);
    max-width:460px;
    margin:1.2rem auto 2rem;
    --gap:10px;
  }
`;

/* Big Number */
export const BoxNum = styled.h5`
  margin:0;
  font-weight:700;
  font-size:clamp(2.2rem, 1.9rem + 1.4vw, 3.1rem); /* bigger */
  line-height:1;
  letter-spacing:.035em;
  background:linear-gradient(90deg,#ffffff,#cbd5e1 55%,#93c5fd);
  -webkit-background-clip:text;
  color:transparent;
`;

/* Text */
export const BoxText = styled.p.attrs({ className: 'box-text' })`
  margin:0;
  font-size:clamp(.95rem, .88rem + .5vw, 1.25rem);
  line-height:1.25;
  letter-spacing:.02em;
  font-weight:500;
  color:rgba(255,255,255,.85);
  transition:color .45s;
  @media ${({theme})=>theme.breakpoints.sm}{
    font-size:clamp(.9rem, .85rem + 1vw, 1.1rem);
  }
`;

/* Single Box (reduced size) */
export const Box = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  gap:.35rem;
  padding:clamp(.75rem,.6rem + .4vw,1rem);
  border-radius:14px;
  background:linear-gradient(160deg, rgba(255,255,255,.08), rgba(255,255,255,.02));
  backdrop-filter:blur(12px) saturate(140%);
  -webkit-backdrop-filter:blur(12px) saturate(140%);
  border:1px solid rgba(255,255,255,.07);
  box-shadow:0 8px 20px -12px rgba(0,0,0,.55), 0 0 0 1px rgba(255,255,255,.04) inset;
  min-height:110px;
  animation:${floatIn} .6s cubic-bezier(.19,1,.22,1);
  transition:transform .55s, box-shadow .5s, border-color .45s;
  overflow:hidden;
  isolation:isolate;

  /* Glow layer */
  &::before{
    content:"";
    position:absolute;
    inset:-8%;
    background:
      radial-gradient(circle at 28% 30%, rgba(99,102,241,.55), transparent 60%),
      radial-gradient(circle at 72% 70%, rgba(14,165,233,.45), transparent 65%),
      radial-gradient(circle at 55% 45%, rgba(251,191,36,.35), transparent 62%);
    filter:blur(34px) saturate(140%);
    opacity:0;
    transform:scale(.85);
    transition:opacity .7s ease, transform .7s cubic-bezier(.19,1,.22,1);
    z-index:-1;
  }

  /* Subtle moving sheen */
  &::after{
    content:"";
    position:absolute;
    top:0; left:-60%;
    width:55%; height:100%;
    background:linear-gradient(110deg,rgba(255,255,255,.15),rgba(255,255,255,0) 60%);
    mix-blend-mode:overlay;
    opacity:0;
    transform:skewX(-15deg) translateX(0);
    transition:opacity .6s;
    pointer-events:none;
  }

  &:hover{
    transform:translateY(-6px);
    border-color:rgba(255,255,255,.18);
    box-shadow:
      0 0 22px -4px rgba(99,102,241,.55),
      0 16px 38px -18px rgba(0,0,0,.70),
      0 0 0 1px rgba(255,255,255,.08) inset;
  }

  /* Hover text color via class (no JS variable reference) */
  &:hover .box-text { color:#fff; }

  ${noMotion};
`;

/* Call To Action Wrapper */
export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: clamp(2.2rem, 2rem + 2vw, 5rem);
  gap: 1.2rem;
  flex-wrap: wrap;
  text-align: center;
  animation: ${floatIn} .8s .15s cubic-bezier(.19,1,.22,1) both;
  ${noMotion};

  @media ${({ theme }) => theme.breakpoints.md} {
    padding-bottom: 3.2rem;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    padding-bottom: 2rem;
    flex-direction: column;
    gap: .9rem;
  }
`;

/* CTA Text */
export const JoinText = styled.h5`
  margin: 0;
  font-size: clamp(1.25rem, 1.1rem + .7vw, 1.7rem);
  line-height: 1.3;
  letter-spacing: .035em;
  font-weight: 600;
  background: linear-gradient(90deg,#ffffff,#e2e8f0 55%,#93c5fd);
  -webkit-background-clip: text;
  color: transparent;
  opacity:.85;
  transition: opacity .45s;
  ${Join}:hover & { opacity:1; }

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-bottom: .4rem;
  }
`;

/* Icons holder */
export const IconContainer = styled.div`
  display: flex;
  gap: .9rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 48px;

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 180px;
    gap: .6rem;
  }

  /* Optional style for anchor icons inside */
  a, button {
    --size: 46px;
    width: var(--size);
    height: var(--size);
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: linear-gradient(150deg,#1e2534,#141a24);
    color: #e2e8f0;
    font-size: 1.15rem;
    border: 1px solid rgba(255,255,255,.08);
    box-shadow: 0 6px 16px -8px rgba(0,0,0,.55);
    cursor: pointer;
    position: relative;
    transition: .55s cubic-bezier(.19,1,.22,1);
    text-decoration: none;
    outline: none;
  }
  a:hover, button:hover {
    transform: translateY(-6px);
    background: linear-gradient(150deg,#262f42,#161e29);
    border-color: rgba(255,255,255,.18);
  }
  a:active, button:active {
    transform: translateY(-2px);
  }
  a:focus-visible, button:focus-visible {
    outline: 2px solid #6366f1;
    outline-offset: 4px;
  }
`;
