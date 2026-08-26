/**
 * Carousel | A playful brand wants the deck to react physically as the user moves through it.
 *
 * **Registry:** Watermelon UI — `@watermelon/wiggling-cards` ([docs](https://ui.watermelon.sh/animated-components/wiggling-cards))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { WigglingCards } from '@/registries/watermelon/components/ui/wiggling-cards'

const meta: Meta<typeof WigglingCards> = {
  title: 'Watermelon UI/Wiggling Cards',
  component: WigglingCards,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof WigglingCards>

export const Default: Story = {}
