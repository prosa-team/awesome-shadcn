/**
 * Interaction | Users customise a label's text, icon, and colour in place — tags, statuses, categories.
 *
 * **Registry:** Watermelon UI — `@watermelon/edit-badge` ([docs](https://ui.watermelon.sh/animated-components/edit-badge))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { EditBadge } from '@/registries/watermelon/components/ui/edit-badge'

const meta: Meta<typeof EditBadge> = {
  title: 'Watermelon UI/Edit Badge',
  component: EditBadge,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof EditBadge>

export const Default: Story = {}
