import styled from "styled-components"


export const Number = styled.div<{ $color: string }>`
	${props => props.theme.typography["Body-2"]};
	background-color: ${props => props.$color};

	color: rgba(255, 246, 246, 1);
	padding: 0.3rem 0.9rem;
	border-radius: 4px;
`

