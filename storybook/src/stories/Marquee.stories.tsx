import type { Meta, StoryObj } from '@storybook/react-vite'

import { Marquee } from '@/components/ui/marquee'

const logos = ['Vercel', 'Supabase', 'Linear', 'Resend', 'Clerk', 'Neon']

const Card = ({ label }: { label: string }) => (
  <div className="flex h-16 w-40 items-center justify-center rounded-lg border bg-card text-sm font-medium text-card-foreground">
    {label}
  </div>
)

/**
 * An infinite scrolling strip that duplicates its children until the row is full.
 *
 * **Registry:** Magic UI — `@magicui/marquee`
 * ([docs](https://magicui.design/docs/components/marquee))
 *
 * **Reach for it when** you have more logos, quotes, or screenshots than fit
 * the viewport and the volume itself is the argument.
 *
 * Speed and gap are CSS variables (`--duration`, `--gap`), so override them
 * through `className` rather than props.
 */
const meta = {
  title: 'Magic UI/Marquee',
  component: Marquee,
  tags: ['autodocs'],
  argTypes: {
    reverse: {
      control: 'boolean',
      description: 'Scroll right-to-left instead of left-to-right.',
      table: { defaultValue: { summary: 'false' } },
    },
    pauseOnHover: {
      control: 'boolean',
      description: 'Freeze the animation while the pointer is over the strip.',
      table: { defaultValue: { summary: 'false' } },
    },
    vertical: {
      control: 'boolean',
      description: 'Scroll top-to-bottom instead of sideways.',
      table: { defaultValue: { summary: 'false' } },
    },
    repeat: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
      description: 'How many times the children are cloned to fill the track.',
      table: { defaultValue: { summary: '4' } },
    },
    className: {
      control: 'text',
      description: 'Override `--duration` and `--gap` here, e.g. `[--duration:10s]`.',
    },
    children: { control: false },
  },
  args: {
    reverse: false,
    pauseOnHover: false,
    vertical: false,
    repeat: 4,
    className: '[--duration:20s]',
    children: logos.map((l) => <Card key={l} label={l} />),
  },
  render: (args) => (
    <div className="w-[42rem] max-w-full">
      <Marquee {...args} />
    </div>
  ),
} satisfies Meta<typeof Marquee>

export default meta
type Story = StoryObj<typeof meta>

/** Defaults: horizontal, always moving. */
export const Default: Story = {}

/** Pauses under the pointer so a visitor can actually read a card. */
export const PauseOnHover: Story = { args: { pauseOnHover: true } }

/** Two rows moving against each other — the standard logo wall. */
export const OpposingRows: Story = {
  render: (args) => (
    <div className="w-[42rem] max-w-full space-y-2">
      <Marquee {...args} />
      <Marquee {...args} reverse />
    </div>
  ),
  args: { pauseOnHover: true, className: '[--duration:25s]' },
}

/** Vertical track, useful for a testimonial column beside a hero. */
export const Vertical: Story = {
  render: (args) => (
    <div className="h-80">
      <Marquee {...args} className="h-full [--duration:15s]" />
    </div>
  ),
  args: { vertical: true },
}

/** Short duration turns an ambient strip into an urgent ticker. */
export const Fast: Story = { args: { className: '[--duration:5s]' } }
