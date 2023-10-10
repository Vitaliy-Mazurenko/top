import styled from "styled-components";

export const StyledStatisticBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 20%;
  width: 152px;
  height: 134px;
  border-radius: 8px;
  background-color: ${({ color }) => color || "#F4F9FB"};

  @media screen and (min-width: 1080px) {
    width: unset;
  }
`;

export const StyledBlockContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
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
