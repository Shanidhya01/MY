import { IoIosArrowDropdown } from 'react-icons/io';
import styled, { keyframes } from 'styled-components';

const fadeDown = keyframes`
  0% {opacity:0; transform: translateY(-18px);}
  100% {opacity:1; transform: translateY(0);}
`;

export const Container = styled.div`
  /* Fixed header */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  --header-h: 80px;
  height: var(--header-h);
  z-index: 1200;

  /* Center contents vertically */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding: 0 clamp(1rem, 2vw, 2.2rem);
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  background: rgba(15,22,36,.78);
  border-bottom: 1px solid rgba(255,255,255,.08);
  box-shadow: 0 6px 18px -10px rgba(0,0,0,.55);

  @media ${(p)=>p.theme.breakpoints.sm}{
    --header-h: 100px;
    flex-wrap: wrap;
    justify-content: center;
    padding: .6rem 1rem;
  }
`;
export const Div1 = styled.div`
  display:flex;
  align-items:center;
`;
export const Div2 = styled.ul`
  display:flex;
  align-items:center;
  gap: clamp(1.1rem, .8rem + 1vw, 2rem);
  list-style:none;
  margin:0;
  padding:0;
  @media ${(p)=>p.theme.breakpoints.sm}{
    flex-basis:100%;
    justify-content:center;
    order:2;
    flex-wrap:wrap;
    row-gap:.4rem;
  }
`;
export const Div3 = styled.div`
  display:flex;
  align-items:center;
  gap:.75rem;
  @media ${(p)=>p.theme.breakpoints.sm}{
    order:1;
  }
`;

/* DropDown Contact */
export const ContactDropDown = styled.button`
  border:none;
  display:flex;
  background:none;
  font-size:2.2rem;              /* increased */
  line-height:40px;
  color:rgba(255,255,255,.82);
  cursor:pointer;
  transition:.3s;
  &:focus{outline:none;}
  &:hover{color:#fff;}
  @media ${(p)=>p.theme.breakpoints.sm}{
    font-size:2.35rem;
    line-height:42px;
    padding:.6rem 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};
  &:hover { opacity: 1; }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

/* Social Icons */
export const SocialIcons = styled.a`
  transition:.35s;
  color:#fff;
  border-radius:18px;
  padding:14px;                 /* bigger */
  font-size:1.65rem;
  &:hover{
    background-color:#212d45;
    transform:scale(1.3);
    cursor:pointer;
  }
`;

/* Enhanced Header Wrapper + New Nav */
export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(18px) saturate(170%);
  -webkit-backdrop-filter: blur(18px) saturate(170%);
  background: linear-gradient(140deg, rgba(255,255,255,.07), rgba(255,255,255,.02));
  border-bottom: 1px solid rgba(255,255,255,.08);
  box-shadow: 0 6px 24px -12px rgba(0,0,0,.55);
  animation: ${fadeDown} .65s ease;
`;

export const NavInner = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  padding: .9rem clamp(1.2rem, 1.2rem + 1vw, 2.4rem);
  display: flex;
  align-items: center;
  gap: clamp(1.2rem, 2vw, 3rem);
`;

export const Brand = styled.a`
  font-size: clamp(1.8rem, 1.4rem + 1.8vw, 3rem); /* larger */
  font-weight:700;
  letter-spacing:.055em;
  background:linear-gradient(90deg,#ffffff,#e2e8f0 60%,#93c5fd);
  -webkit-background-clip:text;
  color:transparent;
  text-decoration:none;
  display:flex;
  align-items:center;
  gap:.8rem;
  position:relative;
  &:focus-visible{
    outline:3px solid #6366f1;
    outline-offset:5px;
    border-radius:12px;
  }
`;

export const NavLinks = styled.ul`
  list-style:none;
  margin:0;
  padding:0;
  display:flex;
  gap: clamp(1.1rem, 1.2rem + .6vw, 2.2rem);
  flex:1;
  @media ${(p)=>p.theme.breakpoints.md}{ gap:1.2rem; }
  @media ${(p)=>p.theme.breakpoints.sm}{
    position:fixed;
    inset:0;
    padding:6.5rem 1.75rem 2.5rem;
    flex-direction:column;
    background:rgba(10,14,24,.88);
    backdrop-filter:blur(22px);
    -webkit-backdrop-filter:blur(22px);
    transform:translateY(${p=>p.open ? '0%' : '-110%'});
    transition:.55s cubic-bezier(.19,1,.22,1);
    overflow:auto;
  }
`;

/* SINGLE NavLink definition (old duplicate removed) */
export const NavLink = styled.a`
  font-size:1.25rem;              /* was 1.05rem */
  letter-spacing:.16em;
  text-transform:uppercase;
  font-weight:600;
  text-decoration:none;
  color:rgba(255,255,255,.8);
  position:relative;
  padding:.95rem .4rem;           /* bigger tap area */
  display:inline-flex;
  align-items:center;
  gap:.55rem;
  transition:.45s;
  &::after{
    content:"";
    position:absolute;
    left:0;
    bottom:0;
    width:0;
    height:4px;                  /* thicker underline */
    background:linear-gradient(90deg,#6366f1,#0ea5e9,#fbbf24);
    transition:width .55s cubic-bezier(.19,1,.22,1);
    border-radius:5px;
  }
  &:hover{
    color:#fff;
    transform:translateY(-4px);
  }
  &:hover::after{width:100%;}
  &:focus-visible{
    outline:3px solid #6366f1;
    outline-offset:6px;
    border-radius:8px;
  }
  @media ${(p)=>p.theme.breakpoints.sm}{
    font-size:1.45rem;
    padding:1.05rem .45rem;
  }
`;

export const RightTools = styled.div`
  display:flex;
  align-items:center;
  gap:.85rem;
`;

export const ThemeToggleBtn = styled.button`
  border:0;
  cursor:pointer;
  width:56px;                  /* was 48px */
  height:56px;
  border-radius:20px;
  background:linear-gradient(150deg,#1c2230,#121820);
  display:grid;
  place-items:center;
  color:#e2e8f0;
  font-size:1.65rem;           /* icon size */
  position:relative;
  overflow:hidden;
  transition:.55s;
  box-shadow:0 8px 20px -10px rgba(0,0,0,.65);
  &:hover{
    background:linear-gradient(150deg,#2b374d,#17212d);
    transform:translateY(-5px);
  }
  &:active{transform:translateY(-2px);}
  &:focus-visible{
    outline:3px solid #6366f1;
    outline-offset:4px;
  }
`;

export const Burger = styled.button`
  display:none;
  @media ${(p)=>p.theme.breakpoints.sm} {
    display:inline-flex;
  }
  border:0;
  background:linear-gradient(140deg,#222a38,#121821);
  width:62px;
  height:62px;
  border-radius:20px;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  position:relative;
  transition:.55s;
  color:#fff;
  span, span::before, span::after{
    content:"";
    position:absolute;
    width:34px;
    height:4px;
    background:#fff;
    border-radius:4px;
    transition:.55s cubic-bezier(.19,1,.22,1);
  }
  span::before{transform:translateY(-11px);}
  span::after{transform:translateY(11px);}
  ${p=>p.open && `
    span{background:transparent;}
    span::before{transform:rotate(45deg);}
    span::after{transform:rotate(-45deg);}
  `}
`;