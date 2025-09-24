import styled, { css, keyframes } from 'styled-components';

/* ============ Enhanced Animations ============ */
const dividerShift = keyframes`
  0% { background-position: 0% 0; }
  100% { background-position: 300% 0; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const rotateGlow = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const breathe = keyframes`
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.05) rotate(2deg); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

/* ============ Motion Preferences ============ */
const reduceMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transition: none !important;
    transform: none !important;
  }
`;

/* ============ Enhanced Section Divider ============ */
export const SectionDivider = styled.hr`
  --h: ${({ $thick }) => ($thick ? '4px' : '2px')};
  --glow-size: ${({ $thick }) => ($thick ? '18px' : '14px')};
  
  border: 0;
  height: var(--h);
  width: ${({ $full }) => ($full ? '100%' : '72px')};
  margin: ${({ $full }) => ($full ? '48px 0' : '24px 0 32px')};
  background: ${({ $variant }) => {
    switch ($variant) {
      case 'rainbow':
        return 'linear-gradient(90deg, #a78bfa, #22d3ee, #34d399, #fbbf24, #f87171)';
      case 'ocean':
        return 'linear-gradient(90deg, #06b6d4, #3b82f6, #6366f1, #8b5cf6)';
      case 'sunset':
        return 'linear-gradient(90deg, #f59e0b, #f97316, #ef4444, #ec4899)';
      case 'forest':
        return 'linear-gradient(90deg, #10b981, #059669, #047857, #065f46)';
      default:
        return 'linear-gradient(90deg, #a78bfa, #22d3ee, #34d399, #fbbf24)';
    }
  }};
  background-size: ${({ $animate }) => ($animate ? '300%' : '200%')} 100%;
  border-radius: 999px;
  opacity: ${({ $bright }) => ($bright ? '0.8' : '0.6')};
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ $center, $full }) => (!$full && $center) && css`
    margin-left: auto;
    margin-right: auto;
  `}

  ${({ $animate }) => $animate && css`
    animation: ${dividerShift} 12s linear infinite;
    ${reduceMotion};
  `}

  ${({ $pulse }) => $pulse && css`
    animation: ${pulse} 3s ease-in-out infinite;
    ${reduceMotion};
  `}

  /* Enhanced glow effect */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: var(--glow-size);
    transform: translateY(-50%);
    background: ${({ $variant }) => {
      switch ($variant) {
        case 'ocean':
          return 'radial-gradient(60% 8px at 50% 50%, rgba(59, 130, 246, 0.4), transparent 60%)';
        case 'sunset':
          return 'radial-gradient(60% 8px at 50% 50%, rgba(245, 158, 11, 0.4), transparent 60%)';
        case 'forest':
          return 'radial-gradient(60% 8px at 50% 50%, rgba(16, 185, 129, 0.4), transparent 60%)';
        default:
          return 'radial-gradient(60% 8px at 50% 50%, rgba(99, 102, 241, 0.35), transparent 60%)';
      }
    }};
    filter: blur(8px);
    opacity: ${({ $bright }) => ($bright ? '0.4' : '0.28')};
    pointer-events: none;
  }

  &:hover {
    opacity: ${({ $bright }) => ($bright ? '1' : '0.8')};
    transform: scale(1.02);
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    margin: ${({ $full }) => ($full ? '32px 0' : '18px 0 24px')};
    width: ${({ $full }) => ($full ? '100%' : '56px')};
    opacity: ${({ $bright }) => ($bright ? '0.85' : '0.72')};
    --h: ${({ $thick }) => ($thick ? '3px' : '2px')};
  }
`;

/* ============ Enhanced Typography Components ============ */
export const GradientText = styled.span`
  background: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return 'linear-gradient(135deg, #6366f1, #8b5cf6)';
      case 'secondary':
        return 'linear-gradient(135deg, #06b6d4, #3b82f6)';
      case 'accent':
        return 'linear-gradient(135deg, #10b981, #059669)';
      case 'warm':
        return 'linear-gradient(135deg, #f59e0b, #f97316)';
      case 'rainbow':
        return 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4, #10b981, #f59e0b)';
      default:
        return 'linear-gradient(135deg, #6366f1, #8b5cf6)';
    }
  }};
  background-size: ${({ $animate }) => ($animate ? '200%' : '100%')} 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: ${({ $weight }) => $weight || '600'};
  display: ${({ $inline }) => ($inline ? 'inline' : 'inline-block')};
  
  ${({ $animate }) => $animate && css`
    animation: ${shimmer} 2s ease-in-out infinite;
    ${reduceMotion};
  `}

  ${({ $hover }) => $hover && css`
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
      transform: scale(1.05);
      filter: brightness(1.2);
    }
  `}
