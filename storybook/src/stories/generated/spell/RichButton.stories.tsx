/**
 * The primary call to action needs colour variants that carry weight on a busy hero.
 *
 * **Registry:** Spell UI — `@spell/rich-button` ([docs](https://spell.sh/docs/rich-button))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { RichButton } from '@/registries/spell/rich-button'

const meta: Meta<typeof RichButton> = {
  title: 'Spell UI/Rich Button',
  component: RichButton,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof RichButton>

export const Default: Story = {}
