import { ThemeProvider as StyledProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyles'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const theme = {

	}

	return (
		<StyledProvider theme={theme}>
			<GlobalStyle />
			{children}
		</StyledProvider>
	)
}