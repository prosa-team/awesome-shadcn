/**
 * The hero background is a slowly shifting WebGL gradient instead of a static image.
 *
 * **Registry:** Spell UI — `@spell/animated-gradient` ([docs](https://spell.sh/docs/animated-gradient))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import AnimatedGradient from '@/registries/spell/animated-gradient'

const meta: Meta<typeof AnimatedGradient> = {
  title: 'Spell UI/Animated Gradient',
  component: AnimatedGradient,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AnimatedGradient>

export const Default: Story = {}
