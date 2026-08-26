import type { Meta, StoryObj } from '@storybook/react-vite'

import { BorderBeam } from '@/components/ui/border-beam'

/**
 * A travelling light that runs along a card's border.
 *
 * **Registry:** Magic UI — `@magicui/border-beam`
 * ([docs](https://magicui.design/docs/components/border-beam))
 *
 * **Reach for it when** a single card — the recommended plan, the featured
 * feature — must be the one thing that moves on screen.
 *
 * The beam is absolutely positioned, so the parent needs `relative` and
 * `overflow-hidden`. It draws nothing itself; it only decorates the box it
 * sits in.
 */
const meta = {
  title: 'Magic UI/Border Beam',
  component: BorderBeam,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'range', min: 20, max: 400, step: 10 },
      description: 'Length of the beam along the border, in pixels.',
      table: { defaultValue: { summary: '50' } },
    },
    duration: {
      control: { type: 'range', min: 1, max: 20, step: 0.5 },
      description: 'Seconds for one full lap around the border.',
      table: { defaultValue: { summary: '6' } },
    },
    delay: {
      control: { type: 'range', min: 0, max: 10, step: 0.5 },
      description: 'Seconds before the beam starts moving.',
      table: { defaultValue: { summary: '0' } },
    },
    colorFrom: {
      control: 'color',
      description: 'Gradient start colour of the beam.',
      table: { defaultValue: { summary: '#ffaa40' } },
    },
    colorTo: {
      control: 'color',
      description: 'Gradient end colour of the beam.',
      table: { defaultValue: { summary: '#9c40ff' } },
    },
    borderWidth: {
      control: { type: 'range', min: 1, max: 8, step: 1 },
      description: 'Thickness of the beam stroke, in pixels.',
      table: { defaultValue: { summary: '1' } },
    },
    initialOffset: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Where on the perimeter the beam starts, as a percentage.',
      table: { defaultValue: { summary: '0' } },
    },
    reverse: {
      control: 'boolean',
      description: 'Run the beam anticlockwise.',
      table: { defaultValue: { summary: 'false' } },
    },
    className: { control: 'text' },
    transition: { control: false, description: 'Raw Motion transition override.' },
    style: { control: false },
  },
  args: {
    size: 50,
    duration: 6,
    delay: 0,
    colorFrom: '#ffaa40',
    colorTo: '#9c40ff',
    borderWidth: 1,
    initialOffset: 0,
    reverse: false,
  },
  render: (args) => (
    <div className="relative w-80 overflow-hidden rounded-xl border bg-card p-6 text-card-foreground">
      <h3 className="text-lg font-semibold">Pro</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Everything in Starter, plus unlimited registries.
      </p>
      <p className="mt-4 text-3xl font-bold">€29</p>
      <BorderBeam {...args} />
    </div>
  ),
} satisfies Meta<typeof BorderBeam>

export default meta
type Story = StoryObj<typeof meta>

/** Defaults straight from the registry. */
export const Default: Story = {}

/** Reversed direction with a longer beam and a slower lap. */
export const SlowReverse: Story = {
  args: { reverse: true, size: 160, duration: 12 },
}

/** Two beams chasing each other: same component, opposite offsets. */
export const DualBeam: Story = {
  render: (args) => (
    <div className="relative w-80 overflow-hidden rounded-xl border bg-card p-6 text-card-foreground">
      <h3 className="text-lg font-semibold">Featured</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Two beams, one offset by half the perimeter.
      </p>
      <BorderBeam {...args} initialOffset={0} />
      <BorderBeam {...args} initialOffset={50} colorFrom="#40c9ff" colorTo="#40ffaa" />
    </div>
  ),
  args: { size: 120, duration: 8, borderWidth: 2 },
}

/** Thick, high-contrast beam for dark surfaces. */
export const ThickNeon: Story = {
  args: { borderWidth: 4, size: 200, colorFrom: '#00ffd5', colorTo: '#7a5cff', duration: 5 },
}
