/**
 * You need text that reveals in reading order.
 *
 * **Registry:** interior.dev — `@interior/text-reveal` ([docs](https://interior.dev/docs/text-reveal))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TextReveal } from '@/registries/interior/components/interior/text-reveal'

const meta: Meta<typeof TextReveal> = {
  title: 'interior.dev/Text Reveal',
  component: TextReveal,
  tags: ['autodocs'],
  args: {
    text: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof TextReveal>

export const Default: Story = {}
