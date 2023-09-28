import { RuleSet, css } from "styled-components";
import { ProjectCardProps } from "../../ProjectCard";

export const getProjectStatuses: () => Record<ProjectCardProps['status'], RuleSet> = () => ({
	scheduled: css`
	color: rgba(230, 95, 43, 1);
	background: rgba(230, 95, 43, 0.18);
	`,
	testing: css`
	color: rgba(223, 20, 227, 1);
	background: rgba(223, 20, 227, 0.18);
	`,
	completed: css`
		color: rgba(230, 95, 43, 1);
		background: rgba(230, 95, 43, 0.18);
	`,
	development: css`
	color: rgba(13, 63, 124, 1);
	background: rgba(13, 63, 124, 0.18);
	`,
	canceled: css`
	color: rgba(223, 34, 9, 1);
	background: rgba(223, 34, 9, 0.18);
	`,
	frozen: css`
	color: rgba(66, 64, 73, 1);
	background: rgba(66, 64, 73, 0.18);
	`
})