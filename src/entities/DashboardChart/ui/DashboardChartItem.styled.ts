import styled from "styled-components";

export const DiagramWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  @media screen and (min-width: 480px) {
    gap: 8px;
  }
`;

export const DiagramItem = styled.div<{ $percentage: number }>`
  margin-top: auto;
  height: ${(props) => `${props.$percentage}%`};
  border-radius: 8px;
  background-color: ${(props) =>
    props.$percentage > 50 ? "#FF8C33" : "#c6e1ec"};
`;

export const DiagramLabel = styled.span`
  align-self: center;
  text-transform: uppercase;
  color: #adadad;
  font-size: 14px;
  line-height: 1.43;

  @media screen and (min-width: 480px) {
    font-size: 20px;
    line-height: 1;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }

  @media screen and (min-width: 1080px) {
    display: none;
  }
`;
