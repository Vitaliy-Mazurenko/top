import type { Meta, StoryObj } from '@storybook/react';
import { WorkActivityList } from './index';

const meta: Meta<typeof WorkActivityList> = {
	component: WorkActivityList,
};

export default meta;
type Story = StoryObj<typeof WorkActivityList>;

export const FullWidth: Story = {
	render: () => <WorkActivityList
		workActivity={[
			{
				position: 'Front-end developer',
				activity: [
					'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
					'in voluptate velit esse cillum'
				],
				startDate: new Date(),
				endDate: new Date(Date.now() + 99999999999),
				tags: ['react', 'angular', 'react-query', 'fsd'],
				companyLocation: 'Kyiv, Ukraine',
				companyName: '"Company name"'
			},
			{
				position: 'Front-end developer',
				activity: [
					'Worked on the development and implementation of new blockchain technologies and completed professional market research.',
					'Won the Employee of the Month Award once for finishing all assigned projects within budget and schedule.',
					'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
				],
				startDate: new Date(),
				endDate: new Date(Date.now() + 99999999999),
				tags: ['react', 'angular', 'react-query', 'fsd'],
				companyLocation: 'Kyiv, Ukraine',
				companyName: '"Company name"'
			}

		]}
	/>
}

export const Contained: Story = {
	render: () => <div style={{ width: '850px' }}>
		<WorkActivityList
			workActivity={[
				{
					position: 'Front-end developer',
					activity: [
						'Worked on the development and implementation of new blockchain technologies and completed professional market research.',
						'Won the Employee of the Month Award once for finishing all assigned projects within budget and schedule.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
					],
					startDate: new Date(),
					endDate: new Date(Date.now() + 99999999999),
					tags: ['react', 'angular', 'react-query', 'fsd'],
					companyLocation: 'Kyiv, Ukraine',
					companyName: '"Company name"'
				},
				{
					position: 'Front-end developer',
					activity: [
						'Worked on the development and implementation of new blockchain technologies and completed professional market research.',
						'Won the Employee of the Month Award once for finishing all assigned projects within budget and schedule.',
						'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum'
					],
					startDate: new Date(),
					endDate: new Date(Date.now() + 99999999999),
					tags: ['react', 'angular', 'react-query', 'fsd'],
					companyLocation: 'Kyiv, Ukraine',
					companyName: '"Company name"'
				}

			]}
		/>
	</div>
}
