import { EmployeeNavbar } from "widget/Navbars"
import { SubNavbar } from "features/SubNavbar"
import { PageSwitcher } from "features/Pageswitcher"
import styled from "styled-components"
import { PageContainer, PageHeader, PageInner } from "shared/ui/page-layout"
import { TeamMembersList } from "entities/team/ui/TeamMembersList"

const StyledTeamList = styled(TeamMembersList)`
	margin-top: 2rem;
`

export const TeamPage = () => {

	return (
		<PageContainer>
			<EmployeeNavbar />
			<PageInner>
				<PageSwitcher />
				<PageHeader>Команда</PageHeader>
				<SubNavbar sublinks={[
					{ label: 'Всі кандидати', url: '' },
					{ label: 'Команда ЛК', url: '' },
					{ label: 'Команда по сторінкам сайту', url: '' },
					{ label: 'Команда по інтеграції ', url: '' },
				]} />
				<StyledTeamList />
			</PageInner>
		</PageContainer>
	)
}
