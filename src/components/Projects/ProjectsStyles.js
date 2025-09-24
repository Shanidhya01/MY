import styled, { keyframes } from 'styled-components';

const glowPulse = keyframes`
  0% { opacity: .5; transform: scale(1); }
  50% { opacity: .95; transform: scale(1.06); }
  100% { opacity: .5; transform: scale(1); }
`;

/* Grid */
export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-auto-rows: 1fr;
  gap: 2.4rem;
  padding: 3rem clamp(1.2rem, 2vw, 3rem);
  align-items: stretch;

  @media ${(p) => p.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1.2rem 0;
  }
`;

/* Card */
export const BlogCard = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(12px) saturate(120%);
  border-radius: 20px;
  box-shadow:
    0 12px 28px -12px rgba(0,0,0,.6),
    inset 0 0 0 1px rgba(255,255,255,.08);
  overflow: hidden;
  transition: transform .55s cubic-bezier(.19,1,.22,1), box-shadow .55s;

  /* Glow layers */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    background:
      radial-gradient(circle at 25% 20%, rgba(156,201,227,.45), transparent 65%),
      radial-gradient(circle at 80% 75%, rgba(208,187,87,.4), transparent 70%),
      linear-gradient(135deg, rgba(255,255,255,.15), rgba(255,255,255,0));
    opacity: 0;
    mix-blend-mode: screen;
    filter: blur(20px);
    transition: opacity .6s ease, filter .6s ease;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    background: linear-gradient(120deg,#9cc9e3,#d0bb57,#9cc9e3);
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    opacity: 0;
    transition: opacity .5s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-12px) scale(1.025);
    box-shadow:
      0 0 26px -4px rgba(156,201,227,.55),
      0 26px 48px -18px rgba(0,0,0,.75),
      inset 0 0 0 1px rgba(255,255,255,.1);
  }

  &:hover::after {
    opacity: 1;
    filter: blur(26px);
    animation: ${glowPulse} 3.4s ease-in-out infinite;
  }

  &:hover::before {
    opacity: .95;
  }
`;

/* Image */
export const Img = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  filter: brightness(.95) saturate(.9);
  transition: transform .9s cubic-bezier(.19,1,.22,1), filter .9s;

  ${BlogCard}:hover & {
    transform: scale(1.08);
    filter: brightness(1.15) saturate(1.15);
  }
`;

/* Title */
export const TitleContent = styled.div`
  padding: 1.6rem 1.6rem 0;
  text-align: center;
  flex: 0 0 auto;
`;

export const HeaderThree = styled.h3`
  margin: 0;
  font-weight: 700;
  letter-spacing: .06em;
  color: #9cc9e3;
  font-size: clamp(2rem, 1.4rem + 1.8vw, 3rem);
  line-height: 1.2;
`;

export const Hr = styled.hr`
  width: 80px;
  height: 4px;
  margin: 1.2rem auto 1.5rem;
  border: 0;
  background: linear-gradient(90deg,#d0bb57,#e3d28b);
  border-radius: 6px;
`;

/* Intro */
export const Intro = styled.div`
  margin: 0 auto 1.2rem;
  max-width: 640px;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 1.08rem;
  font-style: italic;
  line-height: 1.65;
  opacity: .95;
`;

/* Card text */
export const CardInfo = styled.p`
  flex: 1 1 auto;
  padding: 0 2.2rem;
  color: #e4e6e7;
  font-size: 1.15rem;
  line-height: 1.8;
  text-align: justify;
  margin: 0 0 1.6rem;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  transition: -webkit-line-clamp .5s;

  ${BlogCard}:hover & {
    -webkit-line-clamp: 40;
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 0 1.2rem;
    font-size: 1.05rem;
    line-height: 1.65;
  }
`;

/* Tags */
export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: .8rem;
  padding: 0 1.6rem 1.2rem;
  margin: 0;
  justify-content: flex-start;
`;

export const Tag = styled.li`
  font-size: .95rem;
  letter-spacing: .05em;
  font-weight: 500;
  color: #f0e6e6;
  background: rgba(255,255,255,.08);
  padding: .55rem 1rem .5rem;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,.2);
  position: relative;
  overflow: hidden;
  transition: .45s ease;

  &::after {
    content:"";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 30% 30%, rgba(156,201,227,.5), transparent 65%);
    opacity: 0;
    transition: .5s ease;
    filter: blur(8px);
  }

  &:hover {
    color: #fff;
    border-color: rgba(255,255,255,.5);
    transform: translateY(-2px);
  }
  &:hover::after {
    opacity: 1;
  }
`;

/* Utilities */
export const UtilityList = styled.ul`
  list-style: none;
  margin: .5rem 0 2rem;
  padding: 0 1.6rem 1.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: flex-start;
`;

export const ExternalLinks = styled.a`
  text-decoration: none;
  font-size: 1.12rem;
  font-weight: 600;
  letter-spacing: .05em;
  color: #f2f5f7;
  padding: 1rem 1.75rem;
  background: linear-gradient(135deg,#6b3030,#801414);
  border-radius: 18px;
  position: relative;
  box-shadow: 0 14px 28px -14px rgba(128,20,20,.55);
  transition: background .5s, transform .45s cubic-bezier(.19,1,.22,1), box-shadow .5s;

  &::after {
    content:"";
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    background: linear-gradient(120deg,rgba(255,255,255,.35),transparent 60%);
    mix-blend-mode: overlay;
    opacity: 0;
    transition: .6s;
  }

  &:hover {
    transform: translateY(-6px) scale(1.02);
    background: linear-gradient(135deg,#801414,#9a1a1a);
    box-shadow:
      0 0 0 3px rgba(208,187,87,.25),
      0 18px 36px -16px rgba(128,20,20,.7);
  }

  &:hover::after {
    opacity: 1;
    animation: ${glowPulse} 3s ease-in-out infinite;
  }

  &:focus {
    outline: 2px solid #d0bb57;
    outline-offset: 4px;
  }

  &:active {
    transform: translateY(-2px);
  }
`;
