import type { Meta, StoryObj } from '@storybook/react';
import avatarURL from 'shared/assets/img/photo.png'
import iconURL from 'shared/assets/img/Settings.png'

import { TeamMemberCard } from './index';

const meta: Meta<typeof TeamMemberCard> = {
	component: TeamMemberCard,
};

export default meta;
type Story = StoryObj<typeof TeamMemberCard>;

export const FullWidth: Story = {
	render: () => <TeamMemberCard name='Igor' experience='3 years' position='Frontend developer' status='online' avatarURL={avatarURL} teamNumber={3} projectsNumber={5} speciality='React' specialityIcon={iconURL} />
}

export const Container: Story = {
	render: () => <div style={{ width: '300px' }}>
		<TeamMemberCard name='Igor' experience='3 years' position='Frontend developer' status='online' avatarURL={avatarURL} teamNumber={3} projectsNumber={5} speciality='React' specialityIcon={iconURL} />
	</div>
}

