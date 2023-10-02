import styled from "styled-components";

export const StyledStatisticBlock = styled.div`
  min-width: 194px;
  min-height: 120px;
  border-radius: 8px;
  background-color: ${({ color }) => color || "#F4F9FB"};
`;
export const StyledBlockContent = styled.div`
  heigth: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;
export const PercentageText = styled.p`
  font-size: 48px;
  text-align: center;
  color: #ff8c33;
`;
export const InfoDescr = styled.p`
  font-size: 12px;
  text-align: center;
  color: 000;
`;
