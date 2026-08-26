/**
 * Characters resolve out of noise — a heavier variant of the scramble effect.
 *
 * **Registry:** Spell UI — `@spell/randomized-text` ([docs](https://spell.sh/docs/randomized-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { RandomizedText } from '@/registries/spell/randomized-text'

const meta: Meta<typeof RandomizedText> = {
  title: 'Spell UI/Randomized Text',
  component: RandomizedText,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof RandomizedText>

export const Default: Story = {}
