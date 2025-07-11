import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
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
        <Button onClick={props.handleClick}>Download Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;