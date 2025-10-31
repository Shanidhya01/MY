import styled, { keyframes } from 'styled-components';

const glowPulse = keyframes`
  0% { opacity: .5; transform: scale(1); }
  50% { opacity: .95; transform: scale(1.06); }
  100% { opacity: .5; transform: scale(1); }
`;

/* Grid */
export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  background: rgba(255,255,255,0.03);
  border-radius: 16px;
  box-shadow: 0 4px 12px -6px rgba(0,0,0,.18);
  overflow: hidden;
  transition: transform .35s cubic-bezier(.19,1,.22,1), box-shadow .35s;
  will-change: transform, box-shadow;

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
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  filter: brightness(.97) saturate(.95);
  transition: transform .5s cubic-bezier(.19,1,.22,1), filter .5s;
  will-change: transform, filter;
  ${BlogCard}:hover & {
    transform: scale(1.03);
    filter: brightness(1.05) saturate(1.05);
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
    font-size: clamp(1.1rem, 0.9rem + 0.7vw, 1.6rem);
  line-height: 1.15;
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
    font-size: 0.75rem;
  font-style: italic;
  line-height: 1.5;
  opacity: .95;
`;

/* Card text */
export const CardInfo = styled.p`
  flex: 1 1 auto;
  padding: 0 1.2rem;
  color: #e4e6e7;
  font-size: 0.8rem;
  line-height: 1.6;
  text-align: justify;
  margin: 0 0 1rem;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;
  transition: -webkit-line-clamp .5s;
  will-change: opacity;
  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 0 1rem;
    font-size: 0.9rem;
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
  font-size: .8rem;
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
    font-size: 0.92rem;
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
