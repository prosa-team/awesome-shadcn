/**
 * A playful brand wants a button that physically depresses on click.
 *
 * **Registry:** Spell UI — `@spell/pop-button` ([docs](https://spell.sh/docs/pop-button))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { PopButton } from '@/registries/spell/pop-button'

const meta: Meta<typeof PopButton> = {
  title: 'Spell UI/Pop Button',
  component: PopButton,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof PopButton>

export const Default: Story = {}
