import styled from "styled-components";

export const IconWrapper = styled.div<{ $color: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  color: ${(props) => props.$color};
`;

export const IconValue = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
