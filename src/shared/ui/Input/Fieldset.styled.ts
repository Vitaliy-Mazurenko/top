import styled, { css } from "styled-components";

export const Fieldset = styled.fieldset<{ $fullWidth?: boolean }>`
	display: inline-flex;
	flex-direction: column;
	${props => props.$fullWidth && css`
		display: flex;
	`}
`