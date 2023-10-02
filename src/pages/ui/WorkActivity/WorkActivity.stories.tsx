import type { Meta, StoryObj } from '@storybook/react';
import { WorkActivity } from './index';

const meta: Meta<typeof WorkActivity> = {
	component: WorkActivity,
};

export default meta;
type Story = StoryObj<typeof WorkActivity>;

export const FullWidth: Story = {
	render: () => <WorkActivity
		position='Front-end developer'
		startDate={new Date()}
		endDate={new Date(Date.now() + 99999999999)}
		tags={['react', 'angular', 'react-query', 'fsd']}
		companyName='"Company name"'
		activity={[
			'Worked on the development and implementation of new blockchain technologies and completed professional market research.',
			'Won the Employee of the Month Award once for finishing all assigned projects within budget and schedule.'
		]}
	/>
}

export const Contained: Story = {
	render: () => <div style={{ width: '800px' }}>
		<WorkActivity
			position='Front-end developer'
			startDate={new Date()}
			endDate={new Date(Date.now() + 99999999999)}
			tags={['react', 'angular', 'react-query', 'fsd']}
			companyName='"Company name"'
			activity={[
				'Worked on the development and implementation of new blockchain technologies and completed professional market research.',
				'Won the Employee of the Month Award once for finishing all assigned projects within budget and schedule.'
			]}
		/>
	</div>
}

