import { Avatar } from "./Avatar"
import { Experience } from "./Experience.styled"
import { Header } from "./Header"
import { Icon } from "./Icon.styled"
import { Inner } from "./Inner.styled"
import { MainInfo } from "./MainInfo.styled"
import { MainSkill } from "./MainSkill.styled"
import { Name } from "./Name.styled"
import { Position } from "./Position.styled"
import { SecondaryInfo } from "./SecondaryInfo.styled"
import { SecondaryItem } from "./SecondaryItem"
import { Wrapper } from "./Wrapper.styled"

export interface TeamMemberCardProps {
	name: string
	position: string
	avatarURL?: string
	status: 'online' | 'offline' | 'do not disturb' | 'not here'
	projectsNumber: number
	teamNumber: number

	speciality: string
	specialityIcon?: string
	experience: string,
	headerColor?: string
}

export const TeamMemberCard = (props: TeamMemberCardProps) => {
	const {
		experience,
		name,
		position,
		projectsNumber,
		speciality,
		teamNumber,
		avatarURL,
		status,
		specialityIcon,
		headerColor = 'black'
	} = props

	return (
		<Wrapper>
			<Header $color={headerColor}>
				<Icon src={specialityIcon} />
				<MainSkill>{speciality}</MainSkill>
				<Experience>{experience}</Experience>
			</Header>

			<Inner>
				<MainInfo>
					<Avatar status={status} imgURL={avatarURL} />
					<div>
						<Name>{name}</Name>
						<Position>{position}</Position>
					</div>
				</MainInfo>

				<SecondaryInfo>
					<SecondaryItem value={projectsNumber.toString()} name="Проектов" color="blue" />
					<SecondaryItem value={teamNumber.toString()} name="Команда" color="green" />
				</SecondaryInfo>
			</Inner>
		</Wrapper>
	)
}
