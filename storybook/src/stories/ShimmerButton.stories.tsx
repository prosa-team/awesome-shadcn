import type { Meta, StoryObj } from '@storybook/react-vite'

import { ShimmerButton } from '@/components/ui/shimmer-button'

/**
 * A call-to-action button with a spark that circles its border.
 *
 * **Registry:** Magic UI — `@magicui/shimmer-button`
 * ([docs](https://magicui.design/docs/components/shimmer-button))
 *
 * **Reach for it when** the hero has exactly one primary action and it has to
 * out-rank every other control on the page without shouting in colour.
 *
 * Every knob is a CSS custom property, so the button stays a plain
 * `<button>` and keeps all its native props.
 */
const meta = {
  title: 'Magic UI/Shimmer Button',
  component: ShimmerButton,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'Button label.' },
    shimmerColor: {
      control: 'color',
      description: 'Colour of the travelling spark.',
      table: { defaultValue: { summary: '#ffffff' } },
    },
    background: {
      control: 'color',
      description: 'Button surface colour.',
      table: { defaultValue: { summary: 'rgba(0, 0, 0, 1)' } },
    },
    shimmerSize: {
      control: 'select',
      options: ['0.02em', '0.05em', '0.1em', '0.2em'],
      description: 'How wide the spark cuts into the border.',
      table: { defaultValue: { summary: '0.05em' } },
    },
    shimmerDuration: {
      control: 'select',
      options: ['1s', '2s', '3s', '5s', '8s'],
      description: 'Seconds for one full lap of the spark.',
      table: { defaultValue: { summary: '3s' } },
    },
    borderRadius: {
      control: 'select',
      options: ['0px', '6px', '12px', '24px', '100px'],
      description: 'Corner radius. `100px` gives the pill shape.',
      table: { defaultValue: { summary: '100px' } },
    },
    className: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    children: 'Add a registry',
    shimmerColor: '#ffffff',
    background: 'rgba(0, 0, 0, 1)',
    shimmerSize: '0.05em',
    shimmerDuration: '3s',
    borderRadius: '100px',
    disabled: false,
  },
} satisfies Meta<typeof ShimmerButton>

export default meta
type Story = StoryObj<typeof meta>

/** Defaults: black pill, white spark, three-second lap. */
export const Default: Story = {}

/** Square corners and a fast spark — reads as a terminal action. */
export const SquareFast: Story = {
  args: { borderRadius: '6px', shimmerDuration: '1s', children: 'Run install' },
}

/** Brand surface with a matching spark. */
export const Branded: Story = {
  args: {
    background: '#1d1836',
    shimmerColor: '#a78bfa',
    shimmerSize: '0.1em',
    children: 'Start free',
  },
}

/** Wide spark, slow lap: ambient rather than urgent. */
export const Ambient: Story = {
  args: { shimmerSize: '0.2em', shimmerDuration: '8s', children: 'Browse components' },
}

/** Native `disabled` still applies — the shimmer keeps running, so pair it with your own opacity. */
export const Disabled: Story = {
  args: { disabled: true, className: 'opacity-50 cursor-not-allowed', children: 'Unavailable' },
}
