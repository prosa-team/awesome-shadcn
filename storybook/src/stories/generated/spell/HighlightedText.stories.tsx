/**
 * One phrase in a paragraph is the promise and needs a marker stroke drawn across it.
 *
 * **Registry:** Spell UI — `@spell/highlighted-text` ([docs](https://spell.sh/docs/highlighted-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { HighlightedText } from '@/registries/spell/highlighted-text'

const meta: Meta<typeof HighlightedText> = {
  title: 'Spell UI/Highlighted Text',
  component: HighlightedText,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof HighlightedText>

export const Default: Story = {}
