/**
 * Interaction | Decisions are made by swiping and the throw must respect velocity, not just direction.
 *
 * **Registry:** Watermelon UI — `@watermelon/card-swipe` ([docs](https://ui.watermelon.sh/animated-components/card-swipe))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { CardSwipe } from '@/registries/watermelon/components/ui/card-swipe'

const meta: Meta<typeof CardSwipe> = {
  title: 'Watermelon UI/Card Swipe',
  component: CardSwipe,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CardSwipe>

export const Default: Story = {}
