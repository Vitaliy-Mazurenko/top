import { ProjectCardProps } from "pages/profile/ui/ProjectCard"
import { mockData } from "pages/profile/ui/ProjectList/mockData"
import { useEffect, useState } from "react"

interface useProjectsArgs {
	search?: string
	status?: ProjectCardProps['status'] | null
	onFilterTouched?: () => void
	onFilterUntouched?: () => void
}

export const useProjects = (args: useProjectsArgs) => {
	const { search, status, onFilterTouched, onFilterUntouched } = args
	// make request to API and get projects
	// { ... }
	const [allProjects] = useState(mockData)
	const [filteredProjects, setFilteredProjects] = useState<ProjectCardProps[]>([])

	useEffect(() => {
		if (status) console.log('filterType', status)
		if (search) console.log('search.value', search)

		if (!status && !search) {
			onFilterUntouched?.()
		}

		else if (status || search) {
			onFilterTouched?.()
			console.log('filterType', status)
			const newFiltered = allProjects.filter(project => {
				let matchesFilter = false
				if (project.status === status) matchesFilter = true
				if (search) {
					if (project.title.includes(search)) matchesFilter = true
					if (project.body.includes(search)) matchesFilter = true
				}

				return matchesFilter
			})
			setFilteredProjects(newFiltered)
		}

	}, [search, status])

	return {
		projects: allProjects,
		filteredProjects
	}
}