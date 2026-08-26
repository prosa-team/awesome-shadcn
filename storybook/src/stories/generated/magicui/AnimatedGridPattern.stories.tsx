/**
 * A section background should feel alive without competing with the copy — cells fade in and out slowly.
 *
 * **Registry:** Magic UI — `@magicui/animated-grid-pattern` ([docs](https://magicui.design/docs/components/animated-grid-pattern))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { AnimatedGridPattern } from '@/registries/magicui/ui/animated-grid-pattern'

const meta: Meta<typeof AnimatedGridPattern> = {
  title: 'Magic UI/Animated Grid Pattern',
  component: AnimatedGridPattern,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AnimatedGridPattern>

export const Default: Story = {}
