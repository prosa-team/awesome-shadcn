/**
 * Disclosure | A task summary expands into per-step progress, for a dashboard widget.
 *
 * **Registry:** Watermelon UI — `@watermelon/task-widget-disclosure` ([docs](https://ui.watermelon.sh/animated-components/task-widget-disclosure))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TaskWidget } from '@/registries/watermelon/components/ui/task-widget-disclosure'

const meta: Meta<typeof TaskWidget> = {
  title: 'Watermelon UI/Task Widget Disclosure',
  component: TaskWidget,
  tags: ['autodocs'],
  args: {
    data: { title: "Registry component", progress: 1, completedCount: 1, totalCount: 1, priority: "Sample", status: "Sample", subtasks: [{ id: "item-1", title: "Registry component", completed: true }, { id: "item-1 2", title: "Registry component 2", completed: false }, { id: "item-1 3", title: "Registry component 3", completed: false }], assignees: [{ name: "Registry component", avatar: "Sample", color: "Sample" }, { name: "Registry component 2", avatar: "Sample 2", color: "Sample 2" }, { name: "Registry component 3", avatar: "Sample 3", color: "Sample 3" }] },
  },
}

export default meta
type Story = StoryObj<typeof TaskWidget>

export const Default: Story = {}
