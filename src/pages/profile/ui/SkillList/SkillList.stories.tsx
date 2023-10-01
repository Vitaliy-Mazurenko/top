import type { Meta, StoryObj } from '@storybook/react';
import nodeJS from 'shared/assets/icons/nodejs.svg'
import java from 'shared/assets/icons/java.png'
import python from 'shared/assets/icons/python.svg'
import docker from 'shared/assets/icons/docker.svg'

import { SkillList } from './index';

const meta: Meta<typeof SkillList> = {
	component: SkillList,
};

export default meta;
type Story = StoryObj<typeof SkillList>;

export const FullWidth: Story = {
	render: () => <SkillList skills={[
		{ experience: '3 years', name: 'Java', iconURL: java },
		{ experience: '1 years', name: 'Node.js', iconURL: nodeJS },
		{ experience: '5 years', name: 'Python', iconURL: python },
		{ experience: '3 months', name: 'Docker', iconURL: docker },
	]} />
}

export const Contained: Story = {
	render: () => <div style={{width: '300px'}}>
		<SkillList skills={[
		{ experience: '3 years', name: 'Java', iconURL: java },
		{ experience: '1 years', name: 'Node.js', iconURL: nodeJS },
		{ experience: '5 years', name: 'Python', iconURL: python },
		{ experience: '3 months', name: 'Docker', iconURL: docker },
	]} />
	</div>
}
