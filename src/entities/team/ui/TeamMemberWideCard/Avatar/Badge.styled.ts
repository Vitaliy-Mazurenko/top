import styled, { css } from "styled-components"
import { AvatarProps } from "."

export const Badge = styled.div<{
	$status: AvatarProps['status']
}>`
	width: 1.125rem;
	height: 1.125rem;
	border: 2px solid white;
	border-radius: 50%;

	position: absolute;
	right: -0.18rem;
	top: 0.2rem;

	${props => props.$status === 'online' && css`
		background-color: rgba(52, 199, 89, 1);
	`}
	${props => props.$status === 'do not disturb' && css`
		background-color: rgba(233, 96, 87, 1);
	`}
	${props => props.$status === 'not here' && css`
		background-color: rgba(52, 199, 89, 1);
	`}

`
