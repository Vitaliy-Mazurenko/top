import { RuleSet, css } from "styled-components"

const sizes = {
	extraSmall: '320',
	small: '480',
	medium: '768',
	large: '1200',
	extraLarge: '1440'
}

type getBreakpointsStylesArgs = Partial<Record<keyof typeof sizes, RuleSet>>

export const getBreakpointsStyles = (args: getBreakpointsStylesArgs) => {
	const { extraLarge, extraSmall, large, medium, small } = args

	return css`
		@media (min-width: ${sizes.extraSmall}px) {
    	${extraSmall}
  	}
		@media (min-width: ${sizes.small}px) {
    	${small}
  	}
		@media (min-width: ${sizes.medium}px) {
    	${medium}
  	}
		@media (min-width: ${sizes.large}px) {
    	${large}
  	}
		@media (min-width: ${sizes.extraLarge}px) {
    	${extraLarge}
  	}
`
}

