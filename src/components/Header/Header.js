import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" passHref>
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Shanidhya Kumar</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#home" passHref>
          <NavLink>Home</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects" passHref>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" passHref>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about" passHref>
          <NavLink>About</NavLink>
        </Link>
      </li> 
      <li>
        {/* Smooth scroll to footer (id="contact") */}
        <Link href="#contact" passHref scroll={false}>
          <NavLink
            onClick={(e)=>{
              e.preventDefault();
              scrollTo('contact');
            }}
          >
            Contact
          </NavLink>
        </Link>
      </li>       
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Shanidhya01">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/shanidhya-kumar">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/kshanidhya">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
