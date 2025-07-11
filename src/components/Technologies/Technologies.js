import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { VscCode } from 'react-icons/vsc';
const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design and Various Programming Languages.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js <br />
            Next.js <br />
            Tailwind CSS <br />
            HTML/CSS/JavaScript 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases <br />
            SQL <br />
            MongoDB <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Other Skills / Technologies</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like GitHub <br />
            Clerk for authentication <br />
            Git <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <VscCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            C++<br />
            Python<br />
            JavaScript<br />
            C <br />
            TypeScript <br />
            Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
