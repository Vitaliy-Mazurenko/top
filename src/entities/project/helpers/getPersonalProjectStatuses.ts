import { PersonalProjectCardProps } from "../ui/PersonalProjectList/PersonalProjectCard";

type StatusStyle = Pick<React.CSSProperties, 'backgroundColor' | 'color'>

export const getPersonalProjectStatuses: () => Record<PersonalProjectCardProps['status'], StatusStyle> = () => ({
	'Пошук PM': {
		color: '#E96057',
		backgroundColor: '#FFF1F0'
	},
	'Haбip команди': {
		color: '#ECB23F',
		backgroundColor: '#FFFBE6'
	},
	'В розробці': {
		color: '#0076B3',
		backgroundColor: '#E6F7FF',
	},
	'Завершено': {
		color: '#62B837',
		backgroundColor: '#F6FFED',
	},
})

