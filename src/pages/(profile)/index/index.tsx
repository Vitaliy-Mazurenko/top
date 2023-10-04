import { SkillList } from "pages/ui/SkillList"
import { WorkActivityList } from "pages/ui/WorkActivityList"
import { EmployeeNavbar } from "widget/Navbars"
import { SubNavbar } from "features/SubNavbar"
import { PageSwitcher } from "features/Pageswitcher"
import nodeJS from 'shared/assets/icons/nodejs.svg'
import java from 'shared/assets/icons/java.png'
import python from 'shared/assets/icons/python.svg'
import docker from 'shared/assets/icons/docker.svg'
import styled from "styled-components"
import { TeamMemberWideCard } from "pages/ui/TeamMemberWideCard"
import avatarURL from 'shared/assets/img/photo.png'
import { ProfileOptions } from "pages/ui/ProfileOptions"
import { Button } from "shared/ui/Button"
import { PageContainer, PageHeader, PageInner } from "shared/ui/page-layout"

const mockWorkActivity = [
	{
		position: 'Front-end developer',
		activity: [
			'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
			'in voluptate velit esse cillum'
		],
		startDate: new Date(),
		endDate: new Date(Date.now() + 99999999999),
		tags: ['react', 'angular', 'react-query', 'fsd'],
		companyLocation: 'Kyiv, Ukraine',
		companyName: '"Company name"'
	},
	{
		position: 'Front-end developer',
		activity: [
			'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
			'in voluptate velit esse cillum'
		],
		startDate: new Date(),
		endDate: new Date(Date.now() + 99999999999),
		tags: ['react', 'angular', 'react-query', 'fsd'],
		companyLocation: 'Kyiv, Ukraine',
		companyName: '"Company name"'
	},
	{
		position: 'Front-end developer',
		activity: [
			'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
			'in voluptate velit esse cillum'
		],
		startDate: new Date(),
		endDate: new Date(Date.now() + 99999999999),
		tags: ['react', 'angular', 'react-query', 'fsd'],
		companyLocation: 'Kyiv, Ukraine',
		companyName: '"Company name"'
	},
	{
		position: 'Front-end developer',
		activity: [
			'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
			'in voluptate velit esse cillum'
		],
		startDate: new Date(),
		endDate: new Date(Date.now() + 99999999999),
		tags: ['react', 'angular', 'react-query', 'fsd'],
		companyLocation: 'Kyiv, Ukraine',
		companyName: '"Company name"'
	},
	{
		position: 'Front-end developer',
		activity: [
			'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
			'in voluptate velit esse cillum'
		],
		startDate: new Date(),
		endDate: new Date(Date.now() + 99999999999),
		tags: ['react', 'angular', 'react-query', 'fsd'],
		companyLocation: 'Kyiv, Ukraine',
		companyName: '"Company name"'
	},
	{
		position: 'Front-end developer',
		activity: [
			'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
			'in voluptate velit esse cillum'
		],
		startDate: new Date(),
		endDate: new Date(Date.now() + 99999999999),
		tags: ['react', 'angular', 'react-query', 'fsd'],
		companyLocation: 'Kyiv, Ukraine',
		companyName: '"Company name"'
	},
	{
		position: 'Front-end developer',
		activity: [
			'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
			'in voluptate velit esse cillum'
		],
		startDate: new Date(),
		endDate: new Date(Date.now() + 99999999999),
		tags: ['react', 'angular', 'react-query', 'fsd'],
		companyLocation: 'Kyiv, Ukraine',
		companyName: '"Company name"'
	},
	{
		position: 'Front-end developer',
		activity: [
			'Worked on the development and implementation of new blockchain technologies and completed professional market research.',
			'Won the Employee of the Month Award once for finishing all assigned projects within budget and schedule.',
			'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		],
		startDate: new Date(),
		endDate: new Date(Date.now() + 99999999999),
		tags: ['react', 'angular', 'react-query', 'fsd'],
		companyLocation: 'Kyiv, Ukraine',
		companyName: '"Company name"'
	}

]
const mockSkillList = [
	{ experience: '3 years', name: 'Java', iconURL: java },
	{ experience: '1 years', name: 'Node.js', iconURL: nodeJS },
	{ experience: '5 years', name: 'Python', iconURL: python },
	{ experience: '3 months', name: 'Docker', iconURL: docker },
]
const mockMemberWideCard = {
	name: 'Igor',
	experience: '3 years',
	position: 'Frontend developer',
	status: 'online',
	avatarURL: avatarURL,
	teamNumber: 3,
	projectsNumber: 5,
	speciality: 'React',
}

const FlexWrapper = styled.div`
	display: flex;
	gap: 2rem;
	margin-top: 1rem;
`
const FlexLeft = styled.div`
flex-basis: 20%;
`

const StyledWorkActivityList = styled(WorkActivityList)`
	flex-grow: 1;
	flex-shrink: 0;
`

const StyledButton = styled(Button)`
	margin-top: 0.5rem;
	border-radius: 4px;
`
const StyledTeamMemberWideCard = styled(TeamMemberWideCard)`
	margin-top: 1rem;
`

export const ProfilePage = () => {

	return (
		<PageContainer>
			<EmployeeNavbar />
			<PageInner>
				<PageSwitcher />
				<PageHeader>Профiль/Emily</PageHeader>
				<SubNavbar sublinks={[
					{ label: 'Профiль', url: '' }
				]} />
				<ProfileOptions />

				<StyledTeamMemberWideCard {...mockMemberWideCard} status="online" />
				<FlexWrapper>
					<FlexLeft>
						<SkillList skills={mockSkillList} />
						<StyledButton $variant="primary">Портфолiо</StyledButton>
						<StyledButton $variant="secondary">Контакти</StyledButton>
					</FlexLeft>
					<StyledWorkActivityList workActivity={mockWorkActivity} />
				</FlexWrapper>
			</PageInner>
		</PageContainer>
	)
}
