import { createPortal } from "react-dom"
import { ModalWrapper } from "./ModalWrapper"


interface ModalProps extends React.PropsWithChildren {
	location?: HTMLElement // где именно рендерить
	className?: string // чтобы можно было применить styled-components
	center?: boolean // чтобы быстро отцентрироать children
	isOpen: boolean
	onClose: () => void
}

export const Modal = (props: ModalProps) => {
	const {
		children,
		location = document.body,
		className,
		center,
		isOpen,
		onClose
	} = props

	const component = (
		<ModalWrapper className={className} $center={center} onClick={onClose}>
			<div onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</ModalWrapper>
	)

	return isOpen ? createPortal(component, location) : null
}

/**
 * Его оболочку, ModalWrapper, можно стилизовать так:
 * 
 * const StyledModal = styled(Modal)`
	 background-color: blue;
 `
 */
