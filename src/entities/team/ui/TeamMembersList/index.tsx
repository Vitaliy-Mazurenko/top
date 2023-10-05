import { TeamMemberCard } from "../TeamMemberCard"
import { Wrapper } from "./Wrapper.styled"
import { mockData } from "./mockData"

interface TeamMembersListProps {
	className?: string
}

export const TeamMembersList = (props: TeamMembersListProps) => {
	const { className } = props
	const members = mockData

	return (
		<Wrapper className={className}>
			{members.map(member => (
				<TeamMemberCard {...member} />
			))}
		</Wrapper>
	)
}