`;

/* ============ Interactive Buttons ============ */
export const GlowButton = styled.button`
  position: relative;
  padding: ${({ $size }) => {
    switch ($size) {
      case 'sm': return '0.5rem 1rem';
      case 'lg': return '1rem 2rem';
      case 'xl': return '1.25rem 2.5rem';
      default: return '0.75rem 1.5rem';
    }
  }};
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'sm': return '0.875rem';
      case 'lg': return '1.125rem';
      case 'xl': return '1.25rem';
      default: return '1rem';
    }
  }};
  font-weight: 600;
  border: none;
  border-radius: ${({ $rounded }) => ($rounded ? '9999px' : '0.5rem')};
  background: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return 'linear-gradient(135deg, #6366f1, #8b5cf6)';
      case 'secondary':
        return 'linear-gradient(135deg, #06b6d4, #3b82f6)';
      case 'success':
        return 'linear-gradient(135deg, #10b981, #059669)';
      case 'warning':
        return 'linear-gradient(135deg, #f59e0b, #f97316)';
      case 'danger':
        return 'linear-gradient(135deg, #ef4444, #dc2626)';
      default:
        return 'linear-gradient(135deg, #6366f1, #8b5cf6)';
    }
  }};
  color: white;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: ${({ $variant }) => {
      switch ($variant) {
        case 'primary':
          return 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)';
        case 'secondary':
          return 'linear-gradient(135deg, #06b6d4, #3b82f6, #6366f1)';
        default:
          return 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)';
      }
    }};
    border-radius: ${({ $rounded }) => ($rounded ? '9999px' : '0.5rem')};
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
    animation: ${rotateGlow} 3s linear infinite;
    ${reduceMotion};
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
    
    &::before {
      opacity: 0.7;
    }
    
    &::after {
      transform: translateX(100%);
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    
    &:hover {
      transform: none;
      box-shadow: none;
      
      &::before {
        opacity: 0;
      }
    }
  }
`;

/* ============ Card Components ============ */
export const GlassCard = styled.div`
  background: ${({ $variant }) => {
    switch ($variant) {
      case 'dark':
        return 'rgba(15, 23, 42, 0.8)';
      case 'light':
        return 'rgba(255, 255, 255, 0.1)';
      case 'colored':
        return 'rgba(99, 102, 241, 0.05)';
      default:
        return 'rgba(255, 255, 255, 0.05)';
    }
  }};
  backdrop-filter: blur(${({ $blur }) => $blur || '20px'});
  border: 1px solid ${({ $variant }) => {
    switch ($variant) {
      case 'dark':
        return 'rgba(255, 255, 255, 0.05)';
      case 'light':
        return 'rgba(255, 255, 255, 0.2)';
      case 'colored':
        return 'rgba(99, 102, 241, 0.2)';
      default:
        return 'rgba(255, 255, 255, 0.1)';
    }
  }};
  border-radius: ${({ $rounded }) => {
    switch ($rounded) {
      case 'sm': return '0.5rem';
      case 'lg': return '1.5rem';
      case 'xl': return '2rem';
      case 'full': return '9999px';
      default: return '1rem';
    }
  }};
  padding: ${({ $padding }) => $padding || 'clamp(1rem, 4vw, 2rem)'};
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ $hover }) => $hover && css`
    cursor: pointer;
    
    &:hover {
      transform: translateY(-4px);
      border-color: ${({ $variant }) => {
        switch ($variant) {
          case 'colored':
            return 'rgba(99, 102, 241, 0.4)';
          default:
            return 'rgba(255, 255, 255, 0.2)';
        }
      }};
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }
  `}

  ${({ $glow }) => $glow && css`
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.05) inset;
      
    &::before {
      content: '';
      position: absolute;
      inset: -1px;
      background: linear-gradient(45deg, #6366f1, #8b5cf6, #06b6d4, #10b981);
      border-radius: inherit;
      opacity: 0;
      z-index: -1;
      transition: opacity 0.3s ease;
      animation: ${rotateGlow} 4s linear infinite;
      ${reduceMotion};
    }
    
    &:hover::before {
      opacity: 0.3;
    }
  `}

  ${({ $animated }) => $animated && css`
    animation: ${fadeInUp} 0.6s ease-out both;
    ${reduceMotion};
  `}
