import styled, { css } from "styled-components"
import { Card, ProjectCard, ProjectCardProps } from "../ProjectCard"
import { RuleSet } from "styled-components/dist/types"
import { useMemo } from 'react'

const StyledProjectCard = styled(ProjectCard) <{ $background?: string }>`
	flex-basis: 15rem;
`

const Wrapper = styled.div`
	display: flex;
	row-gap: 3.75rem;
	column-gap: 1.75rem;
	flex-wrap: wrap;

	${StyledProjectCard}:nth-child(1n) {
		${Card} {
			background-color:rgba(168, 186, 219, 1);
		}
	}
	${StyledProjectCard}:nth-child(2n) {
		${Card} {
		background-color: rgb(250, 253, 255);
		}
	}
	${StyledProjectCard}:nth-child(3n) {
		${Card} {
		background-color: rgb(233, 227, 245);
		}
	}
	${StyledProjectCard}:nth-child(4n) {
		${Card} {
		background-color: rgb(250, 253, 255);
		}
	}
	${StyledProjectCard}:nth-child(5n) {
		${Card} {
		background-color: rgb(255, 252, 243);
		}
	}
	
`
const Status = styled.div<{ $css?: RuleSet }>`
	padding: 0.3125rem;
	text-align: center;
	font-size: 0.75rem;
	margin-top: 0.625rem;
	${({ theme }) => theme.typography['Heading-7']}
	/* default */
	color: ${props => props.theme.palette.text};
	${props => props.$css};
`

interface ProjectListProps {
	projects: ProjectCardProps[]
}

export const ProjectList = (props: ProjectListProps) => {
	const {
		projects
	} = props

	const statuses: Record<ProjectCardProps['status'], RuleSet> = useMemo(() => ({
		scheduled: css`
		color: rgba(230, 95, 43, 1);
		background: rgba(230, 95, 43, 0.18);
		`,
		testing: css`
		color: rgba(223, 20, 227, 1);
		background: rgba(223, 20, 227, 0.18);
		`,
		completed: css`
			color: rgba(230, 95, 43, 1);
			background: rgba(230, 95, 43, 0.18);
		`,
		development: css`
		color: rgba(13, 63, 124, 1);
		background: rgba(13, 63, 124, 0.18);
		`,
		canceled: css`
		color: rgba(223, 34, 9, 1);
		background: rgba(223, 34, 9, 0.18);
		`,
		frozen: css`
		color: rgba(66, 64, 73, 1);
		background: rgba(66, 64, 73, 0.18);
		`
	}), [])

	return (
		<Wrapper>
			{projects.map(project => (
				<StyledProjectCard
					{...project}
					slotAfter={<Status
						$css={statuses[project.status]}
					>
						{project.status}
					</Status>
					}
				/>
			))}
		</Wrapper>
	)
}
