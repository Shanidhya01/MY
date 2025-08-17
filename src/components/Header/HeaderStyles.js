import styled, { keyframes } from 'styled-components';
import { IoIosArrowDropdown } from 'react-icons/io';

const fadeDown = keyframes`
  0% {opacity:0; transform: translateY(-12px);}
  100% {opacity:1; transform: translateY(0);}
`;

/* Fixed header */
export const Container = styled.div`
  position: fixed;
  top: 0; left: 0; width: 100%;
  z-index: 1200;
  --header-bg: rgba(15,22,36,.78);
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
  background: var(--header-bg);
  border-bottom: 1px solid rgba(255,255,255,.08);
  box-shadow: 0 6px 18px -10px rgba(0,0,0,.55);
  animation: ${fadeDown} .25s ease both;

  /* Desktop/tablet: brand | nav | icons */
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: "brand nav icons";
  align-items: center;
  gap: 0.75rem;
  padding: .55rem clamp(.9rem, 2vw, 1.6rem);

  @media ${(p) => p.theme.breakpoints.sm} {
    /* Phone: menu | brand | icons */
    grid-template-columns: 44px 1fr auto;
    grid-template-areas: "menu brand icons";
    padding: .5rem .7rem;
  }
`;

/* Brand centered on phone */
export const Div1 = styled.div`
  grid-area: brand;
  display: flex;
  align-items: center;
  justify-self: start;

  @media ${(p) => p.theme.breakpoints.sm} {
    justify-self: center;
  }
`;

export const Div2 = styled.ul`
  grid-area: nav;
  list-style: none;
  margin: 0; padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(.8rem, .6rem + .9vw, 1.6rem);

  @media ${(p) => p.theme.breakpoints.sm} {
    display: none; /* hide full nav on phones */
  }
`;

export const Div3 = styled.div`
  grid-area: icons;
  display: flex;
  align-items: center;
  justify-self: end;
  gap: .5rem;
`;

export const NavLink = styled.a`
  font-size: 1rem;
  letter-spacing: .14em;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  color: rgba(255,255,255,.85);
  position: relative;
  padding: .7rem .25rem;
  display: inline-flex;
  align-items: center;
  transition: .35s;
  &::after{
    content:"";
    position:absolute; left:0; bottom:0;
    width:0; height:3px;
    background:linear-gradient(90deg,#6366f1,#0ea5e9,#fbbf24);
    transition: width .45s;
    border-radius: 4px;
  }
  &:hover{ color:#fff; transform: translateY(-2px); }
  &:hover::after{ width:100%; }
`;

export const SocialIcons = styled.a`
  color:#fff;
  border-radius:12px;
  padding:8px;
  font-size:1.2rem;
  transition:.25s;
  &:hover{ background-color:#212d45; transform:translateY(-2px); }
  @media ${(p)=>p.theme.breakpoints.sm}{
    padding:6px; font-size:1.1rem;
  }
`;

/* Hamburger shows only on phones and sits in the left column */
export const MenuButton = styled.button`
  grid-area: menu;
  display: none;
  @media ${(p) => p.theme.breakpoints.sm} {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px; height: 36px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,.1);
    background: rgba(255,255,255,.04);
    color: #e2e8f0;
    cursor: pointer;
    transition: .25s;
    font-size: 1.35rem;
    &:hover { background: rgba(255,255,255,.08); }
    &:focus-visible { outline: 2px solid #6366f1; outline-offset: 2px; }
  }
`;

/* Mobile slide-down menu */
export const MobileNav = styled.nav`
  position: fixed;
  top: var(--header-h, 88px);
  left: 0; right: 0;
  z-index: 1190;
  background: rgba(15,22,36,.96);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255,255,255,.08);

  transform-origin: top;
  transform: scaleY(0.95) translateY(-8px);
  opacity: 0;
  pointer-events: none;
  transition: transform .3s ease, opacity .3s ease;

  &[data-open="true"]{
    transform: scaleY(1) translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  @media (min-width: 768px){
    display: none;
  }
`;

export const MobileList = styled.ul`
  list-style: none;
  margin: 0;
  padding: .5rem 1rem 1rem;
  display: grid;
  gap: .25rem;
  a{
    display:block;
    padding: .9rem .25rem;
    font-size: 1.05rem;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: rgba(255,255,255,.95);
    text-decoration: none;
  }
`;

export const HeaderSpacer = styled.div`
  height: var(--header-h, 88px);
`;

/* Optional: brand link styling to prevent wrapping */
export const BrandLink = styled.a`
  display:flex; align-items:center; gap:8px;
  color:#fff; text-decoration:none; white-space:nowrap;
  font-weight:600; font-size:1.1rem;
  span{ white-space:nowrap; }
  @media ${(p)=>p.theme.breakpoints.sm}{
    font-size:1rem;
  }
`;

export const ContactDropDown = styled.button`
  border:none; display:flex; background:none;
  font-size:1.8rem; line-height:34px; color:rgba(255,255,255,.82);
  cursor:pointer; transition:.3s;
  &:focus{outline:none;} &:hover{color:#fff;}
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};
`;