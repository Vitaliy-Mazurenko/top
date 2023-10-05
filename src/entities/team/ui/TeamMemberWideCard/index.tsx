import { Avatar } from "./Avatar"
import { Name } from "./Name.styled"
import { Position } from "./Position.styled"
import { PrimaryContainer } from "./PrimaryContainer.styled"
import { Number } from "./Numbers/Number.styled"
import { Wrapper } from "./Wrapper.styled"
import { NumberList } from "./Numbers/NumberList.styled"
import { Table } from "./Table/Table"
import { Status } from "./Status.styled"
import { useMemo } from "react"
import { getUserStatuses } from "./Table/getUserStatuses"


export interface TeamMemberWideCardProps {
	name: string
	position: string
	avatarURL?: string
	status: 'online' | 'offline' | 'do not disturb' | 'not here'
	projectsNumber: number
	teamNumber: number
	speciality: string
	experience: string,
}

export const TeamMemberWideCard = (props: TeamMemberWideCardProps) => {
	const {
		experience,
		name,
		position,
		projectsNumber,
		speciality,
		teamNumber,
		avatarURL,
		status,
	} = props

	const statusList = useMemo(getUserStatuses, [])

	return (
		<Wrapper>
			<PrimaryContainer>
				<Avatar imgURL={avatarURL} status={status} />
				<NumberList>
					<Number $color="rgba(52, 177, 228, 1)">{projectsNumber}</Number>
					<Number $color="rgba(52, 199, 89, 1)">{teamNumber}</Number>
				</NumberList>
				<Name>{name}</Name>
				<Position>{position}</Position>
				<Position>{speciality}</Position>
			</PrimaryContainer>

			<Table values={[
				{ name: 'Проєктів', value: projectsNumber },
				{ name: 'Команда', value: teamNumber },
				{ name: 'Досвід', value: experience },
				{
					name: 'Статус', value: <Status $css={statusList[status]}>
						{status}
					</Status>
				},

			]} />

		</Wrapper>
	)
}
