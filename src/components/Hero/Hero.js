import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding id="home">
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I’m Shanidhya Kumar, an aspiring full-stack developer passionate about building secure, scalable, and user-friendly applications. I love turning ideas into impactful solutions through creative problem-solving and clean code.        </SectionText>
        <a href="/Shanidhya_Resume.pdf" download style={{ textDecoration: 'none' }}>
          <Button>View Resume</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;