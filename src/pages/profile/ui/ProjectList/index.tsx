import { ProjectCardProps } from "../ProjectCard"
import { useMemo } from 'react'
import { ListContainer } from "./ListContainer.styled"
import { StyledProjectCard } from "./ProjectCard.styled"
import { Status } from "./Status.styled"
import { getProjectStatuses } from "./helpers/getProjectStatuses"
import { Header } from "./Header.styled"
import { Wrapper } from "./Wrapper.styled"
import { FilterContainer } from "./FilterList.styled"
import { Search } from "./Search.styled"

interface ProjectListProps {
	projects: ProjectCardProps[]
}

export const ProjectList = (props: ProjectListProps) => {
	const {
		projects
	} = props

	const projectStatuses = useMemo(getProjectStatuses, [])

	return (
		<Wrapper>
			<Header>
				<Search />
				<FilterContainer>
					{Object.entries(projectStatuses).map(([key, statusCSS]) => (
						<Status $css={statusCSS} $pointer>{key}</Status>
					))}
				</FilterContainer>

			</Header>
			<ListContainer>

				{projects.map(project => (
					<StyledProjectCard
						{...project}
						slotAfter={<Status
							$css={projectStatuses[project.status]}
						>
							{project.status}
						</Status>
						}
					/>
				))}
			</ListContainer>
		</Wrapper>
	)
}
