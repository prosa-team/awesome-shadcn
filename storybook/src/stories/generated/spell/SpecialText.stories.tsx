/**
 * A technical brand wants characters to scramble before settling on the final word.
 *
 * **Registry:** Spell UI — `@spell/special-text` ([docs](https://spell.sh/docs/special-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SpecialText } from '@/registries/spell/special-text'

const meta: Meta<typeof SpecialText> = {
  title: 'Spell UI/Special Text',
  component: SpecialText,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof SpecialText>

export const Default: Story = {}
