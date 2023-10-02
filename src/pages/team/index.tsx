import { TeamMembersList } from "pages/ui/TeamMembersList"
import { Navbar } from "widget/Navbar"
import { SubNavbar } from "features/SubNavbar"
import { PageSwitcher } from "features/Pageswitcher"
import styled from "styled-components"
import { PageContainer, PageHeader, PageInner } from "shared/ui/page-layout"

const StyledTeamList = styled(TeamMembersList)`
	margin-top: 2rem;
`

export const TeamPage = () => {

	return (
		<PageContainer>
			<Navbar />
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
