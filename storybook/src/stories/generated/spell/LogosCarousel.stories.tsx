/**
 * The customer logo wall is the proof and should animate rather than sit still.
 *
 * **Registry:** Spell UI — `@spell/logos-carousel` ([docs](https://spell.sh/docs/logos-carousel))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { LogosCarousel } from '@/registries/spell/logos-carousel'

const meta: Meta<typeof LogosCarousel> = {
  title: 'Spell UI/Logos Carousel',
  component: LogosCarousel,
  tags: ['autodocs'],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof LogosCarousel>

export const Default: Story = {}
