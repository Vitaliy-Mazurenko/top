// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { ProjectCard } from './index';

const meta: Meta<typeof ProjectCard> = {
	component: ProjectCard,
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Primary: Story = {
	render: () => <ProjectCard
		title='Title text'
		body='Body text lorem ipsum bla bla bla'
		status='completed'
		iconURLs={[]}
		avatarURL='https://i.imgur.com/fCQHvUP.gif'
	/>,
}
