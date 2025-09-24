import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaChevronDown, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

// Enhanced animations
const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px) scaleY(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scaleY(1);
  }
`;

const slideUp = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0) scaleY(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px) scaleY(0.95);
  }
`;

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`;

const itemSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Enhanced Dropdown Container
export const DropDownContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: ${({ position }) => position?.right || '-10%'};
  top: ${({ position }) => position?.top || '45px'};
  width: ${({ width }) => width || '320px'};
  max-width: 90vw;
  background: ${({ theme, variant }) => {
    if (variant === 'glass') {
      return 'rgba(255, 255, 255, 0.1)';
    }
    return theme.colors.background || '#ffffff';
  }};
  backdrop-filter: ${({ variant }) => variant === 'glass' ? 'blur(20px)' : 'none'};
  border: 1px solid ${({ theme, variant }) => 
    variant === 'glass' 
      ? 'rgba(255, 255, 255, 0.2)' 
      : theme.colors.border || 'rgba(0, 0, 0, 0.1)'
  };
  border-radius: ${({ borderRadius }) => borderRadius || '16px'};
  z-index: ${({ zIndex }) => zIndex || '1000'};
  padding: ${({ padding }) => padding || '8px'};
  cursor: default;
  overflow: hidden;
  box-shadow: ${({ variant, theme }) => 
    variant === 'glass'
      ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
      : '0 10px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)'
  };

  /* Enhanced animations */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  transform-origin: ${({ transformOrigin }) => transformOrigin || 'top center'};
  transform: ${({ active }) => 
    active 
      ? 'translateY(0) scaleY(1) scale(1)' 
      : 'translateY(-8px) scaleY(0.9) scale(0.95)'
  };

  /* Enhanced entrance animation */
  animation: ${({ active, animationDuration }) => 
    active 
      ? css`${slideDown} ${animationDuration || '0.3s'} cubic-bezier(0.4, 0, 0.2, 1)`
      : css`${slideUp} ${animationDuration || '0.2s'} cubic-bezier(0.4, 0, 0.2, 1)`
  };

  /* Responsive design */
  @media ${(props) => props.theme.breakpoints.lg} {
    width: ${({ responsiveWidth }) => responsiveWidth?.lg || '300px'};
    right: ${({ responsivePosition }) => responsivePosition?.lg?.right || '-5%'};
  }
  
  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ responsiveWidth }) => responsiveWidth?.md || '280px'};
    right: ${({ responsivePosition }) => responsivePosition?.md?.right || '0%'};
    top: ${({ responsivePosition }) => responsivePosition?.md?.top || '40px'};
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: ${({ responsiveWidth }) => responsiveWidth?.sm || '260px'};
    right: ${({ responsivePosition }) => responsivePosition?.sm?.right || '5%'};
    top: ${({ responsivePosition }) => responsivePosition?.sm?.top || '35px'};
    border-radius: 12px;
  }

  /* Enhanced backdrop blur for better visibility */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ variant, theme }) => 
      variant === 'glass' 
        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
        : 'transparent'
    };
    border-radius: inherit;
    pointer-events: none;
  }
`;

// Enhanced Header Section
export const DropDownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => 
    theme.colors.border || 'rgba(0, 0, 0, 0.1)'
  };
  background: ${({ theme }) => 
    theme.colors.headerBg || 'rgba(0, 0, 0, 0.02)'
  };
  border-radius: 16px 16px 0 0;
`;

export const DropDownTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text || '#1a1a1a'};
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const DropDownCloseButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text || '#1a1a1a'};
  opacity: 0.6;
  transition: opacity 0.2s ease, transform 0.2s ease;
  border-radius: 4px;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary || '#007BFF'};
    outline-offset: 2px;
  }
`;

// Enhanced Dropdown Item
export const DropDownItem = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: ${({ padding }) => padding || '14px 16px'};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text || '#1a1a1a'};
  border-radius: ${({ itemBorderRadius }) => itemBorderRadius || '12px'};
  margin: ${({ margin }) => margin || '2px 4px'};
  position: relative;
  overflow: hidden;
  background: transparent;

  /* Enhanced animation delay for staggered effect */
  animation: ${itemSlideIn} 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation-delay: ${({ index }) => `${(index || 0) * 0.05}s`};
  animation-fill-mode: both;

  /* Shimmer effect on hover */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateX(6px) scale(1.02);
    background: ${({ theme, variant }) => {
      if (variant === 'primary') return theme.colors.primary + '10' || 'rgba(0, 123, 255, 0.1)';
      if (variant === 'success') return theme.colors.success + '10' || 'rgba(40, 167, 69, 0.1)';
      if (variant === 'danger') return theme.colors.danger + '10' || 'rgba(220, 53, 69, 0.1)';
      return theme.colors.hover || 'rgba(0, 0, 0, 0.05)';
    }};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-left: 3px solid ${({ theme, variant }) => {
      if (variant === 'primary') return theme.colors.primary || '#007BFF';
      if (variant === 'success') return theme.colors.success || '#28a745';
      if (variant === 'danger') return theme.colors.danger || '#dc3545';
      return theme.colors.accent || '#6c757d';
    }};
    
    &::before {
      left: 100%;
    }
  }

  &:focus {
    outline: none;
    background: ${({ theme }) => theme.colors.hover || 'rgba(0, 0, 0, 0.05)'};
    box-shadow: 
      inset 0 0 0 2px ${({ theme }) => theme.colors.primary || '#007BFF'},
      0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateX(6px) scale(0.98);
  }

  /* Disabled state */
  &[aria-disabled="true"] {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      transform: none;
      background: transparent;
      box-shadow: none;
    }
  }
