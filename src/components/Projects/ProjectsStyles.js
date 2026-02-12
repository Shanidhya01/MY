import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 2rem 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: 1400px) {
    padding: 2rem 1.5rem 4rem;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 2rem 1rem 4rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem 0.5rem 3rem;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  will-change: transform;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(99, 102, 241, 0.4);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2),
                0 0 0 1px rgba(99, 102, 241, 0.1);
    background: rgba(255, 255, 255, 0.04);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const ProjectImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: rgba(15, 23, 42, 0.8);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
    will-change: transform;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

export const ProjectImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.92) 0%,
    rgba(139, 92, 246, 0.92) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.$isHovered ? 1 : 0};
  transition: opacity 0.3s ease;
  z-index: 2;

  a {
    animation: ${props => props.$isHovered ? 'slideInUp 0.3s ease-out' : 'none'};
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ProjectContent = styled.div`
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.35rem;
  font-weight: 700;
  color: #fff;
  transition: color 0.2s;
  line-height: 1.3;

  &:hover {
    color: #6366f1;
  }
`;

export const ProjectDescription = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ProjectTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const TechTag = styled.span`
  padding: 0.4rem 0.8rem;
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.25);
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #a5b4fc;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  transition: all 0.2s;

  &:hover {
    background: rgba(99, 102, 241, 0.2);
    border-color: rgba(99, 102, 241, 0.4);
    transform: translateY(-2px);
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.25rem;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 10px;
  color: #6366f1;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  svg {
    transition: transform 0.3s;
  }

  &:hover {
    background: rgba(99, 102, 241, 0.2);
    border-color: rgba(99, 102, 241, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.25);
    color: #8b5cf6;

    svg {
      transform: translateX(3px);
    }
  }

  &:active {
    transform: translateY(0);
  }
`;