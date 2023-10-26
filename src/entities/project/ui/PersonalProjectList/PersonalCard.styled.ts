import styled, { css } from "styled-components";
import { PersonalProjectCard } from "./PersonalProjectCard";

export const StyledPersonalProjectCard = styled(PersonalProjectCard) <{ $background?: string }>`
flex-basis: 15rem;
cursor: pointer;
`
export const StyledPersonalProjectItem = styled.div`
background-color: #F4F9FB;
`

export const Status = styled.div<{
	$backgroundColor?: string
	$textColor?: string
  $borderColor?: string 	//  добавить border
}>`
  cursor: pointer;
  padding: 0.475rem 1rem; /* 6px 16px */
  text-align: center;
  margin: 0.625rem; /* 10px */
  font-size: 14px; /* 0.875rem; */
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
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
  ${props => props.$borderColor && css`
	border-color: ${props.$borderColor};
	`}
`
