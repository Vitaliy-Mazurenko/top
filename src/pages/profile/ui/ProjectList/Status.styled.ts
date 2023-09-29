import styled, { RuleSet } from "styled-components";

export  const Status = styled.div<{ 
	$css?: RuleSet 
	$pointer?: boolean
	}>`
	padding: 0.3125rem;
	text-align: center;
	font-size: 0.75rem;
	margin-top: 0.625rem;
	${({ theme }) => theme.typography['Heading-7']}
	/* default */
	color: ${props => props.theme.palette.text};
	${props => props.$css};
	cursor: ${props => props.$pointer ? 'pointer' : 'default'};
`
