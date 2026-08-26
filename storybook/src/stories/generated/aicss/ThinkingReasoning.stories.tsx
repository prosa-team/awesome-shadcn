/**
 * Reasoning is long enough that showing it all costs attention, but hiding it costs trust. Collapsed by default, expandable for the user who wants the chain.
 *
 * **Registry:** AICSS — `@aicss/thinking-reasoning` ([docs](https://www.aicss.dev/components/thinking-reasoning))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { ThinkingReasoning } from '@/registries/aicss/ThinkingReasoning'

const meta: Meta<typeof ThinkingReasoning> = {
  title: 'AICSS/Thinking + Reasoning',
  component: ThinkingReasoning,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ThinkingReasoning>

export const Default: Story = {}
