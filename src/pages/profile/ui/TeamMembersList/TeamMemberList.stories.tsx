import type { Meta, StoryObj } from '@storybook/react';
import { TeamMembersList } from './index';

const meta: Meta<typeof TeamMembersList> = {
	component: TeamMembersList,
};

export default meta;
type Story = StoryObj<typeof TeamMembersList>;

export const Default: Story = {
	render: () => <TeamMembersList  />
}

