/**
 * Micro-interaction | Table rows are edited in place, keeping the user's position and focus in the grid.
 *
 * **Registry:** Watermelon UI — `@watermelon/inline-table-control` ([docs](https://ui.watermelon.sh/animated-components/inline-table-control))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { InlineTableControl } from '@/registries/watermelon/components/ui/inline-table-control'

const meta: Meta<typeof InlineTableControl> = {
  title: 'Watermelon UI/Inline Table Control',
  component: InlineTableControl,
  tags: ['autodocs'],
  args: {
    data: [{ id: "item-1", expense: "Sample", method: "Sample", amount: "Sample" }, { id: "item-1 2", expense: "Sample 2", method: "Sample 2", amount: "Sample 2" }, { id: "item-1 3", expense: "Sample 3", method: "Sample 3", amount: "Sample 3" }],
  },
}

export default meta
type Story = StoryObj<typeof InlineTableControl>

export const Default: Story = {}
