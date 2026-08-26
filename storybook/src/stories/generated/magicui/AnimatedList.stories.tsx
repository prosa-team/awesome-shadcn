/**
 * You are demonstrating a live feed (notifications, events, orders) and items must enter in sequence, not all at once.
 *
 * **Registry:** Magic UI — `@magicui/animated-list` ([docs](https://magicui.design/docs/components/animated-list))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { AnimatedList } from '@/registries/magicui/ui/animated-list'

const meta: Meta<typeof AnimatedList> = {
  title: 'Magic UI/Animated List',
  component: AnimatedList,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof AnimatedList>

export const Default: Story = {}
