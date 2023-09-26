import 'styled-components';
import { CSS } from 'styled-components/dist/types';

declare module 'styled-components' {
	export interface DefaultTheme {
		typography: {
			'Heading-1': CSS,
			'Heading-2': CSS,
			'Heading-3': CSS,
			'Heading-4': CSS,
			'Heading-5': CSS,
			'Heading-6': CSS,
			'Heading-7': CSS,
			'Body-1': CSS,
			'Body-2': CSS,
			'Button': CSS,
		}
	}
}