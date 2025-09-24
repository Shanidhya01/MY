import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './globals';

/* ============ Default Theme Configuration ============ */
const defaultTheme = {
  colors: {
    // Primary backgrounds
    background1: '#0f172a', // Main background
    background2: '#1e293b', // Secondary background
    background3: '#334155', // Tertiary background
    background4: '#475569', // Card backgrounds
    
    // Text colors
    primary1: 'rgba(255, 255, 255, 0.95)', // Primary text
    primary2: 'rgba(255, 255, 255, 0.8)',  // Secondary text
    primary3: 'rgba(255, 255, 255, 0.6)',  // Tertiary text
    primary4: 'rgba(255, 255, 255, 0.4)',  // Muted text
    
    // Accent colors
    accent1: '#6366f1', // Primary accent (indigo)
    accent2: '#8b5cf6', // Secondary accent (purple)
    accent3: '#06b6d4', // Tertiary accent (cyan)
    accent4: '#10b981', // Success accent (emerald)
    accent5: '#f59e0b', // Warning accent (amber)
    accent6: '#ef4444', // Danger accent (red)
    
    // UI colors
    border: 'rgba(255, 255, 255, 0.1)',
    divider: 'rgba(255, 255, 255, 0.08)',
    hover: 'rgba(255, 255, 255, 0.05)',
    active: 'rgba(255, 255, 255, 0.1)',
    focus: '#6366f1',
    
    // Button colors
    button: '#6366f1',
    buttonHover: '#4f46e5',
    buttonText: '#ffffff',
    
    // Status colors
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#06b6d4'
  },
  
  gradients: {
    primary: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    secondary: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
    accent: 'linear-gradient(135deg, #10b981, #059669)',
    warm: 'linear-gradient(135deg, #f59e0b, #f97316)',
    cool: 'linear-gradient(135deg, #06b6d4, #6366f1, #8b5cf6)',
    rainbow: 'linear-gradient(90deg, #8b5cf6, #22d3ee, #34d399, #fbbf24, #f87171)',
    text: 'linear-gradient(135deg, #a78bfa, #22d3ee)',
    background: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)'
  },
  
  fonts: {
    title: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    main: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    code: '"Fira Code", "Monaco", "Cascadia Code", "Roboto Mono", monospace'
  },
  
  breakpoints: {
    xs: '(max-width: 480px)',
    sm: '(max-width: 640px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1024px)',
    xl: '(max-width: 1280px)',
    '2xl': '(max-width: 1536px)',
    maxWidth: '1280px'
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem'
  },
  
  borderRadius: {
    none: '0',
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    full: '9999px'
  },
  
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
    '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
    glow: '0 0 20px rgba(99, 102, 241, 0.3)',
    glowLg: '0 0 40px rgba(99, 102, 241, 0.2)'
  },
  
  transitions: {
    fast: '0.15s ease-out',
    normal: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: '0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  },
  
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
    toast: 1080
  }
};

/* ============ Dark Theme ============ */
const darkTheme = {
  ...defaultTheme,
  name: 'dark',
  // Dark theme uses the default colors
};

/* ============ Light Theme ============ */
const lightTheme = {
  ...defaultTheme,
  name: 'light',
  colors: {
    ...defaultTheme.colors,
    // Light theme color overrides
    background1: '#ffffff',
    background2: '#f8fafc',
    background3: '#f1f5f9',
    background4: '#e2e8f0',
    
    primary1: 'rgba(0, 0, 0, 0.95)',
    primary2: 'rgba(0, 0, 0, 0.8)',
    primary3: 'rgba(0, 0, 0, 0.6)',
    primary4: 'rgba(0, 0, 0, 0.4)',
    
    border: 'rgba(0, 0, 0, 0.1)',
    divider: 'rgba(0, 0, 0, 0.08)',
    hover: 'rgba(0, 0, 0, 0.05)',
    active: 'rgba(0, 0, 0, 0.1)',
    
    // Keep accent colors the same for consistency
    accent1: '#6366f1',
    accent2: '#8b5cf6',
    accent3: '#06b6d4',
    accent4: '#10b981',
    accent5: '#f59e0b',
    accent6: '#ef4444'
  }
};

/* ============ Available Themes ============ */
const themes = {
  default: defaultTheme,
  dark: darkTheme,
  light: lightTheme
};

/* ============ Theme Utilities ============ */
const THEME_STORAGE_KEY = 'portfolio-theme';
const THEME_ATTRIBUTE = 'data-theme';

const isClient = typeof window !== 'undefined';

