import { Modal } from "shared/ui/Modal"
import { AddToProject } from "./AddToProject.styled"
import { Wrapper } from "./Wrapper.styled"
import addIcon from 'shared/assets/icons/plus-icon.svg'
import { useToggle } from "shared/hooks/useToggle"
import { ProjectTable } from "entities/project/ui/ProjectTable/ProjectTable"

export const ProfileOptions = () => {
	const showTable = useToggle(false)

	return (
		<Wrapper>
			<AddToProject onClick={() => showTable.toggle(true)}>
				<img src={addIcon} alt="icon for adding member to project" />
				Добавити в проєкт
			</AddToProject>
			{showTable.value && <Modal isOpen={showTable.value} onClose={() => showTable.toggle(false)} center><ProjectTable /></Modal>}
		</Wrapper>
	)
}
