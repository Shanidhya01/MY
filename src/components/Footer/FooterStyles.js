import styled, { keyframes, createGlobalStyle } from 'styled-components';

/* ============ Global Styles for Animations ============ */
export const GlobalFooterStyles = createGlobalStyle`
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.1);
    }
  }
`;

/* ============ Animations ============ */
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.1);
  }
`;

const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 5px rgba(99, 102, 241, 0.5);
  }
  50% {
    text-shadow: 0 0 20px rgba(99, 102, 241, 0.8);
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

/* ============ Base Components (Define in order of dependency) ============ */
export const FooterWrapper = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: content-box;
  padding: 4rem 3rem 2rem;
  animation: ${fadeIn} 0.8s ease-out;
  background: linear-gradient(180deg, rgba(13, 20, 33, 0.4) 0%, rgba(13, 20, 33, 0.8) 100%);
  backdrop-filter: blur(10px);
  border-radius: 32px 32px 0 0;
  border-top: 2px solid rgba(99, 102, 241, 0.3);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.08), transparent 70%);
    pointer-events: none;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 3rem 2rem 1.5rem;
    border-radius: 24px 24px 0 0;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 2rem 1.5rem 1rem;
    border-radius: 20px 20px 0 0;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  width: 100%;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(99, 102, 241, 0.2);
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
  
  @media ${({ theme }) => theme.breakpoints.md} {
    max-width: 240px;
    padding: 1.25rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    max-width: 100%;
    margin-bottom: 1.25rem;
    padding: 1rem;
  }
`;

export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 1.25rem;
  letter-spacing: 0.08em;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    border-radius: 2px;
    box-shadow: 0 0 12px rgba(99, 102, 241, 0.5);
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 0.95rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

export const LinkItem = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  margin-bottom: 0.85rem;
  font-size: 0.9rem;
  line-height: 1.6;
  cursor: pointer;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.4rem 0.8rem 0.4rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 6px;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    transition: width 0.3s ease;
    border-radius: 2px;
  }

  &:hover {
    color: #fff;
    padding-left: 1rem;
    background: rgba(99, 102, 241, 0.08);
    
    &::before {
      width: 4px;
    }
  }

  &:focus {
    outline: 2px solid #6366f1;
    outline-offset: 2px;
    border-radius: 6px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 0.85rem;
    margin-bottom: 0.7rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.8rem;
    margin-bottom: 0.6rem;
    padding: 0.35rem 0.6rem 0.35rem 0;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;

  @media ${({ theme }) => theme.breakpoints.md} {
    gap: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    gap: 1.5rem;
    margin: 1.5rem 0;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 0.5rem 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(99, 102, 241, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.2);
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    gap: 0.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 0.4rem 0.8rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 0.3rem 0.6rem;
    
    span {
      display: none;
    }
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  flex: 1;
  max-width: 600px;
  
  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 1.5rem 0 1rem;
    max-width: 100%;
  }
`;

export const Slogan = styled.p`
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
  font-size: 1rem;
  line-height: 1.8;
  max-width: 550px;
  letter-spacing: 0.01em;
  
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.95rem;
    max-width: 100%;
    line-height: 1.7;
  }
`;

export const LinkList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 2.5rem 0;
  position: relative;
  
  @media ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.25rem;
    padding: 2rem 0;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.5rem 0;
  }
`;

export const SocialIcons = styled.div`
  transition: 250ms;
  color: white;
  border-radius: 50px;
  padding: 8px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 6px;
    font-size: 1.1rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 4px;
    font-size: 1rem;
  }
`;

export const Copyright = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  margin-top: 2rem;
  
  p {
    margin: 0;
    
    strong {
      color: rgba(255, 255, 255, 0.8);
      font-weight: 600;
    }
  }
  
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 0.8rem;
    margin-top: 1.5rem;
    
    & > div {
      flex-direction: column !important;
      align-items: flex-start !important;
      
      & > div {
        width: 100%;
      }
    }
  }
`;

/* ============ Footer Divider Component ============ */
export const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(99, 102, 241, 0.3) 20%,
    rgba(139, 92, 246, 0.5) 50%,
    rgba(6, 182, 212, 0.3) 80%,
    transparent 100%
  );
  margin: 2rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.6) 50%,
      transparent 100%
    );
    animation: ${shimmer} 3s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 5px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border-radius: 3px;
    filter: blur(2px);
    opacity: 0.7;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: 1.5rem 0;
  }
`;

/* ============ Back To Top Component ============ */
export const BackToTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.visible ? 1 : 0};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(10px)'};
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
  animation: ${slideUp} 0.3s ease-out;
  
  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5);
    animation: ${bounce} 0.6s ease-in-out;
  }
  
  &:active {
    transform: translateY(-2px) scale(0.95);
  }
  
  &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    opacity: 0.7;
    animation: ${pulse} 1s ease-in-out infinite;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
    bottom: 1.5rem;
    right: 1.5rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    bottom: 1rem;
    right: 1rem;
  }
`;

/* ============ Enhanced Link Item with Title reference (Now defined after LinkTitle) ============ */
export const EnhancedLinkItem = styled(LinkItem)`
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::after {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-4px);
    
    ${LinkTitle} {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

/* ============ Additional Footer Components ============ */
export const FooterSection = styled.div`
  margin-bottom: 2rem;
  
  @media ${({ theme }) => theme.breakpoints.sm} {
    margin-bottom: 1.5rem;
  }
`;

export const NewsletterContainer = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  backdrop-filter: blur(10px);
  
  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 1rem;
    margin: 1rem 0;
  }
`;

export const NewsletterTitle = styled.h5`
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
`;

export const NewsletterDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

export const NewsletterForm = styled.form`
  display: flex;
  gap: 0.5rem;
  
  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
  }
`;

export const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 0.75rem;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: #6366f1;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const NewsletterButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 100%;
  }
`;

/* ============ Additional Enhanced Components ============ */
export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  
  h3 {
    color: rgba(255, 255, 255, 0.95);
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  
  span {
    width: 8px;
    height: 8px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border-radius: 50%;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

export const FooterDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 280px;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    
    svg {
      color: #6366f1;
      font-size: 1rem;
    }
  }
`;

export const StatusIndicator = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 20px;
  font-size: 0.8rem;
  color: #10b981;
  margin-top: 1rem;
  
  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: #10b981;
    border-radius: 50%;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;
