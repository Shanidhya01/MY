import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { 
  LayoutWrapper, 
  MainContent, 
  Container,
  GlobalStyles,
  LoadingContainer,
  LoadingSpinner,
  LoadingText,
  BackToTopButton,
  ProgressBar,
  SkipLink,
  NotificationContainer,
  AnimatedWrapper,
  FadeTransition
} from './LayoutStyles';

// Enhanced theme configuration
const theme = {
  colors: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    accent: '#06b6d4',
    background: '#0f172a',
    surface: 'rgba(255, 255, 255, 0.05)',
    text: {
      primary: 'rgba(255, 255, 255, 0.9)',
      secondary: 'rgba(255, 255, 255, 0.7)',
      muted: 'rgba(255, 255, 255, 0.5)'
    },
    border: 'rgba(255, 255, 255, 0.1)',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444'
  },
  breakpoints: {
    xs: '(max-width: 480px)',
    sm: '(max-width: 768px)',
    md: '(max-width: 1024px)',
    lg: '(max-width: 1280px)',
    xl: '(max-width: 1536px)'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem'
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem'
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    }
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.15)'
  },
  transitions: {
    fast: '0.15s ease-out',
    normal: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.5s cubic-bezier(0.4, 0, 0.2, 1)'
  }
};

// Utility to check if we're in the browser
const isBrowser = typeof window !== 'undefined';

// Utility functions
const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

const debounce = (func, delay) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

// Custom hooks with SSR safety
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    if (!isBrowser) return;

    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > previousScrollY ? 'down' : 'up';
      
      setScrollPosition(currentScrollY);
      setScrollDirection(direction);
      setIsAtTop(currentScrollY < 50);
      
      previousScrollY = currentScrollY;
    };

    const throttledHandleScroll = throttle(handleScroll, 16);
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  return { scrollPosition, scrollDirection, isAtTop };
};

const usePageVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isBrowser || typeof document === 'undefined') return;

    setIsVisible(!document.hidden);

    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return isVisible;
};

