import styled, { css } from "styled-components";

export const DefaultButton = styled.button.attrs<{ $selected?: boolean }>({
	type: 'button'
})`
	border: 1px solid rgba(232, 232, 232, 1);
	width: 2rem;
	height: 2rem;	
	color: rgba(174, 174, 178, 1);
	border-radius: 4px;
	
	&:active {
		border-color: rgba(128, 84, 227, 1);
	}

	${props => props.$selected && css`
	border-color: rgba(128, 84, 227, 1);
	color: rgba(128, 84, 227, 1);
	`}

	${props => props.theme.typography["Body-2"]}

`
