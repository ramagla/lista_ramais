import styled from "styled-components";

export const EmployeeContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const EmployeeImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  flex-shrink: 0;
`;

export const EmployeeInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
