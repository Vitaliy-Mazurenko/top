import { ProfileOptions } from "entities/user/ui/ProfileOptions"
import { PageContainer, PageInner } from "shared/ui/page-layout"
import { EmployeeNavbar } from "widget/Navbars"

export const IndexPage = () => {
	return (
		<PageContainer>
			<EmployeeNavbar />
			<PageInner>
				<ProfileOptions />
			</PageInner>
		</PageContainer>
	)

}