/**
 * Micro-interaction | A summary row expands to full detail without pushing the rest of the list out of view.
 *
 * **Registry:** Watermelon UI — `@watermelon/expand-details` ([docs](https://ui.watermelon.sh/animated-components/expand-details))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import ExpandDetails from '@/registries/watermelon/components/ui/expand-details'

const meta: Meta<typeof ExpandDetails> = {
  title: 'Watermelon UI/Expand Details',
  component: ExpandDetails,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ExpandDetails>

export const Default: Story = {}
