import Theme from '../styles/theme';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import { useEffect } from 'react';

/* ============ Enhanced Global Styles ============ */
const GlobalStyle = createGlobalStyle`
  /* Reset and base styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    width: 100%;
    height: 100%;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: #0d1117;
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Next.js root container */
  #__next {
    width: 100%;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }

  /* Remove default background from common elements */
  main, section, div, article, aside {
    background: transparent;
  }

  /* Enhanced focus styles */
  *:focus {
    outline: 2px solid ${props => props.theme.colors.accent1 || '#00d4ff'};
    outline-offset: 2px;
  }

  /* Link styles */
  a {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  /* Button reset */
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(13, 17, 23, 0.5);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      180deg,
      ${props => props.theme.colors.accent1 || '#00d4ff'} 0%,
      ${props => props.theme.colors.button || '#6366f1'} 100%
    );
    border-radius: 4px;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.title || 'inherit'};
    line-height: 1.2;
    margin: 0;
    font-weight: 600;
  }

  p {
    line-height: 1.6;
    margin: 0;
  }

  /* Selection styles */
  ::selection {
    background: ${props => props.theme.colors.accent1 || '#00d4ff'}33;
    color: white;
  }
`;

/* ============ Enhanced App Component ============ */
export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0d1117" />
        <title>Shanidhya Kumar - Developer Portfolio</title>
        <meta name="description" content="Full Stack Developer passionate about creating innovative solutions" />
      </Head>
      
      <Theme>
        <GlobalStyle />
        <Component {...pageProps} />
      </Theme>
    </>
  );
}