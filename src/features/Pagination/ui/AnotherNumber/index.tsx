import styled from "styled-components";
import { DefaultButton } from "../DefaultButton";
import threeDotsIcon from 'shared/assets/icons/three-dots.svg'

export const AnotherNumber = styled(DefaultButton).attrs({
	children: (<img src={threeDotsIcon} />)
})`
	display: flex;
	align-items: center;
	border-color: white;
	justify-content: center;
`