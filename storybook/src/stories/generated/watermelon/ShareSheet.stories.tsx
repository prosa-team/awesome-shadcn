/**
 * Widgets | Sharing expands to a list of people, so the common case is one tap.
 *
 * **Registry:** Watermelon UI — `@watermelon/share-sheet` ([docs](https://ui.watermelon.sh/animated-components/share-sheet))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ShareSheet } from '@/registries/watermelon/components/ui/share-sheet'

const meta: Meta<typeof ShareSheet> = {
  title: 'Watermelon UI/Share Sheet',
  component: ShareSheet,
  tags: ['autodocs'],
  args: {
    users: [{ id: "item-1", name: "Registry component", avatar: "Sample" }, { id: "item-1 2", name: "Registry component 2", avatar: "Sample 2" }, { id: "item-1 3", name: "Registry component 3", avatar: "Sample 3" }],
  },
}

export default meta
type Story = StoryObj<typeof ShareSheet>

export const Default: Story = {}
