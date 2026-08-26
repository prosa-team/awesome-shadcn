import type { Meta, StoryObj } from '@storybook/react-vite'

import { DotmSquare1 } from '@/registries/dotmatrix/ui/dotm-square-1'

/**
 * "Neon Drift" — a square dot matrix with a diagonal ripple running through it.
 *
 * **Registry:** Dot Matrix — `@dotmatrix/dotm-square-1`
 * ([registry JSON](https://dotmatrix.zzzzshawn.cloud/r/dotm-square-1.json))
 *
 * **Reach for it when** you need a square matrix loader with a diagonal
 * ripple — a busy state with more character than a spinner but still small
 * enough to sit inline.
 *
 * The whole Dot Matrix family shares one prop surface
 * (`DotMatrixCommonProps`), so everything below transfers to the other 70+
 * loaders in that registry. It respects `prefers-reduced-motion` on its own:
 * the animation drops to a static pattern instead of stopping dead.
 */
const meta = {
  title: 'Dot Matrix/Neon Drift',
  component: DotmSquare1,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'range', min: 16, max: 160, step: 2 },
      description: 'Overall width and height of the matrix, in pixels.',
      table: { defaultValue: { summary: '36' } },
    },
    dotSize: {
      control: { type: 'range', min: 1, max: 16, step: 1 },
      description: 'Diameter of one dot, in pixels.',
      table: { defaultValue: { summary: '5' } },
    },
    speed: {
      control: { type: 'range', min: 0.2, max: 4, step: 0.1 },
      description: 'Animation speed multiplier.',
      table: { defaultValue: { summary: '1.1' } },
    },
    pattern: {
      control: 'select',
      options: ['full', 'diamond', 'outline', 'rose', 'cross', 'rings'],
      description: 'Which dots of the grid are active.',
      table: { defaultValue: { summary: 'full' } },
    },
    dotShape: {
      control: 'inline-radio',
      options: ['circle', 'square', 'diamond', 'hearts'],
      description: 'Shape of each dot.',
      table: { defaultValue: { summary: 'circle' } },
    },
    colorPreset: {
      control: 'select',
      options: [
        undefined,
        'solid-theme',
        'solid-mint',
        'grad-sunset',
        'grad-ocean',
        'grad-neon',
        'grad-aurora',
        'grad-fire',
        'grad-prism',
      ],
      description: 'Bundled palette. Overrides `color` when set.',
    },
    color: {
      control: 'color',
      description: 'Single dot colour. Ignored if `colorPreset` is set.',
      table: { defaultValue: { summary: 'currentColor' } },
    },
    animated: {
      control: 'boolean',
      description: 'Run the animation continuously.',
      table: { defaultValue: { summary: 'true' } },
    },
    hoverAnimated: {
      control: 'boolean',
      description: 'Only animate while hovered. Pair with `animated: false`.',
      table: { defaultValue: { summary: 'false' } },
    },
    bloom: {
      control: 'boolean',
      description: 'Glow that scales with each dot’s opacity.',
      table: { defaultValue: { summary: 'false' } },
    },
    halo: {
      control: { type: 'range', min: 0, max: 1, step: 0.05 },
      description: 'Uniform glow on every active dot, 0–1.',
    },
    muted: {
      control: 'boolean',
      description: 'Dim the whole matrix for a background placement.',
    },
    opacityBase: { control: { type: 'range', min: 0, max: 1, step: 0.02 } },
    opacityMid: { control: { type: 'range', min: 0, max: 1, step: 0.02 } },
    opacityPeak: { control: { type: 'range', min: 0, max: 1, step: 0.02 } },
    cellPadding: { control: { type: 'range', min: 0, max: 8, step: 0.5 } },
    ariaLabel: {
      control: 'text',
      description: 'Accessible name announced for the busy state.',
      table: { defaultValue: { summary: 'Loading' } },
    },
    className: { control: 'text' },
    dotClassName: { control: 'text' },
    boxSize: { control: false },
    minSize: { control: false },
  },
  args: {
    size: 72,
    dotSize: 8,
    speed: 1.1,
    pattern: 'full',
    dotShape: 'circle',
    animated: true,
    hoverAnimated: false,
    bloom: false,
    muted: false,
    ariaLabel: 'Loading',
  },
} satisfies Meta<typeof DotmSquare1>

export default meta
type Story = StoryObj<typeof meta>

/** Registry defaults, scaled up so the ripple is readable. */
export const Default: Story = {}

/** Inline size, the one you actually drop next to a label. */
export const Inline: Story = {
  render: (args) => (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <DotmSquare1 {...args} />
      <span>Fetching registry…</span>
    </div>
  ),
  args: { size: 24, dotSize: 3 },
}

/** Every pattern side by side — the same animation, different active cells. */
export const Patterns: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-8">
      {(['full', 'diamond', 'outline', 'rose', 'cross', 'rings'] as const).map((p) => (
        <div key={p} className="flex flex-col items-center gap-2">
          <DotmSquare1 {...args} pattern={p} />
          <span className="text-xs text-muted-foreground">{p}</span>
        </div>
      ))}
    </div>
  ),
}

/** Every dot shape. */
export const DotShapes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-8">
      {(['circle', 'square', 'diamond', 'hearts'] as const).map((s) => (
        <div key={s} className="flex flex-col items-center gap-2">
          <DotmSquare1 {...args} dotShape={s} />
          <span className="text-xs text-muted-foreground">{s}</span>
        </div>
      ))}
    </div>
  ),
}

/** Every bundled colour preset. */
export const ColorPresets: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-8">
      {(
        [
          'solid-theme',
          'solid-mint',
          'grad-sunset',
          'grad-ocean',
          'grad-neon',
          'grad-aurora',
          'grad-fire',
          'grad-prism',
        ] as const
      ).map((p) => (
        <div key={p} className="flex flex-col items-center gap-2">
          <DotmSquare1 {...args} colorPreset={p} />
          <span className="text-xs text-muted-foreground">{p}</span>
        </div>
      ))}
    </div>
  ),
}

/** Bloom and halo, for a loader placed on a dark hero. */
export const Glowing: Story = {
  args: { colorPreset: 'grad-neon', bloom: true, halo: 0.6, size: 96, dotSize: 10 },
}

/** Idle until hovered — a quiet indicator that only wakes on intent. */
export const HoverOnly: Story = {
  args: { animated: false, hoverAnimated: true },
}
