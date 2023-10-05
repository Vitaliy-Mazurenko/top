import { Wrapper } from "./Wrapper/index.styled"
import { Point } from "./Point/index.styled"
import styled from "styled-components"
import { WorkActivity, WorkActivityProps } from "../WorkActivity"

const StyledWorkActivity = styled(WorkActivity)`
	padding-left: 1.5rem;
`

interface WorkActivityListProps {
	workActivity: WorkActivityProps[]
	className?: string
}

export const WorkActivityList = (props: WorkActivityListProps) => {
	const {
		workActivity,
		className
	} = props

	return (
		<Wrapper className={className}>
			{workActivity.map(work => <div style={{ position: 'relative' }}>
				<Point />
				<StyledWorkActivity {...work} />
			</div>)}
		</Wrapper>
	)
}
