import { MainPageContainer, MainPageHeader } from "pages/ui/MainPage/MainPageStyles"
import { PageInner } from "pages/ui/PageInner/index.styled"
import { TeamMembersList } from "pages/ui/TeamMembersList"
import { Navbar } from "pages/ui/Navbar"
import { NavbarMainPage } from "pages/ui/navlink/NavbarMainPage"
import { PagePath } from "pages/ui/pageswitcher/PageSwitcher"
import styled from "styled-components"

const StyledTeamList = styled(TeamMembersList)`
	margin-top: 2rem;
`

export const TeamPage = () => {

	return (
		<MainPageContainer>
			<Navbar />
			<PageInner>
				<PagePath />
				<MainPageHeader>Команда</MainPageHeader>
				<NavbarMainPage sublinks={[
					{ label: 'Всі кандидати', url: '' },
					{ label: 'Команда ЛК', url: '' },
					{ label: 'Команда по сторінкам сайту', url: '' },
					{ label: 'Команда по інтеграції ', url: '' },
				]} />
				<StyledTeamList />
			</PageInner>
		</MainPageContainer>
	)
}
