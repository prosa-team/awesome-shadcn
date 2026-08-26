import type { Meta, StoryObj } from '@storybook/react-vite'

import { NumberTicker } from '@/registries/magicui/ui/number-ticker'

/**
 * A number that springs from a start value to its target once it scrolls into view.
 *
 * **Registry:** Magic UI — `@magicui/number-ticker`
 * ([docs](https://magicui.design/docs/components/number-ticker))
 *
 * **Reach for it when** a headline metric — users, uptime, revenue — should
 * register as a change rather than as static text.
 *
 * It animates once per mount (`useInView` with `once: true`). Change any arg
 * below and Storybook remounts the story, which is how you re-trigger it.
 */
const meta = {
  title: 'Magic UI/Number Ticker',
  component: NumberTicker,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number' },
      description: 'The number to land on.',
    },
    startValue: {
      control: { type: 'number' },
      description: 'The number to count from.',
      table: { defaultValue: { summary: '0' } },
    },
    direction: {
      control: 'inline-radio',
      options: ['up', 'down'],
      description: '`down` swaps the two ends, counting from `value` to `startValue`.',
      table: { defaultValue: { summary: 'up' } },
    },
    delay: {
      control: { type: 'range', min: 0, max: 5, step: 0.25 },
      description: 'Seconds to wait after entering view before counting.',
      table: { defaultValue: { summary: '0' } },
    },
    decimalPlaces: {
      control: { type: 'range', min: 0, max: 4, step: 1 },
      description: 'Fixed decimal places, formatted with `Intl.NumberFormat`.',
      table: { defaultValue: { summary: '0' } },
    },
    className: { control: 'text' },
  },
  args: {
    value: 1247,
    startValue: 0,
    direction: 'up',
    delay: 0,
    decimalPlaces: 0,
    className: 'text-5xl font-bold tracking-tight tabular-nums',
  },
} satisfies Meta<typeof NumberTicker>

export default meta
type Story = StoryObj<typeof meta>

/** Counts up from zero as soon as it is visible. */
export const Default: Story = {}

/** Counting down reads as a countdown or a reduction. */
export const CountDown: Story = {
  args: { direction: 'down', value: 100, startValue: 0 },
}

/** Two decimals for rates and percentages. */
export const Decimals: Story = {
  args: { value: 99.98, decimalPlaces: 2 },
}

/** A delay lets a headline land before the number moves. */
export const Delayed: Story = {
  args: { value: 42000, delay: 1.5 },
}

/** A stat row: several tickers sharing one type ramp. */
export const StatRow: Story = {
  render: (args) => (
    <div className="flex gap-10">
      {[
        { label: 'Registries', value: 16 },
        { label: 'Components', value: 640 },
        { label: 'Uptime', value: 99.9, decimalPlaces: 1 },
      ].map((s) => (
        <div key={s.label} className="text-center">
          <NumberTicker
            {...args}
            value={s.value}
            decimalPlaces={s.decimalPlaces ?? 0}
            className="text-4xl font-bold tabular-nums"
          />
          <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
  ),
}
