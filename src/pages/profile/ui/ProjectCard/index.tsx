import styled from 'styled-components'

const Wrapper = styled.div`
`

const Card = styled.div`
	position: relative;
	box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.5);
	padding-top: 0.5rem;
`

const Title = styled.h6`
	font-size: 0.9375rem;
	font-weight: 500;
	line-height: 1.375rem;

	&::before {
		content: " ";
		width: 1rem;
		height: 1px;
		background-color: rgba(31, 36, 40, 0.5);
	}
`

const Body = styled.p`
	font-size: 0.5rem;
	font-weight: 400;
	line-height: 0.6875rem;
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
	display: flex;
	gap: 0.3343rem;
	padding: 0.25rem 0.4285rem 0.625rem;
	border-top-right-radius: 0.625rem;
	border-bottom-right-radius: 0.625rem;
`

const Icon = styled.img`
	width: 1.170625rem;
	height: 1.170625rem;
`

const Status = styled.div`
	padding: 0.3125rem;
	text-align: center;
	font-size: 0.75rem;
	margin-top: 0.625rem;
`

interface ProjectCardProps {
	title: string
	body: string
	avatarURL?: string
	status: 'scheduled' | 'testing' | 'frozen' | 'completed' | 'excellent' | 'development'
	iconURLs?: string[]
}

export const ProjectCard = (props: ProjectCardProps) => {
	const {
		title,
		body,
		avatarURL,
		status,
		iconURLs
	} = props

	return (
		<Wrapper>
			<Card>
				<Title>{title}</Title>
				<Body>{body}</Body>
				<Avatar src={avatarURL} />
				<Categories>
					{iconURLs && iconURLs.map(url => <Icon src={url} />)}
				</Categories>
			</Card>
			<Status>{status}</Status>
		</Wrapper>
	)
}
