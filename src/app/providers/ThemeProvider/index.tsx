import { ThemeProvider as StyledProvider, css } from 'styled-components'
import { GlobalStyle } from './GlobalStyles'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const theme = {
		palette: {
			'primary': '#ff8c33',
			'secondary-1': '#c6e1ec',
			'secondary-2': '#e4afe7',
			'secondary-3': '#e4afe7',
			'secondary-4': '#f1e5a9',
			'secondary-5': '#e3eeb6',
			'secondary-6': '#b2f0e3',
			'text': '#333333',
			'tertiary': '#0076b3',
			'alarm': '#0076b3'
		},

		typography: {
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
	}

	return (
		<StyledProvider theme={theme} >
			<GlobalStyle />
			{children}
		</StyledProvider >
	)
}