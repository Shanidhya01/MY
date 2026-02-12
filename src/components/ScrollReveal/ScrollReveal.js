import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const RevealWrapper = styled.div`
  opacity: 0;
  
  &.is-visible {
    animation: ${props => {
      switch (props.$animation) {
        case 'slideLeft':
          return slideInLeft;
        case 'slideRight':
          return slideInRight;
        case 'scale':
          return scaleIn;
        default:
          return fadeIn;
      }
    }} 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: ${props => props.$delay || '0s'};
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1 !important;
    animation: none !important;
  }
`;

const ScrollReveal = ({ 
  children, 
  animation = 'fadeIn', 
  delay = 0, 
  threshold = 0.05,
  once = true 
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, once]);

  return (
    <RevealWrapper
      ref={ref}
      $animation={animation}
      $delay={`${delay}s`}
      className={isVisible ? 'is-visible' : ''}
    >
      {children}
    </RevealWrapper>
  );
};

export default ScrollReveal;
