import type { Meta, StoryObj } from '@storybook/react-vite'

import { AnimatedGradientText } from '@/components/ui/animated-gradient-text'

/**
 * Text filled with a gradient that slides across it forever.
 *
 * **Registry:** Magic UI — `@magicui/animated-gradient-text`
 * ([docs](https://magicui.design/docs/components/animated-gradient-text))
 *
 * **Reach for it when** a launch pill or badge above the hero headline needs
 * to catch the eye before the headline does.
 *
 * It renders an inline `<span>` with `bg-clip-text`, so it inherits the
 * surrounding type ramp. Set the size and weight through `className`.
 */
const meta = {
  title: 'Magic UI/Animated Gradient Text',
  component: AnimatedGradientText,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'The text to fill.' },
    speed: {
      control: { type: 'range', min: 0.2, max: 5, step: 0.1 },
      description:
        'Multiplier on the background size. Higher means a longer, slower-reading sweep.',
      table: { defaultValue: { summary: '1' } },
    },
    colorFrom: {
      control: 'color',
      description: 'Gradient start colour, also used as the end stop.',
      table: { defaultValue: { summary: '#ffaa40' } },
    },
    colorTo: {
      control: 'color',
      description: 'Gradient midpoint colour.',
      table: { defaultValue: { summary: '#9c40ff' } },
    },
    className: { control: 'text' },
  },
  args: {
    children: 'Introducing awesome-shadcn',
    speed: 1,
    colorFrom: '#ffaa40',
    colorTo: '#9c40ff',
    className: 'text-4xl font-bold tracking-tight',
  },
} satisfies Meta<typeof AnimatedGradientText>

export default meta
type Story = StoryObj<typeof meta>

/** Registry defaults, at headline size. */
export const Default: Story = {}

/** A cool palette that survives both themes. */
export const OceanFast: Story = {
  args: { colorFrom: '#40c9ff', colorTo: '#e81cff', speed: 3 },
}

/** Slow and wide — ambient emphasis rather than a badge. */
export const Slow: Story = { args: { speed: 0.4 } }

/** Inside a pill: the intended "what's new" placement. */
export const AnnouncementPill: Story = {
  render: (args) => (
    <div className="group inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm shadow-sm">
      <span>🎉</span>
      <span className="h-4 w-px bg-border" />
      <AnimatedGradientText {...args} />
      <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </div>
  ),
  args: { children: 'New registries added', className: 'text-sm font-medium' },
}