const usePreferredTheme = () => {
  const [prefersDark, setPrefersDark] = useState(true);

  useEffect(() => {
    if (!isBrowser || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setPrefersDark(mediaQuery.matches); // Fixed typo here

    const handleChange = (e) => setPrefersDark(e.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersDark;
};

const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((message, type = 'info', duration = 5000) => {
    const id = Date.now();
    const notification = { id, message, type };
    
    setNotifications(prev => [...prev, notification]);
    
    if (duration > 0) {
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== id));
      }, duration);
    }
    
    return id;
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  return { notifications, addNotification, removeNotification };
};

// Enhanced Layout Component
export const Layout = ({ 
  children, 
  isLoading = false,
  showProgress = true,
  customTheme = {},
  onThemeChange,
  className = '',
  enableNotifications = true,
  ...props 
}) => {
  // State management - all hooks must be called at the top level
  const [mounted, setMounted] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [pageLoadProgress, setPageLoadProgress] = useState(0);
  const [contentVisible, setContentVisible] = useState(!isLoading);

  // Custom hooks - always call these, regardless of mounted state
  const { scrollPosition, scrollDirection, isAtTop } = useScrollPosition();
  const isPageVisible = usePageVisibility();
  const prefersDarkTheme = usePreferredTheme();
  const { notifications, addNotification, removeNotification } = useNotifications();

  // Memoized theme - always compute
  const mergedTheme = useMemo(() => ({
    ...theme,
    ...customTheme,
    colors: {
      ...theme.colors,
      ...customTheme.colors
    }
  }), [customTheme]);

  // Progress calculation - always compute
  const scrollProgress = useMemo(() => {
    if (!isBrowser || !mounted) return 0;
    
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return docHeight > 0 ? (scrollPosition / docHeight) * 100 : 0;
  }, [scrollPosition, mounted]);

  // Handlers - always define
  const handleBackToTop = useCallback(() => {
    if (!isBrowser) return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    if (enableNotifications) {
      addNotification('Scrolled to top', 'success', 2000);
    }
  }, [addNotification, enableNotifications]);

  const handleKeyboardNavigation = useCallback((e) => {
    // Alt + T: Toggle theme
    if (e.altKey && e.key === 't') {
      e.preventDefault();
      onThemeChange?.(prefersDarkTheme ? 'light' : 'dark');
      if (enableNotifications) {
        addNotification('Theme toggled', 'info', 2000);
      }
    }
    
    // Alt + H: Focus header
    if (e.altKey && e.key === 'h') {
      e.preventDefault();
      if (isBrowser) {
        document.querySelector('header')?.focus();
      }
    }
    
    // Alt + M: Focus main content
    if (e.altKey && e.key === 'm') {
      e.preventDefault();
      if (isBrowser) {
        document.querySelector('main')?.focus();
      }
    }
    
    // Escape: Close notifications
    if (e.key === 'Escape' && notifications.length > 0) {
      notifications.forEach(notification => removeNotification(notification.id));
    }
  }, [prefersDarkTheme, onThemeChange, enableNotifications, addNotification, notifications, removeNotification]);

  // Effects - all effects should be called regardless of mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Simulate page load progress
    if (isLoading) {
      const progressInterval = setInterval(() => {
        setPageLoadProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
              setContentVisible(true);
            }, 300);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 100);

      return () => clearInterval(progressInterval);
    } else {
      setPageLoadProgress(100);
      setContentVisible(true);
    }
  }, [isLoading, mounted]);

  useEffect(() => {
    if (!mounted) return;
    setShowBackToTop(scrollPosition > 300);
  }, [scrollPosition, mounted]);

  useEffect(() => {
    if (!isBrowser || !mounted) return;

    // Intersection Observer for section tracking
    const sections = document.querySelectorAll('section[id]');
    
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [children, mounted]);

  useEffect(() => {
    if (!isBrowser || !mounted) return;

    document.addEventListener('keydown', handleKeyboardNavigation);
    return () => document.removeEventListener('keydown', handleKeyboardNavigation);
  }, [handleKeyboardNavigation, mounted]);

  // Page visibility handling
  useEffect(() => {
    if (!isBrowser || !mounted) return;

    if (!isPageVisible) {
      document.title = '👋 Come back! - Portfolio';
    } else {
      document.title = 'Portfolio - Welcome';
    }
  }, [isPageVisible, mounted]);

  // Early return after all hooks have been called
  if (!mounted) {
    return (
      <ThemeProvider theme={mergedTheme}>
        <GlobalStyles />
        <LoadingContainer fullScreen>
          <LoadingSpinner size="60px" />
          <LoadingText>Initializing Portfolio...</LoadingText>
        </LoadingContainer>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={mergedTheme}>
      <GlobalStyles />
      
      {/* Skip Navigation Link */}
      <SkipLink href="#main-content">
        Skip to main content
      </SkipLink>

      {/* Progress Bar */}
      {showProgress && (
        <ProgressBar 
          progress={isLoading ? pageLoadProgress : scrollProgress}
          isLoading={isLoading}
        />
      )}

      {/* Main Layout Wrapper */}
      <LayoutWrapper 
        className={className}
        data-scroll-direction={scrollDirection}
        data-current-section={currentSection}
        data-page-visible={isPageVisible}
        {...props}
      >
        {/* Header */}
        <Header 
          isScrolled={!isAtTop}
          scrollDirection={scrollDirection}
          currentSection={currentSection}
        />

        {/* Main Content with CSS Animation */}
        <MainContent 
          id="main-content"
          tabIndex="-1"
          animated
          role="main"
          aria-label="Main content"
        >
          {isLoading ? (
            <FadeTransition key="loading" visible={!contentVisible}>
              <Container centered fullHeight>
                <LoadingContainer>
                  <LoadingSpinner size="80px" />
                  <LoadingText>Loading amazing content...</LoadingText>
                  <div style={{ 
                    width: '200px', 
                    height: '4px', 
                    background: 'rgba(99, 102, 241, 0.2)', 
                    borderRadius: '2px',
                    overflow: 'hidden',
                    marginTop: '1rem'
                  }}>
                    <div style={{
                      width: `${pageLoadProgress}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                      borderRadius: '2px',
                      transition: 'width 0.3s ease'
                    }} />
                  </div>
                </LoadingContainer>
              </Container>
            </FadeTransition>
          ) : (
            <FadeTransition key="content" visible={contentVisible}>
              <AnimatedWrapper>
                {children}
              </AnimatedWrapper>
            </FadeTransition>
          )}
        </MainContent>

        {/* Footer */}
        <Footer />

        {/* Back to Top Button */}
        <BackToTopButton
          onClick={handleBackToTop}
          aria-label="Back to top"
          title="Back to top (Alt + T for theme toggle)"
          data-visible={showBackToTop}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </BackToTopButton>

        {/* Notifications */}
        {enableNotifications && notifications.length > 0 && (
          <NotificationContainer>
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`notification notification--${notification.type}`}
                style={{
                  animation: 'slideInRight 0.3s ease-out'
                }}
                onClick={() => removeNotification(notification.id)}
                role="alert"
                aria-live="polite"
              >
                {notification.message}
                <button 
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    marginLeft: '0.5rem',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    lineHeight: 1
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    removeNotification(notification.id);
                  }}
                  aria-label="Close notification"
                >
                  ×
                </button>
              </div>
            ))}
          </NotificationContainer>
        )}
      </LayoutWrapper>
    </ThemeProvider>
  );
};

// Enhanced Layout variants
export const FullWidthLayout = ({ children, ...props }) => (
  <Layout {...props}>
    <Container size="full">
      {children}
    </Container>
  </Layout>
);

export const CompactLayout = ({ children, ...props }) => (
  <Layout {...props}>
    <Container size="md">
      {children}
    </Container>
  </Layout>
);

export const CenteredLayout = ({ children, ...props }) => (
  <Layout {...props}>
    <Container centered fullHeight>
      {children}
    </Container>
  </Layout>
);

// HOC for layout enhancement
export const withLayout = (WrappedComponent, layoutProps = {}) => {
  return function WithLayoutComponent(props) {
    return (
      <Layout {...layoutProps}>
        <WrappedComponent {...props} />
      </Layout>
    );
  };
};

// Context for layout state
export const LayoutContext = React.createContext({
  scrollPosition: 0,
  scrollDirection: 'up',
  isAtTop: true,
  currentSection: '',
  theme: theme,
  addNotification: () => {},
  removeNotification: () => {}
});

export const LayoutProvider = ({ children, ...layoutProps }) => {
  const [layoutState] = useState({
    scrollPosition: 0,
    scrollDirection: 'up',
    isAtTop: true,
    currentSection: '',
    theme: theme
  });

  const { notifications, addNotification, removeNotification } = useNotifications();

  const contextValue = useMemo(() => ({
    ...layoutState,
    notifications,
    addNotification,
    removeNotification
  }), [layoutState, notifications, addNotification, removeNotification]);

  return (
    <LayoutContext.Provider value={contextValue}>
      <Layout {...layoutProps}>
        {children}
      </Layout>
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = React.useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};

export default Layout;