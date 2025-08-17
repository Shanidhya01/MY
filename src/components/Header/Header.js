import React, { useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import {
  Container, Div1, Div2, Div3, NavLink, SocialIcons,
  MenuButton, MobileNav, MobileList, HeaderSpacer, BrandLink
} from './HeaderStyles';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Measure header height and expose it as a CSS var for spacer/scroll-padding
  useLayoutEffect(() => {
    const setVar = () => {
      const h = ref.current ? ref.current.offsetHeight : 88;
      document.documentElement.style.setProperty('--header-h', `${h}px`);
    };
    setVar();
    window.addEventListener('resize', setVar);
    return () => window.removeEventListener('resize', setVar);
  }, [open]);

  const closeMobile = () => setOpen(false);

  return (
    <>
      <Container ref={ref}>
        {/* Phone: left column */}
        <MenuButton
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={()=> setOpen(v => !v)}
          title="Menu"
        >
          ☰
        </MenuButton>

        {/* Brand (centered on phone) */}
        <Div1>
          <Link href="/" passHref>
            <BrandLink>
              <DiCssdeck size="2rem" />
              <span>Shanidhya Kumar</span>
            </BrandLink>
          </Link>
        </Div1>

        {/* Icons (right) */}
        <Div3>
          <SocialIcons href="https://github.com/Shanidhya01" aria-label="GitHub">
            <AiFillGithub size="1.4rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/shanidhya-kumar" aria-label="LinkedIn">
            <AiFillLinkedin size="1.4rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/kshanidhya" aria-label="Instagram">
            <AiFillInstagram size="1.4rem" />
          </SocialIcons>
        </Div3>

        {/* Desktop nav (auto-hidden on phone) */}
        <Div2>
          <li><Link href="#home" passHref><NavLink>Home</NavLink></Link></li>
          <li><Link href="#projects" passHref><NavLink>Projects</NavLink></Link></li>
          <li><Link href="#tech" passHref><NavLink>Technologies</NavLink></Link></li>
          <li><Link href="#about" passHref><NavLink>About</NavLink></Link></li>
          <li>
            <Link href="#contact" passHref scroll={false}>
              <NavLink onClick={(e)=>{ e.preventDefault(); scrollTo('contact'); }}>Contact</NavLink>
            </Link>
          </li>
        </Div2>
      </Container>

      {/* Slide-down menu for phone */}
      <MobileNav id="mobile-nav" data-open={open}>
        <MobileList>
          <li><Link href="#home" passHref><a onClick={closeMobile}>Home</a></Link></li>
          <li><Link href="#projects" passHref><a onClick={closeMobile}>Projects</a></Link></li>
          <li><Link href="#tech" passHref><a onClick={closeMobile}>Technologies</a></Link></li>
          <li><Link href="#about" passHref><a onClick={closeMobile}>About</a></Link></li>
          <li>
            <Link href="#contact" passHref scroll={false}>
              <a onClick={(e)=>{ e.preventDefault(); scrollTo('contact'); closeMobile(); }}>Contact</a>
            </Link>
          </li>
        </MobileList>
      </MobileNav>

      <HeaderSpacer />
    </>
  );
};

export default Header;
