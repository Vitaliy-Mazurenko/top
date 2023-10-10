import styled from "styled-components";

export const SidebarInfo = styled.div`
  text-align: center;
  margin-top: 2.5rem; /* 40px */
  gap: 1rem; /* 16px */
  @media (max-width: 480px) {
    margin-top: 1rem; 
  }
`;

export const SidebarImg = styled.img`
  width: 4rem; /* 64px */
  height: 4rem; /* 64px */
`;

export const SidebarName = styled.h2`
  color: #333;
  font-size: 0.875rem; /* 14px */
  font-weight: 500;
  line-height: 0.875rem; /* 14px */
  word-wrap: break-word;
  margin-top: 0.25rem; /* 4px */
  font-family: 'Raleway', sans-serif;
`;

export const SidebarPosition = styled.p`
  color: #8c8c8c;
  font-size: 0.75rem; /* 12px */
  font-weight: 500;
  line-height: 0.875rem; /* 14px */
  word-wrap: break-word;
  font-family: 'Raleway', sans-serif;
  margin-top: 0.25rem; /* 4px */
`;
