import styled from "styled-components"
import { Badge } from "./Badge.styled"
import { Image } from "./Image.styled"

export interface AvatarProps {
	imgURL?: string
	status: 'online' | 'offline' | 'do not disturb' | 'not here'
}

const Wrapper = styled.div`
	position: relative;
	display: inline-block;
`

export const Avatar = (props: AvatarProps) => {
	const { imgURL, status } = props

	return (
		<Wrapper>
			<Image src={imgURL} />
			{status !== 'offline' && <Badge $status={status} />}
		</Wrapper>
	)
}