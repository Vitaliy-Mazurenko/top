import { formatDateToMonthYear } from "shared/helpers/formatDateToMonthYear"
import { Wrapper } from "./Wrapper/index.styled"
import { Timestamp } from "./Timestamp/index.styled"
import { WorkTitle } from "./WorkTitle/index.styled"
import { Header } from "./Header/index.styled"
import { TagList } from "./Tags/TagList.styled"
import { ActivityList } from "./Activity/ActivityList.styled"
import { Tag } from "./Tags/Tag.styled"
import { Activity } from "./Activity/Activity.styled"

export interface WorkActivityProps {
	startDate: Date
	endDate?: Date
	position: string
	companyName?: string
	tags: string[],
	companyLocation?: string
	activity: string[]

	className?: string
}

export const WorkActivity = (props: WorkActivityProps) => {
	const {
		position,
		startDate,
		companyName,
		endDate,
		tags,
		companyLocation,
		activity,
		className
	} = props


	const timestamp = `
		${formatDateToMonthYear(startDate)}
		${endDate && `, ${formatDateToMonthYear(endDate)}`}
	`

	const title = `
		${position}
		${companyName && `, ${companyName}`}
		${companyLocation && `, ${companyLocation}`}
	`
	return (
		<Wrapper className={className}>
			<Header>
				<Timestamp>{timestamp}</Timestamp>
				<WorkTitle>{title}</WorkTitle>
			</Header>
			<TagList>
				{tags.map(tag => <Tag>{tag}</Tag>)}
			</TagList>

			<ActivityList>
				{activity.map(line => <Activity>{line}</Activity>)}
			</ActivityList>
		</Wrapper>
	)
}
