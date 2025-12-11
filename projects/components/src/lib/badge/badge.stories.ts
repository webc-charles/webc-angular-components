import type { Meta, StoryObj } from '@storybook/angular';
import { Badge } from './badge';

const meta: Meta<Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'accent', 'warning', 'info', 'success'],
      description: 'Visual style variant of the badge',
    },
    customClass: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<Badge>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<badge [variant]="variant">Default</badge>`,
  }),
  args: {
    variant: 'default',
  },
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
        <badge variant="default">Default</badge>
        <badge variant="accent">Accent</badge>
        <badge variant="warning">Warning</badge>
        <badge variant="info">Info</badge>
        <badge variant="success">Success</badge>
      </div>
    `,
  }),
};
