import { useEffect, useMemo, useState } from 'react'
import { ListContainer } from "./ListContainer.styled"
import { StyledProjectCard } from "./ProjectCard.styled"
import { Status } from "./Status.styled"
import { getProjectStatuses } from "./helpers/getProjectStatuses"
import { Header } from "./Header.styled"
import { Wrapper } from "./Wrapper.styled"
import { FilterContainer } from "./FilterList.styled"
import { Search } from "./Search.styled"
import useInput from "shared/hooks/useInput"
import { mockData } from "./mockData"
import { ProjectCardProps } from '../ProjectCard'
import { useToggle } from 'shared/hooks/useToggle'

export const ProjectList = () => {
	const projectStatuses = useMemo(getProjectStatuses, [])
	const search = useInput()

	const [allProjects] = useState(mockData)
	const [filteredProjects, setFilteredProjects] = useState<ProjectCardProps[]>([])

	const [filterType, setFilterType] = useState<null | ProjectCardProps['status']>(null)
	const showFilter = useToggle()

	useEffect(() => {
		if (filterType) console.log('filterType', filterType)
		if (search.value) console.log('search.value', search.value)

		if (!filterType && !search.value) {
			showFilter.toggle(false)
		}

		else if (filterType || search.value) {
			showFilter.toggle(true)
			console.log('filterType', filterType)
			const newFiltered = allProjects.filter(project => {
				let matchesFilter = false
				if (project.status === filterType) matchesFilter = true
				if (search.value) {
					if (project.title.includes(search.value)) matchesFilter = true
					if (project.body.includes(search.value)) matchesFilter = true
				}

				return matchesFilter
			})

			setFilteredProjects(newFiltered)
		}

	}, [filterType, search.value])

	const filterHandler: React.MouseEventHandler<HTMLDivElement> = (event) => {
		const target = event.target as HTMLElement
		const clickedStatus = target.closest('[id^="project-list-status"]')
		const selectedStatus = clickedStatus?.id.replace('project-list-status-', '') as ProjectCardProps['status']
		if (selectedStatus) {
			setFilterType(selectedStatus)
		}
	}

	const projectsToShow = showFilter.value ? filteredProjects : allProjects

	console.log('projectsToShow', projectsToShow)
	console.log('showFilter.value', showFilter.value)
	return (
		<Wrapper>
			<Header>
				<Search value={search.value} onChange={search.onChange} />
				<FilterContainer onClick={filterHandler}>
					{Object.entries(projectStatuses).map(([statusName, statusCSS]) => (
						<Status
							key={statusName}
							$css={statusCSS}
							$pointer
							id={`project-list-status-${statusName.toLowerCase()}`}
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
