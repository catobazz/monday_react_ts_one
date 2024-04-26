import type { Meta, StoryObj } from '@storybook/react';

import Accordion from './Accordion';
import React from 'react';

const meta = {
    component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

export const CollapsedAccordion: Story = {
    render: () => <div>
        hello
    </div>
};