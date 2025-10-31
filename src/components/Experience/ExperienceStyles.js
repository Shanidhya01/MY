import styled from 'styled-components';

export const ExperienceContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 2rem;
`;

export const ExperienceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
  background: var(--bg-secondary, #181818);
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
`;

export const ExperienceRow = styled.tr`
  &:nth-child(even) {
    background: var(--bg-tertiary, #232323);
  }
`;

export const ExperienceCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid var(--border-primary, #333);
  text-align: left;
  font-size: 0.8rem;
  color: var(--text-primary, #fff);
  font-family: inherit;
  font-weight: 400;
  &:first-child {
    font-weight: 600;
    color: var(--color-primary, #6c63ff);
  }
  &[as='th'] {
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--color-primary, #6c63ff);
    background: var(--bg-primary, #151515);
    border-bottom: 2px solid var(--color-primary, #6c63ff);
  }
`;
