import { getBreakpointsStyles } from "shared/helpers/getBreakpointsStyles";
import styled from "styled-components";

export const Wrapper = styled.div`
	border-radius: 5px;
	box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.5);
	overflow: hidden;
	@media (max-width: 875px) {
		& {
			flex-shrink: 1;
			/* flex-grow: 1; */
		}
	}
`
