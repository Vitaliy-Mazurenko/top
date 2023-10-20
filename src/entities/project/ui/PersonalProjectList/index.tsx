import { useMemo  } from 'react'
import { StyledPersonalProjectCard, Status } from "./PersonalCard.styled"
import { Wrapper } from "./Wrapper.styled"
import { mockPersonalProjectList } from "../../mock/mockPersonalProjectList"
import { getPersonalProjectStatuses } from "../../helpers/getPersonalProjectStatuses"

interface IStatuses {
	[index: string ]: {
		color?: string,
		backgroundColor?: string
	}
  }

export const PersonalProjectList = () => {
	const projectStatuses: IStatuses = useMemo(getPersonalProjectStatuses, [])

	const projectsToShow = mockPersonalProjectList;

	return (
		<Wrapper>

				{projectsToShow.map((project, index) => (
					<StyledPersonalProjectCard
						key={index}
						{...project}
						slotStatus={<Status
							$textColor={projectStatuses[project.status].color} // нам нужно обратится в объект projectStatuses и добратся до нужного цвета текста. Залезаем в объект, указываем ключ в квадратных скобках. Далее обращаемся к полю color. Аналогично делаем с пропсом $backgroundColor
							$backgroundColor={projectStatuses[project.status].backgroundColor}
						>
							{project.status}
						</Status>
						}
					/>
				))}
		</Wrapper>
	)
}
