// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { ProjectList } from './index';

const meta: Meta<typeof ProjectList> = {
	component: ProjectList,
};

export default meta;
type Story = StoryObj<typeof ProjectList>;

export const Default: Story = {
	render: () => <ProjectList />
}

