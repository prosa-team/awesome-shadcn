/**
 * Micro-interaction | The product has several agents or models and switching must be one visible, fast choice.
 *
 * **Registry:** Watermelon UI — `@watermelon/select-ai-agent` ([docs](https://ui.watermelon.sh/animated-components/select-ai-agent))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { SelectAIAgent } from '@/registries/watermelon/components/ui/select-ai-agent'

const meta: Meta<typeof SelectAIAgent> = {
  title: 'Watermelon UI/Select AI Agent',
  component: SelectAIAgent,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SelectAIAgent>

export const Default: Story = {}
