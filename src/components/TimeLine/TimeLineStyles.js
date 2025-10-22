import styled, { keyframes, css } from 'styled-components';

/* ================================= Animations ================================= */
const riseIn = keyframes`
  0% {opacity:0; transform:translateY(32px) scale(.94)}
  100% {opacity:1; transform:translateY(0) scale(1)}
`;
const glow = keyframes`
  0%,100% {opacity:.55; transform:scale(1)}
  50% {opacity:1; transform:scale(1.14)}
`;
const sheen = keyframes`
  0% {transform:translateX(-120%)}
  100% {transform:translateX(220%)}
`;
const pulseLine = keyframes`
  0% {background-position:0% 50%}
  50% {background-position:100% 50%}
  100% {background-position:0% 50%}
`;

const noMotion = css`
  @media (prefers-reduced-motion: reduce){
    animation:none !important;
    transition:none !important;
    transform:none !important;
  }
`;

/* ================================= Shared Helpers ================================= */
const glass = css`
  background: linear-gradient(155deg, rgba(255,255,255,.07), rgba(255,255,255,.015));
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
`;

/* ================================= Container ================================= */
export const CarouselContainer = styled.ul`
  --gap: clamp(1.4rem, 1rem + 1.2vw, 2.6rem);
  --pad: clamp(1.3rem, 1.1rem + .8vw, 2rem);
  max-width: 1300px;
  width: 100%;
  margin: 0 auto clamp(4rem, 3rem + 2vw, 5.5rem);
  padding: var(--pad);
  list-style: none;
  display: flex;
  gap: var(--gap);
  position: relative;
  align-items: stretch;
  border-radius: 34px;
  ${glass};
  box-shadow: 0 24px 56px -28px rgba(0,0,0,.78), 0 0 0 1px rgba(255,255,255,.06) inset;
  overflow-x: auto;
  overflow-y: visible;
  animation: ${riseIn} .85s cubic-bezier(.19,1,.22,1);
  ${noMotion};

  &::after{
    content:"";
    position:absolute;
    inset:0;
    background:
      radial-gradient(circle at 18% 22%, rgba(255,255,255,.08), transparent 60%),
      radial-gradient(circle at 80% 72%, rgba(255,255,255,.05), transparent 65%);
    mix-blend-mode:overlay;
    pointer-events:none;
  }

  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    height: 8px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(99,102,241,0.18);
    border-radius: 8px;
  }

  @media ${(p)=>p.theme.breakpoints.sm}{
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 0;
    background: transparent;
    padding: 0 0 1.4rem;
    border-radius: 0;
    box-shadow: none;
    min-width: 100vw;
    max-width: 100vw;
  }
`;

export const CarouselMobileScrollNode = styled.div`
  @media ${(p)=>p.theme.breakpoints.sm}{
    display:flex;
    min-width:${({final})=> final ? '120%' : 'min-content'};
  }
`;

