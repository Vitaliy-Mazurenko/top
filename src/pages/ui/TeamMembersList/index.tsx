import { TeamMemberCard } from "../TeamMemberCard"
import { Wrapper } from "./Wrapper.styled"
import { mockData } from "./mockData"

export const TeamMembersList = () => {
	const members = mockData

	return (
		<Wrapper>
			{members.map(member => (
				<TeamMemberCard {...member} />
			))}
		</Wrapper>
	)
}