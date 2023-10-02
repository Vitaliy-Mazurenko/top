import { SkillItem, SkillItemProps } from "../SkillItem"
import { Header } from "./Header.styled"
import { Wrapper } from "./Wrapper.styled"

interface SkillListProps {
	skills: SkillItemProps[]
	className?: string

}

export const SkillList = (props: SkillListProps) => {
	const { skills, className } = props
	return (
		<Wrapper className={className}>
			<Header>Basic skills</Header>
			{skills.map(skill => (<SkillItem {...skill} />))}
		</Wrapper>
	)
}