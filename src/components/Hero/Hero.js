import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I’m a passionate web developer with experience in building dynamic and responsive web applications.
        </SectionText>
        <a href="/Shanidhya_Resume.pdf" download style={{ textDecoration: 'none' }}>
          <Button>View Resume</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
