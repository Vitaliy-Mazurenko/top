import type { Meta, StoryObj } from '@storybook/react';
import avatarURL from 'shared/assets/icons/java.png'

import { SkillItem } from './index';

const meta: Meta<typeof SkillItem> = {
	component: SkillItem,
};

export default meta;
type Story = StoryObj<typeof SkillItem>;

export const FullWidth: Story = {
	render: () => <SkillItem name='Igor' experience='3 years' iconURL={avatarURL} />
}

export const Contained: Story = {
	render: () => <div style={{ width: '300px' }}>
		<SkillItem name='Java' experience='3 years' iconURL={avatarURL} />
	</div>
}
