import styled from "styled-components";

export const Wrapper = styled.div`
	gap: 1.5rem;
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 875px) {
		& {
			gap: 0.5rem;
		}
	}
`