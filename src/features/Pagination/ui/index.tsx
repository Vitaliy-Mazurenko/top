import styled from "styled-components"
import { DefaultButton } from "./DefaultButton"
import { IconButton } from "./IconButton"
import { Wrapper } from "./Wrapper.styled"
import leftArrow from 'shared/assets/icons/leftArrow.svg'
import { AnotherNumber } from "./AnotherNumber"
import { createArrayWithRange } from "../helpers/createArrayWithRange"

const PrevButton = IconButton
const NextButton = styled(IconButton)`
	img {
		transform: rotate(180deg);
	}
`

interface PaginationProps {
	className?: string
	pagesNumber: number
	onSelect?: (page: number) => void
	activePage?: number
}

export const Pagination = (props: PaginationProps) => {
	const {
		className,
		pagesNumber,
		activePage,
		onSelect
	} = props

	const pagesArr = createArrayWithRange(pagesNumber)

	const onPageSelectHandler: React.MouseEventHandler<HTMLDivElement> = event => {
		const target = event.target as HTMLElement
		const selectedButton = target.closest(`.${DefaultButton.styledComponentId}`)
		// TODO: доделать логику, когда появится инфа по бекенду
		console.log(selectedButton)
		onSelect?.(999)
	}

	return (
		<Wrapper className={className} onClick={onPageSelectHandler}>
			<PrevButton iconURL={leftArrow} />

			<AnotherNumber />
			{pagesArr.map(pageNumber => (
				<DefaultButton
					$selected={pageNumber === activePage}
				>
					{pageNumber}
				</DefaultButton>
			))}
			<AnotherNumber />

			<NextButton iconURL={leftArrow} />
		</Wrapper >
	)
}