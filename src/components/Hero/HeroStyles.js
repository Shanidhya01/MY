import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  padding: 0 16px; /* Add consistent horizontal padding */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centers content vertically in flex container */
  
  /* Ensure consistent spacing in larger screens */
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 90%;
    margin: 0 auto;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 0 auto;
    padding: 0 12px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    margin: 0 auto;
    padding: 0 8px;
  }
`;
