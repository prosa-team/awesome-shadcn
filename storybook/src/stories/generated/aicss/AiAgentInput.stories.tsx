/**
 * The composer needs agent affordances — multiline, submit-on-enter, attachments — and a plain `Textarea` would need all of it rebuilt.
 *
 * **Registry:** AICSS — `@aicss/ai-agent-input` ([docs](https://www.aicss.dev/components/ai-agent-input))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { PromptInput } from '@/registries/aicss/PromptInput'

const meta: Meta<typeof PromptInput> = {
  title: 'AICSS/AI Agent Input',
  component: PromptInput,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PromptInput>

export const Default: Story = {}
