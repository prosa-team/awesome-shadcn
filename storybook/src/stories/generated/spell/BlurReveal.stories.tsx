/**
 * The hero headline should come into focus rather than fade — softest of the entrance effects.
 *
 * **Registry:** Spell UI — `@spell/blur-reveal` ([docs](https://spell.sh/docs/blur-reveal))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { BlurReveal } from '@/registries/spell/blur-reveal'

const meta: Meta<typeof BlurReveal> = {
  title: 'Spell UI/Blur Reveal',
  component: BlurReveal,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof BlurReveal>

export const Default: Story = {}
