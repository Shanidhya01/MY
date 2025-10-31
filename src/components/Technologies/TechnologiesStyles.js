import styled from 'styled-components';

export const ImageContainer = styled.div`
  text-align: center;
  background: rgba(79, 108, 176, 0.15);
  background-image: radial-gradient(
    50% 50% at 50% 50%, 
    rgba(79, 108, 176, 0.25) 53.8%, 
    rgba(79, 108, 176, 0) 100%
  );
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);

  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 12px 40px rgba(0,0,0,0.15);
    transform: translateY(-4px);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 40px 20px;
    margin-top: 40px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 16px;
    margin-top: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px;
    margin-top: 16px;
  }
`;

export const MainImage = styled.div`
  position: relative;
  display: inline-block;

  img {
    width: 100%;
    max-width: 800px;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    inset: -20px;
    border-radius: 20px;
    background: radial-gradient(circle at center, rgba(79,108,176,0.3), transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover img {
    transform: scale(1.03);
    box-shadow: 0 12px 28px rgba(0,0,0,0.2);
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;
  padding: 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 64px 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 48px 0;
    gap: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 32px 0;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 18px;
  }
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #fff;
  margin-bottom: 8px;
  transition: color 0.3s ease;

  &:hover {
    color: #4f6cb0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 24px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 4px;
  }
`;

export const ListParagraph = styled.p`
  font-size: 13px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  transition: color 0.3s ease;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const ListItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px) saturate(150%);
  -webkit-backdrop-filter: blur(8px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    background: rgba(255, 255, 255, 0.08);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 240px;
    padding: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: row;
    align-items: center;
    max-width: 100%;
    margin-bottom: 14px;
    padding: 12px;
  }
`;

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  transition: transform 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: rotate(8deg) scale(1.1);
    filter: drop-shadow(0 0 8px rgba(79, 108, 176, 0.6));
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 32px;
    margin-bottom: 0;
  }
`;