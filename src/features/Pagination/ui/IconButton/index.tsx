import styled from "styled-components";
import { DefaultButton } from "../DefaultButton";

const StyledIconButton = styled(DefaultButton)`
	background-color: rgba(128, 84, 227, 1);
`

interface IconButtonProps {
	iconURL: string
	className?: string
}

export const IconButton = (props: IconButtonProps) => {
	const { iconURL, className } = props

	return (
		<StyledIconButton className={className}>
			<img src={iconURL} alt="" />
		</StyledIconButton>
	)
}