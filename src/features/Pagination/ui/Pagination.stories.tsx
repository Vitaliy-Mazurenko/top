// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './index';

const meta: Meta<typeof Pagination> = {
	component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const FullWidth: Story = {
	render: () => <Pagination pagesNumber={10}
		activePage={3} onSelect={console.log}
	/>,
}