`;

/* ============ Progress Components ============ */
export const ProgressBar = styled.div`
  width: 100%;
  height: ${({ $size }) => {
    switch ($size) {
      case 'sm': return '4px';
      case 'lg': return '12px';
      case 'xl': return '16px';
      default: return '8px';
    }
  }};
  background: rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ $progress }) => $progress || 0}%;
    background: ${({ $variant }) => {
      switch ($variant) {
        case 'success':
          return 'linear-gradient(90deg, #10b981, #059669)';
        case 'warning':
          return 'linear-gradient(90deg, #f59e0b, #f97316)';
        case 'danger':
          return 'linear-gradient(90deg, #ef4444, #dc2626)';
        default:
          return 'linear-gradient(90deg, #6366f1, #8b5cf6)';
      }
    }};
    border-radius: 9999px;
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
  }

  ${({ $animated }) => $animated && css`
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      height: 100%;
      width: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
      );
      animation: ${shimmer} 1.5s infinite;
      ${reduceMotion};
    }
  `}
`;

/* ============ Badge Components ============ */
export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: ${({ $size }) => {
    switch ($size) {
      case 'sm': return '0.25rem 0.5rem';
      case 'lg': return '0.5rem 1rem';
      default: return '0.375rem 0.75rem';
    }
  }};
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'sm': return '0.75rem';
      case 'lg': return '0.875rem';
      default: return '0.8125rem';
    }
  }};
  font-weight: 600;
  border-radius: ${({ $rounded }) => ($rounded ? '9999px' : '0.375rem')};
  background: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return 'rgba(99, 102, 241, 0.15)';
      case 'secondary':
        return 'rgba(6, 182, 212, 0.15)';
      case 'success':
        return 'rgba(16, 185, 129, 0.15)';
      case 'warning':
        return 'rgba(245, 158, 11, 0.15)';
      case 'danger':
        return 'rgba(239, 68, 68, 0.15)';
      case 'neutral':
        return 'rgba(255, 255, 255, 0.1)';
      default:
        return 'rgba(99, 102, 241, 0.15)';
    }
  }};
  color: ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return '#a5b4fc';
      case 'secondary':
        return '#67e8f9';
      case 'success':
        return '#6ee7b7';
      case 'warning':
        return '#fcd34d';
      case 'danger':
        return '#fca5a5';
      case 'neutral':
        return 'rgba(255, 255, 255, 0.8)';
      default:
        return '#a5b4fc';
    }
  }};
  border: 1px solid ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return 'rgba(99, 102, 241, 0.3)';
      case 'secondary':
        return 'rgba(6, 182, 212, 0.3)';
      case 'success':
        return 'rgba(16, 185, 129, 0.3)';
      case 'warning':
        return 'rgba(245, 158, 11, 0.3)';
      case 'danger':
        return 'rgba(239, 68, 68, 0.3)';
      case 'neutral':
        return 'rgba(255, 255, 255, 0.2)';
      default:
        return 'rgba(99, 102, 241, 0.3)';
    }
  }};
  transition: all 0.2s ease;

  ${({ $hover }) => $hover && css`
    cursor: pointer;
    
    &:hover {
      transform: scale(1.05);
      background: ${({ $variant }) => {
        switch ($variant) {
          case 'primary':
            return 'rgba(99, 102, 241, 0.25)';
          case 'secondary':
            return 'rgba(6, 182, 212, 0.25)';
          case 'success':
            return 'rgba(16, 185, 129, 0.25)';
          case 'warning':
            return 'rgba(245, 158, 11, 0.25)';
          case 'danger':
            return 'rgba(239, 68, 68, 0.25)';
          case 'neutral':
            return 'rgba(255, 255, 255, 0.15)';
          default:
            return 'rgba(99, 102, 241, 0.25)';
        }
      }};
    }
  `}

  ${({ $pulse }) => $pulse && css`
    animation: ${pulse} 2s infinite;
    ${reduceMotion};
  `}
`;

