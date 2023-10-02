import styled from 'styled-components'

const Wrapper = styled.div`
`

export const CardContainer = styled.div`
	position: relative;
	box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.5);
	padding-top: 0.5rem;
	min-height: 8.3125rem;
`

const Title = styled.h6`
	${({ theme }) => theme.typography['Heading-6']};
	margin-left: 0.5rem;
	&::before {
		content: " ";
		width: 1rem;
		height: 1px;
		background-color: rgba(31, 36, 40, 0.5);
	}
`

const Body = styled.p`
	margin-left: 0.5rem;
	margin-top: 1rem;
	line-height: 0.9875rem;
	${({ theme }) => theme.typography['Body-1']};
	width: 54%;
 
`

const Avatar = styled.img`
	width: 4.5625rem;
	height: 4.5625rem;
	object-fit: cover;
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
`
const Categories = styled.div`
	display: inline-flex;
	gap: 0.3343rem;
	padding: 0.25rem 0.4285rem 0.625rem;
	border-top-right-radius: 0.625rem;
	border-bottom-right-radius: 0.625rem;
	position: absolute;
	bottom: 0;
	left: 0;
	background-color: rgba(208, 188, 235, 1);
`

const Icon = styled.img`
	width: 1.170625rem;
	height: 1.170625rem;
`

export interface ProjectCardProps {
	title: string
	body: string
	avatarURL?: string
	status: 'scheduled' | 'testing' | 'frozen' | 'completed' | 'canceled' | 'development'
	iconURLs?: string[]

	className?: string // for styled-components
	slotAfter?: React.ReactNode
}

export const ProjectCard = (props: ProjectCardProps) => {
	const {
		title,
		body,
		avatarURL,
		iconURLs,
		className,
		slotAfter
	} = props

	return (
		<Wrapper className={className}>
			<CardContainer>
				<Title>{title}</Title>
				<Body>{body}</Body>
				<Avatar src={avatarURL} />
				<Categories>
					{iconURLs && iconURLs.map(url => <Icon src={url} />)}
				</Categories>
			</CardContainer>
			{slotAfter}
		</Wrapper>
	)
}