// Get system preference
const getSystemTheme = () => {
  if (!isClient) return 'dark';
  
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Get stored theme or fallback to system
const getInitialTheme = () => {
  if (!isClient) return 'dark';
  
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored && themes[stored]) {
      return stored;
    }
  } catch (error) {
    console.warn('Failed to read theme from localStorage:', error);
  }
  
  return getSystemTheme();
};

// Apply theme to document
const applyThemeToDocument = (themeName) => {
  if (!isClient) return;
  
  document.documentElement.setAttribute(THEME_ATTRIBUTE, themeName);
  
  // Update meta theme-color for mobile browsers
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  const theme = themes[themeName];
  
  if (metaThemeColor && theme) {
    metaThemeColor.setAttribute('content', theme.colors?.background1 || '#0f172a');
  }
  
  // Update color-scheme
  document.documentElement.style.colorScheme = themeName === 'light' ? 'light' : 'dark';
};

/* ============ Theme Context ============ */
const ThemeContext = createContext({
  theme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {},
  themes: {},
  isLoading: false,
  preferredTheme: 'dark'
});

/* ============ Theme Hook ============ */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};

/* ============ Theme Provider Component ============ */
export const EnhancedThemeProvider = ({ 
  children, 
  defaultTheme: propDefaultTheme = 'dark',
  enableSystemTheme = true,
  enableTransitions = true,
  storageKey = THEME_STORAGE_KEY
}) => {
  const [currentTheme, setCurrentTheme] = useState(propDefaultTheme);
  const [isLoading, setIsLoading] = useState(true);
  const [preferredTheme, setPreferredTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true);
    
    const initialTheme = getInitialTheme();
    const systemTheme = getSystemTheme();
    
    setCurrentTheme(initialTheme);
    setPreferredTheme(systemTheme);
    applyThemeToDocument(initialTheme);
    
    // Add transition class after a brief delay to prevent flash
    if (enableTransitions) {
      setTimeout(() => {
        if (document.documentElement) {
          document.documentElement.classList.add('theme-transition');
        }
      }, 100);
    }
    
    setIsLoading(false);
  }, [enableTransitions]);

  // Listen for system theme changes
  useEffect(() => {
    if (!enableSystemTheme || !isClient) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e) => {
      const systemTheme = e.matches ? 'dark' : 'light';
      setPreferredTheme(systemTheme);
      
      // Only auto-switch if user hasn't manually selected a theme
      try {
        const storedTheme = localStorage.getItem(storageKey);
        if (!storedTheme) {
          setCurrentTheme(systemTheme);
          applyThemeToDocument(systemTheme);
        }
      } catch (error) {
        console.warn('Failed to read from localStorage:', error);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [enableSystemTheme, storageKey]);

  // Persist theme changes
  const updateTheme = useCallback((themeName) => {
    if (!themes[themeName]) {
      console.warn(`Theme "${themeName}" not found. Available themes:`, Object.keys(themes));
      return;
    }

    setCurrentTheme(themeName);
    applyThemeToDocument(themeName);
    
    try {
      localStorage.setItem(storageKey, themeName);
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
    
    // Dispatch custom event for other components
    if (isClient) {
      window.dispatchEvent(new CustomEvent('themechange', { 
        detail: { theme: themeName } 
      }));
    }
  }, [storageKey]);

  // Toggle between themes
  const toggleTheme = useCallback(() => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    updateTheme(newTheme);
  }, [currentTheme, updateTheme]);

  // Reset to system theme
  const resetToSystemTheme = useCallback(() => {
    const systemTheme = getSystemTheme();
    updateTheme(systemTheme);
    
    try {
      localStorage.removeItem(storageKey);
    } catch (error) {
      console.warn('Failed to remove theme from localStorage:', error);
    }
  }, [updateTheme, storageKey]);

  // Get current theme object
  const themeObject = useMemo(() => {
    const theme = themes[currentTheme] || themes.default;
    
    return {
      ...theme,
      // Add theme metadata
      meta: {
        name: currentTheme,
        isDark: currentTheme === 'dark',
        isLight: currentTheme === 'light',
        isSystem: currentTheme === preferredTheme,
        availableThemes: Object.keys(themes)
      }
    };
  }, [currentTheme, preferredTheme]);

  // Context value
  const contextValue = useMemo(() => ({
    theme: currentTheme,
    setTheme: updateTheme,
    toggleTheme,
    resetToSystemTheme,
    themes,
    isLoading,
    preferredTheme,
    mounted
  }), [
    currentTheme, 
    updateTheme, 
    toggleTheme, 
    resetToSystemTheme, 
    isLoading, 
    preferredTheme,
    mounted
  ]);

  // Show loading state during SSR/hydration
  if (!mounted) {
    return (
      <ThemeProvider theme={themes[propDefaultTheme] || themes.default}>
        <GlobalStyles />
        <div style={{ visibility: 'hidden' }}>
          {children}
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={themeObject}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

/* ============ Theme Selector Component ============ */
export const ThemeSelector = ({ 
  className = '',
  showLabels = true,
  size = 'md',
  variant = 'buttons' // 'buttons' | 'dropdown' | 'toggle'
}) => {
  const { theme, setTheme, toggleTheme, themes } = useTheme();

  const sizeClasses = {
    sm: 'text-sm p-1',
    md: 'text-base p-2', 
    lg: 'text-lg p-3'
  };

  if (variant === 'toggle') {
    return (
      <button
        onClick={toggleTheme}
        className={`theme-toggle ${sizeClasses[size]} ${className}`}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        title={`Current theme: ${theme}`}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
        {showLabels && <span className="ml-2">{theme}</span>}
      </button>
    );
  }

  if (variant === 'dropdown') {
    return (
      <select 
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className={`theme-selector ${sizeClasses[size]} ${className}`}
        aria-label="Select theme"
      >
        {Object.keys(themes).map((themeName) => (
          <option key={themeName} value={themeName}>
            {showLabels ? themeName.charAt(0).toUpperCase() + themeName.slice(1) : themeName}
          </option>
        ))}
      </select>
    );
  }

  // Default: buttons
  return (
    <div className={`theme-buttons ${className}`} role="radiogroup" aria-label="Theme selection">
      {Object.keys(themes).map((themeName) => (
        <button
          key={themeName}
          onClick={() => setTheme(themeName)}
          className={`theme-button ${sizeClasses[size]} ${theme === themeName ? 'active' : ''}`}
          role="radio"
          aria-checked={theme === themeName}
          aria-label={`${themeName.charAt(0).toUpperCase() + themeName.slice(1)} theme`}
        >
          {showLabels ? themeName.charAt(0).toUpperCase() + themeName.slice(1) : themeName}
        </button>
      ))}
    </div>
  );
};

/* ============ Theme-aware Hook for Components ============ */
export const useThemeMode = () => {
  const { theme, setTheme, toggleTheme, preferredTheme } = useTheme();
  
  return {
    isDark: theme === 'dark',
    isLight: theme === 'light',
    isSystem: theme === preferredTheme,
    current: theme,
    preferred: preferredTheme,
    toggle: toggleTheme,
    setTheme
  };
};

/* ============ HOC for Theme-aware Components ============ */
export const withTheme = (WrappedComponent) => {
  const ThemedComponent = (props) => {
    const themeProps = useTheme();
    return <WrappedComponent {...props} {...themeProps} />;
  };
  
  ThemedComponent.displayName = `withTheme(${WrappedComponent.displayName || WrappedComponent.name})`;
  return ThemedComponent;
};

/* ============ Legacy Theme Component (backward compatibility) ============ */
const Theme = ({ 
  children, 
  defaultTheme = 'dark',
  ...props 
}) => (
  <EnhancedThemeProvider defaultTheme={defaultTheme} {...props}>
    {children}
  </EnhancedThemeProvider>
);

/* ============ Theme Transition Styles ============ */
export const themeTransitionStyles = `
  .theme-transition {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;
  }
  
  .theme-transition *,
  .theme-transition *::before,
  .theme-transition *::after {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;
  }
  
  /* Theme selector styles */
  .theme-toggle {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.5rem;
    color: inherit;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }
  
  .theme-toggle:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }
  
  .theme-buttons {
    display: flex;
    gap: 0.5rem;
    padding: 0.25rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .theme-button {
    background: transparent;
    border: none;
    border-radius: 0.5rem;
    color: inherit;
    cursor: pointer;
    opacity: 0.7;
    transition: all 0.2s ease;
  }
  
  .theme-button:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
  }
  
  .theme-button.active {
    opacity: 1;
    background: rgba(99, 102, 241, 0.2);
    color: #a5b4fc;
  }
  
  .theme-selector {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.5rem;
    color: inherit;
    cursor: pointer;
  }
  
  @media (prefers-reduced-motion: reduce) {
    .theme-transition,
    .theme-transition *,
    .theme-transition *::before,
    .theme-transition *::after {
      transition: none !important;
    }
  }
`;

// Safely inject theme transition styles
if (typeof document !== 'undefined') {
  let styleElement = document.getElementById('theme-transition-styles');
  
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = 'theme-transition-styles';
    styleElement.textContent = themeTransitionStyles;
    document.head.appendChild(styleElement);
  }
}

export default Theme;

/* ============ Named Exports ============ */
export {
  EnhancedThemeProvider as ThemeProvider,
  ThemeContext,
  themes,
  getSystemTheme,
  getInitialTheme,
  defaultTheme,
  darkTheme,
  lightTheme
};