/* ============ Floating Elements ============ */
export const FloatingElement = styled.div`
  animation: ${float} ${({ $duration }) => $duration || '3s'} ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || '0s'};
  ${reduceMotion};
`;

export const BreathingElement = styled.div`
  animation: ${breathe} ${({ $duration }) => $duration || '4s'} ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || '0s'};
  transform-origin: center;
  ${reduceMotion};
`;

/* ============ Layout Utilities ============ */
export const Flex = styled.div`
  display: flex;
  gap: ${({ $gap }) => $gap || '1rem'};
  align-items: ${({ $align }) => $align || 'stretch'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  flex-direction: ${({ $direction }) => $direction || 'row'};
  flex-wrap: ${({ $wrap }) => $wrap ? 'wrap' : 'nowrap'};

  ${({ $responsive }) => $responsive && css`
    @media ${({ theme }) => theme.breakpoints.md} {
      flex-direction: column;
      gap: ${({ $responsiveGap }) => $responsiveGap || '0.75rem'};
    }
  `}
`;

export const Grid = styled.div`
  display: grid;
  gap: ${({ $gap }) => $gap || '1rem'};
  grid-template-columns: ${({ $columns }) => {
    if (typeof $columns === 'number') {
      return `repeat(${$columns}, 1fr)`;
    }
    return $columns || 'repeat(auto-fit, minmax(300px, 1fr))';
  }};

  ${({ $responsive }) => $responsive && css`
    @media ${({ theme }) => theme.breakpoints.md} {
      grid-template-columns: ${({ $mdColumns }) => $mdColumns || '1fr'};
    }
    
    @media ${({ theme }) => theme.breakpoints.sm} {
      grid-template-columns: 1fr;
      gap: ${({ $responsiveGap }) => $responsiveGap || '0.75rem'};
    }
  `}
`;

/* ============ Animated Entry Components ============ */
export const FadeInUp = styled.div`
  animation: ${fadeInUp} 0.6s ease-out both;
  animation-delay: ${({ $delay }) => $delay || '0s'};
  ${reduceMotion};
`;

export const SlideInLeft = styled.div`
  animation: ${slideInLeft} 0.6s ease-out both;
  animation-delay: ${({ $delay }) => $delay || '0s'};
  ${reduceMotion};
`;

export const SlideInRight = styled.div`
  animation: ${slideInRight} 0.6s ease-out both;
  animation-delay: ${({ $delay }) => $delay || '0s'};
  ${reduceMotion};
`;

/* ============ Responsive Utilities ============ */
export const Show = styled.div`
  ${({ $above }) => $above && css`
    display: none;
    
    @media (min-width: ${$above}) {
      display: ${({ $display }) => $display || 'block'};
    }
  `}
  
  ${({ $below }) => $below && css`
    display: ${({ $display }) => $display || 'block'};
    
    @media (min-width: ${$below}) {
      display: none;
    }
  `}
`;

export const Hide = styled.div`
  ${({ $above }) => $above && css`
    display: ${({ $display }) => $display || 'block'};
    
    @media (min-width: ${$above}) {
      display: none;
    }
  `}
  
  ${({ $below }) => $below && css`
    display: none;
    
    @media (min-width: ${$below}) {
      display: ${({ $display }) => $display || 'block'};
    }
  `}
`;

/* ============ Accessibility Utilities ============ */
export const ScreenReaderOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const SkipToContent = styled.a`
  position: absolute;
  top: -40px;
  left: 6px;
  background: #6366f1;
  color: white;
  padding: 8px 12px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 10000;
  transition: top 0.3s ease;
  font-weight: 600;
  
  &:focus {
    top: 6px;
  }
`;

/* ============ Export from index ============ */
export * from './GlobalComponents/index';