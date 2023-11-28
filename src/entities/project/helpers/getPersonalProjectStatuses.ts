import { PersonalProjectCardProps } from "../ui/PersonalProjectList/PersonalProjectCard";

type StatusStyle = Pick<React.CSSProperties, 'backgroundColor' | 'color'>

export const getPersonalProjectStatuses: () => Record<PersonalProjectCardProps['status'], StatusStyle> = () => ({
	'Пошук PM': {
		color: '#E96057',
		backgroundColor: '#FFF1F0',
		borderColor: '#E96057'
	},
	'Haбip команди': {
		color: '#ECB23F',
		backgroundColor: '#FFFBE6',
		borderColor: '#ECB23F'
	},
	'В розробці': {
		color: '#0076B3',
		backgroundColor: '#E6F7FF',
		borderColor: '#0076B3'
	},
	'Завершено': {
		color: '#62B837',
		backgroundColor: '#F6FFED',
		borderColor: '#62B837'
	},
})

