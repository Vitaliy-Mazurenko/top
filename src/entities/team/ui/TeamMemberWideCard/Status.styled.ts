import styled from "styled-components";
import { RuleSet } from "styled-components/dist/types";

export const Status = styled.div<{
	$css: RuleSet
}>`
	padding: 0.25rem 0.5rem;
	display: inline-block;
	border-radius: 2px;
	${props => props.$css}
`
