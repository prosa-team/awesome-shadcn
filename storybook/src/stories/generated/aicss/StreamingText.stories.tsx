/**
 * Tokens arrive over a socket and perceived latency matters more than a clean paint.
 *
 * **Registry:** AICSS — `@aicss/streaming-text` ([docs](https://www.aicss.dev/components/streaming-text))
 *
 * Controls come from the component's own props. Anything the registry types
 * is editable in the Controls panel.
 */
import type { Meta, StoryObj } from '@storybook/react-vite'

import { StreamingText } from '@/registries/aicss/StreamingText'

const meta: Meta<typeof StreamingText> = {
  title: 'AICSS/Streaming Text',
  component: StreamingText,
  tags: ['autodocs'],
  args: {
    text: "The quick brown fox jumps over the lazy dog.",
  },
}

export default meta
type Story = StoryObj<typeof StreamingText>

export const Default: Story = {}
