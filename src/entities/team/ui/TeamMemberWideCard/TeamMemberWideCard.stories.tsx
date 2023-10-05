import type { Meta, StoryObj } from '@storybook/react';
import avatarURL from 'shared/assets/img/photo.png'

import { TeamMemberWideCard } from './index';

const meta: Meta<typeof TeamMemberWideCard> = {
	component: TeamMemberWideCard,
};

export default meta;
type Story = StoryObj<typeof TeamMemberWideCard>;

export const FullWidth: Story = {
	render: () => <TeamMemberWideCard name='Igor' experience='3 years' position='Frontend developer' status='online' avatarURL={avatarURL} teamNumber={3} projectsNumber={5} speciality='React' />
}
