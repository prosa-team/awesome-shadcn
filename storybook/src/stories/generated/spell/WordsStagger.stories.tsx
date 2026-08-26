/**
 * The headline should be read at the pace it appears, one word at a time.
 *
 * **Registry:** Spell UI — `@spell/words-stagger` ([docs](https://spell.sh/docs/words-stagger))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { WordsStagger } from '@/registries/spell/words-stagger'

const meta: Meta<typeof WordsStagger> = {
  title: 'Spell UI/Words Stagger',
  component: WordsStagger,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof WordsStagger>

export const Default: Story = {}
