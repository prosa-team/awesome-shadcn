/**
 * Micro-interaction | A grid tile expands in place to show more of a collection, keeping the grid as context.
 *
 * **Registry:** Watermelon UI — `@watermelon/collection-grid-disclosure` ([docs](https://ui.watermelon.sh/animated-components/collection-grid-disclosure))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DisclosureCard } from '@/registries/watermelon/components/ui/collection-grid-disclosure'

const meta: Meta<typeof DisclosureCard> = {
  title: 'Watermelon UI/Collection Grid Disclosure',
  component: DisclosureCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DisclosureCard>

export const Default: Story = {}
