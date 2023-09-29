import styled from "styled-components"

interface SecondaryItemProps {
	name: string
	value: string
	color?: string
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.5rem;
`
const Name = styled.div`
	${props => props.theme.typography["Body-2"]};
	color: rgba(142, 142, 147, 1);
`
const Value = styled.div<{ $color: string }>`
	${props => props.theme.typography["Body-2"]};
	background-color: ${props => props.$color};

	color: rgba(255, 246, 246, 1);
	padding: 0.3rem 0.9rem;
	border-radius: 4px;
`

export const SecondaryItem = (props: SecondaryItemProps) => {
	const {
		name,
		value,
		color = 'black'
	} = props

	return (
		<Wrapper>
			<Value $color={color}>{value}</Value>
			<Name>{name}</Name>
		</Wrapper>
	)
}