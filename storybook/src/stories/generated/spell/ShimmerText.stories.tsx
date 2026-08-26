/**
 * A single label needs a light sweep to be noticed without moving anything.
 *
 * **Registry:** Spell UI — `@spell/shimmer-text` ([docs](https://spell.sh/docs/shimmer-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ShimmerText } from '@/registries/spell/shimmer-text'

const meta: Meta<typeof ShimmerText> = {
  title: 'Spell UI/Shimmer Text',
  component: ShimmerText,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof ShimmerText>

export const Default: Story = {}
