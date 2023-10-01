import { ProjectCardProps } from "../../ProjectCard";

type StatusStyle = Pick<React.CSSProperties, 'backgroundColor' | 'color'>

export const getProjectStatuses: () => Record<ProjectCardProps['status'], StatusStyle> = () => ({
	scheduled: {
		color: 'rgba(230, 95, 43, 1)',
		backgroundColor: 'rgba(230, 95, 43, 0.18)'
	},
	testing: {
		color: 'rgba(223, 20, 227, 1)',
		backgroundColor: 'rgba(223, 20, 227, 0.18)'
	},
	completed: {
		color: 'rgba(230, 95, 43, 1)',
		backgroundColor: 'rgba(230, 95, 43, 0.18)',
	},
	development: {
		color: 'rgba(13, 63, 124, 1)',
		backgroundColor: 'rgba(13, 63, 124, 0.18)',
	},
	canceled: {
		color: 'rgba(223, 34, 9, 1)',
		backgroundColor: 'rgba(223, 34, 9, 0.18)',
	},
	frozen: {
		color: 'rgba(66, 64, 73, 1)',
		backgroundColor: 'rgba(223, 20, 227, 0.18)'
	},
	completed: {
		color: 'rgba(230, 95, 43, 1)',
		backgroundColor: 'rgba(230, 95, 43, 0.18)',
	},
	development: {
		color: 'rgba(13, 63, 124, 1)',
		backgroundColor: 'rgba(13, 63, 124, 0.18)',
	},
	canceled: {
		color: 'rgba(223, 34, 9, 1)',
		backgroundColor: 'rgba(223, 34, 9, 0.18)',
	},
	frozen: {
		color: 'rgba(66, 64, 73, 1)',
		backgroundColor: 'rgba(66, 64, 73, 0.18)',
	}
})