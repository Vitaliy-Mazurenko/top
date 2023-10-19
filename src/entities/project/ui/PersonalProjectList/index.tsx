import { StyledPersonalProjectCard } from "./PersonalCard.styled"
import { Wrapper } from "./Wrapper.styled"
import { mockPersonalProjectList } from "../../mock/mockPersonalProjectList"

export const PersonalProjectList = () => {

	const projectsToShow = mockPersonalProjectList;

	return (
		<Wrapper>

				{projectsToShow.map((project, index) => (
					<StyledPersonalProjectCard
						key={index}
						{...project}
					/>
				))}
		</Wrapper>
	)
}
