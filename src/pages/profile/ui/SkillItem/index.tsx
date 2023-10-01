import { Experience } from "./Experience.styled"
import { Icon } from "./Icon.styled"
import { SkillName } from "./SkillName.styled"
import { Wrapper } from "./Wrapper.styled"

export interface SkillItemProps {
	name: string
	experience: string
	iconURL?: string
}

export const SkillItem = (props: SkillItemProps) => {
	const { experience, name, iconURL } = props

	return (
		<Wrapper>
			<Icon src={iconURL} />
			<SkillName>{name}</SkillName>
			<Experience>{experience}</Experience>
		</Wrapper>
	)
}
