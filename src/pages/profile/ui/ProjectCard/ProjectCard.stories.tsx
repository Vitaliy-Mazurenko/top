// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { ProjectCard } from './index';

const meta: Meta<typeof ProjectCard> = {
	component: ProjectCard,
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Contained: Story = {
	render: () => <div style={{ width: '300px' }}>
		<ProjectCard
			title='Title text'
			body='Body text lorem ipsum'
			status='completed'
			iconURLs={[
				'https://cdn-icons-png.flaticon.com/128/44/44499.png',
				'https://cdn-icons-png.flaticon.com/128/44/44499.png',
				'https://cdn-icons-png.flaticon.com/128/44/44499.png',
			]}
			avatarURL='https://i.imgur.com/fCQHvUP.gif'
		/>
	</div>,
}


export const FullWidth: Story = {
	render: () => <ProjectCard
		title='Title text'
		body='Body text lorem ipsum bla bla bla'
		status='completed'
		iconURLs={[
			'https://cdn-icons-png.flaticon.com/128/44/44499.png',
			'https://cdn-icons-png.flaticon.com/128/44/44499.png',
			'https://cdn-icons-png.flaticon.com/128/44/44499.png',
		]}
		avatarURL='https://i.imgur.com/fCQHvUP.gif'
	/>,
}
