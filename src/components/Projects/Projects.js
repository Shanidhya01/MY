import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    {/* Simple Pagination: Show 6 projects per page */}
    {(() => {
      const [page, setPage] = React.useState(1);
      const perPage = 6;
      const totalPages = Math.ceil(projects.length / perPage);
      const paginated = projects.slice((page - 1) * perPage, page * perPage);
      return (
        <>
          <GridContainer>
            {paginated.map((p, i) => (
              <BlogCard key={p.id || i}>
                <Img src={p.image} loading="lazy" />
                <TitleContent>
                  <HeaderThree title>{p.title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo className="card-info">{p.description}</CardInfo>
                <div>
                  <TagList>
                    {p.tags.map((t, i) => (
                      <Tag key={i}>{t}</Tag>
                    ))}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks href={p.source}>Source</ExternalLinks>
                  <ExternalLinks href={p.visit}>Live</ExternalLinks>
                </UtilityList>
              </BlogCard>
            ))}
          </GridContainer>
          <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              style={{ marginRight: '1rem', padding: '0.5rem 1.2rem', fontSize: '1rem', borderRadius: '8px', border: 'none', background: '#9cc9e3', color: '#222', cursor: page === 1 ? 'not-allowed' : 'pointer', opacity: page === 1 ? 0.5 : 1 }}
            >
              Prev
            </button>
            <span style={{ fontWeight: 600, fontSize: '1rem', color: '#9cc9e3' }}>
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              style={{ marginLeft: '1rem', padding: '0.5rem 1.2rem', fontSize: '1rem', borderRadius: '8px', border: 'none', background: '#9cc9e3', color: '#222', cursor: page === totalPages ? 'not-allowed' : 'pointer', opacity: page === totalPages ? 0.5 : 1 }}
            >
              Next
            </button>
          </div>
        </>
      );
    })()}
  </Section>
);

export default Projects;