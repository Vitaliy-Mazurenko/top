import styled from "styled-components";

export const Position = styled.p`
	${props => props.theme.typography["Body-1"]};
	color: ${props => props.theme.palette.text};
	margin-top: 0.125rem;
	font-size: 1rem;
	line-height: 24px;
	font-weight: 500;
`