import { ListContainer } from "./ListContainer.styled"
import { StyledPersonalProjectCard } from "./PersonalCard.styled"
import { Wrapper } from "./Wrapper.styled"
import { mockPersonalProjectList } from "../../mock/mockPersonalProjectList"

export const PersonalProjectList = () => {

	const projectsToShow = mockPersonalProjectList;

	return (
		<Wrapper>

			<ListContainer>

				{projectsToShow.map((project, index) => (
					<StyledPersonalProjectCard
						key={index}
						{...project}
					/>
				))}
			</ListContainer>
		</Wrapper>
	)
}
