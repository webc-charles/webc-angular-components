import type { Meta, StoryObj } from '@storybook/angular';
import { Alert, AlertTitle, AlertBody } from './alert';

const meta: Meta<Alert> = {
  title: 'Components/Alert',
  component: Alert,
  decorators: [
    (story) => ({
      ...story(),
      moduleMetadata: {
        imports: [Alert, AlertTitle, AlertBody],
      },
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'accent', 'success', 'danger', 'warning', 'info'],
      description: 'Visual style variant of the alert',
    },
    customClass: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<Alert>;

// Default alert
export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <alert [variant]="variant">
        <div alertBody>This is a default alert message.</div>
      </alert>
    `,
  }),
  args: {
    variant: 'info',
  },
};

// Info variant
export const Info: Story = {
  render: () => ({
    template: `
      <alert variant="info">
        <div alertTitle>Information</div>
        <div alertBody>This is an informational message to help guide the user.</div>
      </alert>
    `,
  }),
};

// Success variant
export const Success: Story = {
  render: () => ({
    template: `
      <alert variant="success">
        <div alertTitle>Success!</div>
        <div alertBody>Your action was completed successfully.</div>
      </alert>
    `,
  }),
};

// Warning variant
export const Warning: Story = {
  render: () => ({
    template: `
      <alert variant="warning">
        <div alertTitle>Warning</div>
        <div alertBody>Please review this information carefully before proceeding.</div>
      </alert>
    `,
  }),
};

// Danger variant
export const Danger: Story = {
  render: () => ({
    template: `
      <alert variant="danger">
        <div alertTitle>Error</div>
        <div alertBody>An error occurred. Please try again or contact support.</div>
      </alert>
    `,
  }),
};

// Accent variant
export const Accent: Story = {
  render: () => ({
    template: `
      <alert variant="accent">
        <div alertTitle>Special Notice</div>
        <div alertBody>This is an important announcement you should be aware of.</div>
      </alert>
    `,
  }),
};

// Without title
export const WithoutTitle: Story = {
  render: () => ({
    template: `
      <alert variant="info">
        <div alertBody>This alert has no title, just the message content.</div>
      </alert>
    `,
  }),
};

// With long content
export const LongContent: Story = {
  render: () => ({
    template: `
      <alert variant="warning">
        <div alertTitle>Important Notice</div>
        <div alertBody>
          This is a much longer alert message that contains multiple sentences and detailed information. 
          It demonstrates how the alert component handles larger amounts of text content and maintains 
          readability across different viewport sizes.
        </div>
      </alert>
    `,
  }),
};

// With rich content
export const WithRichContent: Story = {
  render: () => ({
    template: `
      <alert variant="info">
        <div alertTitle>System Update</div>
        <div alertBody>
          <p>The system will be updated on:</p>
          <ul class="disc">
            <li>Date: January 15, 2024</li>
            <li>Time: 2:00 AM - 4:00 AM EST</li>
            <li>Expected downtime: 2 hours</li>
          </ul>
        </div>
      </alert>
    `,
  }),
};

// All variants comparison
export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <alert variant="default">
          <div alertTitle>Default</div>
          <div alertBody>Default alert message</div>
        </alert>
        <alert variant="info">
          <div alertTitle>Info</div>
          <div alertBody>Information alert message</div>
        </alert>
        <alert variant="success">
          <div alertTitle>Success</div>
          <div alertBody>Success alert message</div>
        </alert>
        <alert variant="warning">
          <div alertTitle>Warning</div>
          <div alertBody>Warning alert message</div>
        </alert>
        <alert variant="danger">
          <div alertTitle>Error</div>
          <div alertBody>Danger alert message</div>
        </alert>
        <alert variant="accent">
          <div alertTitle>Accent</div>
          <div alertBody>Accent alert message</div>
        </alert>
      </div>
    `,
  }),
};

// Use case: Form validation
export const FormValidation: Story = {
  render: () => ({
    template: `
      <alert variant="danger">
        <div alertTitle>Validation Error</div>
        <div alertBody>
          Please fix the following errors before submitting:
          <ul class="disc">
            <li>Email is required</li>
            <li>Password must be at least 8 characters</li>
          </ul>
        </div>
      </alert>
    `,
  }),
};
