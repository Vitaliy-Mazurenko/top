import styled from "styled-components";

export const Activity = styled.li`
	position: relative;
	padding-left: 1.5rem;
	&::before {
		content: " ";
		position: absolute;
		width: 0.5rem;
		height: 0.5rem;
		background-color: ${props => props.theme.palette.primary};
		left: 0.25rem;
		transform: translateY(-50%);
		top: 0.5rem;
		border-radius: 50%;
	}
`