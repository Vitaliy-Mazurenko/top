import { MainPageContainer, MainPageHeader } from "pages/ui/MainPage/MainPageStyles"
import { PageInner } from "pages/ui/PageInner/index.styled"
import { TeamMembersList } from "pages/ui/TeamMembersList"
import { Navbar } from "pages/ui/navbar/Navbar"
import { NavbarMainPage } from "pages/ui/navlink/NavbarMainPage"
import { PagePath } from "pages/ui/pageswitcher/PageSwitcher"

export const TeamPage = () => {



	return (
		<MainPageContainer>
			<Navbar />
			<PageInner>
				<PagePath />
				<MainPageHeader>Команда</MainPageHeader>
				<NavbarMainPage />
				<TeamMembersList />
			</PageInner>
		</MainPageContainer>
	)
}
