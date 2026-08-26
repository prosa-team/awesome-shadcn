import type { Meta, StoryObj } from '@storybook/react-vite'

import { AnimatedSpan, Terminal, TypingAnimation } from '@/registries/magicui/ui/terminal'

/**
 * A fake terminal window that types a command and then reveals its output line by line.
 *
 * **Registry:** Magic UI — `@magicui/terminal`
 * ([docs](https://magicui.design/docs/components/terminal))
 *
 * **Reach for it when** the install step *is* the pitch and a static code
 * block would not show how little there is to do.
 *
 * Three parts ship together:
 * `Terminal` (the chrome and the sequencer), `TypingAnimation` (a line typed
 * character by character), and `AnimatedSpan` (an output line that fades in).
 * With `sequence` on, children run in order and each waits for the one before it.
 */
const meta = {
  title: 'Magic UI/Terminal',
  component: Terminal,
  subcomponents: { TypingAnimation, AnimatedSpan },
  tags: ['autodocs'],
  argTypes: {
    sequence: {
      control: 'boolean',
      description:
        'Run children one after another. Turn it off to let every child use its own `delay`.',
      table: { defaultValue: { summary: 'true' } },
    },
    startOnView: {
      control: 'boolean',
      description: 'Wait until the terminal scrolls into view before starting.',
      table: { defaultValue: { summary: 'true' } },
    },
    className: { control: 'text' },
    children: { control: false },
  },
  args: { sequence: true, startOnView: false, children: null },
  render: (args) => (
    <Terminal {...args}>
      <TypingAnimation>&gt; bunx shadcn@latest add @magicui/terminal</TypingAnimation>
      <AnimatedSpan className="text-green-500">✔ Checking registry.</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ Installing dependencies.</AnimatedSpan>
      <AnimatedSpan className="text-green-500">✔ Created 1 file:</AnimatedSpan>
      <AnimatedSpan className="pl-4 text-muted-foreground">
        - src/components/ui/terminal.tsx
      </AnimatedSpan>
      <TypingAnimation className="text-muted-foreground">Done in 1.2s.</TypingAnimation>
    </Terminal>
  ),
} satisfies Meta<typeof Terminal>

export default meta
type Story = StoryObj<typeof meta>

/** Sequenced: every line waits for the line above it. */
export const Default: Story = {}

/** Sequencing off, so each child controls its own timing through `delay`. */
export const ManualDelays: Story = {
  args: { sequence: false },
  render: (args) => (
    <Terminal {...args}>
      <TypingAnimation delay={0}>&gt; bun run build</TypingAnimation>
      <AnimatedSpan delay={1200} className="text-green-500">
        ✔ 42 modules transformed.
      </AnimatedSpan>
      <AnimatedSpan delay={1600} className="text-yellow-500">
        ⚠ 1 chunk is larger than 500 kB.
      </AnimatedSpan>
      <AnimatedSpan delay={2000} className="text-green-500">
        ✔ built in 812ms
      </AnimatedSpan>
    </Terminal>
  ),
}

/** An error run — the same primitives carry a failure just as well. */
export const FailedRun: Story = {
  render: (args) => (
    <Terminal {...args}>
      <TypingAnimation>&gt; bun run check-types</TypingAnimation>
      <AnimatedSpan className="text-red-500">
        ✖ src/app.tsx(12,3): Type 'string' is not assignable to type 'number'.
      </AnimatedSpan>
      <AnimatedSpan className="text-muted-foreground">Found 1 error.</AnimatedSpan>
    </Terminal>
  ),
}

/**
 * The registry default: nothing runs until the terminal scrolls into view, so a
 * terminal below the fold still plays from the first character.
 */
export const WaitForViewport: Story = { args: { startOnView: true } }
