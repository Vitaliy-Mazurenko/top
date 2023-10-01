import { useMemo, useState } from 'react'
import { ListContainer } from "./ListContainer.styled"
import { StyledProjectCard } from "./ProjectCard.styled"
import { Status } from "./Status.styled"
import { getProjectStatuses } from "./helpers/getProjectStatuses"
import { Header } from "./Header.styled"
import { Wrapper } from "./Wrapper.styled"
import { FilterContainer } from "./FilterList.styled"
import { Search } from "./Search.styled"
import useInput from "shared/hooks/useInput"
import { ProjectCardProps } from '../ProjectCard'
import { useToggle } from 'shared/hooks/useToggle'
import { useProjects } from 'pages/profile/ui/ProjectList/useProjects'

export const ProjectList = () => {
	const projectStatuses = useMemo(getProjectStatuses, [])

	const search = useInput()
	const [filterType, setFilterType] = useState<null | ProjectCardProps['status']>(null)
	const showFilter = useToggle()

	const {
		projects,
		filteredProjects
	} = useProjects({
		status: filterType,
		search: search.value,
		onFilterTouched: () => showFilter.toggle(true),
		onFilterUntouched: () => showFilter.toggle(false),
	})

	const filterHandler: React.MouseEventHandler<HTMLDivElement> = (event) => {
		const target = event.target as HTMLElement
		const clickedStatus = target.closest('[id^="project-list-status"]')
		const selectedStatus = clickedStatus?.id.replace('project-list-status-', '') as ProjectCardProps['status']
		if (selectedStatus) {
			setFilterType(selectedStatus)
		}
	}

	const projectsToShow = showFilter.value ? filteredProjects : projects

	return (
		<Wrapper>
			<Header>
				<Search value={search.value} onChange={search.onChange} />
				<FilterContainer onClick={filterHandler}>
					{Object.entries(projectStatuses).map(([statusName, statusStyles]) => (
						<Status
							key={statusName}
							id={`project-list-status-${statusName.toLowerCase()}`}
							$backgroundColor={statusStyles.backgroundColor}
							$textColor={statusStyles.color}
						>
							{statusName}
						</Status>
					))}
				</FilterContainer>
			</Header>

			<ListContainer>

				{projectsToShow.map((project, index) => (
					<StyledProjectCard
						key={index}
						{...project}
						slotAfter={<Status
							$textColor={projectStatuses[project.status].color} // нам нужно обратится в объект projectStatuses и добратся до нужного цвета текста. Залезаем в объект, указываем ключ в квадратных скобках. Далее обращаемся к полю color. Аналогично делаем с пропсом $backgroundColor
							$backgroundColor={projectStatuses[project.status].backgroundColor}
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
