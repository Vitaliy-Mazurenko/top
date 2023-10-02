import { RuleSet, css } from "styled-components";
import { TeamMemberWideCardProps } from "..";

export const getUserStatuses: () => Record<TeamMemberWideCardProps['status'], RuleSet> = () => ({
	'online': css`
		color: rgba(82, 196, 26, 1);
		border: 1px solid rgba(183, 235, 143, 1);
	`,
	'do not disturb': css`
	color: rgba(82, 196, 26, 1);
	border: 1px solid rgba(183, 235, 143, 1);
`,
	'not here': css`
		color: rgba(82, 196, 26, 1);
		border: 1px solid rgba(183, 235, 143, 1);
	`,
	'offline': css`
	color: rgba(82, 196, 26, 1);
	border: 1px solid rgba(183, 235, 143, 1);
`,

})