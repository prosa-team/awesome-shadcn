import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  CheckmarkCircle02Icon,
  RocketIcon,
  Settings02Icon,
  Upload04Icon,
} from '@hugeicons/core-free-icons'

import { DialogStack } from '@/registries/watermelon/components/ui/dialog-stack'
import type { StackItem } from '@/registries/watermelon/components/ui/dialog-stack'

const STACK: StackItem[] = [
  { id: 'details', title: 'Project details', type: 'form', buttonText: 'Continue' },
  {
    id: 'steps',
    title: 'What happens next',
    type: 'steps',
    buttonText: 'Deploy',
    steps: [
      { icon: Upload04Icon, text: 'Upload the build' },
      { icon: Settings02Icon, text: 'Assign the domains' },
      { icon: CheckmarkCircle02Icon, text: 'Run the health check' },
    ],
  },
]

/**
 * A stacked dialog that advances through steps without opening a new window.
 *
 * **Registry:** Watermelon UI — `@watermelon/dialog-stack`
 * ([docs](https://ui.watermelon.sh/animated-components/dialog-stack))
 *
 * `stack` mixes two kinds of screen — a form and a step list — and the whole
 * point is the transition between them, so a sample with one screen shows
 * nothing.
 *
 * The icons must come from `@hugeicons/core-free-icons`: the component renders
 * them through `HugeiconsIcon`, which iterates an icon definition rather than
 * calling a component, so a Lucide icon throws.
 */
const meta: Meta<typeof DialogStack> = {
  title: 'Watermelon UI/Dialog Stack',
  component: DialogStack,
  tags: ['autodocs'],
  args: {
    stack: STACK,
    trigger: { label: 'New deployment', icon: RocketIcon },
  },
}

export default meta
type Story = StoryObj<typeof DialogStack>

/** Two screens: a form, then a summary. Open it and press Continue. */
export const Default: Story = {}

/** A single form screen, with no next step to advance to. */
export const SingleScreen: Story = { args: { stack: [STACK[0]] } }
