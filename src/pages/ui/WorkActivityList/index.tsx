import { WorkActivity, WorkActivityProps } from "pages/profile/ui/WorkActivity/"
import { Wrapper } from "./Wrapper/index.styled"
import { Point } from "./Point/index.styled"
import styled from "styled-components"

const StyledWorkActivity = styled(WorkActivity)`
	padding-left: 1.5rem;
`

interface WorkActivityListProps {
	workActivity: WorkActivityProps[]
}

export const WorkActivityList = (props: WorkActivityListProps) => {
	const {
		workActivity
	} = props

	return (
		<Wrapper>
			{workActivity.map(work => <div style={{ position: 'relative' }}>
				<Point />
				<StyledWorkActivity {...work} />
			</div>)}
		</Wrapper>
	)
}
