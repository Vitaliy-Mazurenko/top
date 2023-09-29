import { createPortal } from "react-dom"
import { ModalWrapper } from "./ModalWrapper"


interface ModalProps extends React.PropsWithChildren {
	location?: HTMLElement // где именно рендерить
	className?: string // чтобы можно было применить styled-components
	center?: boolean // чтобы быстро отцентрироать children
}

export const Modal = (props: ModalProps) => {
	const {
		children,
		location = document.body,
		className,
		center
	} = props

	const component = (
		<ModalWrapper className={className} $center={center}>
			{children}
		</ModalWrapper>
	)

	return createPortal(component, location)
}

/**
 * Его оболочку, ModalWrapper, можно стилизовать так:
 * 
 * const StyledModal = styled(Modal)`
	 background-color: blue;
 `
 
 */
