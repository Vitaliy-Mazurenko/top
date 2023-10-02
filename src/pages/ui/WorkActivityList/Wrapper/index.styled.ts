import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.625rem;

	position: relative;
	&::before {
		content: " ";
		width: 1px;
		height: 100%;
		background-color: rgba(232, 232, 232, 1);;
		position: absolute;
		left: 0;
		top: 0;
		transform: translateX(0.47rem);
	}
`
