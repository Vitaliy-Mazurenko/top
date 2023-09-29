import styled from "styled-components";

export const Header = styled.div<{$color: string}>`
	padding: 1rem 1.25rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${props => props.$color};
`