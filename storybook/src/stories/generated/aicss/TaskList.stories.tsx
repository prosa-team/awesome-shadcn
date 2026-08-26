/**
 * A multi-step plan runs longer than one turn and the user needs to see what is done, running, and still queued.
 *
 * **Registry:** AICSS — `@aicss/task-list` ([docs](https://www.aicss.dev/components/task-list))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TodoList } from '@/registries/aicss/TodoList'

const meta: Meta<typeof TodoList> = {
  title: 'AICSS/To-do List',
  component: TodoList,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TodoList>

export const Default: Story = {}
