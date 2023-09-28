import styled from "styled-components";

export const StyledInput = styled.input`
padding: 0.3125rem 0.5rem;
border: 1px solid rgba(140, 140, 140, 1);
border-radius: 2px;
color: ${props => props.theme.palette.text};

&::placeholder {
	color: rgba(140, 140, 140, 1);
}
`
