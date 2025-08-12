import styled from 'styled-components';

// Dropdown Container
export const DropDownContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: -25%;
  top: 40px;
  width: 280px;
  background-color: ${({ theme }) => theme.colors.background || '#fff'};
  border-radius: 8px;
  z-index: 100;
  padding: 4px 0;
  cursor: default;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  transition: all 0.25s ease-in-out;
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  transform-origin: top;
  transform: ${({ active }) => (active ? 'scaleY(1)' : 'scaleY(0.8)')};

  @media ${(props) => props.theme.breakpoints.md} {
    top: 32px;
    width: 240px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    top: 24px;
    width: 200px;
  }
`;

// Dropdown Item
export const DropDownItem = styled.a`
  width: 100%;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  padding: 12px 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text || '#0f1624'};

  &:hover {
    transform: translateX(4px);
    background-color: ${({ theme }) => theme.colors.hover || '#f5f5f5'};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.hover || '#f5f5f5'};
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.primary || '#007BFF'};
  }
`;

// Icon container
export const DropDownIcon = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 16px;
  flex-shrink: 0;

  img, svg {
    width: 100%;
    height: 100%;
  }
`;

// Text container
export const DropDownTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// Item title
export const DropDownItemTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text || '#0f1624'};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
`;

// Item description
export const DropDownItemDesc = styled.p`
  color: ${({ theme }) => theme.colors.subtext || '#0f1624'};
  opacity: 0.7;
  font-size: 13px;
  line-height: 1.5;
  margin: 2px 0 0;
`;
