import { TableCell } from "./TableCell.styled"
import { TableHead } from "./TableHead.styled"
import { Wrapper } from "./Wrapper.styled"

interface TableProps {
	values: Array<{
		name: string
		value: React.ReactNode
	}>
}

export const Table = (props: TableProps) => {
	const { values } = props


	return (
		<Wrapper>
			<tr>
				{values.map(item => <TableHead>{item.name}</TableHead>)}
			</tr>

			<tr style={{borderTop: '1px solid rgb(232,232,232)'}}>
				{values.map(item => <TableCell>{item.value}</TableCell>)}
			</tr>
		</Wrapper>
	)
}