`;

// Enhanced Icon container
export const DropDownIcon = styled.div`
  width: ${({ size }) => size || '36px'};
  height: ${({ size }) => size || '36px'};
  margin-right: ${({ marginRight }) => marginRight || '16px'};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ iconBorderRadius }) => iconBorderRadius || '8px'};
  background: ${({ iconBg, theme, variant }) => {
    if (iconBg) return iconBg;
    if (variant === 'primary') return theme.colors.primary + '20' || 'rgba(0, 123, 255, 0.2)';
    if (variant === 'success') return theme.colors.success + '20' || 'rgba(40, 167, 69, 0.2)';
    if (variant === 'danger') return theme.colors.danger + '20' || 'rgba(220, 53, 69, 0.2)';
    return 'rgba(0, 0, 0, 0.05)';
  }};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  img, svg {
    width: ${({ iconSize }) => iconSize || '20px'};
    height: ${({ iconSize }) => iconSize || '20px'};
    transition: transform 0.3s ease;
    color: ${({ theme, variant }) => {
      if (variant === 'primary') return theme.colors.primary || '#007BFF';
      if (variant === 'success') return theme.colors.success || '#28a745';
      if (variant === 'danger') return theme.colors.danger || '#dc3545';
      return theme.colors.text || '#1a1a1a';
    }};
  }

  ${DropDownItem}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    img, svg {
      transform: scale(1.1);
    }
  }

  /* Pulse animation for notifications */
  ${({ hasNotification }) => hasNotification && css`
    &::after {
      content: '';
      position: absolute;
      top: -2px;
      right: -2px;
      width: 8px;
      height: 8px;
      background: #ff4757;
      border-radius: 50%;
      animation: ${pulse} 2s infinite;
    }
  `}
`;

// Enhanced Text container
export const DropDownTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 0; /* Allows text to truncate */
`;

// Enhanced Item title
export const DropDownItemTitle = styled.h4`
  color: ${({ theme }) => theme.colors.text || '#1a1a1a'};
  font-size: ${({ fontSize }) => fontSize || '15px'};
  font-weight: ${({ fontWeight }) => fontWeight || '600'};
  line-height: 1.4;
  margin: 0 0 2px 0;
  transition: color 0.3s ease;
  
  /* Text truncation */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${DropDownItem}:hover & {
    color: ${({ theme, variant }) => {
      if (variant === 'primary') return theme.colors.primary || '#007BFF';
      if (variant === 'success') return theme.colors.success || '#28a745';
      if (variant === 'danger') return theme.colors.danger || '#dc3545';
      return theme.colors.text || '#1a1a1a';
    }};
  }
`;

// Enhanced Item description
export const DropDownItemDesc = styled.p`
  color: ${({ theme }) => theme.colors.subtext || '#6c757d'};
  opacity: ${({ opacity }) => opacity || '0.8'};
  font-size: ${({ fontSize }) => fontSize || '13px'};
  line-height: 1.5;
  margin: 0;
  transition: opacity 0.3s ease;
  
  /* Text truncation for long descriptions */
  display: -webkit-box;
  -webkit-line-clamp: ${({ lineClamp }) => lineClamp || '2'};
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${DropDownItem}:hover & {
    opacity: 1;
  }
`;

// New Badge component
export const DropDownBadge = styled.span`
  background: ${({ theme, variant }) => {
    if (variant === 'primary') return theme.colors.primary || '#007BFF';
    if (variant === 'success') return theme.colors.success || '#28a745';
    if (variant === 'danger') return theme.colors.danger || '#dc3545';
    if (variant === 'warning') return theme.colors.warning || '#ffc107';
    return theme.colors.accent || '#6c757d';
  }};
  color: white;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: auto;
  flex-shrink: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

// New Divider component
export const DropDownDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.border || 'rgba(0, 0, 0, 0.1)'};
  margin: ${({ margin }) => margin || '8px 12px'};
  opacity: 0.5;
`;

