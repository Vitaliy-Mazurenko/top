import { SidebarImg, SidebarInfo, SidebarName, SidebarPosition } from "./styled"

interface ProfileCardProps {
	imgURL?: string
	name: string
	position: string
}

export const ProfileCard = (props: ProfileCardProps) => {
	const { name, position, imgURL } = props

	return (
		<SidebarInfo>
			<SidebarImg src={imgURL} alt='sidebarimg' />
			<SidebarName>{name}</SidebarName>
			<SidebarPosition>{position}</SidebarPosition>
		</SidebarInfo>
	)
}