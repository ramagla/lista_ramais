import styled from "styled-components";

export const EmployeeContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const EmployeeImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const EmployeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;

  h3 {
    margin-bottom: 0;
  }

  p {
    margin-bottom: 0;
  }
  span {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
    text-align: left;
  }
`;
