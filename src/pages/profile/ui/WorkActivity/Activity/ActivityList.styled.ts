import styled from "styled-components";

export const ActivityList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	color: rgba(89, 89, 89, 1);
	${props => props.theme.typography["Body-1"]};
	margin-top: 0.5rem;
`