/**
 * The agent is between turns and the user has nothing to look at. Smallest honest signal: work is happening, no detail claimed.
 *
 * **Registry:** AICSS — `@aicss/thinking-state` ([docs](https://www.aicss.dev/components/thinking-state))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ThinkingState } from '@/registries/aicss/ThinkingState'

const meta: Meta<typeof ThinkingState> = {
  title: 'AICSS/Thinking State',
  component: ThinkingState,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ThinkingState>

export const Default: Story = {}
