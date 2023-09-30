import styled from "styled-components";

export const Status = styled.div<{
	$backgroundColor?: string
	$textColor?: string
}>`
	padding: 0.3125rem;
	text-align: center;
	font-size: 0.75rem;
	margin-top: 0.625rem;
	${({ theme }) => theme.typography['Heading-7']}
	color: ${props => props.theme.palette.text};
	
	${props => props.$backgroundColor && `backgroundColor: ${props.$backgroundColor}`}
	${props => props.$textColor && `color: ${props.$textColor}`}
`
