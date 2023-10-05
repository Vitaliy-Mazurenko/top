import styled from "styled-components";

export const SkillName = styled.p`
	${props => props.theme.typography["Heading-7"]}
	color: ${props => props.theme.palette.text};
	flex-grow: 1;
`
