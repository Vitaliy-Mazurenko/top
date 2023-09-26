import { ThemeProvider as StyledProvider, css } from 'styled-components'
import { GlobalStyle } from './GlobalStyles'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const theme = {
		'Heading-1': css`
		font-weight: 900;
		font-size: 5rem;
		`,
		'Heading-2': css`
		font-family: 'Inter', sans-serif;
		font-weight: 900;
		font-size: 3.75rem;
		`,
		'Heading-3': css`
		font-weight: 600;
		font-size: 2rem;
		`,
		'Heading-4': css`
		font-weight: 400;
		font-size: 2rem;
		`,
		'Heading-5': css`
		font-weight: 500;
		font-size: 1.5rem;
		`,
		'Heading-6': css`
			font-weight: 600;
			font-size: 1.25rem;
		`,
		'Heading-7': css`
		font-weight: 500;
		font-size: 1.25rem;
		`,
		'Body-1': css`
		font-weight: 500;
		font-size: 1rem;
		`,
		'Body-2': css`
		font-weight: 500;
		font-size: 0.875rem;
		`,
		'Button': css`
		font-weight: 500;
		font-size: 1rem;
		`,
	}

	return (
		<StyledProvider theme={theme}>
			<GlobalStyle />
			{children}
		</StyledProvider>
	)
}