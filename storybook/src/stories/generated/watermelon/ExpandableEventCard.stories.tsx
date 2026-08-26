/**
 * Cards | A grid item opens into a full-screen detail view without a route change — events, concerts, destinations.
 *
 * **Registry:** Watermelon UI — `@watermelon/expandable-event-card` ([docs](https://ui.watermelon.sh/animated-components/expandable-event-card))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import ExpandableEventCard from '@/registries/watermelon/components/ui/expandable-event-card'

const meta: Meta<typeof ExpandableEventCard> = {
  title: 'Watermelon UI/Expandable Event Card',
  component: ExpandableEventCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ExpandableEventCard>

export const Default: Story = {}
