// export default {
//   // Temp fonts
//   fonts: {
//     title: "Space Grotesk, sans-serif",
//     main: "Space Grotesk, sans-serif"
//   },
//   // Colors for layout
//   colors: {
//     primary1: "hsl(204,23.8%,95.9%)",
//     background1: "#0F1624",
//     accent1: "hsl(34.9,98.6%,72.9%)",
//     button: "hsl(205.1,100%,36.1%)",
//     background2: "hsl(232.7,27.3%,23.7%)",
//   },
//   // Breakpoints for responsive design
//   breakpoints: {
//     sm: 'screen and (max-width: 640px)',
//     md: 'screen and (max-width: 768px)',
//     lg: 'screen and (max-width: 1024px)',
//     xl: 'screen and (max-width: 1280px)'
//   },
// }


export default {
  // Typography
  fonts: {
    title: "'Space Grotesk', 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
    main: "'Space Grotesk', 'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', monospace",
  },

  fontSizes: {
    xs: '0.6075rem',     // ~10px
    sm: '0.70875rem',    // ~11.3px
    base: '0.81rem',     // ~13px
    lg: '0.91125rem',    // ~15px
    xl: '1.0125rem',     // ~16px
    '2xl': '1.215rem',   // ~20px
    '3xl': '1.51875rem', // ~24px
    '4xl': '1.8225rem',  // ~29px
    '5xl': '2.43rem',    // ~39px
    '6xl': '3.0375rem',  // ~49px
    '7xl': '3.645rem',   // ~58px
  },

  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  lineHeights: {
    tight: 1.2,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  // Enhanced color system
  colors: {
    // Core backgrounds
    background1: "#0F1624",
    background2: "hsl(232.7, 27.3%, 23.7%)",
    background3: "rgba(15, 22, 36, 0.95)",
    
    // Surface colors
    surface: "rgba(255, 255, 255, 0.05)",
    surfaceHover: "rgba(255, 255, 255, 0.08)",
    surfaceActive: "rgba(255, 255, 255, 0.12)",
    
    // Primary colors
    primary1: "hsl(204, 23.8%, 95.9%)",
    primary2: "hsl(204, 30%, 85%)",
    primary3: "hsl(204, 35%, 75%)",
    
    // Accent system
    accent1: "hsl(34.9, 98.6%, 72.9%)",
    accent2: "hsl(34.9, 98.6%, 62.9%)",
    accent3: "hsl(34.9, 98.6%, 52.9%)",
    accentGlow: "hsla(34.9, 98.6%, 72.9%, 0.3)",
    
    // Interactive colors
    button: "hsl(205.1, 100%, 36.1%)",
    buttonHover: "hsl(205.1, 100%, 30%)",
    buttonActive: "hsl(205.1, 100%, 25%)",
    
    // Status colors
    success: "hsl(142, 76%, 36%)",
    warning: "hsl(38, 92%, 50%)",
    error: "hsl(0, 84%, 60%)",
    info: "hsl(199, 89%, 48%)",
    
    // Text hierarchy
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.8)",
    textTertiary: "rgba(255, 255, 255, 0.6)",
    textMuted: "rgba(255, 255, 255, 0.4)",
    textDisabled: "rgba(255, 255, 255, 0.2)",
    
    // Borders & dividers
    border: "rgba(255, 255, 255, 0.1)",
    borderHover: "rgba(255, 255, 255, 0.2)",
    borderFocus: "rgba(255, 255, 255, 0.3)",
    divider: "rgba(255, 255, 255, 0.05)",
    
    // Gradients
    gradientPrimary: "linear-gradient(135deg, hsl(205.1, 100%, 36.1%) 0%, hsl(34.9, 98.6%, 72.9%) 100%)",
    gradientSecondary: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
    gradientOverlay: "linear-gradient(180deg, rgba(15, 22, 36, 0) 0%, rgba(15, 22, 36, 0.8) 100%)",
  },

  // Responsive breakpoints
  breakpoints: {
    xs: 'screen and (max-width: 479px)',
    sm: 'screen and (max-width: 639px)',
    md: 'screen and (max-width: 767px)',
    lg: 'screen and (max-width: 1023px)',
    xl: 'screen and (max-width: 1279px)',
    '2xl': 'screen and (max-width: 1535px)',
    '3xl': 'screen and (max-width: 1919px)',
  },

  // Spacing system
  spacing: {
    px: '1px',
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
    40: '10rem',    // 160px
    48: '12rem',    // 192px
    56: '14rem',    // 224px
    64: '16rem',    // 256px
  },

  // Enhanced shadows
  shadows: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.1)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px rgba(0, 0, 0, 0.3)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
    
    // Colored shadows
    glow: '0 0 20px hsla(34.9, 98.6%, 72.9%, 0.3)',
    glowHover: '0 0 30px hsla(34.9, 98.6%, 72.9%, 0.5)',
    card: '0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)',
    cardHover: '0 8px 24px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
  },

  // Border radius system
  radii: {
    none: '0',
    xs: '2px',
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '24px',
    full: '9999px',
  },

  // Animation & transitions
  transitions: {
    none: 'none',
    fast: 'all 0.1s ease-out',
    default: 'all 0.2s ease-out',
    smooth: 'all 0.3s ease-in-out',
    slow: 'all 0.5s ease-in-out',
    
    // Specific properties
    colors: 'color 0.2s ease-out, background-color 0.2s ease-out, border-color 0.2s ease-out',
    transform: 'transform 0.3s ease-out',
    opacity: 'opacity 0.2s ease-out',
    shadow: 'box-shadow 0.3s ease-out',
  },

  // Animation keyframes
  animations: {
    fadeIn: {
      '0%': { opacity: 0, transform: 'translateY(10px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
    slideIn: {
      '0%': { opacity: 0, transform: 'translateX(-20px)' },
      '100%': { opacity: 1, transform: 'translateX(0)' },
    },
    scaleIn: {
      '0%': { opacity: 0, transform: 'scale(0.95)' },
      '100%': { opacity: 1, transform: 'scale(1)' },
    },
    float: {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-10px)' },
    },
    pulse: {
      '0%, 100%': { opacity: 1 },
      '50%': { opacity: 0.5 },
    },
    glow: {
      '0%, 100%': { boxShadow: '0 0 20px hsla(34.9, 98.6%, 72.9%, 0.3)' },
      '50%': { boxShadow: '0 0 30px hsla(34.9, 98.6%, 72.9%, 0.6)' },
    },
  },

  // Z-index scale
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },

  // Component variants
  components: {
    button: {
      primary: {
        background: 'linear-gradient(135deg, hsl(205.1, 100%, 36.1%) 0%, hsl(34.9, 98.6%, 72.9%) 100%)',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '8px',
        padding: '12px 24px',
        fontWeight: 600,
        transition: 'all 0.3s ease-out',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
        },
      },
      secondary: {
        background: 'rgba(255, 255, 255, 0.05)',
        color: '#FFFFFF',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        padding: '12px 24px',
        fontWeight: 500,
        transition: 'all 0.3s ease-out',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.1)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
        },
      },
    },
    card: {
      default: {
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease-out',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.08)',
          borderColor: 'rgba(255, 255, 255, 0.15)',
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
        },
      },
    },
  },

  // Media queries helpers
  media: {
    mobile: '@media (max-width: 767px)',
    tablet: '@media (min-width: 768px) and (max-width: 1023px)',
    desktop: '@media (min-width: 1024px)',
    large: '@media (min-width: 1280px)',
    retina: '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
  },
};
