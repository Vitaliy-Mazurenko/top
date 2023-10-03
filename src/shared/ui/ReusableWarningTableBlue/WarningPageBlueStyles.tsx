import styled from "styled-components";

export const WarningTable = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #8054e3;
  margin-top: 2.5rem; /* 40px */
  gap: 1rem; /* 16px */
  width: 25rem; /* 400px */
  padding: 1rem; /* 16px */
`;

export const WarningTableImage = styled.img`
  height: 1.5rem; /* 24px */
  padding-left: 1rem; /* 16px */
`;

export const WarningTableText = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 400;
  line-height: 1.375rem; /* 22px */
  margin-top: 0.125rem; /* 2px */
`;