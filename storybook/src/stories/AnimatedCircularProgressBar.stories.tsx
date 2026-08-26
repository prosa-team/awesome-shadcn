import type { Meta, StoryObj } from '@storybook/react-vite'

import { AnimatedCircularProgressBar } from '@/registries/magicui/ui/animated-circular-progress-bar'

/**
 * A ring gauge that animates its stroke and prints the percentage in the middle.
 *
 * **Registry:** Magic UI — `@magicui/animated-circular-progress-bar`
 * ([docs](https://magicui.design/docs/components/animated-circular-progress-bar))
 *
 * **Reach for it when** a single percentage is the headline number — usage,
 * score, completion — and a bar would read as secondary.
 *
 * `gaugePrimaryColor` and `gaugeSecondaryColor` are required. Pass CSS
 * variables (`var(--primary)`) to keep it on theme.
 */
const meta = {
  title: 'Magic UI/Animated Circular Progress Bar',
  component: AnimatedCircularProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current value, between `min` and `max`.',
    },
    min: {
      control: { type: 'number' },
      description: 'Lower bound of the gauge.',
      table: { defaultValue: { summary: '0' } },
    },
    max: {
      control: { type: 'number' },
      description: 'Upper bound of the gauge.',
      table: { defaultValue: { summary: '100' } },
    },
    gaugePrimaryColor: {
      control: 'color',
      description: 'Colour of the filled arc.',
    },
    gaugeSecondaryColor: {
      control: 'color',
      description: 'Colour of the empty track behind it.',
    },
    className: {
      control: 'text',
      description: 'Sets the diameter and the label size, e.g. `size-40 text-2xl`.',
    },
  },
  args: {
    value: 72,
    min: 0,
    max: 100,
    gaugePrimaryColor: '#7c3aed',
    gaugeSecondaryColor: 'rgba(0,0,0,0.1)',
    className: 'size-40 text-2xl',
  },
} satisfies Meta<typeof AnimatedCircularProgressBar>

export default meta
type Story = StoryObj<typeof meta>

/** A single value at rest. */
export const Default: Story = {}

/** Empty and full, the two ends worth checking. */
export const Empty: Story = { args: { value: 0 } }
export const Complete: Story = { args: { value: 100, gaugePrimaryColor: '#16a34a' } }

/** A non-percentage range: the label still prints a percentage of the span. */
export const CustomRange: Story = {
  args: { min: 200, max: 800, value: 640, gaugePrimaryColor: '#f59e0b' },
}

/** Three sizes, so the label ramp can be checked in one pass. */
export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-8">
      {(['size-20 text-sm', 'size-32 text-lg', 'size-48 text-3xl'] as const).map((c) => (
        <AnimatedCircularProgressBar key={c} {...args} className={c} />
      ))}
    </div>
  ),
  args: { value: 64 },
}

/** Danger state: red arc for a quota that is nearly spent. */
export const Danger: Story = {
  args: { value: 94, gaugePrimaryColor: '#dc2626', gaugeSecondaryColor: 'rgba(220,38,38,0.15)' },
}
