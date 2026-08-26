/**
 * A vertical strip of words scrolls beside content, used as a visual rail rather than a message.
 *
 * **Registry:** Spell UI — `@spell/text-marquee` ([docs](https://spell.sh/docs/text-marquee))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TextMarquee } from '@/registries/spell/text-marquee'

const meta: Meta<typeof TextMarquee> = {
  title: 'Spell UI/Text Marquee',
  component: TextMarquee,
  tags: ['autodocs'],
  args: {
    children: ["The quick brown fox jumps over the lazy dog.", "The quick brown fox jumps over the lazy dog. 2", "The quick brown fox jumps over the lazy dog. 3"],
  },
}

export default meta
type Story = StoryObj<typeof TextMarquee>

export const Default: Story = {}
