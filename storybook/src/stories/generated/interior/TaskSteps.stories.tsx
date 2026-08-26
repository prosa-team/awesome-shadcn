/**
 * You need a step list that narrates ongoing background work.
 *
 * **Registry:** interior.dev — `@interior/task-steps` ([docs](https://interior.dev/docs/task-steps))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { TaskSteps } from '@/registries/interior/components/interior/task-steps'

const meta: Meta<typeof TaskSteps> = {
  title: 'interior.dev/Task Steps',
  component: TaskSteps,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TaskSteps>

export const Default: Story = {}
