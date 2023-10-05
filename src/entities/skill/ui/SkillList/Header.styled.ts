import styled from "styled-components";

export const Header = styled.div`
	background-color: rgba(189, 218, 232, 1);
	border-radius: 0.25rem;
	${props => props.theme.typography["Heading-7"]}
	padding: 0.5rem;
	text-align: center;
`