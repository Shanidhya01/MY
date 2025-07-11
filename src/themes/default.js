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
  // Font settings
  fonts: {
    title: "'Space Grotesk', sans-serif",
    main: "'Space Grotesk', sans-serif",
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Color palette
  colors: {
    // Core colors
    primary1: "hsl(204, 23.8%, 95.9%)",
    background1: "#0F1624",
    background2: "hsl(232.7, 27.3%, 23.7%)",

    // Accent & interactive
    accent1: "hsl(34.9, 98.6%, 72.9%)",
    accent2: "hsl(34.9, 98.6%, 62.9%)", // hover

    button: "hsl(205.1, 100%, 36.1%)",
    buttonHover: "hsl(205.1, 100%, 30%)",

    // Text colors
    textPrimary: "#FFFFFF",
    textSecondary: "rgba(255, 255, 255, 0.7)",
    textMuted: "rgba(255, 255, 255, 0.5)",

    // Borders / subtle elements
    border: "rgba(255, 255, 255, 0.1)",
    cardBackground: "rgba(255, 255, 255, 0.05)",
  },

  // Breakpoints
  breakpoints: {
    xs: 'screen and (max-width: 480px)',
    sm: 'screen and (max-width: 640px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)',
    '2xl': 'screen and (max-width: 1536px)',
  },

  // Box shadows
  shadows: {
    card: '0 4px 12px rgba(0, 0, 0, 0.2)',
    hover: '0 6px 16px rgba(0, 0, 0, 0.3)',
  },

  // Border radius
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '9999px',
  },

  // Transitions
  transitions: {
    default: 'all 0.3s ease-in-out',
    fast: 'all 0.15s ease-in-out',
  },
};
