/**
 * You need a swipeable card stack, like a decision deck.
 *
 * **Registry:** interior.dev — `@interior/swipe-deck` ([docs](https://interior.dev/docs/swipe-deck))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SwipeDeck } from '@/registries/interior/components/interior/swipe-deck'

const meta: Meta<typeof SwipeDeck> = {
  title: 'interior.dev/Swipe Deck',
  component: SwipeDeck,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SwipeDeck>

export const Default: Story = {}
