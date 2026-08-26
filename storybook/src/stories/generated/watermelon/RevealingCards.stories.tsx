/**
 * Micro-interaction | Cards uncover their content on interaction, for progressive browsing of a set.
 *
 * **Registry:** Watermelon UI — `@watermelon/revealing-cards` ([docs](https://ui.watermelon.sh/animated-components/revealing-cards))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import SwipeableStackCards from '@/registries/watermelon/components/ui/revealing-cards'

const meta: Meta<typeof SwipeableStackCards> = {
  title: 'Watermelon UI/Revealing Cards',
  component: SwipeableStackCards,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SwipeableStackCards>

export const Default: Story = {}