/* ================================= Item ================================= */
export const CarouselItem = styled.li`
  --ring: linear-gradient(120deg,#6366f1,#0ea5e9,#fbbf24,#ec4899,#6366f1);
  position:relative;
  flex:0 0 235px;
  display:flex;
  flex-direction:column;
  gap:.85rem;
  padding:1.25rem 1.2rem 1.45rem;
  border-radius:24px;
  border:1px solid rgba(255,255,255,.09);
  ${glass};
  box-shadow:0 14px 34px -18px rgba(0,0,0,.72), 0 0 0 1px rgba(255,255,255,.05) inset;
  overflow:hidden;
  isolation:isolate;
  transition:
    transform .85s cubic-bezier(.19,1,.22,1),
    box-shadow .7s cubic-bezier(.19,1,.22,1),
    border-color .6s;

  /* Gradient ring */
  &::before{
    content:"";
    position:absolute;
    inset:0;
    padding:1px;
    border-radius:inherit;
    background:var(--ring);
    background-size:280% 280%;
    opacity:0;
    transition:opacity .65s;
    -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
    -webkit-mask-composite:xor;
            mask-composite:exclude;
    pointer-events:none;
  }

  /* Light sweep */
  &::after{
    content:"";
    position:absolute;
    top:0;
    bottom:0;
    left:-40%;
    width:40%;
    background:linear-gradient(100deg,rgba(255,255,255,.14),rgba(255,255,255,0));
    transform:translateX(-120%);
    opacity:0;
    pointer-events:none;
  }

  &:hover{
    transform:translateY(-14px) perspective(900px) rotateX(6deg);
    border-color:rgba(255,255,255,.18);
    box-shadow:
      0 26px 54px -26px rgba(0,0,0,.85),
      0 0 0 1px rgba(255,255,255,.08) inset;
  }
  &:hover::before{opacity:.85;}
  &:hover::after{
    opacity:1;
    animation:${sheen} 1.4s cubic-bezier(.19,1,.22,1);
  }

  /* Focus accessible */
  &:focus-within{
    outline:3px solid #6366f1;
    outline-offset:4px;
  }

  /* Timeline node (desktop) */
  & > i.timeline-node{
    position:absolute;
    top:50%;
    left:-24px;
    transform:translateY(-50%);
    width:18px;
    height:18px;
    border-radius:50%;
    background:linear-gradient(135deg,#6366f1,#0ea5e9);
    box-shadow:0 0 0 6px rgba(99,102,241,.35);
    animation:${glow} 6s ease-in-out infinite;
    ${noMotion};
  }

  /* Variant (success, danger etc) via prop */
  ${({variant}) => variant === 'alt' && css`
    --ring: linear-gradient(120deg,#14b8a6,#0ea5e9,#6366f1,#14b8a6);
  `}

  @media ${(p)=>p.theme.breakpoints.lg}{
    flex:0 0 215px;
  }
  @media ${(p)=>p.theme.breakpoints.md}{
    flex:0 0 185px;
    padding:1.05rem 1rem 1.25rem;
  }
  @media ${(p)=>p.theme.breakpoints.sm}{
    flex:0 0 auto;
    min-width:190px;
    margin-left:40px;
    scroll-snap-align:start;
    background:#0f1624;
    border-radius:20px;
    &:first-child{margin-left:16px;}
    & > i.timeline-node{
      left:50%;
      top:auto;
      bottom:-20px;
      transform:translate(-50%,0);
      width:14px;
      height:14px;
      box-shadow:0 0 0 5px rgba(99,102,241,.35);
    }
    ${({active,index}) => active === index
      ? 'opacity:1;'
      : 'opacity:.42;'}
  }

  ${noMotion};
`;

/* Optional exported helper for node element */
export const TimelineNode = styled.i.attrs({ className:'timeline-node' })``;

/* ================================= Title ================================= */
export const CarouselItemTitle = styled.h4`
  margin:0 0 .35rem;
  font-weight:600;
  font-size:clamp(1.15rem, 1rem + .55vw, 1.55rem);
  line-height:1.2;
  letter-spacing:.045em;
  background:linear-gradient(90deg,#ffffff,#e2e8f0 55%,#93c5fd);
  -webkit-background-clip:text;
  color:transparent;
  display:flex;
  align-items:center;
  gap:.5rem;
  position:relative;

  &::after{
    content:"";
    flex:1;
    height:2px;
    margin-left:.75rem;
    background:linear-gradient(90deg,#6366f1,#0ea5e9,#fbbf24);
    opacity:.3;
    border-radius:2px;
  }

  @media ${(p)=>p.theme.breakpoints.md}{
    font-size:1.05rem;
  }
  @media ${(p)=>p.theme.breakpoints.sm}{
    font-size:.98rem;
  }
`;

/* ================================= Body Text ================================= */
export const CarouselItemText = styled.p`
  margin:0;
  font-size:.95rem;
  line-height:1.58;
  letter-spacing:.02em;
  color:rgba(255,255,255,.8);
  transition:.55s;
  ${CarouselItem}:hover &{
    color:rgba(255,255,255,.94);
  }
  @media ${(p)=>p.theme.breakpoints.md}{
    font-size:.87rem;
    line-height:1.44;
  }
  @media ${(p)=>p.theme.breakpoints.sm}{
    font-size:.8rem;
    line-height:1.4;
  }
`;

/* Decorative SVG (if used) */
export const CarouselItemImg = styled.svg`
  margin-left:12px;
  width:100%;
  -webkit-mask-image:linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  @media ${(p)=>p.theme.breakpoints.sm}{
    -webkit-mask-image:none;
    margin-left:6px;
  }
`;

/* ================================= Pagination (Mobile Dots) ================================= */
export const CarouselButtons = styled.div`
  width:100%;
  display:none;
  visibility:hidden;
  justify-content:center;
  gap:.7rem;
  @media ${(p)=>p.theme.breakpoints.sm}{
    display:flex;
    visibility:visible;
    margin: .35rem 0 3.2rem;
  }
`;

export const CarouselButton = styled.button`
  --active: ${(p)=> p.active === p.index ? 1 : 0};
  width:44px;
  height:44px;
  border:0;
  background:transparent;
  position:relative;
  cursor:pointer;
  padding:0;
  outline:none;
  display:grid;
  place-items:center;
  transition:.55s;
  opacity:calc(.4 + var(--active)*.6);
  transform:scale(calc(.9 + var(--active)*.25));

  &:focus-visible{
    outline:2px solid #6366f1;
    outline-offset:5px;
    border-radius:50%;
  }
`;

export const CarouselButtonDot = styled.div`
  width:14px;
  height:14px;
  border-radius:50%;
  background:linear-gradient(135deg,#6366f1,#0ea5e9);
  position:relative;
  box-shadow:0 0 0 0 rgba(99,102,241,.55);
  transition:.55s;
  ${CarouselButton}:hover &{
    box-shadow:0 0 0 6px rgba(99,102,241,.25);
  }
  ${CarouselButton}[data-active="true"] &{
    box-shadow:0 0 0 8px rgba(99,102,241,.35);
  }
`;

/* ================================= Utilities ================================= */
export const VisuallyHidden = styled.span`
  position:absolute;
  width:1px;
  height:1px;
  margin:-1px;
  padding:0;
  border:0;
  clip:rect(0 0 0 0);
  overflow:hidden;
  white-space:nowrap;
`;