import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Logo = styled.img`
  width: 80px;
  height: auto;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Version = styled.span`
  font-size: 12px;
  margin-right: 16px;
  margin-bottom: 40px;
  text-decoration: underline;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    margin-right: 0;
  }
`;
