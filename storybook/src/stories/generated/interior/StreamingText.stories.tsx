/**
 * You need token-by-token streaming text with a caret, like an LLM response.
 *
 * **Registry:** interior.dev — `@interior/streaming-text` ([docs](https://interior.dev/docs/streaming-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { StreamingText } from '@/registries/interior/components/interior/streaming-text'

const meta: Meta<typeof StreamingText> = {
  title: 'interior.dev/Streaming Text',
  component: StreamingText,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof StreamingText>

export const Default: Story = {}
