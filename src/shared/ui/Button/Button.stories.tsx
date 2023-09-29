
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';

const meta: Meta<typeof Button> = {
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;


export const Primary: Story = {
	render: () => (
		<Button $variant='primary'>Primary Button text</Button>
	)
}

export const Secondary: Story = {
	render: () => (
		<Button $variant='secondary'>Secondary Button text</Button>
	)
}
