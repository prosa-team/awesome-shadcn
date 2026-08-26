/**
 * Micro-interaction | Status changes often (issues, tasks, availability) and the transition should confirm the new state.
 *
 * **Registry:** Watermelon UI — `@watermelon/status-picker` ([docs](https://ui.watermelon.sh/animated-components/status-picker))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { StatusPicker } from '@/registries/watermelon/components/ui/status-picker'

const meta: Meta<typeof StatusPicker> = {
  title: 'Watermelon UI/Status Picker',
  component: StatusPicker,
  tags: ['autodocs'],
  args: {
    items: [{ id: 1, emoji: "Sample", name: "Registry component" }, { id: 2, emoji: "Sample 2", name: "Registry component 2" }, { id: 3, emoji: "Sample 3", name: "Registry component 3" }],
  },
}

export default meta
type Story = StoryObj<typeof StatusPicker>

export const Default: Story = {}
