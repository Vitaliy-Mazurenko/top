import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Wrapper = styled.div`
background-color: #fff;
`

export const CardContainer = styled.div`
	position: relative;
	box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.5);
	padding: 0.25rem 0;
	height: 256px;
	width: 272px;
	display: flex;
	flex-direction: column;
`

const Title = styled.h6`
	${({ theme }) => theme.typography['Heading-6']};
	margin-top: 0.5rem;
	text-align: center;
	&::before {
		content: " ";
		width: 1rem;
		height: 1px;
		background-color: rgba(31, 36, 40, 0.5);
	}
`

const Body = styled.p`
	margin-left: 0.1rem;
	margin-top: 0.5rem;
	line-height: 0.9875rem;
	font-size: 0.8rem;
	text-align: center;
	width: 99%;
 
`

const Avatar = styled.img`
	width: 144px; // 272px;
	height: 144px;
	object-fit: cover;
	margin: 0 auto;
    display: flex;
`
export const StatusBtn = styled.span`
  cursor: pointer;
  padding: 0.475rem 1rem; /* 6px 16px */
  height: 2rem; /* 32px */
  text-align: center;
  color: #E96057;
  margin: 0.625rem; /* 10px */
  font-size: 0.875rem; /* 14px */
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  border-radius: 2px;
  border: 1px solid #E96057;
  max-width: max-content;
  align-self: center;

background: #FFF1F0;

  @media (max-width: 480px) {
    margin: 0.5rem;
  }
`;

export interface ProjectCardProps {
	id: number
	title: string
	body: string
	avatarURL?: string
	status: string

}

export const PersonalProjectCard = (props: ProjectCardProps) => {
	const {
		id,
		title,
		body,
		avatarURL,
		status
	} = props

	return (
		<Link to={`id/${id}`}>
		<Wrapper>
			<CardContainer>
				<Avatar src={avatarURL} />
				<Title>{title}</Title>
				<Body>{body}</Body>
				<StatusBtn>{status}</StatusBtn>
			</CardContainer>
		</Wrapper>
		</Link>
	)
}
