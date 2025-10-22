import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import SmoothBackground, { backgroundVariants } from '../components/Background/SmoothBackground';
import Experience from '../components/Experience/Experience';

const Home = () => {
  return (
    <>
      <SmoothBackground {...backgroundVariants.hero} />
      <Layout>
        {/* Hero Section */}
        <Section grid id="home">
          <Hero />
          <BgAnimation />
        </Section>
        
        {/* Projects Section */}
        <Section id="projects">
          <Projects />
        </Section>
        
        {/* Technologies Section */}
        <Section id="tech">
          <Technologies />
        </Section>
        
        {/* Experience Section */}
        <Section id="experience">
          <Experience />
        </Section>
        
        {/* About/Timeline Section */}
        <Section id="about">
          <Timeline />
        </Section>
        
        {/* Accomplishments Section */}
        <Section id="contact">
          <Acomplishments />
        </Section>
      </Layout>
    </>
  );
};

export default Home;
