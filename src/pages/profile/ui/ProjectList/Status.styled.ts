import styled, { css } from "styled-components";

export const Status = styled.div<{
	$backgroundColor?: string
	$textColor?: string
	// таким же образом можно добавить border
}>`
	padding: 0.3125rem;
	text-align: center;
	font-size: 0.75rem;
	margin-top: 0.625rem;
	${({ theme }) => theme.typography['Heading-7']}
	color: ${props => props.theme.palette.text};
	
	${props => props.$backgroundColor && css`
	background: ${props.$backgroundColor};
	`}
	${props => props.$textColor && css`
	color: ${props.$textColor};
	`}
`
