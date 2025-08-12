import styled from "styled-components";

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${({ theme }) => theme.breakpoints.md} {
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`;

export const Box = styled.div`
  background: #212d45;
  border-radius: 12px;
  height: 144px;
  padding: 24px;
  transition: background 0.3s ease;

  @media ${({ theme }) => theme.breakpoints.lg} {
    height: 210px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    height: 110px;
    padding: 12px;

    &:nth-child(2n) {
      grid-row: 2;
    }
  }
`;

export const BoxNum = styled.h5`
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #fff;
  margin-bottom: 8px;

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
  }
`;

export const BoxText = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 16px;
    line-height: 20px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`;

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding-bottom: 64px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    padding-bottom: 32px;
  }
`;

export const JoinText = styled.h5`
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 20px;
    line-height: 32px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 160px;
    justify-content: space-between;
  }
`;