// New Footer component
export const DropDownFooter = styled.div`
  padding: 12px 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.border || 'rgba(0, 0, 0, 0.1)'};
  background: ${({ theme }) => theme.colors.footerBg || 'rgba(0, 0, 0, 0.02)'};
  text-align: center;
`;

// Enhanced Action Button in Footer
export const DropDownActionButton = styled.button`
  background: ${({ theme, variant }) => {
    if (variant === 'primary') return theme.colors.primary || '#007BFF';
    if (variant === 'success') return theme.colors.success || '#28a745';
    if (variant === 'danger') return theme.colors.danger || '#dc3545';
    return 'transparent';
  }};
  color: ${({ theme, variant }) => 
    variant === 'outline' 
      ? theme.colors.primary || '#007BFF'
      : 'white'
  };
  border: ${({ variant, theme }) => 
    variant === 'outline' 
      ? `1px solid ${theme.colors.primary || '#007BFF'}`
      : 'none'
  };
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background: ${({ theme, variant }) => {
      if (variant === 'outline') return theme.colors.primary || '#007BFF';
      if (variant === 'primary') return theme.colors.primaryDark || '#0056b3';
      if (variant === 'success') return theme.colors.successDark || '#1e7e34';
      if (variant === 'danger') return theme.colors.dangerDark || '#bd2130';
      return 'rgba(0, 0, 0, 0.05)';
    }};
    color: white;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary || '#007BFF'};
    outline-offset: 2px;
  }
`;

// Enhanced Export - Complete Dropdown Component
export const EnhancedNavDropDown = ({
  active = false,
  onClose,
  title,
  items = [],
  variant = 'default',
  position,
  width,
  showHeader = false,
  showFooter = false,
  footerAction,
  className,
  ...props
}) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!active) return;

      switch (e.key) {
        case 'Escape':
          onClose?.();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex(prev => 
            prev < items.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex(prev => 
            prev > 0 ? prev - 1 : items.length - 1
          );
          break;
        case 'Enter':
          if (focusedIndex >= 0 && items[focusedIndex]?.onClick) {
            items[focusedIndex].onClick();
          }
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [active, items, focusedIndex, onClose]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose?.();
      }
    };

    if (active) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [active, onClose]);

  return (
    <DropDownContainer
      ref={dropdownRef}
      active={active}
      variant={variant}
      position={position}
      width={width}
      className={className}
      role="menu"
      aria-label={title || 'Navigation dropdown'}
      {...props}
    >
      {showHeader && (
        <DropDownHeader>
          <DropDownTitle>{title}</DropDownTitle>
          {onClose && (
            <DropDownCloseButton onClick={onClose} aria-label="Close dropdown">
              <FaTimes size={12} />
            </DropDownCloseButton>
          )}
        </DropDownHeader>
      )}

      {items.map((item, index) => (
        <React.Fragment key={item.id || index}>
          {item.type === 'divider' ? (
            <DropDownDivider margin={item.margin} />
          ) : (
            <DropDownItem
              href={item.href}
              onClick={item.onClick}
              variant={item.variant}
              index={index}
              tabIndex={focusedIndex === index ? 0 : -1}
              role="menuitem"
              aria-disabled={item.disabled}
              style={{
                background: focusedIndex === index ? 'rgba(0, 0, 0, 0.05)' : 'transparent'
              }}
            >
              {item.icon && (
                <DropDownIcon
                  variant={item.variant}
                  hasNotification={item.hasNotification}
                >
                  {item.icon}
                </DropDownIcon>
              )}
              
              <DropDownTextContainer>
                <DropDownItemTitle variant={item.variant}>
                  {item.title}
                </DropDownItemTitle>
                {item.description && (
                  <DropDownItemDesc>
                    {item.description}
                  </DropDownItemDesc>
                )}
              </DropDownTextContainer>
              
              {item.badge && (
                <DropDownBadge variant={item.badge.variant}>
                  {item.badge.text}
                </DropDownBadge>
              )}
              
              {item.external && (
                <FaExternalLinkAlt 
                  size={12} 
                  style={{ marginLeft: '8px', opacity: 0.6 }} 
                />
              )}
            </DropDownItem>
          )}
        </React.Fragment>
      ))}

      {showFooter && footerAction && (
        <DropDownFooter>
          <DropDownActionButton
            variant={footerAction.variant}
            onClick={footerAction.onClick}
          >
            {footerAction.text}
          </DropDownActionButton>
        </DropDownFooter>
      )}
    </DropDownContainer>
  );
};

export default EnhancedNavDropDown;
