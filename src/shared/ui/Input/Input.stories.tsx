
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './index';

const meta: Meta<typeof Input> = {
	component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Empty: Story = {
	render: () => <Input />
}

export const WithPlaceholder: Story = {
	render: () => <Input placeholder='Placeholder text' />
}

export const WithValue: Story = {
	render: () => <Input value="Some value" />
}

export const WithLabel: Story = {
	render: () => <Input value="Some value" label='Label text' />
}

export const FullWidth: Story = {
	render: () => <Input value="Some value" label='Label text' fullWidth={true} />
}
