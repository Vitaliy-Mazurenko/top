import { SkillItem, SkillItemProps } from "../SkillItem"
import { Header } from "./Header.styled"
import { Wrapper } from "./Wrapper.styled"

interface SkillListProps {
	skills: SkillItemProps[]
}

export const SkillList = (props: SkillListProps) => {
	const { skills } = props
	return (
		<Wrapper>
			<Header>Basic skills</Header>
			{skills.map(skill => (<SkillItem {...skill}/>))}
		</Wrapper>
	)
}