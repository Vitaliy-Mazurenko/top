import styled, { css } from "styled-components";
import { PersonalProjectCard } from "./PersonalProjectCard";

export const StyledPersonalProjectCard = styled(PersonalProjectCard) <{ $background?: string }>`
flex-basis: 15rem;
cursor: pointer;
`

export const Status = styled.div<{
	$backgroundColor?: string
	$textColor?: string
	// таким же образом можно добавить border
}>`
  cursor: pointer;
  padding: 0.475rem 1rem; /* 6px 16px */
  text-align: center;
  color: #E96057;
  margin: 0.625rem; /* 10px */
  font-size: 0.875rem; /* 14px */
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  border-radius: 2px;
  border: 1px solid #ECB23F;
  max-width: max-content;
  align-self: center;

  @media (max-width: 480px) {
    margin: 0.5rem;
  }
	
	${props => props.$backgroundColor && css`
	background: ${props.$backgroundColor};
	`}
	${props => props.$textColor && css`
	color: ${props.$textColor};
	`}
`
