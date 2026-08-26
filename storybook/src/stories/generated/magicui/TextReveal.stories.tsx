/**
 * A statement should reveal word by word as the user scrolls it, forcing a slower read.
 *
 * **Registry:** Magic UI — `@magicui/text-reveal` ([docs](https://magicui.design/docs/components/text-reveal))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TextReveal } from '@/registries/magicui/ui/text-reveal'

const meta: Meta<typeof TextReveal> = {
  title: 'Magic UI/Text Reveal',
  component: TextReveal,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof TextReveal>

export const Default: Story = {}
