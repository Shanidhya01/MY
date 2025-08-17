import styled, { css } from 'styled-components';

export const SectionDivider = styled.hr`
  /* Variants (transient props so nothing leaks to DOM):
      $full: full-width section separator
      $center: center the short accent variant
      $thick: slightly thicker line
      $animate: slow gradient motion
  */
  --h: ${({ $thick }) => ($thick ? '3px' : '2px')};
  border: 0;
  height: var(--h);
  width: ${({ $full }) => ($full ? '100%' : '72px')};
  margin: ${({ $full }) => ($full ? '48px 0' : '24px 0 32px')};
  background: linear-gradient(90deg, #a78bfa, #22d3ee, #34d399, #fbbf24);
  background-size: 300% 100%;
  border-radius: 999px;
  opacity: .6;
  position: relative;
  transition: opacity .3s ease;

  ${({ $center, $full }) => (!$full && $center) && css`
    margin-left: auto;
    margin-right: auto;
  `}

  ${({ $animate }) => $animate && css`
    animation: dividerShift 12s linear infinite;
  `}

  /* soft glow */
  &::after{
    content:'';
    position:absolute; left:0; right:0; top:50%;
    height: 14px;
    transform: translateY(-50%);
    background: radial-gradient(60% 8px at 50% 50%, rgba(99,102,241,.35), transparent 60%);
    filter: blur(8px);
    opacity: .28;
    pointer-events:none;
  }

  @media ${({ theme }) => theme.breakpoints.sm}{
    margin: ${({ $full }) => ($full ? '28px 0' : '18px 0 24px')};
    width: ${({ $full }) => ($full ? '100%' : '56px')};
    opacity: .72;
  }

  @keyframes dividerShift {
    0% { background-position: 0% 0; }
    100% { background-position: 300% 0; }
  }
`;

export * from './GlobalComponents/index';